import React, { useState } from "react";
import LandingPage from "../../views/landingpage";
import { Footer } from "./footer/index";
import Header from "./header";

const Layout = () => {
  const [subscribed, setSubscribed] = useState(true);
  const [updateUserPlans, setUpdateUserPlans] = useState(false);

  return (
    <div>
      <Header subscribed={subscribed} setUpdateUserPlans={setUpdateUserPlans} />
      <LandingPage
        setSubscribed={setSubscribed}
        updateUserPlans={updateUserPlans}
        setUpdateUserPlans={setUpdateUserPlans}
      />
      <Footer />
    </div>
  );
};

export default Layout;
