import React, { Component } from 'react';

class TodoItens extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.delete = this.delete.bind(this);
  }

  delete(key) {
    this.props.delete(key); //recebendo a chave e enviando para o props
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.lista.map((item) => {
            return (
              <li
                key={item.key}
                onClick={() => this.delete(item.key)}
              >
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoItens;