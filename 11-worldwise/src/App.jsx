
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { lazy } from 'react'

import { Navigate } from 'react-router-dom'
import { CitiesProvider } from './contexts/CitiesContext'
import { AuthProvider } from './contexts/fakeAuthContext'
import ProtectedRoute from './pages/ProtectedRoute'

import CityList from './components/CityList'
import CountryList from './components/CountryList'
import City from './components/City'
import Form from './components/Form'
import { Suspense } from 'react'
import SpinnerFullPage from './components/SpinnerFullPage'

// import Product from './pages/Product'
// import Pricing from './pages/Pricing'
// import Homepage from './pages/Homepage'
// import Login from './pages/Login'
// import AppLayout from './pages/AppLayout'
// import PageNotFound from './pages/PageNotFound'

const Homepage = lazy(() => import('./pages/Homepage'));
const Product = lazy(() => import('./pages/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Login = lazy(() => import('./pages/Login'));
const AppLayout = lazy(() => import('./pages/AppLayout'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

// dist/assets/index-f1a3800f.css   30.10 kB │ gzip:   5.04 kB
// dist/assets/index-ad36644f.js   524.02 kB │ gzip: 148.40 kB

// dist/assets/Logo-515b84ce.css             0.03 kB │ gzip:   0.05 kB
// dist/assets/Login-f39ef3ff.css            0.35 kB │ gzip:   0.22 kB
// dist/assets/Product-cf1be470.css          0.47 kB │ gzip:   0.27 kB
// dist/assets/PageNav-d3c5d403.css          0.51 kB │ gzip:   0.28 kB
// dist/assets/Homepage-380f4eeb.css         0.51 kB │ gzip:   0.30 kB
// dist/assets/AppLayout-c49eff02.css        1.91 kB │ gzip:   0.70 kB
// dist/assets/index-10379d24.css           26.43 kB │ gzip:   4.35 kB
// dist/assets/Product.module-02d70b80.js    0.06 kB │ gzip:   0.07 kB
// dist/assets/PageNotFound-23922ccc.js      0.15 kB │ gzip:   0.15 kB
// dist/assets/Logo-17112cdf.js              0.21 kB │ gzip:   0.19 kB
// dist/assets/PageNav-de7a2638.js           0.49 kB │ gzip:   0.27 kB
// dist/assets/Pricing-82f19d9c.js           0.65 kB │ gzip:   0.41 kB
// dist/assets/Homepage-ebcc369d.js          0.67 kB │ gzip:   0.41 kB
// dist/assets/Product-0bac5ce3.js           0.86 kB │ gzip:   0.49 kB
// dist/assets/Login-0131c239.js             1.00 kB │ gzip:   0.53 kB
// dist/assets/AppLayout-a6779363.js       156.91 kB │ gzip:  46.10 kB
// dist/assets/index-7c9bb7a9.js           365.37 kB │ gzip: 101.80 kB



function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route path="app" element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>}
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={< City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  )
}

export default App

