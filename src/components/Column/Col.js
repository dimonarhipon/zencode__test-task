import React, { Fragment } from 'react'
import Input from '../Input/Input'
import clases from './Col.module.css'

let Column = props => {
  return (
    <Fragment>
      <tr className={clases.column}>
        <th className={clases.title}>
          <Input 
            title={props.titleName || props.titleProject || props.titleStatus} 
            changeTitleName={props.changeTitleName}
            changeTitleProject={props.changeTitleProject}
            changeTitleStatus={props.changeTitleStatus}  />
        </th>
        <td className={clases.cell}>
          <Input 
            text={props.textName1 || props.textProject1 || props.textStatus1} 
            changeTextName1={props.changeTextName1} 
            changeTextProject1={props.changeTextProject1}
            changeTextStatus1={props.changeTextStatus1}/>
        </td>
        <td className={clases.cell}>
          <Input 
            text={props.textName2 || props.textProject2 || props.textStatus2} 
            changeTextName2={props.changeTextName2}
            changeTextProject2={props.changeTextProject2}
            changeTextStatus2={props.changeTextStatus2}
          />
        </td>
        <td className={clases.cell}>
          <Input 
            text={props.textName3 || props.textProject3 || props.textStatus3} 
            changeTextName3={props.changeTextName3}
            changeTextProject3={props.changeTextProject3}
            changeTextStatus3={props.changeTextStatus3}/>
        </td>
      </tr>
    </Fragment>
  )
}
export default Column
