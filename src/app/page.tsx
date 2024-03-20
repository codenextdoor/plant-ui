import Image from "next/image";
import { RiHome5Line, RiPlantLine, RiShoppingCart2Line } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";
import BackgroundImage from "../components/BackgroundImage";
import ControlPanel from "../components/ControlPanel";
import Header from "../components/Header";
import Plant from "../components/Plant";
import CartButton from "../components/CartButton";
import URLBar from "../components/URLBar";

export default function Page() {
  const backgroundImage = "/flower1.jpg";
  const plant1 = "/money-plant.png";
  const plant2 = "/monstera-plant.png";
  const plant3 = "/monstera-plant2.png";

  const menuItems = [
    {
      title: "Home",
      icon: RiHome5Line,
    },
    {
      title: "Home",
      icon: RiPlantLine,
    },
    {
      title: "Home",
      icon: RiShoppingCart2Line,
    },
    {
      title: "Home",
      icon: LuSettings2,
    },
  ];

  return (
    <>
      {/* Background Image */}
      <BackgroundImage imageUrl={backgroundImage} />

      {/* Plants */}
      <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full">
        <div className="flex flex-row h-1/2  justify-center w-1/2">
          <div className="flex items-center h-full">
            {/* Control Panel */}
            <ControlPanel menuItems={menuItems} />
          </div>

          <div className="flex flex-col justify-center items-center">
            <URLBar />
            <div className="flex justify-center items-center gap-20 backdrop-blur rounded-2xl bg-slate-100/80 h-full w-[900px] px-10 py-10">
              <Header />
              <div className="flex justify-between items-end w-full pt-5 pb-20">
                {/* Plant 1 */}
                <Plant
                  imageUrl={plant1}
                  altText="Chinese Money"
                  price="219.99"
                />

                <Image src={plant2} alt="Plant 2" width={500} height={500} />

                {/* Plant 3 */}
                <Plant
                  imageUrl={plant3}
                  altText="Monstera Deliciosa"
                  price="219.00"
                  imageClassName="translate-y-[12%]"
                />
              </div>
            </div>
            {/* Plant 2 */}
            <div className="translate-y-[-50%] flex flex-row gap-6  backdrop-blur rounded-full bg-slate-100/80 p-4">
              <div className="text-center">
                <h3 className="text-sm font-normal text-white">
                  Monstera Deliciosa
                </h3>
                <p className="text-xs text-white font-bold">$249.99</p>
              </div>
              <CartButton />
            </div>
          </div>
        </div>
      </div>
      {/* part 2  */}
    </>
  );
}
