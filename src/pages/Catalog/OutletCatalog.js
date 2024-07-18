import React, { useState } from 'react'
import Chandeliers from './Chandeliers'
import menu from "../images/Icons/layout-list.svg"
import close from "../images/closeIcon.svg"

function OutletCatalog({ setImg }) {

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

    const [text, setText] = useState(buttons[0])
    const [position, setPositon] = useState(false)

    const toggle = (element) => {
        const btns = Array.from(element.parentElement.children)
        btns.forEach((btn) => {
            btn.classList.remove("active1")
        })
        element.classList.add("active1")
    }

    return (
        <div className="catalogMain">
            <div>
                <p class="title">
                    <span>Главная</span>
                    <span className='flx'>///</span>
                    Каталог люстр
                </p>
                <div className='blockDiv'>
                    <div className='flex'>
                        <img src={menu} alt="icon" 
                        onClick={()=>setPositon(true)}/>
                        <p>{text}</p>
                    </div>
                    <img src={close} alt="icon"
                        onClick={() => { setPositon(false) }}
                    />
                </div>
                <div className='noneDiv' 
                style={{ position: position && "absolute", display: position && "block",
                width: position && "270px", boxShadow: position && "0 4px 8px 4px #ccc" }}>
                    <h1 style={{display: position && "none"}}>
                        Каталог
                    </h1>

                    {buttons.map((item, i) => (
                        <button key={i} className={i === 0 ? "active1" : ""}
                            onClick={(e) => {
                                setText(item)
                                toggle(e.target)
                                setPositon(false)
                            }}>
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            <Chandeliers setImg={setImg} />
        </div>
    )
}

export default OutletCatalog