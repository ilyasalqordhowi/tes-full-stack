import { useState } from "react";
import { FaPlus, FaMagnifyingGlass } from "react-icons/fa6";
import ImgHeader from "../img/ImgHeader.svg";
import FormCustomer from "./FormCustomer";

export default function CustomerHeader() {
  const [search, setSearch] = useState("");
  const [buttonAdd, setButtonAdd] = useState(false);

  function ButtonAdd() {
    setButtonAdd(!buttonAdd);
  }

  return (
    <div>
      <div className="relative bg-gradient-to-r from-indigo-500 w-full to-blue-400 text-white p-6 rounded-2xl shadow-md flex  flex-col overflow-hidden">
        <div
          className="absolute inset-y-0 right-0 w-3/6 bg-cover bg-right rounded-2xl"
          style={{
            backgroundImage: `url(${ImgHeader})`,
            backgroundSize: "cover",
            backgroundPosition: "right center",
            zIndex: 0,
          }}
        ></div>
        <div className="relative z-10">
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold">Customer</h2>
            <p className="text-sm  w-[390px]">
              On this menu you will be able to create, edit, and also delete the
              customer. Also you can manage it easily.
            </p>
          </div>
          <div className="flex  w-full items-center justify-between mt-4">
            <button
              className="flex items-center gap-2 bg-white/20 text-white px-4 py-4 rounded-lg font-medium shadow"
              onClick={ButtonAdd}
            >
              <FaPlus size={16} />
              <h1>Add New Customer</h1>
            </button>
            <div className=" flex items-center justify-between bg-white  px-4 py-2 rounded-lg shadow-md">
              <div className="flex items-center gap-2 ">
                <FaMagnifyingGlass size={16} className=" text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Customer"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className=" py-1 text-gray-700 focus:outline-none"
                />
              </div>
              <button className="bg-indigo-600 px-4 py-2 rounded-lg font-medium shadow-md text-white">
                Search
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 bg-white/20 p-2 rounded-lg shadow-md">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.6 1.89999H12.4C13.1333 1.89999 13.7333 2.49999 13.7333 3.23333V4.69999C13.7333 5.23333 13.4 5.89999 13.0667 6.23333L10.2 8.76666C9.8 9.09999 9.53333 9.76666 9.53333 10.3V13.1667C9.53333 13.5667 9.26667 14.1 8.93333 14.3L8 14.9C7.13333 15.4333 5.93333 14.8333 5.93333 13.7667V10.2333C5.93333 9.76666 5.66667 9.16666 5.4 8.83333L2.86667 6.16666C2.53333 5.83333 2.26667 5.23333 2.26667 4.83333V3.29999C2.26667 2.49999 2.86667 1.89999 3.6 1.89999Z"
                    stroke="white"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h1 className="text-sm text-white font-semibold">Filter</h1>
              </button>
              <button className="flex items-center gap-2 bg-white/20 p-2 rounded-lg shadow-md">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.33333 8.49999C1.33333 4.81999 4.29333 1.83333 8 1.83333C12.4467 1.83333 14.6667 5.53999 14.6667 5.53999M14.6667 5.53999V2.20666M14.6667 5.53999H11.7067"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M14.5933 8.5C14.5933 12.18 11.6067 15.1667 7.92667 15.1667C4.24667 15.1667 2 11.46 2 11.46M2 11.46H5.01333M2 11.46V14.7933"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h1>Refresh</h1>
              </button>
              <button className="flex items-center gap-2 bg-white/20 py-4 px-4 rounded-lg shadow-md">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M4.83334 5.16666H11.1667V3.83333C11.1667 2.49999 10.6667 1.83333 9.16668 1.83333H6.83334C5.33334 1.83333 4.83334 2.49999 4.83334 3.83333V5.16666Z"
                    stroke="white"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.6667 10.5V13.1667C10.6667 14.5 10 15.1667 8.66668 15.1667H7.33334C6.00001 15.1667 5.33334 14.5 5.33334 13.1667V10.5H10.6667Z"
                    stroke="white"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 7.16667V10.5C14 11.8333 13.3333 12.5 12 12.5H10.6667V10.5H5.33333V12.5H4C2.66667 12.5 2 11.8333 2 10.5V7.16667C2 5.83334 2.66667 5.16667 4 5.16667H12C13.3333 5.16667 14 5.83334 14 7.16667Z"
                    stroke="white"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.3333 10.5H10.5267H4.66666"
                    stroke="white"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M4.66666 7.83333H6.66666"
                    stroke="white"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {buttonAdd ? <FormCustomer /> : ""}
    </div>
  );
}
