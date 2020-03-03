import React from 'react'
import './App.css'

let App = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Фамилия Имя</th>
          <td>Имя 1</td>
          <td>Имя 1</td>
          <td>Имя 1</td>
        </tr>
        <tr>
          <th>Название проекта</th>
          <td>Проект 1</td>
          <td>Проект 2</td>
          <td>Проект 3</td>
        </tr>
        <tr>
          <th>Статус</th>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th colSpan="4">Февраль</th>
          <th colSpan="4">Март</th>
          <th colSpan="5">Апрель</th>
        </tr>
        <tr>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
        </tr>
        <tr>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </tfoot>
    </table>
  )
}

export default App
