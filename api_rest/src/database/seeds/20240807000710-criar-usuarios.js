const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'James',
        email: 'james@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'James 2',
        email: 'james2@gmail.com',
        password_hash: await bcryptjs.hash('67552', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'James 3',
        email: 'james3@gmail.com',
        password_hash: await bcryptjs.hash('178234', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
