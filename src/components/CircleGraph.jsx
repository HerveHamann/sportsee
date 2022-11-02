import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import propTypes from "prop-types";

/**
 * CircleGraph
 * @param {Oject} userData
 * @returns {JSX}
 */

const CircleGraph = ({ userData }) => {
  const data = [
    {
      uv: 100,
      display: "none",
    },
    {
      uv: userData.todayScore * 100 || userData.score * 100,
      fill: "#ff0000",
    },
  ];

  return (
    <div className="circle-graph">
      <p>Score</p>

      <div className="circlebackground">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart barSize={10} data={data} startAngle={210} endAngle={-150} innerRadius="0%" outerRadius="202%">
            <RadialBar
              minAngle={15}
              background={{ fill: "#fbfbfb" }}
              clockWise
              dataKey="uv"
              // cornerRadius={"50%"}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="legend">
          <div className="scorevalue">{userData.todayScore * 100 || userData.score * 100}%</div>
          <div className="scoretext">
            de votre <br /> objectif
          </div>
        </div>
      </div>
    </div>
  );
};
CircleGraph.propTypes = {
  userData: propTypes.object.isRequired,
};
export default CircleGraph;
