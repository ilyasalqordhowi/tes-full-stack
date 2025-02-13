export default function CustomerHeaderRight() {
  return (
    <div className="h-screen">
      <div className="w-full flex flex-col gap-4 max-w-xs ">
        <div className="relative">
          <div className=" rounded-xl bg-[#5D5FEF] py-6 px-4">
            <svg
              width="191"
              height="81"
              viewBox="0 0 191 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0"
            >
              <path
                opacity="0.4"
                d="M-24.1467 79.9128L-21.6107 77.204C-19.0747 74.4952 -14.0027 69.0777 -6.50458 70.3258C0.993545 71.5739 10.9178 79.4877 17.6594 78.6575C24.4011 77.8272 27.9602 68.2529 34.1829 65.9969C40.4056 63.741 49.292 68.8032 52.173 57.3659C55.054 45.9286 51.9296 17.9916 54.7727 6.45009C57.6158 -5.09139 66.4263 -0.237373 72.6455 -2.50318C78.8647 -4.76899 82.4924 -14.1546 85.9537 -23.9975C89.4151 -33.8403 92.71 -44.1403 101.458 -39.4593C110.205 -34.7783 124.405 -15.1162 134.876 -5.70024C145.347 3.71568 152.089 2.88542 153.555 -12.4407C155.02 -27.7669 151.21 -57.5889 156.731 -61.7728C162.252 -65.9567 177.104 -44.5025 184.16 -44.4696C191.216 -44.4367 190.475 -65.8252 190.105 -76.5194L189.734 -87.2136"
                stroke="#A5A6F6"
              />
            </svg>
            <div className="flex flex-col items-start gap-20">
              <h1 className="text-3xl w-[190px] text-white font-semibold leading-tight">
                See analytics of the Customer Clearly
              </h1>
              <button className="bg-white/20 py-3 px-6 rounded-lg shadow-md text-white hover:bg-white/30 transition">
                See Analytics
              </button>
            </div>
          </div>
          <div className="absolute bottom-40 right-1 flex  justify-end">
            <svg
              width="143"
              height="159"
              viewBox="0 0 143 159"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute"
            >
              <circle
                cx="161.5"
                cy="161.5"
                r="161"
                fill="#5D5FEF"
                stroke="#A5A6F6"
              />
            </svg>
            <svg
              width="101"
              height="129"
              viewBox="0 0 101 129"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-40"
            >
              <circle
                cx="161.5"
                cy="161.5"
                r="161"
                fill="#7879F1"
                stroke="white"
              />
            </svg>
            <svg
              width="59"
              height="99"
              viewBox="0 0 59 99"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-40"
            >
              <circle
                cx="161.5"
                cy="161.5"
                r="161"
                fill="#A5A6F6"
                stroke="#F2F2F2"
              />
            </svg>
          </div>
        </div>
        <div className="bg-[#FAFAFA] flex flex-col">
          <div className="flex flex-col gap-3 px-4 py-4">
            <div className="text-2xl">
              <h1 className="font-medium">Top Menu</h1>
              <h2 className="font-semibold text-[#F17300]">This Week</h2>
            </div>
            <div className="flex gap-1 text-[rgb(152,148,158)] text-xs">
              <h1>10 - 12</h1>
              <h2>Agustus 2023</h2>
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative bg-white p-[10px]">
                <h1 className="w-[175px] text-base font-medium">
                  Nasi Goreng Jamur Special Resto Pak Min
                </h1>
                <h2 className="absolute -top-3 right-1 shadow-black shadow-md bg-[#F17300] px-3 text-white rotate-12 py-1">
                  1
                </h2>
              </div>
              <div className="flex gap-1 p-[10px] text-[#98949E] text-sm font-medium">
                <h1>2.</h1>
                <h2>Tongseng Sapi Gurih</h2>
              </div>
              <div className="flex gap-1 p-[10px] text-[#98949E] text-sm font-medium">
                <h1>3.</h1>
                <h2>Nasi Gudeg Telur Ceker</h2>
              </div>
              <div className="flex gap-1 p-[10px] text-[#98949E] text-sm font-medium">
                <h1>4.</h1>
                <h2>Nasi Ayam serundeng</h2>
              </div>
              <div className="flex gap-1 p-[10px] text-[#98949E] text-sm font-medium">
                <h1>5.</h1>
                <h2>Nasi Goreng Seafood</h2>
              </div>
            </div>
          </div>
          <svg
            width="300"
            height="328"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-2.94362 150.026L-5.91148 152.676L-5.91148 229.709L233.741 229.709L233.741 1.00004L232.249 13.6106C230.757 26.2211 227.772 51.4421 220.83 49.9454C213.887 48.4487 202.985 20.2343 196.822 23.997C190.658 27.7597 189.232 63.4994 185.127 81.1592C181.023 98.819 174.239 98.3989 165.562 85.1992C156.885 71.9995 146.315 46.0203 138.513 38.7263C130.712 31.4322 125.678 42.8232 120.56 53.644C115.442 64.4647 110.24 74.7153 103.722 76.0856C97.2035 77.4559 89.3697 69.9461 84.5656 82.8855C79.7616 95.8249 77.9873 129.214 73.164 142.023C68.3407 154.833 60.4684 147.063 53.9485 148.421C47.4285 149.779 42.2609 160.265 35.4775 159.845C28.6941 159.425 20.2949 148.098 13.1274 145.086C5.95994 142.074 0.0242315 147.375 -2.94362 150.026Z"
              fill="url(#paint0_linear_1_565)"
              stroke="#F17300"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_565"
                x1="97"
                y1="-309.5"
                x2="97"
                y2="180"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F17300" />
                <stop offset="1" stop-color="#F17300" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
