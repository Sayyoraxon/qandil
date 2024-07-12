import menuDark from "../pages/images/menuDark.svg"
import logoDark from "../pages//images/logoDark.svg"
import vector from "../pages/images/Vector.svg"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import Footer from "./Footer"

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
                    <NavLink className="nav">
                        Контакты
                    </NavLink>
                </div>
            </div>
            <div className="darklogo" onClick={naviget}>
                <img src={logoDark} alt="logo" />
                <img src={vector} alt="vec" className="vector" />
            </div>
            <div>
                <p>
                    Приём звонков 24/7
                </p>
                <p>
                    +998 90 000 00 00
                </p>
            </div>
        </div>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Navbar