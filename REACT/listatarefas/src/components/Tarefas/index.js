import React from 'react';
//para receber e enviar informaçoes
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Tarefas.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit
              onClick={(e) => handleEdit(e, index)} //indice do array  | ex.o numero da tarefa que quero EDITAR
              className="edit"
            />

            <FaWindowClose
              onClick={(e) => handleDelete(e, index)} //indice do array | ex.o numero da tarefa que quero REMOVER
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
