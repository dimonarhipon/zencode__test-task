import React from 'react'
import clases from './SelectColor.module.css'

let SelectColor = (props) => {
  return (
    <section className={clases.color}>
      <div className={clases.row}>
        <input type="color" onChange={props.handlerChangeColor} 
        value={props.dataColor.input}  
        />
        <input type="text" onChange={props.handlerChangeTitleColor} value={props.dataColor.title}/>
        <br />
        <button onClick={props.addColor}>Добавить</button>
      </div>
      {props.dataColor.colors.map(({ id, color, title }) => (
        <div id={id} key={id} className={clases.row}>
          <input type="color" value={color} />
          {title}
          <button onClick={() => props.deleteColor(id)} className={clases.close}>X</button>
        </div>
      ))}
      <button onClick={() => props.closeModalColor()}>Закрыть</button>
    </section>
  )
}
export default SelectColor