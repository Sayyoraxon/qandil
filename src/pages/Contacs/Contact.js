import React from 'react'
import "./Contacts.css"
import instagram from "../images/intagram.svg"
import img from "../images/img.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div className='contacts'>
            <div className="hr">
            </div>
            <p class="title">
                <span>Главная</span>
                <span className='flx'>///</span>
                Контакты
            </p>
            <p className='subtitle'>
                OOO “Gilam” — Один в Узбекистане. Ковры прослужат вам долгую и отличную службу. Узоры, наносимые на ковры, подойдут как для гостиных и спален в вашем доме, так и для офисов.
            </p>
            <div className='socialss'>
                <div>
                    <p>
                        Наш телефонный номер
                    </p>
                    <h1>
                        +93 007-07-07
                    </h1>
                    <div>
                        <FontAwesomeIcon icon={faFacebookF} style={{ color: "#2E65D0", fontSize: "30px" }} />
                        <img src={instagram} alt="insta" />
                        <FontAwesomeIcon icon={faTwitter} style={{ color: "#00D1FF", fontSize: "30px" }} />
                    </div>
                </div>
                <div>
                    <p>
                        Адрес:
                    </p>
                    <h1>
                        р.Чилонзор, Абу-Сахий 56 магазин
                    </h1>
                </div>
            </div>
            <div className='location'>
                <h1>
                Остались вопросы? Позвоните нам, и мы вас 
                <span>
                    проконсультируем
                </span>
                </h1>
                <p>
                Ковры прослужат вам долгую и отличную службу. Узоры, наносимые на ковры, подойдут как для гостиных и спален в вашем доме, так и для офисов.
                </p>
                <button>
                    Свяжитесь с нами
                </button>
                <div>
                    <img src={img} alt="map"/>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Contact