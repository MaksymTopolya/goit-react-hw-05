import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage')) 
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage')) 
const Navigation = lazy(() => import('./Navigation/Navigation')) 
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage')) 
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage')) 
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast')) 
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews')) 

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:filmId" element={<MovieDetailsPage/>}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="revievs" element={<MovieReviews />}/>
        </Route> 
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
