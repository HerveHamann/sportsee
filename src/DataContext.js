import { createContext } from "react";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./MockedData.js";

export const DataContext = createContext();

/**
 * DataProvider
 * @module DataProvider
 * @param {JSX} children
 * @returns 4 fonctions
 */

export const DataProvider = ({ children }) => {
  /**
   * getUserData
   * @function getUserData
   * @param {number} id
   * @returns userDataMocked||userDataApi
   */

  async function getUserData(id) {
    let userDataMocked = USER_MAIN_DATA.find((item) => item.id === parseInt(id));

    return userDataMocked;
  }

  /**
   * getUserActivity
   * @function getUserActivity
   * @param {number} id
   * @returns userActivityMocked||userActivityApi
   */

  async function getUserActivity(id) {
    let userActivityMocked = USER_ACTIVITY.find((item) => item.userId === parseInt(id));

    return userActivityMocked;
  }

  /**
   * getUserSessions
   * @function getUserSessions
   * @param {number} id
   * @returns userSessionsMocked||userSessionsApi
   */

  async function getUserSessions(id) {
    let userSessionsMocked = USER_AVERAGE_SESSIONS.find((item) => item.userId === parseInt(id));

    return userSessionsMocked;
  }

  /**
   * getUserPerformance
   * @function getUserPerformance
   * @param {number} id
   * @returns userPerformanceMocked||userPerformanceApi
   */

  async function getUserPerformance(id) {
    let userPerformanceMocked = USER_PERFORMANCE.find((item) => item.userId === parseInt(id));

    return userPerformanceMocked;
  }

  return (
    <DataContext.Provider value={{ getUserData, getUserActivity, getUserSessions, getUserPerformance }}>
      {children}
    </DataContext.Provider>
  );
};
