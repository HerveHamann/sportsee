import React from "react";
import { LineChart, ResponsiveContainer, XAxis, YAxis, Line, Tooltip, Legend } from "recharts";
import propTypes from "prop-types";

/**
 * LineGraph component
 * @param {Object} userSessions
 * @returns {JSX}
 */

const LineGraph = ({ userSessions }) => {
  const dayWeek = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };
  const DayChange = (item) => dayWeek[item];

  /**
   * CustomTooltip with session duration
   * @param {Boolean} active
   * @param {Array} payload
   * @returns {JSX}
   */

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{` ${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  /**
   * CustomLegend with graph title
   * @returns {JSX}
   */
  const CustomLegend = () => {
    return (
      <div>
        <p className="legend">Durée moyenne des sessions</p>
      </div>
    );
  };

  return (
    <div className="line-graph">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={userSessions.sessions} margin={{ top: 0, bottom: 12, left: 0, right: 0 }}>
          <YAxis hide={true} domain={[0, 130]} />
          <XAxis
            tickMargin={0}
            padding={{ left: 14, right: 12.5 }}
            dataKey="day"
            axisLine={false}
            tickLine={false}
            stroke="#ffffff"
            fillOpacity={0.5}
            fontSize={12}
            tickFormatter={DayChange}
          />

          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Legend verticalAlign="top" align="left" content={CustomLegend} />
          <Line
            activeDot={{
              fill: "#ffffff",
              r: 3.5,
              strokeWidth: 8,
              strokeOpacity: "0.3",
              fillOpacity: "1",
            }}
            strokeWidth={2}
            type="monotone"
            dataKey="sessionLength"
            stroke={"#ffffff"}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

LineGraph.propTypes = {
  userSessions: propTypes.object.isRequired,
  active: propTypes.bool,
  payload: propTypes.array,
};

export default LineGraph;
