import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Delicious food made to satisfy your tummy, save your time, and fit
          your budget — bringing fresh flavors, quick service, and happy moments
          to every meal you enjoy with family and friends.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
