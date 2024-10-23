import React from 'react';
//para receber e enviar informaçoes
import PropTypes from 'prop-types';
//Form
import { FaPlus } from 'react-icons/fa';
//css
import './Form.css';

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (
    <form action="#" onSubmit={handleSubmit} className="form">
      <input onChange={handleChange} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

//receber informaçoes de outros components atraves do proptypes
Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
