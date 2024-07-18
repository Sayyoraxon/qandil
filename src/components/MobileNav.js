import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import close from "../pages/images/closeIcon.svg"
import "./style.css"

const MobileNav = ({ display, setDisplay, catalog }) => {
    return (
        <div className="mobile" style={{ display: display }}>
            <img src={close} alt="close" onClick={() => setDisplay("none")} />
            <div className="mobnavDiv">
                {catalog !== "" &&
                    <NavLink to="catalog"  className="mobnav"
                        onClick={() => setDisplay("none")}>
                        {catalog}
                    </NavLink>
                }
                <NavLink  className="mobnav"
                    onClick={() => setDisplay("none")}>
                    Услуги
                </NavLink>
                <NavLink to="contacts"  className="mobnav"
                    onClick={() => setDisplay("none")}>
                    Контакты
                </NavLink>
            </div>

            <p>
                +998 90 000 00 00
            </p>
            <div>
                <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#2A1055", fontSize: "18px" }} />
                <FontAwesomeIcon icon={faTwitter} style={{ color: "#2A1055", fontSize: "18px" }} />
                <FontAwesomeIcon icon={faSquareFacebook} style={{ color: "#2A1055", fontSize: "20px" }} />
                <FontAwesomeIcon icon={faInstagram} style={{ color: "#2A1055", fontSize: "20px" }} />
            </div>

        </div>
    )
}

export default MobileNav