import React, { useState } from "react";

import Sidebar from "../assets/components/Sidebar";
import NavigateTabs from "../assets/components/NavigateTabs";
import CustomerHeader from "../assets/components/CustomerHeader";
import CustomerHeaderRight from "../assets/components/CustomerHeaderRight";
import CustomerTable from "../assets/components/CustomerTable";
import NotFound from "../assets/components/NotFound";

export default function Customer() {
  const [activeComponentTab, setActiveComponentTab] = useState("Customer");
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex flex-col w-svw p-6 gap-4">
        <NavigateTabs setActiveComponentTab={setActiveComponentTab} />
        <div className="flex w-full  items-start gap-4">
          <div className="w-full">
            <CustomerHeader />
            <div className="flex flex-col w-full">
              {activeComponentTab === "Customer" && <CustomerTable />}
              {activeComponentTab === "Promo" && <NotFound />}
              {activeComponentTab === "Voucher" && <NotFound />}
            </div>
          </div>
          <CustomerHeaderRight />
        </div>
      </div>
    </div>
  );
}
