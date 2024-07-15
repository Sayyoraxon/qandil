import React from 'react'
import img from "../images/Rectangle 1.png"

const Dialog = ({img1}) => {
  return (
    <div className='dialog'>
        <div>
            <div className='lineardiv'>
              <img src={img} alt="image"/>
                <div>
                  <h1>
                    Ponte 7508
                  </h1>
                  <p>
                  The question isn't who is going to let me. It's who is going to stop me. 
                  </p>
                </div>
            </div>
            <div>
               <h2>
                    Понравился товар? Мы вам перезвоним!
                </h2>
                <p>
                  Если у вас возникли затруднения в выборе, оставьте свои контактные данные и мы вам поможем!
                </p>
                <label>
                Ваше имя
                  <input type='text' placeholder='Имя'/>
                </label>
                <label>
                Где живёте
                  <input type='text' placeholder='место заказа'/>
                </label>
                <label>
                Телефон
                  <input type='text' defaultValue="+998"/>
                </label>
            </div>
        </div>
    </div>
  )
}

export default Dialog