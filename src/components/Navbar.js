import menuDark from "../pages/images/menuDark.svg"
import bars from "../pages/images/barsDark.svg"
import logoDark from "../pages//images/logoDark.svg"
import vector from "../pages/images/Vector.svg"
import logoMobile from "../pages/images/logoMobila.svg"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import "./style.css"

function Navbar() {

    const navigate = useNavigate()

    const naviget = () => {
        navigate("/", { replace: true })
    }
    return (
        <>
        <div className="catalogHeader">
            <div>
                <div>
                    <NavLink to="catalog" className="nav flexnav">
                        <img src={menuDark} alt="menuDark" />
                        Каталог продуктов
                    </NavLink>

                    <NavLink className="nav">
                        Услуги
                    </NavLink>
                    <NavLink to="contacts" className="nav">
                        Контакты
                    </NavLink>
                </div>
            </div>
            <div className="darklogo" onClick={naviget}>
                <img src={logoMobile} alt="logo"/>
            </div>
            <div className="none730">
                <p>
                    Приём звонков 24/7
                </p>
                <p>
                    +998 90 000 00 00
                </p>
            </div>
            <img src={bars} alt="bars" className="menuDark"/>
        </div>
        <Outlet/>
        </>
    )
}

export default Navbar