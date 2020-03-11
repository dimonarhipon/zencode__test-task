import React from 'react'
import clases from './SelectStatus.module.css'

class SelectStatus extends React.Component {
  state = {
    statuses: [
      { id: 0, text: 'Первый статус' },
      { id: 1, text: 'Второй статус' },
      { id: 2, text: 'Третий статус' },
    ],
    counter: 3,
    input: '',
  }
  addStatus = () => {
    let counter = this.state.counter;
    let input = this.state.input;
    let statuses = { id: ++counter, text: input };
    this.state.statuses.push(statuses);
    // Не срабатывает присваивание пустому значению, не знаю почему
    input = ' ';
    this.setState(statuses);
  }
  deleteStatus = id => {
    let item = this.state.statuses.filter(item => item.id !== id)
    this.setState({ statuses: item })
  }

  inputChange = event => {
    this.setState({ input: event.target.value })
  }

  handleEnter = event => {
    if (event.key === "Enter") this.addStatus();
  };
  render() {
    return (
      <section className={clases.status}>
        <div className={clases.row}>
          <input onChange={this.inputChange} onKeyPress={this.handleEnter} />
          <button onClick={this.addStatus}>Добавить</button>
        </div>
        {this.state.statuses.map(({ id, text }) => (
          <div id={id} key={id} className={clases.row}>
            <p>{text}</p>
            <button onClick={() => this.deleteStatus(id)} className={clases.close}>X</button>
          </div>
        ))}
      </section>
    )
  }
}
export default SelectStatus
