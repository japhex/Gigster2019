module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('user', {
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
        freezeTableName: true,
	    charset: 'utf8',
	    collate: 'utf8_unicode_ci'
    });

	User.associate = function (models) {
		User.belongsToMany(models.gig, {as: 'Gigs', foreignKey: 'userId', through: 'users_gigs'});
	};
  
    return User;
  }