import "./About.css"
import rtgl3 from "../images/Rectangle 3_1.png"
import rtgl3_3 from "../images/Rectangle 3_3.png"
import rtgl3_2 from "../images/Rectangle 3_2.png"
import share from "../images/Icons/share.svg"
import { useState } from "react"


function About() {

    const [active_1, setActive_1] = useState(true)
    const [active_2, setActive_2] = useState(false)
    const [active_3, setActive_3] = useState(false)
    const [active_1_1, setActive_1_1] = useState(true)
    const [active_2_2, setActive_2_2] = useState(false)
    const [active_3_3, setActive_3_3] = useState(false)



    return (
        <>
            <p class="title">
                <span>Главная</span><span className='flx'>///</span>
                Каталог ковров
            </p>
            <div className='aboutDiv'>
                <div className="descDiv">
                    <div>
                        <img src={rtgl3} alt="rtgl" />
                    </div>
                    <div className="model">
                        <img src={rtgl3_3} alt="rtgl" />
                        <img src={rtgl3_2} alt="rtgl" />
                    </div>
                    <div>
                        <h1>
                            Ponte 7508
                        </h1>
                        <h2>
                            528 000 сум./шт
                        </h2>
                        <p className="razmer">
                            Размеры
                        </p>
                        <button className={active_1 ? "active2 btn1" : "btn1"}
                            onClick={() => {
                                setActive_1(true)
                                setActive_2(false)
                                setActive_3(false)
                            }}
                        >
                            2 x 3
                        </button>
                        <button className={active_2 ? "active2 btn1" : "btn1"}
                            onClick={() => {
                                setActive_2(true)
                                setActive_1(false)
                                setActive_3(false)
                            }}
                        >
                            4 x 4,5
                        </button>
                        <button className={active_3 ? "active2 btn1" : "btn1"}
                            onClick={() => {
                                setActive_3(true)
                                setActive_1(false)
                                setActive_2(false)
                            }}
                        >
                            4 x 6,5
                        </button>
                        <p className="the">
                            The question isn't who is going to
                            let me. It's who is going to stop me.
                            Do what no one else does' follow through.
                            If everything seems under control...
                        </p>
                        <div className="flex1">
                            <button className="btn2">
                                Заказать обои
                            </button>
                            <div className="btn3">
                                <img src={share} alt="share" />
                                <button>
                                    Поделится
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="orderDesc">
                    <button className={active_1_1 ? "active3" : ""}
                        onClick={() => {
                            setActive_1_1(true)
                            setActive_2_2(false)
                            setActive_3_3(false)
                        }}
                    >
                        Описание продукта
                    </button>
                    <button className={active_2_2 ? "active3" : ""}
                        onClick={() => {
                            setActive_2_2(true)
                            setActive_1_1(false)
                            setActive_3_3(false)
                        }}
                    >
                        Как заказать
                    </button>
                    <button className={active_3_3 ? "active3" : ""}
                        onClick={() => {
                            setActive_3_3(true)
                            setActive_1_1(false)
                            setActive_2_2(false)
                        }}
                    >
                        Доставка и оплата
                    </button>
                </div>
                <div className="desctext">
                    <p>
                    Таким образом, в дополнение к работе с различными предложениями, 
                    которые часто влияют на дизайнерские решения в электронной коммерции, 
                    на этот раз перед нашей командой была поставлена ​​задача представить 
                    очень инновационный и узкоспециализированный продукт в эмоциональной, 
                    увлекательной и инклюзивной форме. Он взял на себя задачу создать дизайн, 
                    который выделял бы бренд из толпы, и применить его в высококонкурентном обществе.
                    </p>
                    <p>

                    </p>
                </div>
            </div>
        </>
    )
}

export default About