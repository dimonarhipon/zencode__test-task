import React from 'react'
import clases from './SelectColor.module.css'

class SelectColor extends React.Component {
  state = {
    colors: [
      { id: 100, color: "#e53935"},
      { id: 101, color: "#303F9F"},
      { id: 102, color: "#388E3C"},
    ],
    counter: 103,
    input: "#FFEA00",
  }
  addColor = () => {
    let counter = this.state.counter + this.state.colors.length;
    let input = this.state.input;
    let colors = { id: ++counter, color: input };
    this.state.colors.push(colors);
    // Не срабатывает присваивание пустому значению, не знаю почему
    input = ' ';
    this.setState(colors);
  }
  deleteColor = id => {
    let item = this.state.colors.filter(item => item.id !== id)
    this.setState({ colors: item })
  }
  handlerColor = (event) => {
    let color = event.target.value
    this.setState({input: color})
    console.log(this.state)
  }
  render() {
    return (
      <section className={clases.color}>
        <div className={clases.row}>
          <input type="color" onChange={this.handlerColor} value={this.state.input}  />
          <button onClick={this.addColor}>Добавить</button>
        </div>
        {this.state.colors.map(({ id, color }) => (
          <div id={id} key={id} className={clases.row}>
            <input type="color" value={color} />
            <button onClick={() => this.deleteColor(id)} className={clases.close}>X</button>
          </div>
        ))}
        <button onClick={() => this.props.closeModalColor()}>Закрыть</button>
      </section>
    )
  }
}
export default SelectColor