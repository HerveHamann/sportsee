import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../DataContext";
import { useParams } from "react-router-dom";
import BarGraph from "../components/BarGraph";
import CircleGraph from "../components/CircleGraph";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import LineGraph from "../components/LineGraph";
import Loader from "../components/Loader";
import RadarGraph from "../components/RadarGraph";
import SideIcon from "../components/SideIcon";

/**
 * UserPage page
 * @returns {JSX}
 */
const UserPage = () => {
  const { id } = useParams();

  const dataSeekers = useContext(DataContext);
  const { getUserData, getUserActivity, getUserSessions, getUserPerformance } = dataSeekers;

  const [userData, setUserData] = useState([]);
  const [userActivity, setUserActivity] = useState({ data: [] });
  const [userSessions, setUserSessions] = useState({ data: [] });
  const [userPerformance, setUserPerformance] = useState({ data: [] });

  useEffect(() => {
    getUserData(id).then((response) => {
      setUserData(response);
    });
    getUserActivity(id).then((response) => {
      setUserActivity(response);
    });
    getUserSessions(id).then((response) => {
      setUserSessions(response);
    });
    getUserPerformance(id).then((response) => {
      setUserPerformance(response);
    });
  }, [id, getUserData, getUserActivity, getUserSessions, getUserPerformance]);

  if (userData.length === 0) {
    return <Loader />;
  }
  return (
    <div className="home">
      <Header />
      <div className="main-container">
        <Navbar />
        <div className="content-container">
          <div className="title-container">
            <h1>
              Bonjour <span>{userData.userInfos.firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
          </div>
          <div className="info-container">
            <div className="graf-container">
              <BarGraph userActivity={userActivity} />
              <div className="sub-container">
                <LineGraph userSessions={userSessions} />
                <RadarGraph userPerformance={userPerformance} />
                <CircleGraph userData={userData} />
              </div>
            </div>
            <div className="side-icon-container">
              <SideIcon type="Calories" amount={userData.keyData.calorieCount} />
              <SideIcon type="Proteines" amount={userData.keyData.proteinCount} />
              <SideIcon type="Glucides" amount={userData.keyData.carbohydrateCount} />
              <SideIcon type="Lipides" amount={userData.keyData.lipidCount} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserPage;
