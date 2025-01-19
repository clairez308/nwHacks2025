import React from "react";
import { Component } from "../../components/Component";
import { StatusBar } from "../../components/StatusBar";
import { IconlyBulkHome } from "../../icons/IconlyBulkHome";
import "./photo.css";

export const Photo = () => {
  return (
    <div className="photo">
      <div className="div-2">
        <StatusBar
          batteryClassName="status-bar-2"
          cap="https://c.animaapp.com/FRdbvMNY/img/cap-1.svg"
          capClassName="status-bar-5"
          capacityClassName="status-bar-4"
          cellularConnection="https://c.animaapp.com/FRdbvMNY/img/cellular-connection-1.svg"
          cellularConnectionClassName="status-bar-7"
          className="status-bar-instance"
          overlapGroupClassName="status-bar-3"
          statusBarClassName="design-component-instance-node"
          timeClassName="status-bar-9"
          timeStyleClassName="status-bar-8"
          wifi="https://c.animaapp.com/FRdbvMNY/img/wifi-1.svg"
          wifiClassName="status-bar-6"
        />
        <div className="overlap">
          <div className="nav-bar">
            <div className="overlap-2">
              <div className="menu">
                <div className="frame">
                  <IconlyBulkHome className="iconly-bulk-home" />
                  <img
                    className="ellipse"
                    alt="Ellipse"
                    src="https://c.animaapp.com/FRdbvMNY/img/ellipse-894-1.svg"
                  />
                </div>
              </div>

              <div className="indicator" />
            </div>
          </div>

          <div className="ellipse-2" />
        </div>

        <div className="rectangle" />

        <Component
          className="component-1"
          profilePicture="https://c.animaapp.com/FRdbvMNY/img/profile-picture-1@2x.png"
        />
      </div>
    </div>
  );
};
