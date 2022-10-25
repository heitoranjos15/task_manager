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
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      employee: {
        type: DataTypes.INTEGER,
        references: 'employee',
        referencesKey: 'id',
        allowNull: false
      }
    },
    {
      tableName: 'task',
      createdAt: 'create_at',
      updatedAt: 'updated_at',
      timestamp: true
    }
  )
