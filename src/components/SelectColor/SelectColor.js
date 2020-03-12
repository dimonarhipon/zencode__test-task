import React from 'react'
import clases from './SelectColor.module.css'

class SelectColor extends React.Component {
  state = {
    colors: [
      { id: 100, color: 1},
      { id: 101, color: 2},
      { id: 102, color: 3},
    ],
    counter: 103,
    input: '',
  }
  addColor = () => {
    let counter = this.state.counter;
    let input = this.state.input;
    let colors = { id: ++counter, color: input };
    this.state.colors.push(colors);
    // Не срабатывает присваивание пустому значению, не знаю почему
    input = ' ';
    this.setState(colors);
  }
  deleteColor = id => {
    let item = this.state.statuses.filter(item => item.id !== id)
    this.setState({ statuses: item })
  }
  handlerColor = () => {
    console.log(1)
  }
  render() {
    return (
      <section className={clases.color}>
        <div className={clases.row}>
          <input type="color" onChange={this.handlerColor} />
          <button onClick={this.addColor}>Добавить</button>
        </div>
        {this.state.colors.map(({ id, color }) => (
          <div id={id} key={id} className={clases.row}>
            <p>{color}</p>
            <button onClick={() => this.deleteColor(id)} className={clases.close}>X</button>
          </div>
        ))}
        <button onClick={() => this.props.closeModalColor()}>Закрыть</button>
      </section>
    )
  }
}
export default SelectColor