module.exports = function(sequelize, DataTypes) {
    var UserGigs = sequelize.define('user_gigs', {
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        freezeTableName: true,
	    charset: 'utf8',
	    collate: 'utf8_unicode_ci'
    });
  
    return UserGigs;
  }