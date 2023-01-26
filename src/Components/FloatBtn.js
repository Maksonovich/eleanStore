import React, { useState } from 'react'
import { FloatButton } from 'antd'
import Modal from './Modal'
import {
    QuestionOutlined,
    MessageFilled,
    AreaChartOutlined,
    InstagramOutlined
} from '@ant-design/icons'
import { render } from '@testing-library/react'

const FloatBtn = () => {

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
                            <div className='ModalChat'>
                                
                            </div>
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