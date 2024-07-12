import "./About.css"
import rtgl3 from "../images/Rectangle_3.png"
import rtgl3_3 from "../images/Rectangle 3_3.png"
import rtgl3_2 from "../images/Rectangle 3_2.png"
import share from "../images/Icons/share.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShareNodes } from "@fortawesome/free-solid-svg-icons"

function About() {
    return (
        <>
            <p class="title">
                <span>Главная</span><span className='flx'>///</span>
                Каталог ковров
            </p>
            <div className='aboutDiv'>
                <div className="descDiv">
                    <div>
                        <img src={rtgl3} alt="rtgl"/>
                    </div>
                    <div>
                        <img src={rtgl3_3} alt="rtgl"/>
                        <img src={rtgl3_2} alt="rtgl"/>
                    </div>
                    <div>
                        <h1>
                            Ponte 7508
                        </h1>
                        <h2>
                            528 000 сум./шт
                        </h2>
                        <p>
                            Размеры
                        </p>
                        <button>
                             2 x 3
                        </button>
                        <button>
                             4 x 4,5
                        </button>
                        <button>
                             4 x 6,5
                        </button>
                        <p>
                            The question isn't who is going to
                            let me. It's who is going to stop me.
                             Do what no one else does' follow through. 
                             If everything seems under control...
                        </p>
                        <button>
                            Заказать обои
                        </button>
                        <button>
                            <img src={share} alt="share"/>
                            Поделится
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About