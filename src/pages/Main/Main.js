import { useEffect } from 'react';
import "./Main.css"
import icons1 from "../images/Icons4.svg"
import icons2 from "../images/Icons1.svg"
import icons3 from "../images/Icons3.svg"
import group from "../images/Group.svg"
import group1 from "../images/Group1.svg"
import group2 from "../images/Group2.svg"
import Lamps from "./Lamps"
import Footer from "../../components/Footer"
import { useNavigate } from "react-router-dom"

const Main = ({ setImg }) => {
     const buttons = [
          "Люстры",
          "Светильники потолочные",
          "Точечные светильники",
          "Трековые системы",
          "Бра и настенные",
          "Торшеры",
          "Настольные лампы",
          "Уличные",
          "Лампы",
          "Акции"
     ]

     const toggle = (element) => {
          const btns = Array.from(element.parentElement.children)
          btns.forEach((item) => {
               item.classList.remove("active")
          })
          element.classList.add("active")
     }

     const navigate = useNavigate()

     const naviget = () => {
          navigate("catalog");
          window.scrollTo({ top: 0 });

     }

     return (
          <>
               <div className="background2">
                    <div className="container2_1">

                         <h1 className="text1">
                              Наше новые продукты
                         </h1>
                         <div className="menuDiv">
                              {buttons.map((btn) => (
                                   btn === "Лампы" ?
                                        <button className="active" onClick={(e) => {
                                             toggle(e.target)
                                        }}>
                                             {btn}
                                        </button>
                                        :
                                        btn === "Торшеры" ?
                                             <button className="mgr" onClick={(e) => {
                                                  toggle(e.target)
                                             }}>
                                                  {btn}
                                             </button>
                                             :
                                             <button onClick={(e) => {
                                                  toggle(e.target)
                                             }}>
                                                  {btn}
                                             </button>
                              ))}

                         </div>
                         <Lamps setImg={setImg} />
                         <button className="text2" onClick={naviget}>
                              Посмотреть все
                         </button>
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
                                   <input type="tel" defaultValue="+998" />

                                   <button className="text5">

                                        Отправить для обратного звонка

                                   </button>
                              </div>
                              <div className="group">
                                   <img src={group} alt="grp" className="img1" />
                                   <img src={group1} alt="grp" className="img2" />
                                   <img src={group2} alt="grp" className="img3" />
                              </div>
                         </div>
                    </div>
               </div>
               <Footer />
          </>
     )
}

export default Main