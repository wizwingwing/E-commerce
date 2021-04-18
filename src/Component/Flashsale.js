import React from 'react'
import flash from '../Image/flash.svg'

export default function Flashsale() {
    return (
        <div className="FlashSale-Container">
            <div className="flashsale-box-white">
                <div className="flash-text"></div>flash-text
                <p>Flash</p>
                <span>Sale</span>
                <div className="icon-flash">
                    <div className="icon-flash1">
                        <img src={flash} alt=""/>
                    </div>
                    <div className="icon-flash2">
                        <img src={flash} alt=""/>
                    </div>
                </div>
            </div>
            <div className="flashsale-box-blue">

            </div>
        </div>
    )
}
