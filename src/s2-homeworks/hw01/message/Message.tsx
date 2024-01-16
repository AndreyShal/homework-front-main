import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    // создаёт студент
                    src={props.message.user.avatar}
                    alt={props.message.user.avatar}
                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        {props.message.user.name}
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        {props.message.message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}
                {props.message.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default Message


const MessageImg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="454" height="100" viewBox="0 0 454 100" fill="none">
            <g filter="url(#filter0_dd_5_137)">
                <path d="M34.0002 25C34.0002 19.4772 38.4774 15 44.0002 15H424C429.523 15 434 19.4772 434 25V65C434 70.5228 429.523 75 424 75H34.0002H20L31.6502 67.7187C33.1121 66.8051 34.0002 65.2027 34.0002 63.4787V25Z" fill="#F5F7FB"/>
            </g>
            <defs>
                <filter id="filter0_dd_5_137" x="0" y="0" width="454" height="100" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.113725 0 0 0 0 0.129412 0 0 0 0 0.14902 0 0 0 0.1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_137"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="5"/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.113725 0 0 0 0 0.129412 0 0 0 0 0.14902 0 0 0 0.03 0"/>
                    <feBlend mode="normal" in2="effect1_dropShadow_5_137" result="effect2_dropShadow_5_137"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_5_137" result="shape"/>
                </filter>
            </defs>
        </svg>
    )
}
