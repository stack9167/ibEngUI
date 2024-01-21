import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./Components/Header/Header";
import Loading from "./utils/Loading/Loading";
import Footer from "./Components/Footer/Footer";

import style from "./index.module.scss";
import AdminLogin from "./AdminPages/AdminLogin/AdminLogin";

const Home = React.lazy(() => import("./Pages/Home/Home"));
// const WhoWeAre = React.lazy(() => import("./Pages/WhoWeAre/WhoWeAre"));
const WhatWeDo = React.lazy(() => import("./Pages/WhatWeDo/WhatWeDo"));
const Protfolio = React.lazy(() => import("./Pages/Portfolio/Protfolio"));
const WhatOurClientSay = React.lazy(() =>
  import("./Pages/WhatOurClientSay/WhatOurClientSay")
);
const ContactUs = React.lazy(() => import("./Pages/ContactUs/ContactUs"));
const MissionAndVision = React.lazy(() =>
  import("./Pages/MissionAndVision/MissionAndVision")
);
const TheMindBehind = React.lazy(() =>
  import("./Pages/TheMindBehind/TheMindBehind")
);
const Team = React.lazy(() => import("./Pages/Team/Team"));
// admin Imports

const AdminAddProduct = React.lazy(() =>
  import("./AdminPages/AdminAddProduct/AdminAddProduct")
);

function App() {
  const { pathname } = useLocation();

  return (
    <div className={style.pageStyle}>
      {!pathname.includes("Login") && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        {/* <Route
          path="/whoWeAre"
          element={
            <Suspense fallback={<Loading />}>
              <WhoWeAre />
            </Suspense>
          }
        /> */}
        <Route
          path="/whatWeDO"
          element={
            <Suspense fallback={<Loading />}>
              <WhatWeDo />
            </Suspense>
          }
        />
        <Route
          path="/protfolio"
          element={
            <Suspense fallback={<Loading />}>
              <Protfolio />
            </Suspense>
          }
        />
        <Route
          path="/whatOurClientsSay"
          element={
            <Suspense fallback={<Loading />}>
              <WhatOurClientSay />
            </Suspense>
          }
        />
        <Route
          path="/getInTouch"
          element={
            <Suspense fallback={<Loading />}>
              <ContactUs />
            </Suspense>
          }
        />
        <Route
          path="/missionAndVision"
          element={
            <Suspense fallback={<Loading />}>
              <MissionAndVision />
            </Suspense>
          }
        />
        <Route
          path="/theMindBehind"
          element={
            <Suspense fallback={<Loading />}>
              <TheMindBehind />
            </Suspense>
          }
        />
        <Route
          path="/team"
          element={
            <Suspense fallback={<Loading />}>
              <Team />
            </Suspense>
          }
        />
        <Route
          path="/adminLogin"
          element={
            <Suspense fallback={<Loading />}>
              <AdminLogin />
            </Suspense>
          }
        />
        {/* Admin Routes */}

        <Route
          path="/admin/addProduct"
          element={
            <Suspense fallback={<Loading />}>
              <AdminAddProduct />
            </Suspense>
          }
        />
      </Routes>
      {!pathname.includes("admin") && <Footer />}
    </div>
  );
}

export default App;
