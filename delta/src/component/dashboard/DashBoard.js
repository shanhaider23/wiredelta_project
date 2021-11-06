import React from "react";
import "./dashboard.css";
import Ham from "../../image/hamburger.png";
import Bell from "../../image/bell.png";
import Mail from "../../image/mail.png";
import Black from "../../image/blackm.png";
import User from "../../image/user.png";
import { useState, useEffect } from "react";
import axios from "axios";

function DashBoard() {
  const [items, setItems] = useState([
    {
      name: "",
      type: "",
      service: "",
      location: "",
      job: "",
      _id: "",
    },
  ]);
  useEffect(() => {
    fetch("http://localhost:8000/items")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setItems(jsonRes))
      .catch((err) => console.log(err));
  }, [items]);

  function deleteItem(id) {
    axios.delete("/delete/" + id);
    alert("item deleted");
  }
  return (
    <div className="dashboard-container">
      <div className="dashboard-navbar">
        <button type="button" className="nav-btn">
          <img
            src={Ham}
            className="ham-icon"
            alt="Menu"
            width="25"
            height="20"
          ></img>
        </button>
        <div className="dashboard-form-title">
          <h1 className="nav-title">NJORD</h1>
        </div>
        <div className="navbar-right">
          <img src={Bell} className="bell-icon" alt="Menu"></img>
          <div className="mail-icon">
            <img src={Mail} alt="Menu"></img>
          </div>
          <img src={User} className="user-icon" alt="Menu"></img>
          <h1 className="user-title">User</h1>
        </div>
      </div>
      <div className="dashboard-sidebar">
        <div className="dashboard-sidebar-1">
          <h3 className="dashboard-sidebar-text1 text">Dashboard</h3>
        </div>
        <div className="dashboard-sidebar-2">
          <h3 className="dashboard-sidebar-text2 text">Jobs Ads</h3>
        </div>
        <div className="dashboard-sidebar-3">
          <h3 className="dashboard-sidebar-text3 text">Proposals</h3>
        </div>
        <div className="dashboard-sidebar-4 ">
          <h3 className="dashboard-sidebar-text4 text">Reviews</h3>
        </div>
      </div>
      <div className="dashboard-main">
        <div className="dashboard-container-heading">
          <h1 className="main-title">Proposals</h1>
        </div>
        <div className="dashboard-container-dropdown">
          <div className="dashboard-container-dropdown-1">
            <p className="dashboard-dropdown-1">Boat Type</p>
          </div>
          <div className="dashboard-container-dropdown-2">
            <p className="dashboard-dropdown-1">Service Type</p>
          </div>
          <div className="dashboard-container-dropdown-3">
            <p className="dashboard-dropdown-2">Boat Location</p>
          </div>
          <div className="dashboard-container-dropdown-4">
            <p className="dashboard-dropdown-1">Job Type</p>
          </div>
          <div className="dashboard-container-dropdown-5">
            <p className="dashboard-dropdown-3">Apply</p>
          </div>
        </div>
        <div className="dashboard-container-table">
          <table className="dashboard-table">
            <thead>
              <tr className="dashboard-row">
                <th>Pending</th>
                <th>Accepted</th>
                <th>Completed</th>
                <th>Declined</th>
                <th>Cancelled</th>
              </tr>
            </thead>
          </table>
          <table className="dashboard-table-2">
            <tbody>
              <tr className="tbody-row">
                <td>User Name</td>
                <td>Boat Type</td>
                <td>Service</td>
                <td>Boat Location</td>
                <td>Job Type</td>
                <td></td>
              </tr>

              {items.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.service}</td>
                  <td>{item.location}</td>
                  <td>{item.job}</td>
                  <td>
                    <img src={Black} alt="Menu"></img>
                  </td>
                  <td>
                    <button class="btn-item">Cancel Proposal</button>
                  </td>
                </tr>
              ))}
              {items.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.service}</td>
                  <td>{item.location}</td>
                  <td className="job-type">{item.job}</td>
                  <td>
                    <img src={Black} alt="Menu"></img>
                  </td>
                  <td>
                    <button
                      class="btn-item"
                      onClick={() => deleteItem(item._id)}
                    >
                      Cancel Proposal
                    </button>
                  </td>
                </tr>
              ))}
              {items.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.service}</td>
                  <td>{item.location}</td>
                  <td className="job-type1">{item.job}</td>
                  <td>
                    <img src={Black} alt="Menu"></img>
                  </td>
                  <td>
                    <button
                      class="btn-item"
                      onClick={() => deleteItem(item._id)}
                    >
                      Cancel Proposal
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
