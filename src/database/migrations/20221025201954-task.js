'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('task', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      summary: {
        type: Sequelize.DataTypes.STRING(2500),
        allowNull: false
      },
      date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      notified: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false
      },
      employeeId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'employee',
          },
          key: 'id'
        },
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
    return queryInterface.dropTable('task')
  }
};
;
