import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Home from "./component/Home";
// import About from "./component/About";
// import HistorySample from "./component/HistorySample";
// import Profile from "./component/Profile";
// import Profiles from "./component/Profiles";

const App = () => {
  // const Home = React.lazy(() => import("./component/Home"));
  const About = React.lazy(() => import("./component/About"));
  const Profile = React.lazy(() => import("./component/Profile"));
  const Profiles = React.lazy(() => import("./component/Profiles"));
  const HistorySample = React.lazy(() => import("./component/HistorySample"));

  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">히스토리 예제</Link>
        </li>
      </ul>
      <hr />
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles" element={<Profiles />}>
            <Route path="/profiles" element={<div>유저를 선택해주세요.</div>} />
            <Route path="/profiles/:username" element={<Profile />} />
          </Route>
          <Route path="history" element={<HistorySample />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
