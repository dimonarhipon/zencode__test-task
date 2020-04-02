import React from 'react'
import clases from './Modal.module.css'
import Button from '../Button/Button'
import SelectStatus from '../../shared/SelectStatus/SelectStatus'
import SelectColor from '../../shared/SelectColor/SelectColor'

let Modal = props => {
  if (props.isOpen === false) return null
  return (
    <section className={clases.modal}>
      {!props.type ? <SelectStatus /> : <SelectColor type={props.type} />}
      <Button onClick={() => props.onClose(false)}>Закрыть</Button>
    </section>
  )
}
export default Modal
