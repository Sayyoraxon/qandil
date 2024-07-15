import React from 'react'
import clock from "../pages/images/icon_clock.svg"
import location from "../pages/images/location_icon.svg"
import email from "../pages/images/mail_icon.svg"
import phone from "../pages/images/phone_icon.svg"
import arwbtm from "../pages/images/arrowbottom.svg"
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
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

export default Footer