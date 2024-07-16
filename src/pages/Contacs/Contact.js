import React, { useState } from 'react'
import "./Contacts.css"
import instagram from "../images/intagram.svg"
import metka from "../images/metka.svg"
import { Placemark, YMaps, Map } from '@pbe/react-yandex-maps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Footer from '../../components/Footer'

const Contact = () => {

    return (
        <>
            <div className='contactss'>
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
            </div>
            <div className='location'>
                <div className='locationDiv'>
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

                    <a  rel="noreferrer" 
                    href="https://yandex.uz/maps/org/bellissimo_pizza/69195717210/?ll=69.329099%2C41.315025&utm_campaign=desktop&utm_medium=search&utm_source=maps&z=16.76"
                        target='_blank'
                        className='notHover'
                    >
                        <div className="map">
                            <YMaps>
                                <Map
                                    width='1347px'
                                    height="494px"
                                    defaultState={{ center: [41.315025, 69.329099], zoom: 15 }}
                                    className="grayscale"
                                >
                                    <Placemark
                                        options={{
                                            iconLayout: "default#image",
                                            iconImageHref: metka,
                                            iconImageSize: [32, 61],
                                            iconColor: "red",
                                        }}
                                        geometry={[41.315025, 69.329099]}
                                        iconImageOffset={[-0, -0]}
                                        // Offset of the layer with content relative to the layer with the image.
                                        iconContentOffset={[0, 0]}
                                    />
                                </Map>
                            </YMaps>

                            <div></div>

                        </div>
                    </a>
                </div>
                <Footer />
            </div>

        </>
    )
}

export default Contact