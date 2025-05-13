import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import MoviesList from "../Pages/MoviesList/MoviesList";
const MovieDetails = lazy(() => import("../Pages/MovieDetails/MovieDetails"));
const Favourites = lazy(() => import("../pages/Favourites/Favourites"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function RoutesList() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
