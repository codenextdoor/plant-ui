import React from "react";
import Image from "next/image";

interface PlantProps {
  imageClassName?: string;
  imageUrl: string;
  altText: string;
  price: string;
}

const Plant: React.FC<PlantProps> = ({
  imageUrl,
  altText,
  price,
  imageClassName,
}) => {
  return (
    <div className="mb-4 h-full">
      <Image
        src={imageUrl}
        alt={altText}
        width={500}
        height={500}
        className={imageClassName}
      />

      <div className="flex flex-col items-center mt-2">
        <h3 className="text-sm font-normal text-white">{altText}</h3>
        <p className="text-xs text-white font-bold">${price}</p>
      </div>
    </div>
  );
};

export default Plant;
