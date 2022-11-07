import { FC, ReactElement } from "react";
import { Routes as Router, Route } from "react-router-dom";

import HomeScreen from "./screens/home";

const Routes: FC = (): ReactElement => {
  return (
    <Router>
      <Route path="/" element={<HomeScreen />} />
    </Router>
  );
};

export default Routes;
