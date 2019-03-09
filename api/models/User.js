module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        freezeTableName: true
    });

	user.associate = function (models) {
		user.belongsToMany(models.gig, {as: 'Gigs', foreignKey: 'userId', through: 'users_gigs'});
	};
  
    return user;
  }