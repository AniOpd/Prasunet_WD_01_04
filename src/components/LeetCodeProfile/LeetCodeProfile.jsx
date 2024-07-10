import React, { useEffect, useState } from "react";
import profile from "../../assets/profile.json";
import "./leetcodeprofile.css";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function LeetCodeProfile() {
  const lcu = profile.lcusername;
  const [lcData, setLcData] = useState("");
  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${lcu}`)
      .then((res) => res.json())
      .then((data) => {
        setLcData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const data = [
    { name: "Easy", value: lcData.easySolved, color: "#4caf50" },
    { name: "Medium", value: lcData.mediumSolved, color: "#ffc107" },
    { name: "Hard", value: lcData.hardSolved, color: "#f44336" },
  ];

  const COLORS = data.map((entry) => entry.color);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "center"}
        dominantBaseline="central"
      >
        {`${data[index].name}: ${(percent * 100).toFixed(2)}%`}
      </text>
    );
  };

  return (
    <>
      <div className="border-2 border-black p-5 w-full h-full bg-black">
      <div className="my-2 border-2 border-yellow-700 w=full bg-yellow-500">
          <h1 className="text-white text-3xl text-center uppercase">
                  LeetCode Profile
          </h1>
      </div>
      <div className="lcpf my-3 w-full flex items-center justify-evenly flex-wrap flex-col lg:flex-row border-2 border-yellow-400 bg-black">
        <div className="w-full lg:w-1/3  flex justify-center text-center">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={170}
              fill="#8884d8"
              dataKey="value"
              className="text-center content-center"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col justify-center">
          <div className="easy flex flex-col justify-center items-center btn bg-green-600 border-2 border-yellow-400 text-white m-3 md:mx-5 my-3">
            <h1>Easy</h1>
            <p>
              {lcData.easySolved}/{lcData.totalEasy}
            </p>
          </div>
          <div className="medium flex flex-col justify-center items-center btn bg-yellow-600 border-2 border-yellow-400 text-white m-3 md:mx-5 my-3">
            <h1>Medium</h1>
            <p>
              {lcData.mediumSolved}/{lcData.totalMedium}
            </p>
          </div>
          <div className="hard flex flex-col justify-center items-center btn bg-red-600 border-2 border-yellow-400 text-white m-3 md:mx-5 my-3">
            <h1>Hard</h1>
            <p>
              {lcData.hardSolved}/{lcData.totalHard}
            </p>
          </div>
          <div className="hard flex flex-col justify-center items-center btn bg-black border-2 border-yellow-400 text-white m-3 md:mx-5 my-3">
            <h1>Total</h1>
            <p>
              {lcData.totalSolved}/{lcData.totalQuestions}
            </p>
          </div>
        </div>
      </div>
      <div className="text-white flex justify-center content-center w-full mt-3">
      <a href={`https://leetcode.com/u/${lcu}/`} target="_blank" rel="noreferrer">
        <button className="p-4 bg-orange-500 rounded-3xl hover:bg-red-600 cursor-pointer">
          View Profile   
        </button>
        </a>
    </div>
      </div>
    </>
  );
}

export default LeetCodeProfile;
