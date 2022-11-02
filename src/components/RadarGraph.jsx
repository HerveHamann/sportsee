import React from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";
import Loader from "./Loader";
import propTypes from "prop-types";

/**
 *  RadarGraph component
 * @param {Object} userPerformance
 * @returns {JSX}
 */

const RadarGraph = ({ userPerformance }) => {
  /**
   * TitleChange transforme numbers in english titles
   * @param {String} item
   * @returns string
   */
  const TitleChange = (item) => userPerformance.kind[item];
  const InFrench = {
    cardio: "Cardio",
    energy: "Energie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };

  /**
   * TitleFrench transform english titles in french
   * @param {String} item
   * @returns string
   */

  const TitleFrench = (item) => InFrench[TitleChange(item)];

  if (userPerformance.data.length === 0) {
    return <Loader />;
  }
  return (
    <div className="radar-graph">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} data={userPerformance.data} startAngle={-150} endAngle={+210}>
          <PolarGrid radialLines={false} polarRadius={[11.12, 22.25, 45, 67.5, 90]} stroke="#ffffff" />
          <PolarAngleAxis dataKey="kind" stroke="#ffffff" tickLine={false} fontSize={12} tickFormatter={TitleFrench} />
          <Radar dataKey="value" stroke="#ff0000" fill="#ff0000" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
RadarGraph.propTypes = {
  userPerformance: propTypes.object.isRequired,
};
export default RadarGraph;
