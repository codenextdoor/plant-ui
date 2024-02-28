import Image from "next/image";
import styles from "./PlantShop.module.css"; // Import CSS module
import { FaSearch } from "react-icons/fa";
import { FaFilter, FaImage, FaRegBell } from "react-icons/fa";
export default function PlantShop() {
  const backgroundImage = "/flower1.jpg";
  const plant1 = "/plant1.jpg";
  const plant2 = "/plant2.jpg";
  const plant3 = "/plant3.jpg";

  return (
    <>
      {/* Background Image */}
      <div className="">
        <Image
          src={backgroundImage}
          fill="true"
          alt="Background image"
          aria-hidden="true"
        />

        <div className="relative flex items-center justify-between ml-4 mt-2">
          <div className="relative flex gap-4">
            <div className="icon-button">
              <FaFilter />
            </div>
            <div className="icon-button">
              <FaImage />
            </div>
            <div className="icon-button">
              <FaRegBell />
            </div>
          </div>
          <div className="relative flex gap-4">
            <div className="search-input relative">
              <input
                type="search"
                className="rounded-lg py-1 pl-4 pr-10 focus:outline-none bg-white bg-opacity-40"
                placeholder="Search..."
              />
              <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
        {/* plants */}
        <div className="flex justify-center items-center ml-80 gap-20 w-1/2 mt-12 glass">
          {/* Plant 1 */}
          <div className="mb-4">
            <Image
              src={plant1}
              alt="Plant 1"
              width={128}
              height={128}
              className="rounded-full"
            />
            <div className="text-center mt-2">
              <h3 className="text-lg font-semibold">Plant 1</h3>
              <p className="text-sm text-gray-500">$19.99</p>
            </div>
          </div>

          <div className="mb-4">
            <Image
              src={plant2}
              alt="Plant 2"
              width={192}
              height={192}
              className="rounded-full"
            />
            <div className="text-center mt-2 glass absolute  ml-12 ">
              <h3 className="text-lg font-semibold">Plant 2</h3>
              <p className="text-sm text-gray-500">$29.99</p>
              <button className="rounded-lg p-2 bg-white cart-button  ">
                Add to cart
              </button>
            </div>
          </div>

          {/* Plant 3 */}
          <div className="mb-4">
            <Image
              src={plant3}
              alt="Plant 3"
              width={128}
              height={128}
              className="rounded-full"
            />
            <div className="text-center mt-2">
              <h3 className="text-lg font-semibold">Plant 3</h3>
              <p className="text-sm text-gray-500">$24.99</p>
            </div>
          </div>
        </div>
      </div>
      {/* part 2  */}
    </>
  );
}
