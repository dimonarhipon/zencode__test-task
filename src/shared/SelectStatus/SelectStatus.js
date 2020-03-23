import React, {Fragment} from 'react'
import clases from './SelectStatus.module.css'
import Button from '../../components/Button/Button'

let SelectStatus = (props) => {
  return (
    <Fragment>
      <div className={clases.row}>
        <input type={props.type} />
        <input 
          type="text" 
          onChange={props.handlerChange} 
          onKeyPress={props.handleEnter} 
          value={props.value}/>
        <br />
        <Button onClick={props.add}>Добавить</Button>
      </div>
      {props.data.map(({ id, text }) => (
        <div id={id} key={id} className={clases.row}>
          <p>{text}</p>
          <Button onClick={() => props.delete(id)} className={clases.close}>X</Button>
        </div>
      ))}
    </Fragment>
  )
}
export default SelectStatus
