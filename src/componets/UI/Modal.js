import ReactDOM from 'react-dom'

import classes from './Modal.module.css'

function Backdrop(props) {
  return <div className={classes.backdrop}></div>
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const portalModalElement = document.getElementById('overlays')

export function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />, 
        portalModalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalModalElement
      )}
    </>
  )
}
