import ReactDOM from 'react-dom';
import React from 'react';
import classes from './CartModal.module.css'
const ModalOverlay = (props)=>{

    return(<div className={classes.modal}>{props.children}</div>)
}


const CartModal = (props)=>{

    const cartdiv = document.getElementById('cart')
    return(<>
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,cartdiv)}
    </>
    )
}
export default CartModal;