import React from "react";

interface MenuItemProps {
  Icon: React.ElementType<any, keyof React.JSX.IntrinsicElements>;
}

const MenuItem: React.FC<MenuItemProps> = ({ Icon }) => {
  return (
    <button className="rounded-full p-2 hover:bg-white">
      <Icon className="text-2xl text-slate-500 w-5 h-5" />
    </button>
  );
};

export default MenuItem;
