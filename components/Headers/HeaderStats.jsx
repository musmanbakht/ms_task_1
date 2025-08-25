import React from "react";

// components

// import CardStats from "../components/Cards/CardStats.jsx";
import CardStats from "../Cards/CardStats.jsx";
const defaultProps = {
  count: "loading...",
  leadingSchool: "loading...",
};
export default function HeaderStats({
  facultyCount,
  departmentCount,
  publicationCount,
  leadingSchool,
}) {
  return (
    <>
      {/* Header */}
      <div className="relative md:pt-28 pb-10 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full  mt-12">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Faculty"
                  statTitle={"FEBE" || defaultProps.count}
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fa-thin fa-building"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Schools"
                  statTitle={departmentCount || defaultProps.count}
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Publications"
                  statTitle={publicationCount || defaultProps.count}
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  // statIconName="fas fa-users"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Leading School"
                  statTitle={leadingSchool || defaultProps.leadingSchool}
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
