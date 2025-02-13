import Logo from "./Logo";
import ProfileImg from "../img/profile.svg";

export default function Sidebar() {
  return (
    <div className="flex flex-col  justify-between border-r-2">
      <div className="flex flex-col  p-6 gap-6">
        <Logo />
        <div className="flex flex-col gap-2">
          <h1 className="text-xs text-[#98949E] font-medium">Menu</h1>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center py-2">
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.91669 6.33332H11.0834C12.25 6.33332 12.8334 5.74999 12.8334 4.58332V3.41666C12.8334 2.24999 12.25 1.66666 11.0834 1.66666H9.91669C8.75002 1.66666 8.16669 2.24999 8.16669 3.41666V4.58332C8.16669 5.74999 8.75002 6.33332 9.91669 6.33332Z"
                  stroke="#98949E"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.91669 13.3333H4.08335C5.25002 13.3333 5.83335 12.75 5.83335 11.5833V10.4167C5.83335 9.24999 5.25002 8.66666 4.08335 8.66666H2.91669C1.75002 8.66666 1.16669 9.24999 1.16669 10.4167V11.5833C1.16669 12.75 1.75002 13.3333 2.91669 13.3333Z"
                  stroke="#98949E"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.34"
                  d="M3.50002 6.33332C4.78869 6.33332 5.83335 5.28865 5.83335 3.99999C5.83335 2.71133 4.78869 1.66666 3.50002 1.66666C2.21136 1.66666 1.16669 2.71133 1.16669 3.99999C1.16669 5.28865 2.21136 6.33332 3.50002 6.33332Z"
                  stroke="#98949E"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.34"
                  d="M10.5 13.3333C11.7887 13.3333 12.8334 12.2887 12.8334 11C12.8334 9.71133 11.7887 8.66666 10.5 8.66666C9.21136 8.66666 8.16669 9.71133 8.16669 11C8.16669 12.2887 9.21136 13.3333 10.5 13.3333Z"
                  stroke="#98949E"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h1 className="text-sm text-[#98949E] font-medium">Dashboard</h1>
              <h2 className="bg-gradient-to-r from-[#EEA849] to-[#F46B45] text-white text-sm rounded-full px-[6px]">
                4
              </h2>
            </div>
            <div className="flex gap-3 items-center py-2">
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.34"
                  d="M11.9583 6.04167C12.8333 6.04167 12.8333 6.33334 12.8333 6.91667V8.08334C12.8333 8.66667 12.8333 8.95834 11.9583 8.95834"
                  stroke="#98949E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.34"
                  d="M3.72168 6.33333C3.91418 7.09749 3.91418 7.9025 3.72168 8.66666"
                  stroke="#98949E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.34"
                  d="M5.76331 6.33333C5.95581 7.09749 5.95581 7.9025 5.76331 8.66666"
                  stroke="#98949E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.34"
                  d="M7.80499 6.33333C7.99749 7.09749 7.99749 7.9025 7.80499 8.66666"
                  stroke="#98949E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.58335 11.5833H4.08335C1.75002 11.5833 1.16669 11 1.16669 8.66667V6.33334C1.16669 4.00001 1.75002 3.41667 4.08335 3.41667H7.58335C9.91669 3.41667 10.5 4.00001 10.5 6.33334V8.66667C10.5 11 9.91669 11.5833 7.58335 11.5833Z"
                  stroke="#98949E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h1 className="text-sm text-[#98949E] font-medium">Stock</h1>
            </div>
            <div className="flex gap-3 items-center py-2">
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M2.97919 4.43751C2.97919 3.18531 3.99783 2.16667 5.25002 2.16667C6.50189 2.16667 7.52033 3.18479 7.52085 4.43654C7.51557 5.66531 6.5592 6.65529 5.33997 6.70251H5.33995H5.33992H5.3399H5.33987H5.33985H5.33982H5.3398H5.33977H5.33974H5.33972H5.33969H5.33967H5.33964H5.33961H5.33959H5.33956H5.33954H5.33951H5.33948H5.33946H5.33943H5.3394H5.33938H5.33935H5.33932H5.33929H5.33927H5.33924H5.33921H5.33918H5.33916H5.33914C5.27905 6.69652 5.21956 6.69717 5.16544 6.70151C3.91865 6.64269 2.97919 5.6534 2.97919 4.43751Z"
                  fill="#5D5FEF"
                  stroke="#5D5FEF"
                />
                <path
                  d="M2.56536 12.0957L2.56399 12.0948C1.93004 11.6722 1.64331 11.1476 1.64331 10.6383C1.64331 10.1287 1.93044 9.5985 2.56952 9.17039C3.29068 8.69343 4.26222 8.44041 5.25727 8.44041C6.25296 8.44041 7.22128 8.69373 7.93596 9.17019C8.56624 9.59038 8.85172 10.1146 8.85664 10.6287C8.8559 11.1436 8.56855 11.6679 7.93409 12.0961C7.21658 12.5776 6.24602 12.8333 5.24998 12.8333C4.2537 12.8333 3.28292 12.5775 2.56536 12.0957Z"
                  fill="#5D5FEF"
                  stroke="#5D5FEF"
                />
                <path
                  opacity="0.4"
                  d="M9.63608 6.55325C9.4105 6.55929 9.19831 6.52253 9.00677 6.45076C9.44125 5.85568 9.66786 5.10532 9.60424 4.31013L9.60425 4.31013L9.60398 4.30695C9.5756 3.97852 9.4974 3.66726 9.37968 3.37886C9.40008 3.3763 9.4206 3.37409 9.44123 3.37225C10.3093 3.29725 11.0867 3.94505 11.1626 4.82361C11.2329 5.68077 10.6324 6.42444 9.80331 6.53912C9.80315 6.53912 9.80298 6.53911 9.80281 6.53911C9.78685 6.53873 9.71889 6.53713 9.63608 6.55325Z"
                  fill="#5D5FEF"
                  stroke="#5D5FEF"
                />
                <path
                  d="M12.3297 10.1308L12.3296 10.1308L12.3292 10.1364C12.2997 10.4944 12.0711 10.8539 11.5722 11.1274L11.5715 11.1277C11.3426 11.2536 11.0807 11.351 10.7996 11.4174C10.8924 11.1936 10.9518 10.9577 10.9745 10.7138L10.9745 10.7138L10.975 10.7077C11.0495 9.78388 10.6029 8.94228 9.82199 8.31116C10.5517 8.38055 11.2555 8.62919 11.7552 9.03244L11.7558 9.03295C12.1999 9.39017 12.3624 9.78163 12.3297 10.1308Z"
                  fill="#5D5FEF"
                  stroke="#5D5FEF"
                />
              </svg>
              <h1 className="text-sm text-[#5D5FEF] font-medium">Customer</h1>
            </div>
            <div className="flex gap-3 items-center py-2">
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0658 13.3333H2.89917C1.14917 13.3333 1.14917 12.5458 1.14917 11.5833V11C1.14917 10.6792 1.41167 10.4167 1.7325 10.4167H12.2325C12.5533 10.4167 12.8158 10.6792 12.8158 11V11.5833C12.8158 12.5458 12.8158 13.3333 11.0658 13.3333Z"
                  stroke="#98949E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.0866 8.08334V10.4167H1.90747V8.08334C1.90747 5.84334 3.4883 3.97084 5.59414 3.52167C5.90914 3.45167 6.2358 3.41667 6.57414 3.41667H7.41997C7.7583 3.41667 8.0908 3.45167 8.4058 3.52167C10.5116 3.97667 12.0866 5.84334 12.0866 8.08334Z"
                  stroke="#98949E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.34"
                  d="M8.45835 3.12501C8.45835 3.26501 8.44085 3.39334 8.40585 3.52167C8.09085 3.45167 7.75835 3.41667 7.42002 3.41667H6.57419C6.23585 3.41667 5.90919 3.45167 5.59419 3.52167C5.55919 3.39334 5.54169 3.26501 5.54169 3.12501C5.54169 2.32001 6.19502 1.66667 7.00002 1.66667C7.80502 1.66667 8.45835 2.32001 8.45835 3.12501Z"
                  stroke="#98949E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.34"
                  d="M8.75 6.91666H5.25"
                  stroke="#98949E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h1 className="text-sm text-[#98949E] font-medium">Restaurant</h1>
            </div>
            <div className="flex gap-3 items-center py-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8334 7V5.25C12.8334 2.33333 11.6667 1.16666 8.75002 1.16666H5.25002C2.33335 1.16666 1.16669 2.33333 1.16669 5.25V8.75C1.16669 11.6667 2.33335 12.8333 5.25002 12.8333H7.00002"
                  stroke="#98949E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M12.2267 10.4067L11.2759 10.7275C11.0134 10.815 10.8034 11.0192 10.7159 11.2875L10.395 12.2383C10.1209 13.0608 8.96585 13.0433 8.70918 12.2208L7.63002 8.74999C7.42002 8.06166 8.05585 7.41999 8.73835 7.63582L12.215 8.71499C13.0317 8.97166 13.0434 10.1325 12.2267 10.4067Z"
                  stroke="#98949E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h1 className="text-sm text-[#98949E] font-medium">Design</h1>
            </div>
            <div className="flex gap-3 items-center py-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.83335 3.5H8.16669C9.33335 3.5 9.33335 2.91667 9.33335 2.33333C9.33335 1.16667 8.75002 1.16667 8.16669 1.16667H5.83335C5.25002 1.16667 4.66669 1.16667 4.66669 2.33333C4.66669 3.5 5.25002 3.5 5.83335 3.5Z"
                  stroke="#98949E"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M9.33333 2.345C11.2758 2.45 12.25 3.1675 12.25 5.83333V9.33333C12.25 11.6667 11.6667 12.8333 8.75 12.8333H5.25C2.33333 12.8333 1.75 11.6667 1.75 9.33333V5.83333C1.75 3.17333 2.72417 2.45 4.66667 2.345"
                  stroke="#98949E"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h1 className="text-sm text-[#98949E] font-medium">Report</h1>
            </div>
            <div className="flex gap-3 items-center py-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M10.5817 12.6117C10.0683 12.7633 9.46167 12.8333 8.75 12.8333H5.25C4.53833 12.8333 3.93167 12.7633 3.41833 12.6117C3.54667 11.095 5.10417 9.89915 7 9.89915C8.89583 9.89915 10.4533 11.095 10.5817 12.6117Z"
                  stroke="#98949E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.8334 5.25V8.75C12.8334 10.955 12.1684 12.1625 10.5817 12.6117C10.0684 12.7633 9.46169 12.8333 8.75002 12.8333H5.25002C4.53835 12.8333 3.93169 12.7633 3.41835 12.6117C1.83169 12.1625 1.16669 10.955 1.16669 8.75V5.25C1.16669 2.33333 2.33335 1.16667 5.25002 1.16667H8.75002C11.6667 1.16667 12.8334 2.33333 12.8334 5.25Z"
                  stroke="#98949E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M9.08835 6.17168C9.08835 7.32668 8.15502 8.26582 7.00002 8.26582C5.84502 8.26582 4.91168 7.32668 4.91168 6.17168C4.91168 5.01668 5.84502 4.08333 7.00002 4.08333C8.15502 4.08333 9.08835 5.01668 9.08835 6.17168Z"
                  stroke="#98949E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h1 className="text-sm text-[#98949E] font-medium">
                Role & Admin
              </h1>
            </div>
            <div className="flex gap-3 items-center py-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M3.79169 12.8333V8.75"
                  stroke="#98949E"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M3.79169 2.91667V1.16667"
                  stroke="#98949E"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M10.2083 12.8333V11.0833"
                  stroke="#98949E"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M10.2083 5.25V1.16667"
                  stroke="#98949E"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.54169 4.08333V7.58333C5.54169 8.225 5.25002 8.75 4.37502 8.75H3.20835C2.33335 8.75 2.04169 8.225 2.04169 7.58333V4.08333C2.04169 3.44167 2.33335 2.91667 3.20835 2.91667H4.37502C5.25002 2.91667 5.54169 3.44167 5.54169 4.08333Z"
                  stroke="#98949E"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9583 6.41667V9.91667C11.9583 10.5583 11.6666 11.0833 10.7916 11.0833H9.62498C8.74998 11.0833 8.45831 10.5583 8.45831 9.91667V6.41667C8.45831 5.775 8.74998 5.25 9.62498 5.25H10.7916C11.6666 5.25 11.9583 5.775 11.9583 6.41667Z"
                  stroke="#98949E"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h1 className="text-sm text-[#98949E] font-medium">Settings</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xs text-[#98949E] font-medium">Integration</h1>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center py-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.16669 1.16667H2.18169C2.81169 1.16667 3.30752 1.70917 3.25502 2.33334L2.77085 8.14333C2.68919 9.09417 3.44168 9.91083 4.39835 9.91083H10.6109C11.4509 9.91083 12.1859 9.22251 12.25 8.38834L12.565 4.01334C12.635 3.04501 11.9 2.2575 10.9259 2.2575H3.39502"
                  stroke="#98949E"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M9.47917 12.8333C9.88187 12.8333 10.2083 12.5069 10.2083 12.1042C10.2083 11.7015 9.88187 11.375 9.47917 11.375C9.07646 11.375 8.75 11.7015 8.75 12.1042C8.75 12.5069 9.07646 12.8333 9.47917 12.8333Z"
                  stroke="#98949E"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M4.81248 12.8333C5.21519 12.8333 5.54165 12.5069 5.54165 12.1042C5.54165 11.7015 5.21519 11.375 4.81248 11.375C4.40977 11.375 4.08331 11.7015 4.08331 12.1042C4.08331 12.5069 4.40977 12.8333 4.81248 12.8333Z"
                  stroke="#98949E"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M5.25 4.66667H12.25"
                  stroke="#98949E"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h1 className="text-sm text-[#98949E] font-medium">Stock</h1>
            </div>
            <div className="flex gap-3 items-center py-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M8.75002 1.16667V7.00001C8.75002 7.64167 8.22502 8.16667 7.58335 8.16667H1.16669V3.50001C1.16669 2.21084 2.21085 1.16667 3.50002 1.16667H8.75002Z"
                  stroke="#98949E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.8334 8.16667V9.91667C12.8334 10.885 12.0517 11.6667 11.0834 11.6667H10.5C10.5 11.025 9.97502 10.5 9.33335 10.5C8.69169 10.5 8.16669 11.025 8.16669 11.6667H5.83335C5.83335 11.025 5.30835 10.5 4.66669 10.5C4.02502 10.5 3.50002 11.025 3.50002 11.6667H2.91669C1.94835 11.6667 1.16669 10.885 1.16669 9.91667V8.16667H7.58335C8.22502 8.16667 8.75002 7.64167 8.75002 7V2.91667H9.82335C10.2434 2.91667 10.6283 3.14418 10.8383 3.50584L11.8359 5.25001H11.0834C10.7625 5.25001 10.5 5.5125 10.5 5.83334V7.58334C10.5 7.90417 10.7625 8.16667 11.0834 8.16667H12.8334Z"
                  stroke="#98949E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.66667 12.8333C5.311 12.8333 5.83333 12.311 5.83333 11.6667C5.83333 11.0223 5.311 10.5 4.66667 10.5C4.02233 10.5 3.5 11.0223 3.5 11.6667C3.5 12.311 4.02233 12.8333 4.66667 12.8333Z"
                  stroke="#98949E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.33335 12.8333C9.97769 12.8333 10.5 12.311 10.5 11.6667C10.5 11.0223 9.97769 10.5 9.33335 10.5C8.68902 10.5 8.16669 11.0223 8.16669 11.6667C8.16669 12.311 8.68902 12.8333 9.33335 12.8333Z"
                  stroke="#98949E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.8333 7V8.16667H11.0833C10.7625 8.16667 10.5 7.90417 10.5 7.58333V5.83333C10.5 5.5125 10.7625 5.25 11.0833 5.25H11.8358L12.8333 7Z"
                  stroke="#98949E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h1 className="text-sm text-[#98949E] font-medium">Supply</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col border-t-2 gap-6  p-6">
        <div className="flex items-center gap-3">
          <img src={ProfileImg} alt="profile" />
          <div className="flex flex-col items-start">
            <h1 className="text-sm font-bold">Savannah N</h1>
            <h2 className="text-sm text-[#98949E] text-[10px]">
              Food Quality Manager
            </h2>
          </div>
        </div>
        <button className="flex gap-2 items-end px-11 py-[9px] bg-[#FEF5F6] hover: rounded-md">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M6 4.79998V11.1933C6 13.3333 7.33333 14.6666 9.46667 14.6666H11.1933C13.3267 14.6666 14.66 13.3333 14.66 11.2V4.79998C14.6667 2.66665 13.3333 1.33331 11.2 1.33331H9.46667C7.33333 1.33331 6 2.66665 6 4.79998Z"
              fill="#8F0A13"
            />
            <path
              d="M3.71336 5.41331L1.48002 7.64664C1.28669 7.83997 1.28669 8.15997 1.48002 8.35331L3.71336 10.5866C3.90669 10.78 4.22669 10.78 4.42002 10.5866C4.61336 10.3933 4.61336 10.0733 4.42002 9.87997L3.04002 8.49997H10.1667C10.44 8.49997 10.6667 8.27331 10.6667 7.99997C10.6667 7.72664 10.44 7.49997 10.1667 7.49997H3.04002L4.42002 6.11997C4.52002 6.01997 4.56669 5.89331 4.56669 5.76664C4.56669 5.63997 4.52002 5.50664 4.42002 5.41331C4.22669 5.21331 3.91336 5.21331 3.71336 5.41331Z"
              fill="#8F0A13"
            />
          </svg>
          <h1 className="text-[#8F0A13] text-sm">Logout</h1>
        </button>
      </div>
    </div>
  );
}
