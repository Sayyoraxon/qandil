import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark} from '@fortawesome/free-solid-svg-icons'

const Dialog = ({img, setDialog}) => {
  return (
    <div className='dialog'>
       <button className='close' onClick={()=>setDialog(false)}>
          <FontAwesomeIcon icon={faCircleXmark} size='lg'/>
        </button>
      
      <div>          
        <div className='lineardiv'>
          <img src={img} alt="imge" />
          <div>
            <h1>
              Ponte 7508
            </h1>
            <p>
              The question isn't who is going to let me. It's who is going to stop me.
            </p>
          </div>
        </div>
        <div className='form'>
          <h2>
             Мы перезвоним
          </h2>
          <p>
            Если у вас возникли затруднения в выборе, оставьте свои контактные данные и мы вам поможем!
          </p>
            <input type='text' placeholder='Имя' />
          
            <input type='text' placeholder='место заказа' />
          
            <input type='text' defaultValue="+998" />
        
          <div style={{textAlign: "center", marginBottom: "50px"}}>
            <button>
          Отправить для обратного звонка
          </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Dialog