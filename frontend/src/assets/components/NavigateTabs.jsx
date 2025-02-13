import { useState } from "react";

export default function NavigateTabs({ setActiveComponentTab }) {
  const [activeButton, setActiveButton] = useState(null);
  const ButtonClick = (component) => {
    setActiveComponentTab(component);
    setActiveButton(component);
  };
  return (
    <div className="flex flex-col bg-white gap-1">
      <h2 className="text-2xl font-bold text-black">Customer</h2>
      <div className="flex items-start  justify-between border-b border-gray-200">
        <p className="text-[#98949E] text-sm font-semibold">
          You can manage and organize your customer and other things here
        </p>
        <nav className="flex gap-2">
          {["Customer", "Promo", "Voucher"].map((tab) => (
            <button
              key={tab}
              onClick={() => ButtonClick(tab)}
              className={`py-3 px-16 text-[#98949E] text-sm font-semibold ${
                activeButton === tab
                  ? "border-b border-blue-500 text-blue-600 font-medium"
                  : "hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
