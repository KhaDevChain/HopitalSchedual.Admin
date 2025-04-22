import React from "react";

interface Country {
  name: string;
  flag: string;
  percentage: number;
};

const CountrySale: React.FC = () => {
    const countryData: Country[] = [
        { name: "United States", flag: "US", percentage: 38.61 },
        { name: "Brazil", flag: "BR", percentage: 32.79 },
        { name: "India", flag: "IN", percentage: 26.42 },
        { name: "United Kingdom", flag: "UK", percentage: 17.42 },
        { name: "Turkey", flag: "TR", percentage: 12.85 },
      ];

    return (
        <>
            <div className="relative flex">
              {/* Bản đồ nền */}
              <img
                src="https://svgsilh.com/svg/1706054.svg"
                alt="World Map"
                width="50%"
                className="opacity-30"
              />

              {/* Danh sách quốc gia */}
              <div className="relative ml-8" style={{width: "100%"}}>
                {countryData.map((country, index) => (
                  <div key={index} className="flex items-center hover:bg-gray-100 p-3 rounded-lg">
                    <div className="flex items-center" style={{width: "35px", height: "40px"}}>
                      <img src={"https://ecme-react.themenate.net/img/countries/" + country.flag + ".png"} alt="" />
                    </div>
                    <div className="ml-4" style={{width: "100%"}}>
                      <div className="text-start text-gray-700 text-sm font-medium">{country.name}</div>
                        <div className="text-start flex items-center">
                          <div className="flex-1 h-2 bg-gray-200 rounded-full relative">
                            <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${country.percentage}%` }}></div>
                          </div>
                          <span className="font-semibold text-sm ml-2">{country.percentage}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </>
    );
};

export default CountrySale;
