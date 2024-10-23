import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já existe',
        },
        validate: {
          isEmail: {
            msg: 'E-mail Inválido',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Idade precisa de ser um numero Inteiro',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa de ser um numero Inteiro ou de ponto flutuante',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura precisa de ser um numero Inteiro ou de ponto flutuante',
          },
        },
      },

    }, {
      sequelize,
    });
    return this;
  }

  // associar 1 aluno pode ter varias fotos = 1 para n
  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
