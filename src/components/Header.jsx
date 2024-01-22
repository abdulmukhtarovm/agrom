import { faFacebook, faInstagram, faTelegram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getText } from "../locales";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="shadow"></div>
        <div className="container z-1 h-lg-100 ">
          <div className="row justify-content-center h-lg-100 align-items-lg-center">
            <div className="col-lg-4">
              <div className="title">
                <h1>Agro Processing Group & Agro Feed</h1>
              </div>
              <div className="myBtn d-block d-md-none text-center">
                  <Link to="/produkciya">{getText("more")} <FontAwesomeIcon icon={faChevronRight}/></Link>
                </div>
            </div>
            <div className="col-1 d-lg-block d-none"></div>
            <div className="col-lg-5 d-md-block d-none">
              <div className="info">
                <p>
                 {getText("headerDesc")}
                </p>
                <div className="myBtn">
                  <Link to="/produkciya">{getText("more")} <FontAwesomeIcon icon={faChevronRight}/></Link>
                </div>
              </div>
            </div>
            <div className="mypos">
              <div className="contact">
                <ul className="social d-flex">
                <li><a href="/"><FontAwesomeIcon icon={faFacebook}/></a></li>
                <li><a href="/"><FontAwesomeIcon icon={faTelegram}/></a></li>
                <li><a href="/"><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li><a href="/"><FontAwesomeIcon icon={faYoutube}/></a></li>
                </ul>
                <div className="addres d-md-flex d-none">
                  <i><FontAwesomeIcon icon={faLocationDot}/></i>
                  <h6>{getText("address")}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
