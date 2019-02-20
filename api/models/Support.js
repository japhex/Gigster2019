module.exports = (sequelize, DataTypes) => {
    const support = sequelize.define('support', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        band: DataTypes.STRING
    }, {
        freezeTableName: true
    });

	return support;
}