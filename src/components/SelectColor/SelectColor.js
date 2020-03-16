import React, { Fragment } from 'react'
import clases from './SelectColor.module.css'

let SelectColor = (props) => {
  return (
    <Fragment>
      <div className={clases.row}>
        <input 
          type={props.type} 
          onChange={props.handlerChange} 
          value={props.input}  
        />
        <input 
          type="text" 
          onChange={props.handlerChangeTitle} 
          value={props.value}/>
        <br />
        <button onClick={props.add}>Добавить</button>
      </div>
      {props.data.map(({ id, color, title }) => (
        <div id={id} key={id} className={clases.row}>
          <input type="color" value={color} />
          {title}
          <button onClick={() => props.delete(id)} className={clases.close}>X</button>
        </div>
      ))}
    </Fragment>
  )
}
export default SelectColor