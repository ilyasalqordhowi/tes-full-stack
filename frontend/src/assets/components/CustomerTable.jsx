import React, { useState } from "react";

export default function CustomerTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 38;
  const pageSize = 10;
  const customers = [
    {
      name: "Odis Rhinehart",
      level: "Warga",
      menu: "Chicken & Ribs Combo",
      transaction: "IDR 194,700",
    },
    {
      name: "Kris Roher",
      level: "Warga",
      menu: "Surf & Turf Gift Basket",
      transaction: "IDR 631,200",
    },
    {
      name: "Serenity Fisher",
      level: "Juragan",
      menu: "Fried Chicken Dinner",
      transaction: "IDR 1,040.920",
    },
    {
      name: "Brooklyn Warren",
      level: "Sultan",
      menu: "Surf & Turf Gift Basket",
      transaction: "IDR 730,500",
    },
    {
      name: "Franco Delort",
      level: "Juragan",
      menu: "Chicken & Ribs Combo",
      transaction: "IDR 96,000",
    },
    {
      name: "Saul Geoghegan",
      level: "Juragan",
      menu: "Surf & Turf Gift Basket",
      transaction: "IDR 256,000",
    },
    {
      name: "Alfredo Vetrov",
      level: "Juragan",
      menu: "Dark & Stormy",
      transaction: "IDR 590,080",
    },
    {
      name: "Cristofer Vetrov",
      level: "Konglomerat",
      menu: "Shaking Beef Tri-Tip",
      transaction: "IDR 782,600",
    },
    {
      name: "Calvin Steward",
      level: "Konglomerat",
      menu: "BBQ Rib Dinner",
      transaction: "IDR 467,500",
    },
  ];

  const levelColors = {
    Warga: "bg-orange-100 text-orange-600",
    Juragan: "bg-blue-100 text-blue-600",
    Sultan: "bg-green-100 text-green-600",
    Konglomerat: "bg-purple-100 text-purple-600",
  };

  return (
    <div className="flex flex-col justify-between h-screen overflow-x-auto p-4">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-3 px-6">Customer Name</th>
            <th className="py-3 px-6">Level</th>
            <th className="py-3 px-6">Favorite Menu</th>
            <th className="py-3 px-6">Total Transaction</th>
            <th className="py-3 px-6">Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index} className="border-b">
              <td className="py-4 px-6">{customer.name}</td>
              <td className="py-4 px-6">
                <span
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    levelColors[customer.level]
                  }`}
                >
                  {customer.level}
                </span>
              </td>
              <td className="py-4 px-6">{customer.menu}</td>
              <td className="py-4 px-6">{customer.transaction}</td>
              <td className="py-4 px-6 flex gap-2">
                <button className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-3 rounded text-sm">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.895 5.775V4.06C10.895 3.445 10.425 2.765 9.85001 2.55L7.35501 1.615C6.94001 1.46 6.26001 1.46 5.84501 1.615L3.35001 2.555C2.77501 2.77 2.30501 3.45 2.30501 4.06V7.775C2.30501 8.365 2.69501 9.14 3.17001 9.495L5.32001 11.1C5.67001 11.37 6.13501 11.5 6.60001 11.5"
                      stroke="#292D32"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      opacity="0.4"
                      d="M8.60001 10.5C9.70458 10.5 10.6 9.60457 10.6 8.5C10.6 7.39543 9.70458 6.5 8.60001 6.5C7.49544 6.5 6.60001 7.39543 6.60001 8.5C6.60001 9.60457 7.49544 10.5 8.60001 10.5Z"
                      stroke="#292D32"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      opacity="0.4"
                      d="M11.0978 11H11.1023"
                      stroke="#292D32"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Detail
                </button>
                <button className="flex items-center bg-blue-500/20 hover:bg-blue-600/30 text-white py-1 px-3 rounded text-sm">
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.62999 2.3L2.52499 6.645C2.36999 6.81 2.21999 7.135 2.18999 7.36L2.00499 8.98C1.93999 9.565 2.35999 9.965 2.93999 9.865L4.54999 9.59C4.77499 9.55 5.08999 9.385 5.24499 9.215L9.34999 4.87C10.06 4.12 10.38 3.265 9.27499 2.22C8.17499 1.185 7.33999 1.55 6.62999 2.3Z"
                      stroke="#110D17"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      opacity="0.4"
                      d="M5.94501 3.025C6.16001 4.405 7.28001 5.46 8.67001 5.6"
                      stroke="#110D17"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      opacity="0.4"
                      d="M1.5 11.5H10.5"
                      stroke="#110D17"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex bg-red-500/20 items-center hover:bg-red-600/30 text-white py-1 px-3 rounded text-sm">
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 3.49C8.835 3.325 7.16 3.24 5.49 3.24C4.5 3.24 3.51 3.29 2.52 3.39L1.5 3.49"
                      stroke="#F02D3A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      opacity="0.34"
                      d="M4.25 2.985L4.36 2.33C4.44 1.855 4.5 1.5 5.345 1.5H6.655C7.5 1.5 7.565 1.875 7.64 2.335L7.75 2.985"
                      stroke="#F02D3A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.42501 5.07L9.10001 10.105C9.04501 10.89 9.00001 11.5 7.60501 11.5H4.39501C3.00001 11.5 2.95501 10.89 2.90001 10.105L2.57501 5.07"
                      stroke="#F02D3A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      opacity="0.34"
                      d="M5.16501 8.75H6.83001"
                      stroke="#F02D3A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      opacity="0.34"
                      d="M4.75 6.75H7.25"
                      stroke="#F02D3A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between mt-4 p-2">
        <span className="">Showing {pageSize} Data Customers</span>
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`px-3 py-1 rounded-md text-sm ${
                currentPage === page
                  ? "bg-gray-900 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <span>...</span>
          <button
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md text-sm"
            onClick={() => setCurrentPage(totalPages)}
          >
            {totalPages}
          </button>
          <button
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md text-sm"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage >= totalPages}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
