import React from "react";
import { AnotherStepLogin } from "../../components/AnotherStepLogin";
import { StatusBar } from "../../components/StatusBar";
import { EyeOff } from "../../icons/EyeOff";
import "./login.css";

export const ElementLogin = () => {
  return (
    <div className="element-login">
      <div className="div-2">
        <StatusBar
          batteryClassName="status-bar-2"
          cap="https://c.animaapp.com/QBsnKpca/img/cap-1.svg"
          capClassName="status-bar-5"
          capacityClassName="status-bar-4"
          cellularConnection="https://c.animaapp.com/QBsnKpca/img/cellular-connection-1.svg"
          cellularConnectionClassName="status-bar-7"
          className="status-bar-instance"
          overlapGroupClassName="status-bar-3"
          statusBarClassName="design-component-instance-node"
          timeClassName="status-bar-9"
          timeStyleClassName="status-bar-8"
          wifi="https://c.animaapp.com/QBsnKpca/img/wifi-1.svg"
          wifiClassName="status-bar-6"
        />
        <div className="overlap">
          <div className="nav-bar">
            <div className="indicator" />
          </div>

          <div className="content">
            <div className="field">
              <div className="headline">
                <div className="text-wrapper">MedEcho</div>

                <div className="text">
                  <div className="text-wrapper-2">Sign in</div>
                </div>
              </div>

              <div className="div-3">
                <div className="div-4">
                  <div className="input-field">
                    <div className="title">
                      <div className="text-wrapper-3">Email</div>
                    </div>

                    <div className="input-area">
                      <div className="frame">
                        <div className="yourname-gmail-com">user@gmail.com</div>
                      </div>
                    </div>
                  </div>

                  <div className="input-field">
                    <div className="title">
                      <div className="text-wrapper-3">Password</div>
                    </div>

                    <div className="input-area">
                      <div className="frame">
                        <div className="yourname-gmail-com">*******</div>
                      </div>

                      <EyeOff className="eye-off" />
                    </div>
                  </div>

                  <div className="text-wrapper-4">Forgot Password ?</div>
                </div>

                <div className="div-3">
                  <img
                    className="button"
                    alt="Button"
                    src="https://c.animaapp.com/QBsnKpca/img/button.svg"
                  />

                  <div className="div-4">
                    <div className="or">
                      <img
                        className="line"
                        alt="Line"
                        src="https://c.animaapp.com/QBsnKpca/img/line-2.svg"
                      />

                      <div className="text-wrapper-5">Or</div>

                      <img
                        className="line"
                        alt="Line"
                        src="https://c.animaapp.com/QBsnKpca/img/line-3.svg"
                      />
                    </div>

                    <div className="button-2">
                      <AnotherStepLogin
                        className="another-step-login-instance"
                        darkMode="off"
                        loginWith="google"
                        text="Continue with Google"
                      />
                      <AnotherStepLogin
                        className="another-step-login-instance"
                        darkMode="off"
                        elementFacebookIcon="https://c.animaapp.com/QBsnKpca/img/2021-facebook-icon-1-1.svg"
                        loginWith="facebook"
                        text1="Continue with Facebook"
                      />
                    </div>

                    <div className="or">
                      <img
                        className="line"
                        alt="Line"
                        src="https://c.animaapp.com/QBsnKpca/img/line-2.svg"
                      />

                      <div className="text-wrapper-5">Or</div>

                      <img
                        className="line"
                        alt="Line"
                        src="https://c.animaapp.com/QBsnKpca/img/line-3.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img
              className="img"
              alt="Button"
              src="https://c.animaapp.com/QBsnKpca/img/button-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
