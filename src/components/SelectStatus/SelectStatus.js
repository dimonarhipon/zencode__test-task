import React from 'react'
import clases from './SelectStatus.module.css'

let SelectStatus = (props) => {
  return (
    <section className={clases.status}>
      <div className={clases.row}>
        <input onChange={props.handlerChangeStatus} onKeyPress={props.handleEnter} value={props.dataStatus.input}/>
        <button onClick={props.addStatus}>Добавить</button>
      </div>
      {props.dataStatus.statuses.map(({ id, text }) => (
        <div id={id} key={id} className={clases.row}>
          <p>{text}</p>
          <button onClick={() => props.deleteStatus(id)} className={clases.close}>X</button>
        </div>
      ))}
      <button onClick={() => props.closeModalStatus()}>Закрыть</button>
    </section>
  )
}
export default SelectStatus
