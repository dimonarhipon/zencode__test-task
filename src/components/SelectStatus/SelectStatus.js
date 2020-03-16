import React, {Fragment} from 'react'
import clases from './SelectStatus.module.css'

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
        <button onClick={props.add}>Добавить</button>
      </div>
      {props.data.map(({ id, text }) => (
        <div id={id} key={id} className={clases.row}>
          <p>{text}</p>
          <button onClick={() => props.delete(id)} className={clases.close}>X</button>
        </div>
      ))}
    </Fragment>
  )
}
export default SelectStatus
