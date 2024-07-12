import "./Catalog.css"
import menuDark from "../images/menuDark.svg"
import logoDark from "../images/logoDark.svg"
import vector from "../images/Vector.svg"
import clock from "../images/icon_clock.svg"
import location from "../images/location_icon.svg"
import email from "../images/mail_icon.svg"
import phone from "../images/phone_icon.svg"
import arwbtm from "../images/arrowbottom.svg"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
function Catalog() {


    const navigate = useNavigate()

    const naviget = () => {
        navigate("/", { replace: true })
    }

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
                <div className="hr">
                </div>
                <Outlet />
            </div>
            <div className="footer">
                <div className="insidefooter">
                    <div className="lyustr">
                        <h2>
                            Lyustrus
                        </h2>
                        <p>
                            Следите за новостями на нашем сайте и тогда
                            вы сможете даже приобрести шедевр в единственном
                            экземпляре.
                        </p>
                    </div>
                    <div className="timework">
                        <h2>
                            Время работы
                        </h2>
                        <div>
                            <img src={clock} alt="clock" />
                            <p>
                                Мы работаем без выходных с 10:00 до 19:00
                            </p>
                        </div>
                    </div>
                    <div className="contacts">
                        <h2>
                            Наши контакты
                        </h2>
                        <div>
                            <div>
                                <img src={location} alt="lov" />
                                <p>
                                    р.Нурафшон, ул.Фаргона 12Б
                                </p>
                            </div>
                            <div className="mr">
                                <img src={email} alt="email" />
                                <p className="rubik">
                                    info@gmail.com
                                </p>
                            </div>
                            <div className="mt">
                                <img src={phone} alt="phon" />
                                <p className="rubik">
                                    +998 90 000 00 00
                                </p>
                                <img src={arwbtm} alt="arwbtm" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="insidefooter2">
                    <div>
                        <p>
                            Политика безопасности 
                        </p>
                        <p>
                        Условия соглашения
                        </p>
                        <p>
                        Публичная оферта
                        </p>
                        <p>
                        © 2023 ООО. All rights reserved 
                        </p>
                    </div>
                    <div>
                        <p>
                        Designed by: <span>Getter</span>
                        </p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Catalog