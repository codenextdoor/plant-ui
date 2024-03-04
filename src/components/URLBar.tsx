import { FiLock } from "react-icons/fi";

const URLBar = () => {
  return (
    <div className="flex flex-row gap-4 items-center p-2 mb-3 backdrop-blur rounded-full bg-slate-100/80 w-3/5 px-6">
      <h1 className="text-4xl font-bold text-slate-600">
        <FiLock className="w-3 h-3" />
      </h1>
      <p className="text-slate-600 text-sm">https:\\www.myplant.com\\</p>
    </div>
  );
};

export default URLBar;
