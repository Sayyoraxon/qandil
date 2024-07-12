import React, { useState } from 'react'
import icons from "../images/icons.png"
import rtgl1 from "../images/Rectangle_1.png"
import rtgl2 from "../images/Rectangle_2.png"
import rtgl3 from "../images/Rectangle_3.png"
import rtgl4 from "../images/Rectangle_4.png"
import rtgl5 from "../images/Rectangle_5.png"
import rtgl6 from "../images/Rectangle_6.png"
import rtgl7 from "../images/Rectangle_7.png"
import rtgl8 from "../images/Rectangle_8.png"
import rtgl9 from "../images/Rectangle_9.png"
import rtgl10 from "../images/Rectangle_10.png"
import rtgl11 from "../images/Rectangle_11.png"
import rtgl12 from "../images/Rectangle_12.png"
import { useNavigate } from 'react-router-dom'

function Chandeliers() {

    const [height, setHeight] = useState("1940px")

    const navigate = useNavigate()

    const naviget = () => {
        navigate("/about", { replace: true })
    }

  return (
    <div className="width925">
                    <div className="catalogmenunav">
                        <div>
                            <p>
                                По размерам
                            </p>
                            <img src={icons} alt="icon" />
                        </div>
                        <div>
                            <p>
                                По цвету
                            </p>
                            <img src={icons} alt="icon" />
                        </div>
                        <div>
                            <p>
                                По стилю
                            </p>
                            <img src={icons} alt="icon" />
                        </div>
                        <div>
                            <p>
                                По форме
                            </p>
                            <img src={icons} alt="icon" />
                        </div>
                        <div>
                            <p>
                                По составу
                            </p>
                            <img src={icons} alt="icon" />
                        </div>
                    </div>
                    <div className="div1" style={{height: height}}>
                        <div className="div1card" onClick={naviget}>
                            <div className="center">
                                <img src={rtgl1} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl2} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl3} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl4} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl5} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl6} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl7} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl8} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl9} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl10} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl11} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl12} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl1} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl2} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl3} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl4} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl5} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl6} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl7} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl8} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl9} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl10} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl11} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                        <div className="div1card">
                            <div className="center">
                                <img src={rtgl12} alt="rtgl" />
                            </div>
                            <p>
                                Ковер Electra 8514 серый
                            </p>
                            <p className="colored">
                                от 999 000 сум
                            </p>
                        </div>
                    </div>
                    <button id='btnshow'
                    onClick={()=>setHeight("auto")}>
                        Показать ещё
                    </button>
                </div>
  )
}

export default Chandeliers