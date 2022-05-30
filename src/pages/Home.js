import React from "react";
import Chart from "react-apexcharts";
export default function Home() {
  return (
    <div className="container">
      <div className="row mt-5 ">
        <div className="col m-3   bg-warning  bordered-fill">
          <div className="container p-5">
            {" "}
            <Chart
              type="bar"
              width={"100%"}
              height={"500"}
              series={[
                {
                  name: "Süslü",
                  data: [1000, 1150, 1400, 1550, 1600, 1750, 1800],
                },
              ]}
              options={{
                title: { text: "Süslü", style: { fontSize: 30 } },
                colors: ["#FF4069"],
                xaxis: {
                  categories: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                  ],
                  title: {
                    text: "Süslü Product",
                    // style:{color:"black"} şeklinde eklenebilir Fontsize
                  },
                },
              }}
            ></Chart>
          </div>
        </div>
      </div>
    </div>
  );
}
