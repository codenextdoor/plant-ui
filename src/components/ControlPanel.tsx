import React from "react";
import MenuItem from "./MenuItem";

export interface MenuItem {
  title: string;
  icon: React.ElementType<any, keyof React.JSX.IntrinsicElements>;
}

interface ControlPanelProps {
  menuItems: {
    title: string;
    icon: React.ElementType<any, keyof React.JSX.IntrinsicElements>;
  }[];
}

const ControlPanel: React.FC<ControlPanelProps> = ({ menuItems }) => {
  return (
    <div className="gap-4 backdrop-blur rounded-full bg-slate-100/80 mr-4 p-1">
      <div className="flex flex-col gap-4 ">
        {menuItems.map((item, index) => (
          <MenuItem key={index} Icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default ControlPanel;
