import Image from "next/image";

interface BackgroundImageProps {
  imageUrl: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ imageUrl }) => {
  return (
    <div className="h-screen relative">
      <Image
        src={imageUrl}
        fill={true}
        alt="Background image"
        aria-hidden="true"
      />
    </div>
  );
};

export default BackgroundImage;
