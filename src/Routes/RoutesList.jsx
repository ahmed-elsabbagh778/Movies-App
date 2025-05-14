import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
const MoviesList = lazy(() => import("../Pages/MoviesList/MoviesList"));
const TVshowsDetails = lazy(() => import("../Pages/TVshowsDetails/TVshowsDetails"));
const MovieDetails = lazy(() => import("../Pages/MovieDetails/MovieDetails"));
const Favourites = lazy(() => import("../Pages/Favourites/Favourites"));
const NotFound = lazy(() => import("../Pages/NotFound"));
const TvShowsList = lazy(() => import("../Pages/TVshowsList/TVShowsList"));
const SearchResults = lazy(() => import("../Pages/SearchResults/SearchResults"));

export default function RoutesList() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<TVshowsDetails />} />
        <Route path="/tvShows" element={<TvShowsList />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}