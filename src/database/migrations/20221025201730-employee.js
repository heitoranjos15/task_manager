'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('employee', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      job: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('employee')
  }
};
