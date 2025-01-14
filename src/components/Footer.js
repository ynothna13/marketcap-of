import React from "react";
//route for Donation page
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
//components
import BuyCoinButton from "../components/BuyCoinButton";
import iconHand from "../img/hand.svg";
//pages
import Donation from "../pages/Donation";
import "../styles/Footer.css";
//icons
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = ({
  selectACoin,
  setNr,
  nr,
  keyPress,
  setKeyPress,
  mouseMove,
  setMouseMove,
  donateCoins,
  selectDonationCoin,
  setSelectDonationCoin,
}) => {
  return (
    <Router>
      <footer className="footer">
        <hr />
        <div className="social-icon-row">
          <ul className="social-icons">
            <li>
              <a
                className="btn btn-twitter"
                href="https://twitter.com/MarketCapOf"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className="fa twitter" icon={faTwitter} />
              </a>
            </li>
            <li>
              <BuyCoinButton selectACoin={selectACoin} />
            </li>

            <li>
              {/* Button to Donation page */}
              <Link to="/donation" className="link">
                <button className="btn btn-hand">
                  {
                    //only write out image if coins exists
                    Object.keys(donateCoins).length ? (
                      <img
                        className="coin-over-hand opacity"
                        src={
                          // Bitcoin is set to default as supported coin
                          donateCoins.includes(selectACoin)
                            ? selectACoin.image
                            : donateCoins[0].image
                        }
                        alt="coin"
                      />
                    ) : (
                      ""
                    )
                  }
                  <img
                    className={
                      //only animate donate hand if coins exists
                      Object.keys(donateCoins).length
                        ? "fa icon-hand hand-anim"
                        : "fa icon-hand"
                    }
                    src={iconHand}
                    alt="hand"
                  />
                  <p className="donate-text">Donate</p>
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-row">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} With Market Cap. All Rights Reserved.
          </p>
        </div>
      </footer>
      <Switch>
        <Route exact path="/donation">
          <Donation
            selectNr={nr}
            setSelectNr={setNr}
            keyPress={keyPress}
            setKeyPress={setKeyPress}
            mouseMove={mouseMove}
            setMouseMove={setMouseMove}
            selectACoin={selectACoin}
            donateCoins={donateCoins}
            selectDonationCoin={selectDonationCoin}
            setSelectDonationCoin={setSelectDonationCoin}
          />
        </Route>
      </Switch>
    </Router>
  );
};
export default Footer;
