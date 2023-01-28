import React, { useEffect, useRef, useState } from 'react'
import { FloatButton } from 'antd'
import { FaArrowCircleUp } from 'react-icons/fa'

import {
    QuestionOutlined,
    MessageFilled,
    AreaChartOutlined,
    InstagramOutlined
} from '@ant-design/icons'
import { render } from '@testing-library/react'

const FloatBtn = () => {

    // const root = useRef();

    // useEffect(() => {
    //     const onClick = e => root.current.contains(e.target) || close();
    //     document.addEventListener('click', onClick);
    //     return () => document.removeEventListener('click', onClick);
    // }, []);

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <div className='flex'>
                <FloatButton.Group
                    className='FloatingIconQuestion'
                    trigger='click'
                    icon={<QuestionOutlined />}
                    tooltip="CHAT"
                >
                    <FloatButton className='FloatingIconMessage' icon={<MessageFilled />} onClick={() => {
                        render(
                            <dialog open className='dialogModal' >
                                <div className='dialogShapka'>
                                    <h1 style={
                                        {
                                            fontSize: "14px",
                                            padding: "10px",
                                            fontFamily: "Bold"
                                        }
                                    }>
                                        <i>
                                            ELEAN
                                        </i>
                                    </h1>
                                </div>
                                <main className='mainPartChat'>
                                    <div className='main_text'>

                                    </div>
                                    <form className='messageform main-overlay'>
                                        <input className='message-inp' type="text" placeholder='Введите текст'
                                        />
                                        <FaArrowCircleUp style={{
                                            position: "absolute",
                                            right: "4%",
                                            bottom: "4%",
                                            fontSize: "30px",
                                            fill: "#fff",
                                            backgroundColor: "orange",
                                            borderRadius: "16px",
                                            cursor: "pointer"
                                        }} />
                                    </form>
                                </main>
                            </dialog>
                        )
                    }} />
                    <FloatButton className='FloatingIconArea' icon={<AreaChartOutlined />} />
                    <FloatButton className='FloatingIconInsta' icon={<InstagramOutlined />} />
                </FloatButton.Group>
            </div>
        </>
    )
}

export default FloatBtn