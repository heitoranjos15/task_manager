'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('employee', [
      {
        name: 'John',
        job: 1,
        username: 'john',
        password: 'manager',
      },
      {
        name: 'Josh',
        job: 2,
        username: 'josh',
        password: 'josh',
      },
      {
        name: 'Jim',
        job: 2,
        username: 'Jim',
        password: 'jim',
      },
      {
        name: 'Joe',
        job: 2,
        username: 'joe',
        password: 'joe',
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('employee', null, {});
  }
};
