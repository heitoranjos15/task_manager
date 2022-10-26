export = (sequelize: any, DataTypes: any) =>
  sequelize.define('Task',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      summary: {
        type: DataTypes.STRING(2500),
        allowNull: false
      },
      datePerformed: {
        type: DataTypes.DATE,
        allowNull: false
      },
      employeeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'employee',
          key: 'id'
        },
        allowNull: false
      }
    },
    {
      tableName: 'task',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      timestamp: true
    }
  )
