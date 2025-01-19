import React from "react";
import { Component } from "../../components/Component";
import { Medications } from "../../components/Medications";
import { StatusBar } from "../../components/StatusBar";
import { IconlyBulkHome2 } from "../../icons/IconlyBulkHome2";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="div-2">
        <div className="headers">
          <div className="text-wrapper-4">Welcome Back!</div>

          <p className="p">See logged medications or add something new</p>
        </div>

        <StatusBar
          batteryClassName="status-bar-2"
          cap="https://c.animaapp.com/YJRSYqnG/img/cap-1.svg"
          capClassName="status-bar-5"
          capacityClassName="status-bar-4"
          cellularConnection="https://c.animaapp.com/YJRSYqnG/img/cellular-connection-1.svg"
          cellularConnectionClassName="status-bar-7"
          className="status-bar-instance"
          overlapGroupClassName="status-bar-3"
          statusBarClassName="design-component-instance-node"
          timeClassName="status-bar-9"
          timeStyleClassName="status-bar-8"
          wifi="https://c.animaapp.com/YJRSYqnG/img/wifi-1.svg"
          wifiClassName="status-bar-6"
        />
        <div className="overlap">
          <div className="nav-bar">
            <div className="overlap-2">
              <div className="menu">
                <div className="frame">
                  <IconlyBulkHome2 className="iconly-bulk-home" />
                  <img
                    className="ellipse"
                    alt="Ellipse"
                    src="https://c.animaapp.com/YJRSYqnG/img/ellipse-894-1.svg"
                  />
                </div>
              </div>

              <div className="indicator" />
            </div>
          </div>

          <div className="ellipse-2" />

          <div className="text-wrapper-5">+</div>
        </div>

        <Component className="component-1" />
        <div className="frame-2">
          <Medications className="medications-instance" />
          <Medications className="medications-instance" />
          <Medications className="medications-instance" />
        </div>
      </div>
    </div>
  );
};
