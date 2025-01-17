
import { NavLink, Outlet } from 'react-router-dom'
import ellipce from "./images/Ellipse 1322.svg"
import menu from "./images/menu.svg"
import hero from "./images/heroImg.png"
import logo from "./images/logo.svg"
import ellipc1 from "./images/Ellipse 1.png"
import ellipc2 from "./images/Ellipse 2.png"
import ellipc3 from "./images/Ellipse 3.png"
import ellipc4 from "./images/Ellipse 4.png"
import ellipc5 from "./images/Ellipse 5.png"
import ellipc6 from "./images/Ellipse 6.png"
import bars from "./images/bars.svg"
import MobileNav from '../components/MobileNav'

function Home({display, setDisplay}) {


     return (
          <>   
               <MobileNav display={display} setDisplay={setDisplay}/>
               <div className="background1">
                    <div className="backfon">
                         <div className="fontop">
                              <img src={ellipce} alt="alp" className="fonbottom" />
                         </div>

                         <div className="hero">
                              <div className="vector1"></div>
                              <img src={hero} alt="hero" />
                         </div>

                         <div className="header">
                              <div className='flexCol'>
                                   <img src={logo} alt="logo" className="abs1" />

                                   <nav className='height21'>
                                        <NavLink to="catalog" className="menu abs2">
                                             <img src={menu} alt="menu" />
                                             Каталог продуктов
                                        </NavLink>

                                        <NavLink className="abs4 none">
                                             Услуги
                                        </NavLink>
                                        <NavLink to="contacts" className="abs5 none">
                                             Контакты
                                        </NavLink>
                                   </nav>
                              </div>
                              <button className="hug right abs6 none">
                                   Получить консултацию
                              </button>
                              <img src={bars} alt="bars" className='block'
                              onClick={()=>setDisplay("block")}/>
                         </div>

                         <div className="main">
                              <h1 className="abs7">
                                   MORGANA OVAL
                              </h1>
                              <p className="abs8">
                                   The question isn't who is going to let me. It's who is going to stop me.
                              </p>
                              <button className="abs9 hug1">
                                   Подробнее
                              </button>
                         </div>
                         <h1 className="abs10">
                              3 200 000.00 UZS
                         </h1>
                         <p className="abs11">
                              The question isn't who is going to let me. It's who is going to stop me.
                         </p>

                         <div className="ellipses">
                              <div className="alp1">
                                   <div></div>
                                   <img src={ellipc1} alt="elpp" />
                              </div>
                              <div className="alp2">
                                   <div></div>
                                   <img src={ellipc2} alt="elpp" />
                              </div>
                              <div className="alp3">
                                   <div></div>
                                   <img src={ellipc3} alt="elpp" />
                              </div>
                              <div className="alp4" >
                                   <div></div>
                                   <img src={ellipc4} alt="elpp" />
                              </div>
                              <div className="alp5">
                                   <div></div>
                                   <img src={ellipc5} alt="elpp" />
                              </div>
                              <div className="alp6">
                                   <div></div>
                                   <img src={ellipc6} alt="elpp" />
                              </div>
                         </div>

                    </div>
               </div>
               <Outlet />
          </>
     )
}

export default Home