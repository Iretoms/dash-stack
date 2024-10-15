"use client"
import React from "react";
import Card from "@/components/common/Card";
import { useGetFavoritesQuery } from "@/lib/redux/services/jsonServerApi";
import { Favorite } from "@/lib/types";

const Favourite = () => {
  const {
    data: favorites = [],
    isLoading,
    isError,
    error,
  } = useGetFavoritesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) {
    console.log(error);
    return <p>There was an error</p>;
  }

  return (
    <>
      <h1 className="pt-6 text-dark-text text-3xl font-bold">Favorites</h1>
      <section className="grid grid-cols-3 gap-4 mt-6">
        {favorites.map((favorite: Favorite) => (
          <Card key={favorite.id} favorite={favorite} />
        ))}
      </section>
    </>
  );
};

export default Favourite;
