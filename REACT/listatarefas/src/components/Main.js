import React, { Component } from 'react';

import Tarefas from './Tarefas'; //importar o componente TAREFAS
import Form from './Form'; //importar o componente FORM
import './Main.css';

export default class Main extends Component {
  state = {
    // criar os estados possiveis para trabalhar/manipular
    novaTarefa: '',
    tarefas: [],
    index: -1, //-1 equivale a nao esta a editar, se for !== de -1 equivale a estar a editar
  };

  //salvar apos o componentDidUpdate no local storage as tarefas criadas
  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    if (!tarefas) return;
    this.setState({ tarefas });
  }
  //para salvar no localStorage
  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;
    if (tarefas === prevState.tarefas) return;
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }
  // Evente de Submit do form
  handleSubmit = (e) => {
    e.preventDefault(); // parar o processo de carregar a pagina cada vez que carrego no submit(boas praticas)
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim(); // eliminar os espaços com trim

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];
    if (index === -1) {
      // se o estado for NAO EDITADO
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
    } else {
      // se quiser EDITAR
      novasTarefas[index] = novaTarefa; // pegar no index das novas tarefas criadas e criar uma nova tarefa

      this.setState({
        //dar upload ao estado das novasTarefas carregando tarefas
        tarefas: [...novasTarefas],
        index: -1, // e por fim volvar a colocar o index a -1(equivale a definido ou nao editado)
      });
    }
  };

  //utilizar arrow function para aceder ao this(metodo construtor ou objeto)
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };
  //EDITAR TAREFAS
  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  //ELIMINAR TAREFAS
  handleDelete = (e, index) => {
    const { tarefas } = this.state; // procurar as tarefas e colocar no state
    const novasTarefas = [...tarefas]; // apos isso carregar as tarefas do state em novasTarefas
    novasTarefas.splice(index, 1); // eliminar as tarefas pelo indice
    this.setState({
      //atualizar as tarefas
      tarefas: [...novasTarefas],
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />
        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
