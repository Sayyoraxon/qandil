import "./Catalog.css"
import menuDark from "./images/menuDark.svg"
import logoDark from "./images/logoDark.svg"
import vector from "./images/Vector.svg"
import OutletCatalog from "./OutletCatalog"
import { NavLink, Outlet } from "react-router-dom"
function Catalog() {

    const animation = document.getElementsByClassName("background1")
    animation[0].hidden = true

    return (
        <div className="catalog">
            <div className="catalogDiv">
                <div className="catalogHeader">
                    <div>
                        <div>
                            <NavLink className="nav flexnav">
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
                    <div className="darklogo">
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
                <div className="hr">
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Catalog