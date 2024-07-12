import React from 'react'
import Chandeliers from './Chandeliers'

function OutletCatalog() {
  return (
    <div className="catalogMain">
                <div>
                    <p class="title">
                        <span>Главная</span><span className='flx'>///</span>  
                        Каталог люстр
                    </p>
                    <h1>
                        Каталог
                    </h1>
                    <button className="active1">
                        Люстры
                    </button>
                    <button>
                        Светильники потолочные
                    </button>
                    <button>
                        Точечные светильники
                    </button>
                    <button>
                        Трековые системы
                    </button>
                    <button>
                        Бра и настенные
                    </button>
                    <button>
                        Торшеры
                    </button>
                    <button>
                        Настольные лампы
                    </button>
                    <button>
                        Уличные
                    </button>
                    <button>
                        Лампы
                    </button>
                    <button>
                        Акции
                    </button>
                </div>

                <Chandeliers/>
            </div>
  )
}

export default OutletCatalog