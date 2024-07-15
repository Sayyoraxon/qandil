import "./About.css"
import "../../../node_modules/video-react/dist/video-react.css"
import rtgl3_3 from "../images/Rectangle 3_3.png"
import rtgl3_2 from "../images/Rectangle 3_2.png"
import rtgl13 from "../images/Rectangle_13.png"
import rtgl14 from "../images/Rectangle_14.png"
import rtgl15 from "../images/Rectangle_15.png"
import rtgl16 from "../images/Rectangle_16.png"
import share from "../images/Icons/share.svg"
import arw from "../images/Icons.svg"
import { useState } from "react"
import { Player } from "video-react"
import Dialog from "./Dialog"


function About({setImg, img}) {

    const images = [rtgl13, rtgl14, rtgl15, rtgl16, rtgl14, rtgl15, rtgl13, rtgl14, rtgl15, rtgl16, rtgl14, rtgl15]
    const width = images.length / 4 * -100 + 100

    const [transition, setTransition] = useState(0)
    const [dialog, setDialog] = useState(false)
    const [active_1_1, setActive_1_1] = useState(true)
    const [active_2_2, setActive_2_2] = useState(false)
    const [active_3_3, setActive_3_3] = useState(false)


    const text1 = "Таким образом, в дополнение к работе с различными предложениями, которые часто влияют на дизайнерские решения в электронной коммерции, на этот раз перед нашей командой была поставлена ​​задача представить очень инновационный и узкоспециализированный продукт в эмоциональной, увлекательной и инклюзивной форме. Он взял на себя задачу создать дизайн, который выделял бы бренд из толпы, и применить его в высококонкурентном обществе."
    const text2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est optio accusantium et suscipit mollitia maxime repudiandae aliquid velit sint dolor cumque ea, architecto sapiente, quidem rem alias praesentium reprehenderit quaerat eveniet repellat eaque voluptatem ab aspernatur? Nemo vero ut eos."
    const text3 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est optio accusantium et suscipit mollitia maxime repudiandae aliquid velit sint dolor cumque ea, architecto sapiente, quidem rem alias praesentium reprehenderit quaerat eveniet repellat eaque voluptatem ab aspernatur? Nemo vero ut eos. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    const sizes = ["2 x 3", "4 x 4,5", "4 x 6,5"]
    const [text, settext] = useState(text1)

    const toggle = (element) => {
        const array = Array.from(element.parentElement.children)
        array.forEach((item)=>{
            item.classList.remove("active2")
        })
        element.classList.add("active2")
    }
    
    
    return (
        <>
            {dialog && <Dialog img={img} setDialog={setDialog}/>}
            <p class="title">
                <span>Главная</span>
                <span className='flx'>///</span>
                Каталог ковров
            </p>
            <div className='aboutDiv'>
                <div className="descDiv">
                    <div>
                        <img src={img} alt="rtgl"
                            onClick = {()=> setDialog(true)}
                        />
                    </div>
                    <div className="model">
                        <div>
                            <Player
                            playsInline
                            poster={rtgl3_3}
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
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
                            sizes.map((siz)=> (
                                <button className="btn1"
                                    onClick={(e)=>{
                                        toggle(e.target)
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
                            settext(text1)
                        }}
                    >
                        Описание продукта
                    </button>
                    <button className={active_2_2 ? "active3" : ""}
                        onClick={() => {
                            setActive_2_2(true)
                            setActive_1_1(false)
                            setActive_3_3(false)
                            settext(text2)
                        }}
                    >
                        Как заказать
                    </button>
                    <button className={active_3_3 ? "active3" : ""}
                        onClick={() => {
                            setActive_3_3(true)
                            setActive_1_1(false)
                            setActive_2_2(false)
                            settext(text3)
                        }}
                    >
                        Доставка и оплата
                    </button>
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
                           onClick={()=>transition !== 0 && setTransition(transition+101)}/> 
                           <img src={arw} alt="arw"
                           onClick={()=>transition > width && setTransition(transition-101)}/> 
                        </div>
                    </div>

                    <div className="hidden">
                        <div className="cardsDiv" style={{transform: `translateX(${transition}%)`}}>
                            {images.map((image)=>(
                                <div className="cardDiv2" onClick={()=>setImg(image)}>
                                <div className="center">
                                    <img src={image} alt="rtgl"/>
                                </div>
                                <p>
                                    Ковер Electra 8514 серый
                                </p>
                                <p className="colored">
                                    от 999 000 сум
                                </p>
                            </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About