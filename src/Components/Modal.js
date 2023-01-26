import React, { useState } from 'react'

const Modal = () => {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div>
            <button
                onClick={toggleModal}
                className='btn-modal'
            >Open</button>

            {modal && (
                <div className='modal'>
                    <div className='overlay'
                        onClick={toggleModal}
                    >

                    </div>
                    <div className='modal-content'>
                        <h2 > hello</h2>
                        <button className='close-modal'
                            onClick={toggleModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}


        </div>
    )
}

export default Modal