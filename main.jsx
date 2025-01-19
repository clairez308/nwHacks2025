import React from "react";
import { Logo } from "../../components/Logo";
import { StatusBar } from "../../components/StatusBar";
import "./style.css";

export const ElementStartPage = () => {
  return (
    <div className="element-start-page">
      <div className="div-2">
        <StatusBar
          batteryClassName="status-bar-2"
          cap="https://c.animaapp.com/B2x79vbV/img/cap-1.svg"
          capClassName="status-bar-5"
          capacityClassName="status-bar-4"
          cellularConnection="https://c.animaapp.com/B2x79vbV/img/cellular-connection-1.svg"
          cellularConnectionClassName="status-bar-7"
          className="status-bar-instance"
          overlapGroupClassName="status-bar-3"
          statusBarClassName="design-component-instance-node"
          timeClassName="status-bar-9"
          timeStyleClassName="status-bar-8"
          wifi="https://c.animaapp.com/B2x79vbV/img/wifi-1.svg"
          wifiClassName="status-bar-6"
        />
        <div className="nav-bar">
          <div className="indicator" />
        </div>

        <div className="frame">
          <div className="text-wrapper-2">Get started</div>
        </div>

        <Logo
          className="logo-instance"
          img="https://c.animaapp.com/B2x79vbV/img/line-2-4.svg"
          line="https://c.animaapp.com/B2x79vbV/img/line-1-6.svg"
          line1="https://c.animaapp.com/B2x79vbV/img/line-1-6.svg"
          line2="https://c.animaapp.com/B2x79vbV/img/line-2-4.svg"
          line3="https://c.animaapp.com/B2x79vbV/img/line-1-8.svg"
          line4="https://c.animaapp.com/B2x79vbV/img/line-2-5.svg"
          rectangle="https://c.animaapp.com/B2x79vbV/img/rectangle-14-4.svg"
          rectangle1="https://c.animaapp.com/B2x79vbV/img/rectangle-3109-2.svg"
          rectangle2="https://c.animaapp.com/B2x79vbV/img/rectangle-14-5.svg"
          rectangle3="https://c.animaapp.com/B2x79vbV/img/rectangle-3109-3.svg"
        />
      </div>
    </div>
  );
};
