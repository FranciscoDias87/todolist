import React, { Component } from 'react';
import TodoItens from '../TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefa: '',
      itens: []
    }
    this.addItem = this.addItem.bind(this);
    this.log = this.log.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }

  addItem(event) {
    event.preventDefault();
    let state = this.state;
    if (this._tarefaInput.value !== '') { //verificando se o valor do item está vazio, caso true add o item
      let newItem = {
        text: this._tarefaInput.value,
        key: Date.now()
      }; //novo item dentro do array                         
      this.setState({ itens: [...state.itens, newItem] }); //listando o array com o novo item
    }
    this.setState({ tarefa: '' }); // limpando o input apos clicar em adicionar
  }

  log() {
    console.log(this.state.itens);
  }

  deleteItem(key) {
    console.log('Item a ser deletado: ' + key);
    let filtro = this.state.itens.filter((item) => { //faz o filtro dos itens
      return (item.key !== key);                     //se a chave do item clicado for diferente
    })                                               //das outras chaves, então item clicado sera deletado
    this.setState({ itens: filtro });                 //aqui atualiza a lista com itens restantes
  }

  render() {
    return (
      <div>
        <h2>TODO LIST</h2>
        <form
          onSubmit={this.addItem}
        >
          <input
            type='text'
            placeholder='Nova Tarefa'
            name='tarefa'
            value={this.state.tarefa}                                  //capturando o valor.
            onChange={
              (event) => this.setState({ tarefa: event.target.value }) //alterado o valor da state e mandado para o tarefa
            }
            ref={(event) => { this._tarefaInput = event }}             //referencia o input, para ter acesso e ajudar a manipular
          />
          <button
            type='submit'
          >
            Adicionar
          </button>
        </form>

        <button
          onClick={this.log}
        >
          LOG
        </button>

        <TodoItens
          lista={this.state.itens}
          delete={this.deleteItem}
        />

      </div>
    );
  }
}

export default TodoList;