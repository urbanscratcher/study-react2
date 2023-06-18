import { useEffect, useRef, useState } from "react";
import StarRating from "./StarRating"
import { Logo } from "./Logo";
import { Loader } from "./Loader";
import { ErrorMessage } from "./ErrorMessage";
import { useMovies } from "./useMovies";
import { useLocalStorageState } from "./useLocalStorageState";
import { useKey } from "./useKey";

const KEY = '590860d3';

function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState('');

  const counterRef = useRef(0);

  useEffect(() => {
    if (userRating) counterRef.current = counterRef.current + 1;
  }, [userRating])

  const isWatched = watched.map(movie => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(movie => movie.imdbID === selectedId)?.userRating;

  const { Title: title, Year: year, Poster: poster, Runtime: runtime, imdbRating, Plot: plot, Released: released, Actors: actors, Director: director, Genre: genre } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: +imdbRating,
      userRating,
      runtime: runtime.split(" ").at(0),
      countRatingDecisions: counterRef.current
    }
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useKey('Escape', onCloseMovie);

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);

      const data = await res.json();
      // console.log(data);
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [selectedId])

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;
    return function () {
      document.title = 'usePopcorn'
      // title is alive due to closure of JS
      // console.log(`${title} cleaned up`);
    }
  }, [title]);

  return <div className="details">
    {isLoading ? <Loader /> :
      <>
        <header>
          <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
          <img src={poster} alt={`Poster of ${movie} movie`} />
          <div className="details-overview">
            <h2>{title}</h2>
            <p>{released} &bull; {runtime}</p>
            <p>
              <span>⭐️</span>
              {imdbRating} IMDB Rating
            </p>
          </div>
        </header>

        <section>
          <div className="rating">
            {isWatched ?
              (<p>
                You've already rated this movie <span>⭐️</span> {watchedUserRating}
              </p>) :
              (<>
                <StarRating
                  maxRating={10}
                  size={24}
                  onSetRating={setUserRating} />
                {userRating > 0 &&
                  (<button className="btn-add" onClick={handleAdd}>+ Add to list</button>)
                }
              </>)

            }
          </div>
          <p><em>{plot}</em></p>
          <p>Starring {actors}</p>
          <p>Directed by {director}</p>
        </section>
      </>
    }
  </div>
}

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);

  const [watched, setWatched] = useLocalStorageState([], 'watched');



  // useEffect(() => {
  //   console.log('After initial render');
  // }, [])
  // useEffect(() => {
  //   console.log('After every render');
  // })
  // useEffect(() => {
  //   console.log('After query changes');
  // }, [query])
  // console.log('During render');

  function handleSelectMovie(id) {
    setSelectedId(selectedId => id === selectedId ? null : id);
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched(watched => [...watched, movie])
  }

  function handleDeleteWatched(id) {
    setWatched(watched => watched.filter(m => m.imdbID !== id));
  }



  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} onSelectMovie={handleSelectMovie} />}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {
            selectedId ?
              <MovieDetails
                selectedId={selectedId}
                onCloseMovie={handleCloseMovie}
                onAddWatched={handleAddWatched}
                watched={watched}
              /> :
              <>
                <WatchedSummary watched={watched} />
                <WatchedMoviesList
                  watched={watched}
                  onDeleteWatched={handleDeleteWatched} />
              </>
          }

        </Box>
      </Main>
    </>
  );
}



const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);


function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  )
}

function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  })


  // useEffect(() => {
  //   const el = document.querySelector('.search');
  //   console.log(el);
  //   el.focus();
  // }, [])

  return <input
    className="search"
    type="text"
    placeholder="Search movies..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    ref={inputEl}
  />
}

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  )
}


function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  )
}


function Movie({ movie, onSelectMovie }) {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)} key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  )
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>)
}

function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime.toFixed(2)} min</span>
        </p>
      </div>
    </div>
  )
}

function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (<ul className="list">
    {watched.map((movie) => (
      <WatchedMovie
        key={movie.imdbID}
        movie={movie}
        onDeleteWatched={onDeleteWatched} />
    ))}
  </ul>)
}

function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button className="btn-delete" onClick={() => onDeleteWatched(movie.imdbID)}>X</button>
      </div>
    </li>
  )
}


function Main({ children }) {
  return (
    <main className="main">
      {children}
    </main>
  )
}

