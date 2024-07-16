import React from 'react'
import "./style.css"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faLinkedinIn, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
     return (
          <>
               <div className="background4">
                    <div className="footer">
                         <div className='flexrow'>
                              <div className="contact">
                                   <p>
                                        Связатся с нами
                                   </p>
                              </div>
                              <p className='p1'>
                                   +998 90 000 00 00
                              </p>
                         </div>
                         <p className="show">
                              © 2023 Все права защищены.
                         </p>
                         <div className='flexrow'>
                              <div className='flex'>
                                   <p className="bottomnav">
                                        © 2023 Все права защищены.
                                   </p>

                                   <div className='flexcolumn'>
                                        <NavLink className="bottomnav">
                                             О компании
                                        </NavLink>
                                        <NavLink className="bottomnav">
                                             Продукты
                                        </NavLink>
                                        <NavLink className="bottomnav">
                                             Услуги
                                        </NavLink>
                                        <NavLink className="bottomnav">
                                             Новости
                                        </NavLink>
                                   </div>
                              </div>


                              <div className='flexcolumn'>
                                   <p className='p'>
                                        +998 90 000 00 00
                                   </p>
                                   <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#2A1055", fontSize: "18px" }} />
                                   <FontAwesomeIcon icon={faTwitter} style={{ color: "#2A1055", fontSize: "18px" }} />
                                   <FontAwesomeIcon icon={faSquareFacebook} style={{ color: "#2A1055", fontSize: "20px" }} />
                                   <FontAwesomeIcon icon={faInstagram} style={{ color: "#2A1055", fontSize: "20px" }} />
                              </div>
                         </div>

                    </div>
               </div>
               <div className="background5">
                    <div className="container3 flexfooter">
                         <div>
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
                         <div>
                              <p style={{ opacity: "0.4", marginRight: "14px" }}>
                                   Designed by:
                              </p>
                              <p className='outfit'>
                                   Getter
                              </p>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Footer