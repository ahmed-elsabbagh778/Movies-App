import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
const MoviesList  = lazy (() => import("../Pages/MoviesList/MoviesList"));
const TVshowsDetails  = lazy(() => import ("../Pages/TVshowsDetails/TVshowsDetails"));
const MovieDetails = lazy(() => import("../Pages/MovieDetails/MovieDetails"));
const Favourites = lazy(() => import("../pages/Favourites/Favourites"));
const NotFound = lazy(() => import("../pages/NotFound"));
const TvShowsList = lazy(() => import("../Pages/TVshowsList/TVShowsList"));

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
