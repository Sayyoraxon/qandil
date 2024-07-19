import React, { useState } from 'react'
import icons from "../images/Icons.svg"
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
import rtgl11 from "../images/Rectangle 24.png"
import rtgl12 from "../images/Rectangle_12.png"
import { useNavigate } from 'react-router-dom'

function Chandeliers({ setImg }) {

    const [height, setHeight] = useState("")
    const [size, setSize] = useState(false)
    const [color, setColor] = useState(false)
    const [style, setStyle] = useState(false)
    const [form, setForm] = useState(false)
    const [compound, setCompound] = useState(false)
    const [height1, setHeight1] = useState(false)

    const navigate = useNavigate()

    const naviget = () => {
        navigate("/about", { replace: true })
        window.scrollTo({ top: 0 });
    }

    return (
        <div className="width925">
            <div className='scroll' style={{height: height1 ? "330px" : "130px"}}>
                <div className="catalogmenunav">
                    <div className='menudiv'>
                        <p>
                            По размерам
                        </p>
                        <img src={icons} alt="icon"
                            onClick={() => {
                                setSize(!size)
                                setHeight1(true)
                                }} />
                        {size &&
                            <div>
                                <p>
                                    По размерам
                                </p>
                                <p>
                                    По размерам
                                </p>
                                <p>
                                    По размерам
                                </p>
                            </div>}
                    </div>
                    <div className='menudiv'>
                        <p>
                            По цвету
                        </p>
                        <img src={icons} alt="icon"
                            onClick={() =>{ 
                                setColor(!color)
                                setHeight1(true)
                                }} />
                        {color &&
                            <div>
                                <p>
                                    По цвету
                                </p>
                                <p>
                                    По цвету
                                </p>
                                <p>
                                    По цвету
                                </p>
                            </div>}
                    </div>
                    <div className='menudiv'>
                        <p>
                            По стилю
                        </p>
                        <img src={icons} alt="icon"
                            onClick={() => {
                                setStyle(!style)
                                setHeight1(true)
                                }} />
                        {style &&
                            <div>
                                <p>
                                    По стилю
                                </p>
                                <p>
                                    По стилю
                                </p>
                                <p>
                                    По стилю
                                </p>
                            </div>}
                    </div>
                    <div className='menudiv'>
                        <p>
                            По форме
                        </p>
                        <img src={icons} alt="icon"
                            onClick={() => {
                                setForm(!form)
                                setHeight1(true)
                                }} />
                        {form &&
                            <div>
                                <p>
                                    По форме
                                </p>
                                <p>
                                    По форме
                                </p>
                                <p>
                                    По форме
                                </p>
                            </div>}
                    </div>
                    <div className='menudiv'>
                        <p>
                            По составу
                        </p>
                        <img src={icons} alt="icon"
                            onClick={() => {
                                setCompound(!compound)
                                setHeight1(true)
                                }} />
                        {compound &&
                            <div>
                                <p>
                                    По составу
                                </p>
                                <p>
                                    По составу
                                </p>
                                <p>
                                    По составу
                                </p>
                            </div>}
                    </div>
                </div>
            </div>
            <div className="div1" style={{height: height === "auto" && "auto" }}>
                <div className="div1card" onClick={() => {
                    setImg(rtgl1)
                    naviget()
                }}>
                    <div>
                        <img src={rtgl1} alt="rtgl" />
                    </div>
                    <p>
                        Ковер Electra 8514 серый
                    </p>
                    <p className="colored">
                        от 999 000 сум
                    </p>
                </div>
                <div className="div1card" onClick={() => {
                    setImg(rtgl2)
                    naviget()
                }}>
                    <div>
                        <img src={rtgl2} alt="rtgl" />
                    </div>
                    <p>
                        Ковер Electra 8514 серый
                    </p>
                    <p className="colored" onClick={naviget}>
                        от 999 000 сум
                    </p>
                </div>
                <div className="div1card" onClick={() => {
                    setImg(rtgl3)
                    naviget()
                }}>
                    <div>
                        <img src={rtgl3} alt="rtgl" />
                    </div>
                    <p>
                        Ковер Electra 8514 серый
                    </p>
                    <p className="colored">
                        от 999 000 сум
                    </p>
                </div>
                <div className="div1card" onClick={() => {
                    setImg(rtgl4)
                    naviget()
                }}>
                    <div>
                        <img src={rtgl4} alt="rtgl" />
                    </div>
                    <p>
                        Ковер Electra 8514 серый
                    </p>
                    <p className="colored" >
                        от 999 000 сум
                    </p>
                </div>
                <div className="div1card" onClick={() => {
                    setImg(rtgl5)
                    naviget()
                }}>
                    <div>
                        <img src={rtgl5} alt="rtgl" />
                    </div>
                    <p>
                        Ковер Electra 8514 серый
                    </p>
                    <p className="colored">
                        от 999 000 сум
                    </p>
                </div>
                <div className="div1card" onClick={() => {
                    setImg(rtgl6)
                    naviget()
                }}>
                    <div>
                        <img src={rtgl6} alt="rtgl" />
                    </div>
                    <p>
                        Ковер Electra 8514 серый
                    </p>
                    <p className="colored">
                        от 999 000 сум
                    </p>
                </div>
                <div className="div1card" onClick={() => {
                    setImg(rtgl7)
                    naviget()
                }}>
                    <div >
                        <img src={rtgl7} alt="rtgl" />
                    </div>
                    <p>
                        Ковер Electra 8514 серый
                    </p>
                    <p className="colored">
                        от 999 000 сум
                    </p>
                </div>
                <div className="div1card" oonClick={() => {
                    setImg(rtgl8)
                    naviget()
                }}>
                    <div >
                        <img src={rtgl8} alt="rtgl" />
                    </div>
                    <p>
                        Ковер Electra 8514 серый
                    </p>
                    <p className="colored">
                        от 999 000 сум
                    </p>
                </div>
                <div className="div1card" onClick={() => {
                    setImg(rtgl9)
                    naviget()
                }}>
                    <div>
                        <img src={rtgl9} alt="rtgl" />
                    </div>
                    <p>
                        Ковер Electra 8514 серый
                    </p>
                    <p className="colored">
                        от 999 000 сум
                    </p>
                </div>
                <div className="div1card" onClick={() => {
                    setImg(rtgl10)
                    naviget()
                }}>
                    <div>
                        <img src={rtgl10} alt="rtgl" />
                    </div>
                    <p>
                        Ковер Electra 8514 серый
                    </p>
                    <p className="colored">
                        от 999 000 сум
                    </p>
                </div>
                <div className="div1card" onClick={() => {
                    setImg(rtgl11)
                    naviget()
                }}>
                    <div>
                        <img src={rtgl11} alt="rtgl" />
                    </div>
                    <p>
                        Ковер Electra 8514 серый
                    </p>
                    <p className="colored">
                        от 999 000 сум
                    </p>
                </div>
                <div className="div1card" onClick={() => {
                    setImg(rtgl12)
                    naviget()
                }}>
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
                <div className="div1card" onClick={() => {
                    setImg(rtgl1)
                    naviget()
                }}>
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
                <div className="div1card" onClick={() => {
                    setImg(rtgl2)
                    naviget()
                }}>
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
                <div className="div1card" onClick={() => {
                    setImg(rtgl3)
                    naviget()
                }}>
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
                <div className="div1card" onClick={() => {
                    setImg(rtgl4)
                    naviget()
                }}>
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
                <div className="div1card" onClick={() => {
                    setImg(rtgl5)
                    naviget()
                }}>
                    <div>
                        <img src={rtgl5} alt="rtgl" />
                    </div>
                    <p>
                        Ковер Electra 8514 серый
                    </p>
                    <p className="colored">
                        от 999 000 сум
                    </p>
                </div>
                <div className="div1card" onClick={() => {
                    setImg(rtgl6)
                    naviget()
                }}>
                    <div>
                        <img src={rtgl6} alt="rtgl" />
                    </div>
                    <p>
                        Ковер Electra 8514 серый
                    </p>
                    <p className="colored">
                        от 999 000 сум
                    </p>
                </div>
                <div className="div1card" onClick={() => {
                    setImg(rtgl7)
                    naviget()
                }}>
                    <div>
                        <img src={rtgl7} alt="rtgl" />
                    </div>
                    <p>
                        Ковер Electra 8514 серый
                    </p>
                    <p className="colored">
                        от 999 000 сум
                    </p>
                </div>
                <div className="div1card" onClick={() => {
                    setImg(rtgl8)
                    naviget()
                }}>
                    <div>
                        <img src={rtgl8} alt="rtgl" />
                    </div>
                    <p>
                        Ковер Electra 8514 серый
                    </p>
                    <p className="colored">
                        от 999 000 сум
                    </p>
                </div>
                <div className="div1card" onClick={() => {
                    setImg(rtgl9)
                    naviget()
                }}>
                    <div>
                        <img src={rtgl9} alt="rtgl" />
                    </div>
                    <p>
                        Ковер Electra 8514 серый
                    </p>
                    <p className="colored">
                        от 999 000 сум
                    </p>
                </div>
                <div className="div1card" onClick={() => {
                    setImg(rtgl10)
                    naviget()
                }}>
                    <div>
                        <img src={rtgl10} alt="rtgl" />
                    </div>
                    <p>
                        Ковер Electra 8514 серый
                    </p>
                    <p className="colored">
                        от 999 000 сум
                    </p>
                </div>
                <div className="div1card" onClick={() => {
                    setImg(rtgl11)
                    naviget()
                }}>
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
                <div className="div1card" onClick={() => {
                    setImg(rtgl12)
                    naviget()
                }}>
                    <div>
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
            {height !== "auto" &&
                <button id='btnshow'
                    onClick={() => setHeight("auto")}>
                    Показать ещё
                </button>}
        </div>
    )
}

export default Chandeliers