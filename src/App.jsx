import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage')) 
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage')) 
const Navigation = lazy(() => import('./Navigation/Navigation')) 
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage')) 
const DetailsPage = lazy(() => import('./pages/DetailsPage/DetailsPage')) 
const FilmCast = lazy(() => import('./components/FilmCast/FilmCast')) 
const FilmsReview = lazy(() => import('./components/FilmReview/FilmReview')) 

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:filmId" element={<DetailsPage />}>
          <Route path="cast" element={<FilmCast />} />
          <Route path="revievs" element={<FilmsReview />}/>
        </Route> 
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
