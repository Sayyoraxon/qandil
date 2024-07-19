import "./About.css"
import rtgl3_3 from "../images/Rectangle 3_3.png"
import rtgl3_2 from "../images/Rectangle 3_2.png"
import rtgl13 from "../images/Rectangle_13.png"
import rtgl14 from "../images/Rectangle_14.png"
import rtgl15 from "../images/Rectangle_15.png"
import rtgl16 from "../images/Rectangle_16.png"
import share from "../images/Icons/share.svg"
import arw from "../images/Icons.svg"
import { useState } from "react"
import Dialog from "./Dialog"
import Footer from "../../components/Footer"
import useWindowDimensions from "./useWindowDimensions"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CustomPrevArrow } from "./CustomPrewArrow"
import { CustomNextArrow } from "./CustomNextArrow"








function About({ setImg, img }) {


    const { width } = useWindowDimensions()


    const images = [rtgl13, rtgl14, rtgl15, rtgl16, rtgl14, rtgl15, rtgl13, rtgl14, rtgl15, rtgl16, rtgl14, rtgl15]
    const width1 = width > 768 ? images.length * 313 : images.length * 180

    const [transition, setTransition] = useState(0)
    const [dialog, setDialog] = useState(false)
    const [dialog1, setDialog1] = useState(false)

    const buttons = [
        "Описание продукта",
        "Как заказать",
        "Доставка и оплата"
    ]

    const text1 = "Таким образом, в дополнение к работе с различными предложениями, которые часто влияют на дизайнерские решения в электронной коммерции, на этот раз перед нашей командой была поставлена ​​задача представить очень инновационный и узкоспециализированный продукт в эмоциональной, увлекательной и инклюзивной форме. Он взял на себя задачу создать дизайн, который выделял бы бренд из толпы, и применить его в высококонкурентном обществе."
    const text2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est optio accusantium et suscipit mollitia maxime repudiandae aliquid velit sint dolor cumque ea, architecto sapiente, quidem rem alias praesentium reprehenderit quaerat eveniet repellat eaque voluptatem ab aspernatur? Nemo vero ut eos."
    const text3 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est optio accusantium et suscipit mollitia maxime repudiandae aliquid velit sint dolor cumque ea, architecto sapiente, quidem rem alias praesentium reprehenderit quaerat eveniet repellat eaque voluptatem ab aspernatur? Nemo vero ut eos. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    const sizes = ["2 x 3", "4 x 4,5", "4 x 6,5"]
    const [text, settext] = useState(text1)

    const toggle = (element, i) => {
        const array = Array.from(element.parentElement.children)
        array.forEach((item) => {
            item.classList.remove("active3")
        })
        element.classList.add("active3")
        i === 0 && settext(text1)
        i === 1 && settext(text2)
        i === 2 && settext(text3)
    }

    const toggle1 = (element, i) => {
        const array = Array.from(element.parentElement.children)
        array.forEach((item) => {
            item.classList.remove("active2")
        })
        element.classList.add("active2")
        i === 0 && settext(text1)
        i === 1 && settext(text2)
        i === 2 && settext(text3)
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2.03,
                    slidesToScroll: 2
                }
            }
        ]
    };



    return (
        <>
            {dialog && <Dialog img={img} setDialog={setDialog} />}
            {dialog1 &&
                <div className='dialog1'>
                    <button className='close' onClick={() => setDialog1(false)}>
                        <FontAwesomeIcon icon={faCircleXmark} size='lg' />
                    </button>
                    <video controls width="100%"
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    />
                </div>}
            <p className="title">
                <span>Главная</span>
                <span className='flx'>///</span>
                Каталог ковров
            </p>
            <div className='aboutDiv' id="about">
                <div className="descDiv">
                    <div>
                        <img src={img} alt="rtgl" />
                    </div>
                    <div className="model">
                        <div>
                            <img src={rtgl3_3} alt="img" />
                            <button className="play-button" onClick={() => setDialog1(true)}>
                                <span className="play-icon"></span>
                            </button>
                        </div>
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

                        <div>
                            {
                                sizes.map((siz, i) => (
                                    <button key={i} className={`btn1 ${i === 0 ? "active2" : ""}`}
                                        onClick={(e) => {
                                            toggle1(e.target)
                                        }}>
                                        {siz}
                                    </button>
                                ))
                            }
                        </div>


                        <p className="the">
                            The question isn't who is going to
                            let me. It's who is going to stop me.
                            Do what no one else does' follow through.
                            If everything seems under control...
                        </p>
                        <div className="flex1">
                            <button className="btn2"
                                onClick={() =>{ setDialog(true)}}>
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

                    {buttons.map((btn, i) => (
                        <button key={i} className={i === 0 ? "active3" : ""}
                            onClick={(e) => { toggle(e.target, i) }}>
                            {btn}
                        </button>
                    ))}

                </div>
                <div className="desctext">

                    <p>
                        {text}
                    </p>

                </div>


                <div className="recommendation">
                    <div className="next">
                        <h2>
                            Мы реккомендуем
                        </h2>
                        <div className="prew">
                            <img src={arw} alt="arw"
                                onClick={() => transition !== 0 && setTransition(width > 768 ? transition + 626 : transition + 360)} />
                            <img src={arw} alt="arw"
                                onClick={() => transition > -width1 + 626 && setTransition(width > 768 ? transition - 626 : transition - 360)} />
                        </div>
                    </div>

                    <div className="hidden">
                        <div className="cardsDiv" style={{ transform: `translateX(${transition}px)` }}>
                            {images.map((image, i) => (
                                <div key={i} className="cardDiv2" onClick={() => setImg(image)}>
                                    <div className="center">
                                        <img src={image} alt="rtgl" />
                                    </div>
                                    <p style={{ fontFamily: "Jost, sans-serif", fontWeight: "500" }}>
                                        Ковер Electra 8514 серый
                                    </p>
                                    <p className="colored" style={{ fontFamily: "Jost, sans-serif", fontWeight: "500" }}>
                                        от 999 000 сум
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="slider">
                        <Slider {...settings}>
                            {images.map((image, i) => (
                                <div key={i} className="cardDiv2" onClick={() => setImg(image)}>
                                    <div className="center">
                                        <img src={image} alt="rtgl" />
                                    </div>
                                    <p style={{ fontFamily: "Jost, sans-serif", fontWeight: "500" }}>
                                        Ковер Electra 8514 серый
                                    </p>
                                    <p className="colored" style={{ fontFamily: "Jost, sans-serif", fontWeight: "500" }}>
                                        от 999 000 сум
                                    </p>
                                </div>
                            ))}
                        </Slider>
                    </div>



                </div>
            </div>
            <Footer />
        </>
    )
}

export default About