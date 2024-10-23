module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn(
      'alunos', // tabela
      'email', // coluna
      { // alteraçoes
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    );
  },

  down: () => {

  },
};
