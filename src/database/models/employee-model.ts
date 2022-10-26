export = (sequelize: any, DataTypes: any) =>
  sequelize.define('Employee',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      job: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: 'employee',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      timestamp: true
    }
  )
