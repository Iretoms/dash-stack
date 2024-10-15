"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Favorite } from "@/lib/types";
import { useToggleFavoriteMutation } from "@/lib/redux/services/jsonServerApi";

interface CardProps {
  favorite: Favorite;
}

const Card: React.FC<CardProps> = ({ favorite }) => {
  const [liked, setLiked] = useState<boolean>(favorite.isFavorite);

  const [toggleFavorite] = useToggleFavoriteMutation();

  const handleLike = async () => {
    setLiked(!liked);
    const updatedFavorite = { ...favorite, isFavorite: !liked };
    try {
      await toggleFavorite({
        id: updatedFavorite.id,
        isFavorite: updatedFavorite.isFavorite,
      });
    } catch (error) {
      console.error("Failed to update favorite status", error);
      setLiked(!liked);
    }
  };

  return (
    <article className="bg-white relative shadow-md rounded-xl w-full overflow-hidden">
      <div className="relative flex items-center">
        <div className="absolute left-2 flex justify-center items-center bg-gray-3 rounded-full h-8 w-8 cursor-pointer p-2">
          <ChevronLeft className="text-gray-2" />
        </div>
        <Image
          src={favorite.image}
          alt="product"
          width={400}
          height={400}
          className="max-w-full h-auto"
        />
        <div className="absolute right-2 flex justify-center items-center bg-gray-3 rounded-full h-8 w-8 cursor-pointer p-2">
          <ChevronRight className="text-gray-2" />
        </div>
      </div>
      <div className="px-4 py-6 md:py-4 lg:px-4 lg:py-6 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-base md:text-sm lg:text-base">{favorite.name}</p>
            <p className="font-bold text-primary text-sm">
              ${`${favorite.price}`}
            </p>
          </div>
          <div
            className="h-10 w-10 text-noti-red rounded-full flex items-center justify-center bg-gray-3 cursor-pointer"
            onClick={handleLike}
          >
            <Heart size={16} fill={liked ? "currentColor" : "none"} />
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-3">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              fill={index < favorite.rating ? "gold" : "currentColor"}
              stroke={index < favorite.rating ? "gold" : "currentColor"}
            />
          ))}
          <span className="text-sm text-gray-2">({favorite.reviewCount})</span>
        </div>
        <div className="mt-2">
          <Button className="font-bold text-dark-text bg-gray-3 rounded-xl hover:bg-gray-3">
            Edit Product
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Card;
