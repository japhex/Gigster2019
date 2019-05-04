module.exports = (sequelize, DataTypes) => {
    const Gig = sequelize.define('gig', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
	    artist: DataTypes.STRING,
        date: DataTypes.DATE,
	    venue: DataTypes.STRING,
	    location: DataTypes.STRING,
    }, {
        freezeTableName: true
    });

	Gig.associate = function (models) {
		Gig.hasMany(models.support, {as: 'Supports', foreignKey: 'gigId'});
		Gig.belongsToMany(models.user, {as: 'User', foreignKey: 'gigId', through: 'users_gigs'});
	};

	return Gig;
}