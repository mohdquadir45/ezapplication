import React from "react";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        {/* <div className='sidebar__image'> */}
        <img
          className="image"
          src="https://media.licdn.com/dms/image/C560BAQGM74Ib1l-ubw/company-logo_100_100/0/1626978272204?e=1681344000&v=beta&t=T9qFxcbx2PzQOleGtITzJi956udvyCXRXesBdkw7lj4"
          alt=""
        />
        {/*  </div> */}
      </div>
      <div className="box__container">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
};

export default Sidebar;
