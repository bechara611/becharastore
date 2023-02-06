
import React from 'react'
import Modal from 'react-modal'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');
export const ModalProductos = () => {

    const onCloseModal = () => {
        console.log('cerrando modal')

    }
    return (
        <>
            <Modal
                isOpen={true}
                onRequestClose={onCloseModal}
                style={customStyles}
                className='modal'
                overlayClassName='modal-fondo'
                closeTimeoutMS={200}
            >
                <h1>Hola Mundo</h1>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, perferendis!</p>
            </Modal>
        </>
    )
}
