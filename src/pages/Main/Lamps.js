import React from 'react'
import ret1 from "../images/Rectangle 1.png"
import ret2 from "../images/Rectangle 2.png"
import ret3 from "../images/Rectangle 3.png"
import ret4 from "../images/Rectangle 4.png"
import ret5 from "../images/Rectangle 5.png"
import ret6 from "../images/Rectangle 6.png"
import ret7 from "../images/Rectangle 7.png"
import ret8 from "../images/Rectangle 8.png"
import { useNavigate } from 'react-router-dom'

function Lamps({setImg, height}) {

    const navigate = useNavigate()

    const naviget  = () => {
        navigate("about", {replace: true})
    }
    return (
        <div className="katalogDiv">
            <div className="card" onClick={()=>{
                setImg(ret1)
                naviget()
            }}>
                <div className="center">
                    <img src={ret1} alt="rtgl" />
                </div>
                <p>
                    Ковер Electra 8514 серый
                </p>
                <p className="sum">
                    от 999 000 сум
                </p>
            </div>
            <div className="card" onClick={()=>{
                setImg(ret2)
                naviget()
            }}>
                <div className="center">
                    <img src={ret2} alt="rtgl" />
                </div>
                <p>
                    Ковер Electra 8514 серый
                </p>
                <p className="sum">
                    от 999 000 сум
                </p>
            </div>
            <div className="card" onClick={()=>{
                setImg(ret3)
                naviget()
            }}>
                <div className='center'>
                    <img  src={ret3} alt="rtgl" />
                </div>
                <p>
                    Ковер Electra 8514 серый
                </p>
                <p className="sum">
                    от 999 000 сум
                </p>
            </div>
            <div className="card" onClick={()=>{
                setImg(ret4)
                naviget()
            }}>
                <div>
                    <img src={ret4} alt="rtgl" />
                </div>
                <p>
                    Ковер Electra 8514 серый
                </p>
                <p className="sum">
                    от 999 000 сум
                </p>
            </div>
            <div className="card" onClick={()=>{
                setImg(ret5)
                naviget()
            }}>
                <div className="center">
                    <img src={ret5} alt="rtgl" />
                </div>
                <p>
                    Ковер Electra 8514 серый
                </p>
                <p className="sum">
                    от 999 000 сум
                </p>
            </div>
            <div className="card" onClick={()=>{
                setImg(ret6)
                naviget()
            }}>
                <div>
                    <img src={ret6} alt="rtgl" />
                </div>
                <p>
                    Ковер Electra 8514 серый
                </p>
                <p className="sum">
                    от 999 000 сум
                </p>
            </div>
            <div className="card" onClick={()=>{
                setImg(ret7)
                naviget()
            }}>
                <div>
                    <img src={ret7} alt="rtgl" />
                </div>
                <p>
                    Ковер Electra 8514 серый
                </p>
                <p className="sum">
                    от 999 000 сум
                </p>
            </div>
            <div className="card" onClick={()=>{
                setImg(ret8)
                naviget()
            }}>
                <div>
                    <img src={ret8} alt="rtgl" />
                </div>
                <p>
                    Ковер Electra 8514 серый
                </p>
                <p className="sum">
                    от 999 000 сум
                </p>
            </div>
            <div className="card" onClick={()=>{
                setImg(ret2)
                naviget()
            }}>
                <div className="center">
                    <img src={ret2} alt="rtgl" />
                </div>
                <p>
                    Ковер Electra 8514 серый
                </p>
                <p className="sum">
                    от 999 000 сум
                </p>
            </div>
            <div className="card" onClick={()=>{
                setImg(ret7)
                naviget()
            }}>
                <div>
                    <img src={ret7} alt="rtgl" />
                </div>
                <p>
                    Ковер Electra 8514 серый
                </p>
                <p className="sum">
                    от 999 000 сум
                </p>
            </div>
            <div className="card" onClick={()=>{
                setImg(ret4)
                naviget()
            }}>
                <div>
                    <img src={ret4} alt="rtgl" />
                </div>
                <p>
                    Ковер Electra 8514 серый
                </p>
                <p className="sum">
                    от 999 000 сум
                </p>
            </div>
            <div className="card" onClick={()=>{
                setImg(ret5)
                naviget()
            }}>
                <div>
                    <img src={ret5} alt="rtgl" />
                </div>
                <p>
                    Ковер Electra 8514 серый
                </p>
                <p className="sum">
                    от 999 000 сум
                </p>
            </div>

        </div>
    )
}

export default Lamps