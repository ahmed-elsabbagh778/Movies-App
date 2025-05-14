import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
const MoviesList  = lazy (() => import("../Pages/MoviesList/MoviesList.jsx"));
const TVshowsDetails  = lazy(() => import ("../Pages/TVshowsDetails/TVshowsDetails.jsx"));
const MovieDetails = lazy(() => import("../Pages/MovieDetails/MovieDetails.jsx"));
const Favourites = lazy(() => import("../Pages/Favourites/Favourites.jsx"));
const NotFound = lazy(() => import("../pages/NotFound.jsx"));
const TvShowsList = lazy(() => import("../Pages/TVshowsList/TVShowsList.jsx"));

export default function RoutesList() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<TVshowsDetails />} />
        <Route path="/tvShows" element={<TvShowsList />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
