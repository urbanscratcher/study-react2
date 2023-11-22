# 리액트 공부
- 나의 구세주 Jonas의 Udemy 리액트 강의를 들으며 작성한 코드
- 강의 노트를 작성하며 모르는 부분은 다시 이해하며 채워넣고 있다
- https://www.udemy.com/course/the-ultimate-react-course/learn/lecture/37351184?start=45#overview

# 요약 & 정리
# React

- 프론트엔드 라이브러리/프레임워크 이용하는 이유
    - SSR (w/ word press / jquery) → CSR (SPA) (w/ API)
    - SPA w/ Vanilla JS?
        - **데이터 핸들링 + 데이터 표현 (stay in sync w/ data) in user interaction** → very hard
        - piece of data = piece of state
        - too many DOM manipulation and traversing → Spaghetti code
        - Data (stat) is usually stored in the DOM, shared across entire app → Hard to reason + bugs
    - 써드파티 라이브러리
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled.png)
        
    - 프레임워크
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%201.png)
        
- 리액트란
    - Extremely popular declarative, component-based state-driven JS library for building user interactions, created by facebook
        - Based on components
            - Components are the building blocks of user interfaces in React
            - 컴포넌트 사용 이유: 재사용성, 관심사 분리(function)
        - Declarative
            - 명령형(Imperative) 스타일 대신 선언형(Declarative) 스타일 사용
                - 원하는 결과(대상 UI 등)를 먼저 정의하고, 라이브러리(React)가 단계를 구성
            - We describe how components look like and how they work using a declarative syntax called JSX
            - Declarative: telling React what a component should look like, based on current data/state
            - React is abstraction away from DOM: we never touch the DOM
            - JSX: a syntax that combines HTML, CSS, JS, referencing other components
        - State-driven
            
            ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%202.png)
            
        - JS library
            - It’s a library because React is only the “view” layer. We need to pick multiple external libraries to build a complete app.
            - Nextjs, Remix → complete frameworks built on top of React
- 기본 리액트 프로젝트 생성법
    - Vite
        
        [Vite React 프로젝트 생성법](https://www.notion.so/Vite-React-1cc3746f9fbc44deb5d962cfdb33ed0a?pvs=21)
        
        - Modern build tool that contains a template for setting up React applications
        - ESLint 등을 수동으로 설정해야 함
        - HMR(Hot Module Replacement) & 번들링이 매우 빠름
    - create-react-app
        - Complete starter kit
        - Everything is already configured: ESLint, Prettier, Jest, etc
        - Uses slow and outdated tech (i.e. webpacks)
        - Don’t use for a real-world app
    - index.js
        - import react, react-dom 라이브러리 → js transform
        
        ```jsx
        // 엔트리 포인트 지정. SPA의 ‘S’
        const root = ReactDOM.createRoot(document.getElementById('root'));
        ```
        
        ```jsx
        // JSX. 컴포넌트 렌더링.
        root.render(<APP />);
        ```
        
- JSX
    - **Declarative** syntax to describe what components look like and how they work
        - imperative
            - how to do things
            - manual DOM element selections and DOM traversing
            - step-by-step DOM muations until we reach the desired UI
        - declarative
            - Describe what UI should look like using JSX, based on current data
            - React is an abstraction away from DOM: we never touch the DOM
            - Instaed, we **think of the UI as a reflection of the current data**
    - 컴포넌트는 JSX 블록을 리턴해야 함
    - JS 확장을 통해 JS, CSS, 리액트 컴포넌트를 html에 삽입 가능
    - Babel이 각 JSX 엘레먼트를 React.createElement 함수 콜로 변환
    - We could use React without JSX but it’s hard
- 컴포넌트
    - 리액트에서 UI 블록
    - Piece of UI that has **its own `data`, `logic`, `appearance` (how it works and looks)**
    - We bulid complex UIs by buliding multiple components and combining them
    - Components can be **reused, nested** inside each other, and **pass data** between them
    - Separation of concerns?
        - **One technology per file**
        - Rise of interactive SPAs
        - → JS is in charge of HTML
        - → Logic and UI are tightly coupled
        - → Why keep them separated?
        - → React Compoents + JSX
            - HTML and JS are colocated
        - **One component per file (Completely New Paradigm!)**
- 컴포넌트화
    - 4원칙
        - Logical separataion of centent/layout
            - Does the component contain pieces of content or layout that don’t belong together?
        - Reusability
            - Is it possible to reuse part of the component?
            - Do you want or need to reuse it?
        - Responsibilities/complexity
            - Is the component doing too many different things?
            - Does the component rely on too many props?
            - Does the component have too many pieces of state and/or effects?
            - Is the code, including JSX, too complex/confusing?
        - personal coding style
            - Do you prefer smaller functions/components?
    - 가이드인라드
        - Be aware that creating a new component creates a **new abstraction**. Abstractions have a **cost**. So try not to create new components too early
        - Name a component according to **what it does** or **what it displays**. Don’t be afraid of using long names
        - Never declare a new component inside another component
        - **Co-locate related components** inside the same file. Don’t separate components into different files too early
        - It’s completely normal that an app has components of **many different sizes**, including very small and huge ones
    - 컴포넌트 유형
        - Stateless/presentational components
            - **No state**
            - can receive props and simply present received data or other content
            - small and reusable
        - Stateful components
            - **Have state**
            - Can still be reusable
        - Structural components
            - pages, layots, or screens of the app
            - Result of composition
            - Can be huge and non-reusable
- 컴포넌트 vs. 컴포넌트 인스턴스 vs. 엘레먼트
    - 컴포넌트
        - 한 UI의 블루프린트, 템플릿
        - 리액트 엘레먼트들을 리턴하는 함수
    - 인스턴스
        - 컴포넌트를 ‘사용’할 때 만들어짐
        - actual physical manifestation of a component
        - 각자의 상태 및 프롭이 있음
        - 라이프사이클 가짐
    - 리액트 엘레먼트
        - JSX is converted to React.createElement() function calls
        - A react element is the result of these function calls
        - Information necessary to create DOM elements
    - DOM 엘레먼트 (HTML)
        - Actual visual representation of the component instance in the browser
- 컴포넌트 렌더링 BTS
    - 컴포넌트들이 스크린에 보여지는 법
        1. 렌더가 트리거 됨: by 상태 업데이트 등
        2. 렌더 단계: 리액트는 컴포넌트 함수들을 콜, 어떻게 DOM이 업데이트 될 지 파악(reconciliation)
        3. 커밋 단계: 리액트가 실제로 DOM에 엘레먼트를 삽입, 업데이트, 삭제
        4. 브라우저가 그림
        - 렌더 단계 + 커밋 단계 = 렌더링
            
            ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%203.png)
            
        - 리액트에서 렌더링은 DOM을 업데이트하거나 스크린에 엘레먼트를 표시하는 게 아님
        - 렌터링은 리액트 내부에서만 일어나고, 실질적인 시각적 변화를 일으키지 않음
    - 렌더가 트리거되는 법
        - 앱의 초기 렌더링
        - 1개 이상의 인스턴스에서 상태가 업데이트 될 때 (재렌더링)
            - 렌더들은 즉각적으로 트리거 되지 않음. JS 엔진이 시간이 날 때 스케줄링이 됨. 이벤트 핸들러에서 다량의 setState 콜을 배치하기도 함.
                
                ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%204.png)
                
    - 가상 DOM (React Element Tree)
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%205.png)
        
    - What is Reconciliation and Why do we need it?
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%206.png)
        
    - The reconciler: FIBER → Engine of React!
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%207.png)
        
    - Reconciliation in Action
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%208.png)
        
    - 렌더 단계
        - 컴포넌트 인스턴스가 리렌더링 트리거 → 리액트 엘레먼트
        → 새로운 가상 DOM과 현재 Fiber 트리
        → Reconciliation(Fiber) + Diffing
        → Fiber 트리 업데이트
        → DOM 리스트 업데이트
            
            ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%209.png)
            
    - 커밋 단계 + 브라우저 그림
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2010.png)
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2011.png)
        
    - 정리
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2012.png)
        
- How Diffing Works
    
    ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2013.png)
    
    ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2014.png)
    
- Key Props
    - 어떤 엘레먼트가 unique하다는 것을 diffing 알고리즘에 알려주는 특별한 prop
    - 리액트가 같은 컴포넌트 유형의 인스턴스들을 구별할 수 있게 함
    - 렌더 간에 키가 같을 때, 해당 엘레먼트는 DOM에 유지될 것 (트리 내 포지션이 바뀌더라도)
        - 리스트에서 키 사용
            - 렌더 간에 키가 바뀔 때, 해당 엘레먼트는 제거되고 새로운 엘레먼트가 생성될 것 (트리 내 포지션이 같더라도)
        - 상태 리셋에 키 사용
- 상태 업데이트가 배치되는 방법
    - Renders are not triggered immediately, but **scheduled** for when the JS engine has some “free time”. There is also **batching of multiple setState calls** in event handlers
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2015.png)
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2016.png)
        
    - Updating State is Asynchronous
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2017.png)
        
    - Batching beyond event handler functions
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2018.png)
        
- 이벤트 작동 방식
    - in JS
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2019.png)
        
    - in React
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2020.png)
        
    - Synthetic Events
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2021.png)
        
- 컴포넌트 컴포지션
    - Wrapper 컴포넌트
        - children props 이용해 컴포넌트 내에서 컴포넌트 활용 가능
        - Create highly reusable and flexible components
        - **Fix prop drilling (great for layouts)**
    - `컴포넌트 엘레먼트로는 root 엘레먼트로 Wrapping 할 수 없음`
        - props.children으로 해결
    
    ```jsx
    <div className="card">{props.children}</div>;
    ```
    
    - `또, wrapping하는 컴포넌트는 children의 className 적용X`
        - wrapper 컴포넌트에 classes 모두 정의해서 pass
    
    ```jsx
    const classes = "card " + props.className;
    return <div className={classes}>{props.children}</div>;
    ```
    
- 컴포넌트 종류
    - Stateful Components
        - useState( )로 상태를 관리하는 컴포넌트
        - 이렇게 받은 최신 상태 값을 다른 컴포넌트에 값을 전달하는 패턴
    - Stateless Component
        - =Dumb components
        - =Presentational Components
- 컴포넌트 (인스턴스) 라이프사이클
    
    ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2022.png)
    
- 상태(State)
    - **변수가 바뀔 때 re-evaluate 후 re-render 하기 위해 도입된 개념**
    - UI 업데이트에 사용
    - useState( )
        - 컴포넌트와 상태간의 상호 작용을 처리
        - 업데이트 함수가 실행되면 리액트가 등록된 변수에 대해 컴포넌트를 reevaluate, rerender 해 줌
        - 컴포넌트 인스턴스 1개당 별개의 스테이트가 1개 존재
        
        ```jsx
        const [title, setTitle] = useState(props.title);
        ```
        
    - State vs. Props
        - State
            - 컴포넌트가 가진 내부 데이터
            - 컴포넌트의 “메모리”
            - 컴포넌트 자체가 업데이트
            - 상태 업데이트 되면 컴포넌트 re-render
            - 컴포넌트를 interactive하게 하려고 사용
        - Props
            - 부모 컴포넌트가 가진 외부 데이터
            - 함수 파라미터와 유사
            - 읽기만 됨
            - 새 props를 받으면 컴포넌트 re-render. 주로 부모 상태가 업데이트 될 때.
            - Used by parent to configure child component (”settings”)
    - 상태 관리
        - Deciding
            - when to create pieces of state
            - what types of state are necessary
            - where to place each piece of state
            - how data flows through the app
        - State: when and where?
            
            ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2023.png)
            
        - Deriving State
            - State that is computed from an existing piece of state or from props
    - 상태 만들기 및 업데이트
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2024.png)
        
- Children Prop
    - Allow us to pass JSX into an element (besides regular props)
    - Essential tool to make reusable and configurable components (especially component **content**)
    - Really useful for **generic components** that don’t know their content before being used (e.g. modal)
- 상태 바인딩
    - 양방향 바인딩
        - value = { 상태 변수 }
        - onChange = { 핸들러 함수 (업데이트 함수가 적용됨) }
    - 이전 값 바인딩
        
        ```jsx
        setState( (prevValue) => {
        	// do sth w/ previous value
        } )
        ```
        
    - 부모 ↔ 자식 컴포넌트 바인딩
        - 부모 컴포넌트에서 prop에 함수를 넘김
        
        ```jsx
        // 부모 컴포넌트
        return (
            <div className="new-expense">
              <ExpenseForm onSaveExpenseData={saveExpenseDataHanlder} />
            </div>
          );
        ```
        
        - 자식 컴포넌트의 이벤트 함수에서 받은 함수(onSaveExpenseData)를 사용함
        
        ```jsx
        const submitHandler = (e) => {
            e.preventDefault(); // 페이지 리로딩 막기
            const expenseData = {
              title: enteredTitle,
              amount: enteredAmount,
              date: new Date(enteredDate),
            };
        
            props.onSaveExpenseData(expenseData);
        
            setEnteredTitle("");
            setEnteredAmount("");
            setEnteredDate("");
          };
        ```
        
    - 자식 ↔ 자식 컴포넌트 바인딩
        - 부모 컴포넌트에서 위 과정을 통해 올려 받은 상태 데이터를 props를 이용해 다른 자식 컴포넌트로 내려줌
- 리스트 동적 생성
    - 리스트 object 속성 값에 key가 없으면 순서가 이상하게 나타남
        - 지정하지 않으면 리액트가 어디에 엘레먼트를 위치할 지 모르기 때문
        - 버그 가능성, 성능 저하 문제
        
        ```jsx
        return (
            <Card className="expenses">
              <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
              />
              {props.items.map((expense) => (
                <ExpenseItem
                  **key={expense.id}**
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
              ))}
            </Card>
          );
        ```
        
- JSX 한계점 (→ Portals, useRef)
    - root element은 1개여야 함
        - <div></div> 로 감싸기 → <dip> Soup 문제
        - [ ]로 감싸기 → key가 필요함
            1. 비어있는 Wrapper 컴포넌트
            2. Fragment or <> </>
    - 컴포넌트의 렌더링 위치 이동하기
        
        ```jsx
        // Bad Rendering
        return (
        	<>
        		<MyModal />
        		<MyInputForm />
        	</>
        ) 
        ```
        
    - React Portals
        - ReactDOM에서 제공하는 Portal은 컴포넌트를 렌더링 할 때, 부모 컴포넌트의 DOM 외부에 존재하는 DOM 노드에 렌더링 할 수 있게 해준다. 즉, 외부에 존재하는 DOM 노드가 React App DOM 계층에 존재하는 것 처럼 연결해준다.
        - 팝업창, 모달 만들 때 유용
        
        ```jsx
        return (
            <>
              {ReactDOM.createPortal(
                <Backdrop/>,
                document.getElementById("backdrop-root")
              )}
              {ReactDOM.createPortal(
                <ModalOverlay/>,
                document.getElementById("overlay-root")
              )}
            </>
          );
        ```
        
    - useRef
        - **just reading value from real DOM**
        - 키스트로크 하나하나 변화를 감지하는 state 사용하는 대신 이벤트 발생시 현재 DOM 값을 읽기에 유리
        - 제어되지 않는 컴포넌트 vs. 제어되는 컴포넌트
        
        ```jsx
        const nameInputRef = useRef();
        
        // render
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
          **ref={nameInputRef}**
        />
        
        //event handler
        console.log(nameInputRef.current.value);
        ```
        
- 컴포넌트 2가지 유형의 로직
    1. 렌더 로직
        - Code that lives at the **top level** of the component function
        - Participates in **describing** **how the component view looks like**
        - Executed **every time** the component renders
    2. 이벤트 핸들러 함수
        - Executed as a **consequence of the event** that the handler is listening for
        - Code that actually **does things**: update state, perform an HTTP request, read an input field, navigate to another page, etc.
    - 사이드 이펙트
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2025.png)
        
    - 렌더 로직 룰
        - 컴포넌트는 렌더 로직에 한해서는 pure해야 함
            - given the same props (input), a component instance should always return the same JSX (output)
        - 렌더 로직은 사이드 이펙트를 생산해서는 안됨
            - no interaction with the “outside world” is allowed. So, in render logic:
                - Do NOT perform **N/W requests** (API calls)
                - Do NOT start **timers**
                - Do NOT directly **use the DOM API**
                - Do NOT **mutate objects or variables** outside of the function scope
                - Do NOT **update state (or refs)**: this will create an infinite loop
            - Side effects are allowed (and encouraged in) **event handler functions**! There is also **a special hook to register side effects (useEffect)**
    - 사이드이펙트를 만드는 곳
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2026.png)
        
    - 이벤트 핸들러 vs. useEffects
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2027.png)
        
    - Main Job of React
        - evaluate & render JSX
        - manage state & props
        - react to user events & input
        - re-evaluate component upon state & prop changes
    - 사이드 이펙트?
        - 리액트의 주요한 일(re-evaluation of component) 이외의 것
        - Store data in browser storage
        - send http requests to backend servers
        - set & manage timers
- 리액트 훅
    - 리액트 훅
        - Special built-in functions that allow us to “hook” into React internals:
            - Creating and accessing state from Fiber tree
            - Registering side effects in Fiber tree
            - Manual DOM selections
            - Many more…
        - Always start with ‘use’
        - Enable easy reusing of **non-visual logic**: we can compose multiple hooks into our own **custom hooks**
        - Give function components the ability to own state and run side effects at **different lifecycle** **points** (before v16.8 only available in class components)
    - Most used
        - useState, useEffect, useReducer, useContext
    - Less used
        - O: useRef, useCallback, useMemo, useTransition, useDeferredValue
        - X: useLayoutEffect, useDebugValue, useImperativeHandle, useId
    - Only for libraries
        - useSyncExternalStore, useInsertionEffect
- 훅의 규칙
    
    ![스크린샷 2023-04-16 오전 1.05.38.png](React%20b62589a2604845bb9733fb9d3e5d93c8/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-04-16_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_1.05.38.png)
    
    1. Only call hooks at the **top level**
        - Hooks rely on call order
            
            ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2028.png)
            
            ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2029.png)
            
        - Do NOT allow hooks inside coniditionals, loops, nested functions, or after an early return
        - This is necessary to ensure that hooks are always called **in the same order** (hooks rely on this)
    2. Only call hooks from React functions
        - Only call hooks inside a **function component** or a **custom hook**
- useEffect
    - useEffect()
        
        ```jsx
        useEffect( sideEffectFn(), [ dependencies ]);
        ```
        
    - Dependency Array
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2030.png)
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2031.png)
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2032.png)
        
        - Dependency Array 룰
            - dependencies에 추가하지 않아도 되는 것
                
                ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2033.png)
                
                - 상태 업데이트 함수 (setFn. 리액트는 해당 함수가 절대 변경되지 않도록 보장)
                - 내장 API (fetch, localStorage…)
                - 컴포넌트와 관련이 없는 변수나 함수
            - dependencies에 추가해야 하는 것
                
                ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2034.png)
                
                - 이펙트 함수 상에서 컴포넌트가 재렌더링 되면 변경될 수 있는 모든 것들
                - 컴포넌트 함수에 정의된 변수, 상태, props, 함수 등
    - Effect는 언제 실행되는가?
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2035.png)
        
    - 되도록이면 사용하지 않기
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2036.png)
        
    - 브라우저 저장
        - localStorage에 저장된 로그인 여부를 컨트롤하기 위함
        - useEffect 사용하면 최초 1번만 실행되도록 할 수 있음 ( dependencies는 비우기 [ ])
        - infinite loop를 피하고, 성능 향상 가능
        
        ```
        useEffect(() => {
            const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
            if (storedUserLoggedInInformation === "1") {
              setIsLoggedIn(true);
            }
          }, []);
        ```
        
    - 유저 인풋 Validation
        - 넓은 의미로 무언가 액션이 발생하고, 거기에 대응해서 달라지는 것들이 있을 때 사용 가능
        - key stroke 변화에 따라 값을 update하므로 useEffect 사용 가능
        
        ```jsx
        useEffect(() => {
            setFormIsValid(
              enteredEmail.includes("@") && enteredPassword.trim().length > 6
            );
          }, [enteredEmail, enteredPassword]);
        ```
        
    - 클린업 함수
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2037.png)
        
        - Debouncing: 유저 인풋을 기다린 후 평가
        
        ```jsx
        useEffect(() => {
            const identifier = **setTimeout**(() => {
              setFormIsValid(
                enteredEmail.includes("@") && enteredPassword.trim().length > 6
              );
            }, 500);
        
        	 **// 클린업 함수. 처음을 제외하고, 이펙트 함수 실행 전에 실행됨**
            return () => {
              **clearTimeout(identifier);**
            };
          }, [enteredEmail, enteredPassword]);
        ```
        
    - Abort Controller
        - 데이터 페칭 클린업
        - 키 스트로크 하나하나 바뀔 때마다 데이터를 페칭할 경우 브라우저 API인 AbortController를 이용해 불필요한 리퀘스트를 cancel할 수 있음
            
            ```jsx
            useEffect(()=>{
            	const controller = new AbortController();
            
            	async ()=>{
            		await fetch("url", {signal: controller.signal })
            	}
            
            	return ()=>{
            		controller.abort();
            	}
            },[])
            ```
            
    - 이벤트 리스너 클린업
        
        ```jsx
        useEffect(() => {
            function callback(e) {
              if (e.code === 'Escape') {
                onCloseMovie();
                console.log('Closing');
              }
            }
        
            document.addEventListener('keydown', callback)
        
            return () => {
              document.removeEventListener('keydown', callback);
            }
          }, [onCloseMovie])
        ```
        
- useRef
    - “Box” (object) with a mutable .current property that is **persisted across renders** (”normal” variables are always reset)
    - 2 big use cases:
        - **Creating a variable that stays the same between renders** (e.g. previous state, setTimeout id, etc.)
        - **Selecting and storing DOM elements**
    - Refs are for data that is NOT rendered: usually only appear in event handlers or effects, not in JSX (otherwise use state)
    - Do NOT read write or read .current in render logic (like state)
    - State vs. Refs
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2038.png)
        
    - Example
        - ❌
            
            ```jsx
            useEffect(() => {
                const el = document.querySelector('.search');
                el.focus();
            }, [])
            ```
            
        - with Refs
            
            ```jsx
            const inputEl = useRef(null);
            
            useEffect(() => {
              inputEl.current.focus();
            }, [])
            
            return <input
                ref={inputEl}
            />
            ```
            
            ```
            // 유저가 모르게 해당 element에 대한 값을 저장할 수 있음
            // re-rendering 되지 않음
            // 값이 set함수가 아니라 persisted 됨
            const counterRef = useRef(0);
            
            useEffect(() => {
              if (userRating) counterRef.current = counterRef.current + 1;
            }, [userRating])
            
            function handleAdd() {
              const newWatchedMovie = {
                countRatingDecisions: counterRef.current
              }
              onAddWatched(newWatchedMovie);
            }
            ```
            
- 커스텀 훅
    - 컴포넌트 위계를 변화시키지 않고도 상태 변화가 있는 로직을 재사용할 수 있게 함
    - Reusing logic with custom hooks
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2039.png)
        
        - use로 시작하는 함수를 만들어야 함
        - **커스텀 훅을 사용하는 컴포넌트는 상태나 효과를 공유받는 게 아니라 커스텀 훅에서 독립적으로 만들어진 상태 인스턴스를 갖게 됨**
        - 컴포넌트 간에 재사용하고 싶은, 반복되는 로직을 하나로 묶어 재사용하기 위함
        - 컴포넌트 트리를 통해 전달되어 생성하는 것이 아니라, 각 컴포넌트에서 독립적으로 state를 생성.
    - 커스텀 훅 예시
        
        [https://www.youtube.com/watch?v=0c6znExIqRw&list=PLZlA0Gpn_vH-aEDXnaFNLsqiJWFpIWV03](https://www.youtube.com/watch?v=0c6znExIqRw&list=PLZlA0Gpn_vH-aEDXnaFNLsqiJWFpIWV03)
        
    - useHttp
        
        ```jsx
        import { useState, useCallback } from "react";
        
        const useHttp = () => {
          const [isLoading, setIsLoading] = useState(false);
          const [error, setError] = useState(null);
        
          const sendRequest = useCallback(async (requestConfig, applyData) => {
            setIsLoading(true);
            setError(null);
        
            try {
              const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : "GET",
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
              });
        
              if (!response.ok) {
                throw new Error("Request failed!");
              }
              const data = await response.json();
              applyData(data);
            } catch (err) {
              setError(err.message || "Something went wrong!");
            }
            setIsLoading(false);
          }, []);
        
          return {
            isLoading,
            error,
            sendRequest,
          };
        };
        
        export default useHttp;
        ```
        
        ```jsx
        // App.js
        const [tasks, setTasks] = useState([]);
          const httpData = useHttp();
          const { isLoading, error, sendRequest: fetchTasks } = httpData;
        
          useEffect(() => {
            const transformTasks = (tasksObj) => {
              const loadedTasks = [];
              for (const taskKey in tasksObj) {
                loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
              }
              setTasks(loadedTasks);
            };
        
            fetchTasks(
              {
                url: "https://react-http-25c33-default-rtdb.firebaseio.com/tasks.json",
                method: "GET",
              },
              transformTasks
            );
          }, [fetchTasks]);
        ```
        
    - useToggle
    - useTimeout
    - useDebounce
    - useUpdateEffect
    - useArray
- useReducer
    - useState로 충분하지 않은 경우 사용
        - 컴포넌트가 많은 스테이트 변수, 스테이트 업데이트가 많고, 여러 컴포넌트와 이벤트 핸들러에 적용되는 경우
        - 같은 이벤트에 대응해 여러 스테이트가 **한 번에 업데이트** 돼야 하는 경우 (e.g. starting a game)
        - 다른 스테이트에 dependency가 있는 스테이트를 업데이트 해야 하는 경우
        - 개념
            - Dispatcher: 업데이트를 **요구**
            - Action: 어떻게 업데이트를 할 지
            - Reducer: 업데이트를 실제로 하는 것
            - State: 업데이트돼야 할 것
            - Dispatch(Action) → Reducer(State, Action) → 업데이트 완료
    - A mental model
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2040.png)
        
    - **복잡한 상태 관리가 필요할 때 사용 (상태 N개) → 상태 업데이트의 중앙 관리화(centralize)**
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2041.png)
        
        ```jsx
        const [state, dispatchFn]
        	= useReducer(reducerFn, initialState, initFn);
        ```
        
        - state : 컴포넌트 리렌더 사이클에서 사용되는 상태 스냅샷
        - dispatchFn : 새로운 액션을 보내기 위한 함수 (상태 업데이트 트리거 등)
        - reducerFn : 액션이 보내지면 자동으로 트리거되는 함수
            - (prevState, action) ⇒ newState
        - initFn : 초기 상태를 프로그래밍적으로 설정하는 함수
    - How Reducers update state
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2042.png)
        
    - useState vs. useReducer
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2043.png)
        
        - useState vs. useReducer
            - useState( )
                - 주요 상태 관리 도구
                - 독립적인 상태나 데이터에 적합
                - 상태 업데이트가 쉽거나 적을 때
            - useReducer( )
                - 복잡한 상태 관리가 필요할 때
                - 관련된 상태들이나 데이터들을 관리할 때
    - When to use useReducer?
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2044.png)
        
    - 리듀서 함수는 state를 새 state로 덮어씀
        - 사이드이펙트를 피하기 위해 기존 상태를 mutate하지 않고 언제나 overwrite해야 함
        
        ```jsx
        if (action.type === "increment") {
            return { ...state, counter: state.counter + 1 };
          }
        ```
        
    - Example
        
        ```jsx
        const initialState = { count: 0, step: 1 }
        
        function reducer(state, action) {
          switch (action.type) {
            case 'dec':
              return { ...state, count: state.count - state.step };
            case 'inc':
              return { ...state, count: state.count + state.step };
            case 'setCount':
              return { ...state, count: action.payload };
            case 'setStep':
              return { ...state, step: action.payload };
            case 'reset':
              return initialState;
            default:
              throw new Error('Unknown action');
          }
        }
        
        function DateCounter() {
          const [state, dispatch] = useReducer(reducer, initialState);
          const { count, step } = state;
        
          const dec = function () {
            dispatch({ type: 'dec' });
          };
        
          const inc = function () {
            dispatch({ type: 'inc' });
          };
        
          const defineCount = function (e) {
            dispatch({ type: 'setCount', payload: +e.target.value });
          };
        
          const defineStep = function (e) {
            dispatch({ type: 'setStep', payload: +e.target.value })
          };
        
          const reset = function () {
            dispatch({ type: 'reset' })
          };
        
        ... }
        ```
        
    - useReducer와 useEffect
        - 특정 속성만 이펙트에 적용하도록 함으로써 성능 향상 가능
            
            ```jsx
            useEffect(() => {
              // code that only uses someProperty ...
            }, [someObject.someProperty]);
            ```
            
- context API
    - 다양한 컴포넌트 간 상태를 공유하기 위함
    - 문제: Prop Drilling
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2045.png)
        
    - 컨텍스트 API란?
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2046.png)
        
        - props 포워딩 많아져서 props chain이 복잡해질 때 상태 저장소가 필요
        - 컨텍스트가 바뀔 때마다 comsume하는 컴포넌트를 재평가함
            
            ![스크린샷 2023-04-16 오전 12.27.18.png](React%20b62589a2604845bb9733fb9d3e5d93c8/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-04-16_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_12.27.18.png)
            
            ```jsx
            // App.js
            return (
                **<AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>**
                  <MainHeader onLogout={logoutHandler} />
                  <main>
                    {!isLoggedIn && <Login onLogin={loginHandler} />}
                    {isLoggedIn && <Home onLogout={logoutHandler} />}
                  </main>
                **</AuthContext.Provider>**
              );
            ```
            
            ```jsx
            // Navigation.js
            return (
                **<AuthContext.Consumer>**
                  {(ctx) => {
                    return (
            					<nav>
                          {ctx.isLoggedIn && (<a href="/">Users</a>)}
                      </nav>
                    );
                  }}
                **</AuthContext.Consumer>**
              );
            ```
            
    - 적용하기
        
        ```jsx
        // 1. Create a new context on the top level
        const PostContext = createContext();
        
        // 2. Provide value to child component
        return (
        	<PostContext.Provider value={{
            posts: searchedPosts,
            onAddPost: handleAddPost,
            onClearPosts: handleClearPosts,
            searchQuery,
            setSearchQuery
          }}> ... </PostContext.Provider>
        )
        
        // 3. Consume the context value in a component
        const { property1 } = useContext(PostContext);
        ```
        
    - **useContext( )**
        - **consume시 코드를 더 간결하게**
        
        ```jsx
        // Navigation.js
        **const ctx = useContext(AuthContext);**
          return (
        					<nav>{ctx.isLoggedIn && (<a href="/">Users</a>)}</nav>
          );
        ```
        
        - 대부분은 props를 그냥 전달해도 됨
        - 언제 사용할지를 잘 구분해서 사용하자
        - 한 곳에서 관리하기
            
            ```jsx
            // store/auth-context.js
            import React, { useState, useEffect } from "react";
            const AuthContext = React.createContext({
              isLoggedIn: false,
              onLogout: () => {},
              onLogin: () => {},
            });
            
            export const AuthContextProvider = (props) => {
              const [isLoggedIn, setIsLoggedIn] = useState(false);
            
              useEffect(() => {
                const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
            
                if (storedUserLoggedInInformation === "1") {
                  setIsLoggedIn(true);
                }
              }, []);
            
              const logoutHandler = () => {
                localStorage.removeItem("isLoggedIn");
                setIsLoggedIn(false);
              };
            
              const loginHandler = () => {
                localStorage.setItem("isLoggedIn", "1");
                setIsLoggedIn(true);
              };
            
              return (
                <AuthContext.Provider
                  value={{
                    isLoggedIn: isLoggedIn,
                    onLogout: logoutHandler,
                    onLogin: loginHandler,
                  }}
                >
                  {props.children}
                </AuthContext.Provider>
              );
            };
            
            export default AuthContext;
            ```
            
        - props for configuration, context for state changes
        - **상태가 빨리 바뀔 때는 사용하면 안됨 → Redux 사용**
        - **프롭 체인이 길 때 사용하면 좋음**
    - 커스텀 훅 for context api
        
        ```jsx
        // PostContext
        
        import { createContext, useContext, useState } from 'react'
        
        // 1) Create a new context
        const PostContext = createContext();
        
        function PostProvider({ children }) {
          const [posts, setPosts] = useState(...);
          const [searchQuery, setSearchQuery] = useState("");
        
          const searchedPosts = ...
        
          function handleAddPost(post) {...}
        
          function handleClearPosts() {...}
        
          return (
            // 2) Provide value to child component
            <PostContext.Provider value={{
              posts: searchedPosts,
              onAddPost: handleAddPost,
              onClearPosts: handleClearPosts,
              searchQuery,
              setSearchQuery
            }}>
              {children}
            </PostContext.Provider>
          )
        }
        
        function usePosts() {
          const context = useContext(PostContext);
          if (context === undefined) throw new Error('PostContext was used outside of the PostProvider');
          return context;
        }
        
        export { PostProvider, usePosts }
        
        // App.jsx
        function App() {
        	return 
        		<PostProvider>
        				...
        		</PostProvider>
        }
        ```
        
- 상태관리
    - 상태 관리
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2047.png)
        
    - State Placement Options
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2048.png)
        
    - State Management Options
        
        ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2049.png)
        
- useImperatvieHandle( )
    - 일반적으로 사용하지는 않으며 되도록이면 사용을 피하자 (스크롤링 등 특정 상황에서만 유용)
    - 리액트 컴포넌트에서 온 기능이나 값을 노출해 부모 컴포넌트에 연결한 후, 부모 컴포넌트 안에서 참조를 통해 그 컴포넌트를 사용하고, 기능을 트리거 할 수 있음
        
        ```jsx
        const Input = **React.forwardRef((props, ref)** => {
          **const inputRef = useRef();**
        
          const activate = () => {
            inputRef.current.focus();
          };
        
          **useImperativeHandle(ref, () => {
            return {
              focus: activate,
            };
          });**
        
          return ( ... );
        });
        ```
        
- DB 연결
    - fetchAPI나 axios 사용
    - loading, error, list length 고려해 render
- Reduce 활용해 Set 추출하는 법
    
    ```jsx
    const countries = cities.reduce((arr, city) => {
        if (!arr.map(el => el.country).includes(city.country)) {
          return [...arr, { country: city.country, emoji: city.emoji, id: city.id }];
        } else {
          return arr;
        }
      }, [])
    ```
    
- URL for 상태관리
    
    ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2050.png)
    
- 리액트 애플리케이션을 만드는 과정
    - 계획 & 과정
        1. Gather application requirements and features
        2. Divide the application into pages
            - Think about the overall and page-level UI
            - Break the desired UI into components ← From earlier
            - Design and build a static version (no state yet) ← From earlier
        3. Divide the application into feature categories
            - Think about state management + data flow ← From earlier
        4. Decide on what libraries to use (technology decisions)
    - 상세 과정
        1. Project Requirements from the business
            
            ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2051.png)
            
        2. Features + Pages
            
            ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2052.png)
            
        3. State Management + Technology Decisions
            
            ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2053.png)
            
       

- 폴더 구조 (예시)
    
    ```jsx
    src
    	├─ **data**
    	├─ **features**
    	│  ├─ authentication
    	│	 │  ├─ LoginForm.jsx
    	│	 │  └─ UserAvatar.jsx
    	│  ├─ bookings
    	│  └─ cabins
    	├─ **hooks**
    	├─ **pages**
    	├─ **services**
    	│  ├─ apiBookings.js
    	│	 └─ apiSeetings.js
    	├─ **styles**
    	├─ **ui**
    	└─ **utils**
    		 └─ helper.js
    ```
    
- 날짜 라이브러리 (date-fns)
- 리액트 라우터 (react-router-dom + @types)
    - 라우팅 개념
        - 클라이언트 사이드 라우팅
            
            ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2055.png)
            
        - SPA
            
            ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2056.png)
            
    - 기본 리액트 라우터 (react-router-dom)
        - Example
            
            ```bash
            import { Route, BrowserRouter, Routes } from 'react-router-dom'
            
            function App() {
              return (
                <>
                  <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<Homepage />} />
                      <Route path="product" element={<Product />} />
                      <Route path="pricing" element={<Pricing />} />
            					<Route path="*" element={<PageNotFound />} />
                    </Routes>
                  </BrowserRouter>
                </>
              )
            }
            
            export default App
            ```
            
        - a → Link → NavLink
            - Link
                - SPA에서 <a href=””></a> 대신 사용
                - 브라우저의 기본 동작(http request)을 방지하고 컴포넌트를 렌더링
                
                ```jsx
                <p>
                Go to <Link to="/products">the list of products</Link>
                </p>
                ```
                
            - NavLink
                - 페이지가 active한지 여부를 알려줌
                - 방문한 링크를 class=”active”가 추가해 알려줌
                - 다르게 스타일링 가능
                - Tab이나 Accordion도 이걸로 만들 수 있음
                
                ```jsx
                <NavLink to="/products"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                	end // Optional. Home에서 사용
                >
                ```
                
        - 기본 라우팅 (BrowserRouter, Routes, Route, Outlet)
            
            ```jsx
            <BrowserRouter>
            	<Routes>
            	  <Route index element={<Homepage />} />
            	  <Route path="product" element={<Product />} />
            	  <Route path="pricing" element={<Pricing />} />
            	  <Route path="login" element={<Login />} />
            	  <Route path="app" element={<AppLayout />} >
            	    <Route index element={<p>List of cities</p>} />
            	    <Route path="cities" element={<p>list of cities</p>} />
            	    <Route path="countries" element={<p>list of countries</p>} />
            	    <Route path="form" element={<p>form</p>} />
            	  </Route>
            	  <Route path="*" element={<PageNotFound />} />
            	</Routes>
            </BrowserRouter>
            
            // AppLayout 컴포넌트 내에
            // <Outlet /> 삽입하면 Nested Route의 element 삽입 가능
            ```
            
            - 중첩 라우트 (Outlet)
                - rootlayout으로 wrapping한 후 children을 정의하고, Outlet으로 불러올 수 있음
                
                ```jsx
                // App.js
                
                const router = createBrowserRouter([
                  {
                    path: "/",
                    element: <RootLayout />,
                    children: [
                      { path: "/", element: <HomePage /> },
                      { path: "/products", element: <ProductsPage /> },
                    ],
                  },
                ]);
                ```
                
                ```jsx
                // Root.js
                
                function RootLayout() {
                  return (
                    <>
                      <h1>Root Layout</h1>
                      <Outlet />
                    </>
                  );
                }
                ```
                
            - 인덱스 라우트
                - Home
                
                ```jsx
                children: [
                	{ index: true, element: <HomePage /> }, // path: ''
                ]
                ```
                
        - 동적 라우팅 (useParams, useSearchParams)
            
            ```jsx
            function App(){
            	return <Route path="cities/:id" element={< City />} />
            }
            
            // Origin
            function CityItem({ city }) {
            	const { id } = city;
            	return (
            	  <li>
            	    <Link to={`${id}`}>
            	      ...
            	    </Link>
            	  </li>
            	);
            }
            
            // Destination
            function City() {
              const { id } = useParams();
            }
            ```
            
            - 파라미터 값 읽기 (useSearchParams)
                
                ```jsx
                function CityItem({city}){
                	return
                		<Link to={`${id}?lat=${position.lat}&lng=${position.lng}`} >
                				linkTo
                		</Link>
                }
                
                // lat, lng 전역적으로 사용 가능
                function City(){
                	const [searchParams, setSearchParams] = useSearchParams();
                	const lat = searchParams.get('lat');
                	const lng = searchParams.get('lng');
                
                	return <p>Position: {lat}, {lng}</p>
                }
                ```
                
        - 프로그래밍적 라우팅 (useNavigate)
            
            ```jsx
            function App() {
            return 
            	<BrowserRouter>
            		<Routes>
            			<Route path="form" element={<Form />} /> 
            		</Routes>
            	</BrowserRouter>
            }
            
            function Map() {
              const navigate = useNavigate();
            
              return (
                <div className={styles.mapContainer} onClick={() => navigate('form')}>
            				...
                </div>
              );
            }
            ```
            
        - 뒤로가기
            
            ```jsx
            function Form() {
            	const navigate = useNavigate();
            
            	return (
            		<div>
            			<form>
            	      <Button onClick={(e) => {
            	        e.preventDefault(); // form submit 기본동작 막기
            	        navigate(-1);
            	      }} type="back">&larr; Back</Button>
            			</form>
                </div>	
            	)
            }
            ```
            
        - 리디렉트 (Navigate)
            
            ```jsx
            // 뒤로가기 작동하려면 replace 추가
            <Route index element={
              <Navigate replace to="cities" />
            } />
            ```
            
        - 상대경로와 절대경로
            - children path 앞에 /를 붙이지 않으면 상대경로가 됨
            - /를 붙이면 절대경로가 돼서 parent path의 경로를 붙어야 함
            - relative (route or path)
                - parent로 돌아가면 route, sibling path base면 path
                
                ```jsx
                <p>
                  <Link to=".." relative="path">
                    Back
                  </Link>
                </p>
                ```
                
    - 최신 리액트 라우터 (react-router-dom v6.4~)
        - 주소를 통해 컴포넌트를 렌더링 함
        - 기본 라우팅 (createBrowserRouter, RouterProvider)
            - createBrowserRouter
                
                ```jsx
                // App.jsx
                
                import { createBrowserRouter } from "react-router-dom";
                
                const router = createBrowserRouter([
                  {
                    element: <AppLayout />, 
                    children: [
                      {
                        path: '/',
                        element: <Home />
                      }, {
                        path: '/menu',
                        element: <Menu />
                      }, {
                        path: '/cart',
                        element: <Cart />
                      }, {
                        path: '/order/new',
                        element: <CreateOrder />
                      }, {
                        path: '/order/:orderId',
                        element: <Order />
                      }
                    ]
                  },
                ])
                
                function App() {
                  return (
                    <RouterProvider router={router} />
                  );
                }
                ```
                
            - Outlet 포함시 하위 Route 컴포넌트들 뿌릴 수 있음
                - 주소에 따라 Outlet 부분만 바뀌는 것
                
                ```jsx
                // AppLayout
                
                import { Outlet } from 'react-router-dom';
                
                function AppLayout() {
                  return (
                    <>
                      <Sidebar />
                      <Header />
                      <Main>
                        **<Outlet />**
                      </Main>
                    </>
                  );
                }
                
                export default AppLayout;
                ```
                
                ```jsx
                // App
                
                import { BrowserRouter, Route, Routes } from 'react-router-dom';
                import AppLayout from './ui/AppLayout';
                
                function App() {
                  return (
                    <>
                      <BrowserRouter>
                        <Routes>
                          <Route element={<AppLayout />}>
                            **<Route
                              index
                              element={<div>index</div>}
                            />
                            <Route
                              path="main"
                              element={<div>/main</div>}
                            />**
                          </Route>
                        </Routes>
                      </BrowserRouter>
                    </>
                  );
                }
                
                export default App;
                ```
                
        - 데이터 로더 (loader, useLoaderData)
            - App.jsx
                
                ```jsx
                const router = createBrowserRouter([
                {
                  path: '/menu',
                  element: <Menu />,
                  loader: loader // async function from Menu
                }])
                ```
                
            - Menu.jsx
                
                ```jsx
                import { useLoaderData } from "react-router-dom";
                
                export default function Menu() {
                  const menu = useLoaderData();
                  return <h1>Menu</h1>;
                }
                
                export async function loader() {
                  const menu = await getMenu();
                  return menu;
                }
                ```
                
            - 로더(Loader)
                - RootLayout에서는 위 use훅을 사용할 수 없음.
                - 같은 레벨이거나 하위 레벨에서만 사용 가능
                - 로더 함수 내에서 브라우저 API 사용 가능하지만, useState와 같은 리액트 함수는 사용할 수 없음
                - chlidren이 parent loader 사용하기
                    - useRouteLoaderData(id)
                
                ```jsx
                {
                  path: ":id",
                  id: "event-detail",
                  loader: eventDetailLoader,
                  children: [
                    {
                      index: true,
                      element: <EventDetailPage />,
                    },
                    { path: "edit", element: <EditEventPage /> },
                  ],
                },
                ```
                
                ```jsx
                import { json, useRouteLoaderData } from "react-router-dom";
                
                function EventDetailPage() {
                  const data = useRouteLoaderData("event-detail");
                ...
                ```
                
        - 프로그래밍적 라우팅 + 로딩 상태 (useNavigation)
            - useNavigate(기존)가 아닌 useNavigation
            - 데이터 fetch 후 로딩 상태 받기
            - Root Layout에서 설정해주기
            - 라우팅 될 때마다 촉발
                
                ```jsx
                import { useNavigation } from "react-router-dom";
                
                function AppLayout() {
                  const navigation = useNavigation();
                	const isLoading = navigation.state === 'loading'
                
                	return (
                		{isLoading && <Loader />
                	)
                }
                ```
                
        - 에러 처리 (errorElement, useRouteError)
            - App.jsx
                - errorElement에 에러 컴포넌트 정의
                - errorElement will be **bubbled up** until we reaches that route unless it is handled in the child route itself
                
                ```jsx
                const router = createBrowserRouter([
                  {
                    path: "/",
                    element: <RootLayout />,
                    **errorElement: <ErrorPage />,**
                    children: [
                      { path: "/", element: <HomePage /> },
                      { path: "/menu", 
                				element: <Menu />,
                				**errorElement: <ErrorPage />** 
                			},
                    ],
                  },
                ]);
                ```
                
            - ErrorPage.jsx
                
                ```jsx
                import { **useRouteError** } from 'react-router-dom';
                import { useNavigate } from 'react-router-dom';
                
                function ErrorPage() {
                  const navigate = useNavigate();
                  **const error = useRouteError();**
                
                  return (
                    <div>
                      <h1>Something went wrong 😢</h1>
                      <p>{error.data}</p>
                      <button onClick={() => navigate(-1)}>&larr; Go back</button>
                    </div>
                  );
                }
                
                export default ErrorPage;
                ```
                
            - 
        - 동적 라우팅 ( { params })
            - useParams는 컴포넌트에서만 사용 가능하고, loader와 같은 일반 함수에서는 사용 불가
            - 리액트 라우터의 loader가 제공해 주는 params를 프롭 변수로 받기
                
                ```jsx
                export async function loader({ params }) { 
                  const order = await getOrder(params.orderId);
                  return order;
                }
                ```
                
        - 폼 액션 (Form, { request } )
            - FORM submit시 action 촉발
                - method: POST, PATCH, DELETE 사용 가능
                - action: submit해야 하는 url, 명시하지 않아도 가장 가까운 라우터를 설정해 줌
            - App.jsx
                
                ```jsx
                {
                	path: '/order/new',
                	element: <CreateOrder />,
                	action: action // from CreateOrder.jsx
                }
                ```
                
            - CreateOrder.jsx
                
                ```jsx
                import { Form } from "react-router-dom";
                
                function CreateOrder() {
                  return (
                    {/* <Form method="POST" action="/order/new"> */}
                		<Form method="POST">
                     ...
                    </Form>
                  );
                }
                
                // submit 하자마자 이 함수는 request를 intercept함
                export async function action({ request }) {
                
                	// formData()는 그냥 브라우저 API 기능
                  const formData = await request.formData();
                	const data = Object.fromEntries(formData);
                  return null;
                
                }
                ```
                
        - 리디렉트 (redirect)
            - 일반 함수에서는 use훅을 사용할 수 없음 → useNavigation 대신 redirect
            - 리액트에서는 loader나 action에 리스폰스를 던질 수 있기 때문에 특별한 리스폰스 유형인 리디렉트 리스폰스로 던질 수 있음
            - URL redirection (URL forwarding)
                - HTTP에는 특별한 리스폰스 유형이 있음 → HTTP redirect
                - 목적
                    - 사이트 유지보수 및 다운타임시 임시 리디렉션
                    - URL 변경이나 파일 업로딩 후 영구 리디렉션
                - 브라우저가 리디렉트 리스폰스를 받으면, 헤더의 Location에 있는 새로운 URL을 로딩함 (round trip 발생)
            - CreateOrder.jsx
                
                ```jsx
                export async function action({ request }) {
                  const formData = await request.formData();
                  const data = Object.fromEntries(formData);
                  const order = {
                    ...data,
                    cart: JSON.parse(data.cart),
                    priority: data.priority === 'on'
                  }
                
                  const newOrder = await createOrder(order);
                  return **redirect(`/order/${newOrder.id}`);**
                }
                ```
                
        - 폼 에러 핸들링 (useActionData)
            - This hook provides the returned value from the previous navigation's `action` result, or `undefined` if there was no submission.
            - CreateOrder.jsx
                
                ```jsx
                import { useActionData } from "react-router-dom";
                
                function CreateOrder() {  
                  const formErrors = useActionData();
                	...
                }
                
                export async function action({ request }) {
                	...
                  const errors = {};
                  if (!isValidPhone(order.phone)) errors.phone = 'Please give us youre correct phone number. We might need it to contact you';
                  if (Object.keys(errors).length > 0) return errors;
                	...
                }
                ```
                
        - json()
            - 리액트 라우터 돔에 포함된 유틸 함수 (import 필요)
            - 파싱 필요 없이 사용가능
        - useFetcher()
            - UI, action, loader를 navigation 이벤트 (URL 변경) 없이 사용하고 싶을 때
                - Order.jsx
                    
                    ```jsx
                    const fetcher = useFetcher();
                    
                    // when the first page loads
                    useEffect(()=>{
                      if(!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
                    }, [fetcher]);
                    
                    return
                    <ul className="divide-y divide-stone-200 border-b border-t">
                      {cart.map((i) => (
                        <OrderItem 
                          item={i} 
                          key={i.pizzaId} 
                          **ingredients**={**fetcher.data**?.find(el=>el.id === i.pizzaId).ingredients ?? []}
                          **isLoadingIngredients**={**fetcher.state** === 'loading'}
                        />
                      ))}
                    </ul>
                    ```
                    
                - OrderItem.jsx
                    
                    ```jsx
                    function OrderItem({ item, isLoadingIngredients, ingredients }) {
                    	<p className='text-sm capitalize italic text-stone-500'>
                    	  {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
                    	</p>
                    }
                    ```
                    
            - 네비게이팅 하지 않고 액션에 데이터를 submit하고 싶을 때 & revalidate the page (뉴스레터 사인업 같은 컴포넌트)
                - fetcher.Form 사용하면 action시 transition 없이 submit 가능
                
                ```jsx
                return (
                    <fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
                      ...
                    </fetcher.Form>
                  );
                
                export async function action({request, params}){
                  
                }
                ```
                
            - 여러개의 동시 다발적인 submission을 리스트로 처리하고 싶을 때 (todo list 같이 여러 버튼을 클릭하고, 동시에 펜딩되어야 하는 경우)
            - 무한 스크롤 컨테이너
        - defer()
            - 데이터 로딩하기 전에 그 이외의 컴포넌트를 렌더링하고 싶을 때
                
                ```jsx
                defer({
                    events: loadEvents(), // must be return a promise
                  });
                ```
                
                ```jsx
                import { Await, defer, json, useRouteLoaderData } from "react-router-dom";
                import { Suspense } from "react";
                
                function EventsPage() {
                  const { events } = useLoaderData();
                  return (
                    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
                      <Await resolve={events}>
                        {(loadedEvents) => <EventsList events={loadedEvents} />}
                      </Await>
                      ;
                    </Suspense>
                  );
                }
                ```
                
            - 복수 컴포넌트 defer
                
                ```jsx
                // event 로딩 먼저 하기
                return defer({
                    event: await loadEvent(id),
                    events: loadEvents(),
                  });
                ```
                
            
- 리액트 아이콘 (react-icons)

- 토스트 메시지 (react-hot-toast)
    - App.jsx
        
        ```jsx
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
        ```
        
- 리액트 훅 폼 (react-hook-form)
    - onChange, onBlur 이벤트 자동 추가 (register)
    - 폼 데이터 자동 처리 (handleSubmit(fn))
    
    ```jsx
    function CreateCabinForm() {
      ****const { **register, handleSubmit, reset, getValues, formState** } = **useForm();**
    
      function onSubmit(data) {
        ...
      }
    
      return (
        <Form onSubmit={**handleSubmit(onSubmit, onError)**}>
          <FormRow>
            <Label htmlFor="name">Cabin name</Label>
            <Input type="text" id="name" **{...register("name",**{
    					required: "This field is required,
    					validate: (value) =>
                  +value <= +**getValues()**.regularPrice ||
                  "The discount should be less than regular price",
    				}**)}** />
          </FormRow>
    		</Form>
    ```

- 포털 (createPortal)
    - 컴포넌트를 다양한 DOM 트리 장소로 렌더링
        
        ```jsx
        function Modal({ children, onClose }) {
          return createPortal(<Overlay />, document.body);
        }
        ```
        
    - 모달 같은 컴포넌트의 경우 아무 곳에서나 렌더링해 버리면 CSS에서 parent의 hidden overflow과 같은 속성이 꼬이게 되기 때문에 다른 DOM 위에 놓아두어야 함
- cloneElement
    - 새로운 리액트 엘리먼트를 만들어줌
- 에러 바운더리(react-error-boundary)
- 리액트 src 폴더 구조
    - context
    - data
    - features
        - feature1
            - 컴포넌트
        - feature2
    - hooks
    - pages
    - services
    - ui: 기본 ui 컴포넌트
    - utils: constants, helpers

[리액트 + 타입스크립트 (React +TS)](https://www.notion.so/React-TS-63ca1fccd5eb46f58520f9c2911d30fd?pvs=21)

[Redux](https://www.notion.so/Redux-813b4b9154e04791b1d514c317c23b89?pvs=21)

[리액트 최적화](https://www.notion.so/7601cba6cf3c4c519596dee9429daec3?pvs=21)

[리액트 디자인 패턴](https://www.notion.so/5ab44bb2d5f14724bb4f7bd5abac54e1?pvs=21)

[컴포넌트 스타일링](https://www.notion.so/ba4d11c83b6144c18e0f6980bc6f78d8?pvs=21)

[리액트 인증/인가](https://www.notion.so/144f04a991514bf780db9201f8743494?pvs=21)

[리액트 배포](https://www.notion.so/15ef8b3db89f4223bc0ff6cc61a50ebc?pvs=21)

[리액트 관련 글](https://www.notion.so/c6f31ed5447849de95ffe55e80798f13?pvs=21)

[Tailwind CSS](https://www.notion.so/Tailwind-CSS-3c8eb0edc2734007ba99c9155cbcaf37?pvs=21)

- 리액트 Best Practices
    - Strict Mode
        - 컴포넌트의 **프롭** & **스테이트** 타입 명시 (인터페이스 or 타입)
        - 컴파일 타임에 에러 찾아내기
        
        ```json
        // tsconfig.json
        {
          "compilerOptions": {
            "strict": true
          }
        }
        
        ```
        
    - Type Annotations for Props and State
        
        ```tsx
        interface MyComponentProps {
          name: string;
          age: number;
        }
        
        interface MyComponentState {
          isOpen: boolean;
        }
        
        const MyComponent: React.Component<MyComponentProps, MyComponentState> = ({ name, age }) => {
          // Component implementation
        };
        
        ```
        
    - Functional Components and React Hooks
        - 클래스 컴포넌트가 아닌 함수 컴포넌트 사용하기
        - 스테이트와 라이프사이클을 관리하기 위해 리액트 훅(e.g., `useState`, `useEffect`) 사용하기
        
        ```tsx
        import React, { useState, useEffect } from 'react';
        
        interface CounterProps {
          initialCount: number;
        }
        
        const Counter: React.FC<CounterProps> = ({ initialCount }) => {
          const [count, setCount] = useState(initialCount);
        
          useEffect(() => {
            // Do something when count changes
          }, [count]);
        
          return (
            <div>
              <p>Count: {count}</p>
              <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
          );
        };
        
        ```
        
    - Use TypeScript Utility Types
        - 간단한 타입 변형을 위해 TS 유틸리티 타입 활용하기 (`Partial`, `Required`, `Pick`, `Omit`)
        
        ```tsx
        interface User {
          id: number;
          name: string;
          email: string;
        }
        
        type PartialUser = Partial<User>; // All properties become optional
        type
        
         RequiredUser = Required<User>; // All properties become required
        type UserWithoutEmail = Omit<User, 'email'>; // Exclude 'email' property
        
        ```
        
    - Avoid Any Type
        - 최대한 any 타입 사용 지양하기
        - 타입을 명시하거나 유니온 타입 활용
        
        ```tsx
        const fetchData = (): Promise<User[]> => {
          // Fetch user data from an API
        };
        
        const handleData = (data: User[] | null) => {
          // Handle data
        };
        
        ```
        
    - Error Handling with Custom Types
        - 비동기 함수 사용시 커스텀 타입으로 다양한 에러 상태 관리
        
        ```tsx
        type AsyncResult<T, E> = { loading: boolean; data: T | null; error: E | null };
        
        const fetchUserData = (): AsyncResult<User[], string> => {
          // Fetch user data and handle errors
        };
        
        ```
        
    - Use Generic Components
        - 제네릭 컴포넌트 사용으로 타입 재사용성 높이기
        
        ```tsx
        interface ListItem<T> {
          item: T;
        }
        
        const ListItemComponent: React.FC<ListItem<User>> = ({ item }) => {
          // Render item
        };
        
        ```
        
    - Avoid Unnecessary Type Assertions
        - 불필요한 타입 assertion (as) 지양하고, 타입을 명시
        
        ```tsx
        const result: number = calculateValue() as number; // Unnecessary type assertion
        
        const result: number = calculateValue(); // Preferred approach with explicit type
        
        ```
        
    - Consistent Naming Conventions
        - 컴포넌트, 프롭, 변수에 대한 네이밍 규칙 일관적으로 따르기
        
        ```tsx
        interface UserProfileProps {
          user: User;
        }
        
        const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
          // Component implementation
        };
        
        const getUserData = (): Promise<User> => {
          // Fetch user data
        };
        
        ```
        
    - Use Third-Party Libraries with TypeScript Support
        - TS를 지원하는 써드파티 라이브러리 사용
        
        ```tsx
        import { Button } from 'third-party-library'; // Importing component
        import { User } from 'third-party-library/types'; // Importing types
        
        ```
        
    - Optimization Techniques
        - `React.memo` 함수 컴포넌트를 메모이제이션하고, 불필요한 리렌더를 막기 위해 Higher Order Component (HOC) 활용
        - `useCallback` 이벤트 핸들러 등을 메모이즈, 함수가 불필요하게 재생성 되는 것 방지
        - `useMemo` expensive한 계산 메모이즈, 중복 계산 방지
        
        ```tsx
        const MyComponent: React.FC<Props> = React.memo(({ propA, propB }) => {
          // Component implementation
        });
        
        ```
        
    - Component Design Patterns
        - 컨테이너 컴포넌트 패턴
            
            children 프롭을 전달하는 컨테이너 컴포넌트 활용
            
            데이터 핸들링과 비즈니스 로직을 위한 컨테이너 컴포넌트(Smart 컴포넌트)와 UI 엘레먼트 렌더링을 위한 프레젠테이셔널 컴포넌트(Dumb 컴포넌트) 분리
            
            - **로더** - 컨테이너는 특정 조건이 true인 동안 로더를 표시하고, 그렇지 않으면 콘텐츠를 렌더링합니다.
            - **인증 게이트** - 사용자가 인증되지 않은 경우 컨테이너는 자식을 렌더링하지 않습니다.
            - **레이아웃 및 스타일 제공 (플레이스홀더)** - 컨테이너는 일관된 스타일을 제공하는 래퍼 역할을 합니다. 콘텐츠가 다른 여러 대시보드 페이지 컴포넌트가 있고, 각 페이지에 동일한 레이아웃을 제공하고 싶을 때 사용합니다.
        - 렌더 프롭 패턴
            
            프롭으로 JSX를 리턴하는 함수를 넘겨 컴포넌트 간에 코드와 데이터 공유
            
            [훅으로 대체할 수 있지만, 선택적 렌더링이 필요할 때 여전하 유효한 패턴](https://itchallenger.tistory.com/m/559)
            
            [렌더 프롭 패턴의 대안?](https://gist.github.com/bradwestfall/4fa683c8f4fcd781a38a8d623bec20e7)
            
        - 고차 컴포넌트 패턴(HOC)
            
            기능을 추가하거나 기존 컴포넌트의 행위를 수정하기 위해 HOC 사용
            
        - 프로바이더 패턴
            
            많은 컴포넌트에 프롭 드릴링 없이 데이터와 스테이트를 제공하기 위해 리액트 컨텍스트API 활용
            
        - 컴파운드 컴포넌트 패턴
            
            UI 엘레먼트 만들 때 일반적으로 사용
            
            • API 복잡성 감소: 하나의 거대한 부모 컴포넌트에 모든 props를 집어넣고 하위 UI 컴포넌트로 향해 내려가는 대신, 각 prop는 가장 적합한 SubComponent에 연결되어 있습니다.
            
            • 유연한 마크업 구조: 컴포넌트의 UI가 매우 뛰어난 유연성을 가지고 있고 하나의 컴포넌트로부터 다양한 케이스를 생성할 수 있습니다. 예를 들어, 사용자는 SubComponent의 순서를 변경하거나 이 중에서 무엇을 표시할지 정할 수 있습니다.
            
            • 관심사의 분리: 대부분의 로직은 기본 Counter 컴포넌트에 포함되며, React.Context는 모든 자식 컴포넌트의 states와 handlers를 공유하는 데 사용됩니다. 따라서 책임 소재를 명확히 분리할 수 있습니다..
            
            ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2057.png)
            
            ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2058.png)
            
            ![Untitled](React%20b62589a2604845bb9733fb9d3e5d93c8/Untitled%2059.png)
            
            - 너무 높은 UI의 유연성: 유연성이 높다는 것은 예기치 않은 동작을 유발할 가능성이 크다는 것을 의미합니다. 예를 들어, 필요 없는 자식 컴포넌트가 존재하거나, 자식 컴포넌트의 순서가 잘못되어 있을 수 있고, 꼭 필요한 자식 컴포넌트가 없을 수도 있습니다.사용자가 컴포넌트를 어떻게 사용하기를 원하는지에 따라, 유연성을 어느 정도 제한하고 싶을 수도 있습니다.
            - 너무 무거운 JSX: 이 패턴을 적용하면 JSX 행 수가 증가하며, 특히 EsLint와 같은 린터나 Prettier와 같은 코드 포맷터를 사용하는 경우 더욱 심각해집니다.단일 컴포넌트 수준에서는 큰 문제가 아니지만, 규모가 커질수록 그 차이가 확연하게 드러납니다.
        
        [5가지 최신 고급 리액트 패턴 - ① Compound Component, Control Props, Custom Hook](https://wishket.tistory.com/m/12)
        
        [5가지 최신 고급 리액트 패턴 - ② Props Getters, State reducer](https://wishket.tistory.com/m/entry/5가지-최신-고급-리액트-패턴-②-Props-Getters-State-reducer)
        
    - Debounce and Throttle Event Handlers
        - 업데이트가 잦은 이벤트를 다룰 때(스크롤, 리사이즈), 디바운스나 쓰로틀링을 스용해 성능 최적화
        
        ```tsx
        import { debounce } from 'lodash';
        
        const handleScroll = debounce(() => {
          // Handle scroll event
        }, 200);
        
        window.addEventListener('scroll', handleScroll);
        
        ```
        
    - Conditional Rendering
        - 조건부 렌더링
        
        ```tsx
        const MyComponent: React.FC<Props> = ({ isLoggedIn }) => {
          return isLoggedIn ? <AuthenticatedComponent /> : <GuestComponent />;
        };
        
        ```
        
    - Immutability
        - 스테이트나 프롭 업데이트할 때 불변성의 원칙 따르기. 객체나 배열을 직접 업데이트하니 않고, 스프레드 연산자 등을 이용해 카피 후 변이시키기
        
        ```tsx
        const updateItem = (index: number, newItem: Item) => {
          const updatedItems = [...items];
          updatedItems[index] = newItem;
          setItems(updatedItems);
        };
        
        ```
        
    - Refs
        
        [Using React with TypeScript: A Comprehensive Guide for Developers](https://www.kodaps.dev/en/blog/using-react-with-typescript-a-comprehensive-guide)
        
        [Best Practices and Design Patterns for React components in 2023](https://codedamn.com/news/reactjs/best-practices-react)
        
        [Getting Started with TypeScript for React Applications](https://blog.stackademic.com/typescript-for-react-applications-54b3775acb5e)
