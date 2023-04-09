import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="container">
        <ul className="sidebar">
          <li>
            <span>Ticket Shop</span>
          </li>
          <li>
            <span>
              <i className="fa fa-home"></i>
            </span>
            <span>Home</span>
          </li>
          <li>
            <span>
              <i className="fa fa-dashboard"></i>
            </span>
            <span>Ticketing with journey plan</span>
          </li>
          <li>
            <span>
              <i className="fa fa-users"></i>
            </span>
            <span>Departures</span>
          </li>
          <li>
            <span>
              <i className="fa fa-shopping-cart"></i>
            </span>
            <span>Direct ticket purchase</span>
          </li>
          <li>
            <span>
              <i className="fa fa-bookmark"></i>
            </span>
            <span>DeutschlandTicket</span>
          </li>
          <li>
            <span>
              <i className="fa fa-gear"></i>
            </span>
            <span>VRR Tickets</span>
          </li>
          <li>
            <span>
              <i className="fa fa-gear"></i>
            </span>
            <span>NRW Tickets</span>
          </li>
        </ul>

        <div className="content"></div>
      </div>
    </>
  );
};

export default Sidebar;
