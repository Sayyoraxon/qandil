import "./Main.css"
import icons1 from "../images/Icons.svg"
import icons2 from "../images/Icons1.svg"
import icons3 from "../images/Icons3.svg"
import group from "../images/Group.svg"
import group1 from "../images/Group1.svg"
import group2 from "../images/Group2.svg"
import Lamps from "./Lamps"
import { useState } from "react"
import Chandelier from "./Chandelier"

function Main({setImg}) {
     const [chandeliers, setChandeliers] = useState(false)
     const [lamps, setLamps] = useState(true)

     const chandelier = () => {
          setChandeliers(true)
          setLamps(false)
     }

     const lamp = () => {
          setLamps(true)

          setChandeliers(false) 
     }

     return (
          <>           
               <div className="background2">
                    <div className="container2">
                         <h1 className="text1">
                              Наше новые продукты
                         </h1>
                         <div className="menuDiv">
                              <button className={chandeliers ? "active" : ""}
                               onClick={chandelier}>
                                   Люстры
                              </button>
                              <button>
                                   Светильники потолочные
                              </button>
                              <button>
                                   Точечные светильники
                              </button>
                              <button>
                                   Трековые системы
                              </button>
                              <button>
                                   Бра и настенные
                              </button>
                         </div>
                         <div className="menuDiv2">
                              <button>
                                   Торшеры
                              </button>
                              <button>
                                   Настольные лампы
                              </button>
                              <button>
                                   Уличные
                              </button>
                              <button className={lamps ? "active" : ""}
                                   onClick={lamp}>
                                   Лампы
                              </button>
                              <button>
                                   Акции
                              </button>
                         </div>
                         {lamps && <Lamps  setImg={setImg}/>}
                         {chandeliers && <Chandelier setImg={setImg}/>}
                         <div className="text2">
                              Посмотреть все
                         </div>
                    </div>
               </div>
               <div className="background3">
                    <div className="container2">
                         <h1 className="text3">
                              Почему именно мы?
                         </h1>
                         <p className="text4">
                              <span>
                                   Lorem
                              </span>
                              ipsum is placeholder text commonly
                              used in the graphic, print, and publishing industries
                              for previewing layouts and visual mockups. Lorem ipsum
                              is placeholder text commonly used in the graphic, print, and publishing industries for
                              previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the
                              graphic, print, and publishing industries for previewing layouts and visual mockups.
                         </p>
                         <div className="iconsDiv">
                              <div>
                                   <img src={icons1} alt="icons" />
                                   <h3>
                                        Мы работаем и предоставляем качественную услугу
                                   </h3>
                              </div>
                              <div>
                                   <img src={icons2} alt="icons" />
                                   <h3>
                                        Мы всегда работаем быстро на 24/7
                                   </h3>
                              </div>
                              <div>
                                   <img src={icons3} alt="icons" />
                                   <h3>
                                        Абсолютно бесплатная доставка по стране
                                   </h3>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="background2">
                    <div className="container2">
                         <h1 className="text3">
                              Обратная связь!
                         </h1>
                         <div className="iconsDiv2">
                              <div className="forma">
                                   <h2>
                                        Мы перезвоним
                                   </h2>
                                   <p>
                                        Если у вас возникли затруднения в выборе, оставьте свои контактные данные и мы вам
                                        поможем!
                                   </p>
                                   <input type="text" placeholder="Имя" />
                                   <input type="text" placeholder="место заказа" />
                                   <div className="tel">
                                        <p>
                                             <small>
                                                  +998
                                             </small>
                                        </p>
                                        <input type="tel" />
                                   </div>
                                   <div className="text5">
                                        <p>
                                             Отправить для обратного звонка
                                        </p>
                                   </div>
                              </div>
                              <div className="group">
                                   <img src={group} alt="grp" className="img1" />
                                   <img src={group1} alt="grp" className="img2" />
                                   <img src={group2} alt="grp" className="img3" />
                              </div>
                         </div>
                    </div>
               </div>
               <div className="background4">
                    <div className="container2">
                         <div className="contact">
                              <p>
                                   Связатся с нами
                              </p>
                         </div>
                         <p className="bottomnav">
                              © 2023 Все права защищены.
                         </p>
                         <a href="#" className="bottomnav">
                              О компании
                         </a>
                         <a href="#" className="bottomnav">
                              Продукты
                         </a>
                         <a href="#" className="bottomnav">
                              Продукты
                         </a>
                         <a href="#" className="bottomnav">
                              Новости
                         </a>
                    </div>
               </div>
               <div className="background5">
                    <div className="container3">
                         <p style={{ opacity: "0.4" }}>
                              Copyright: 2024
                         </p>
                         <p>
                              О нас
                         </p>
                         <p>
                              Помощь
                         </p>
                    </div>
               </div>
          </>
     )
}

export default Main