module.exports = (sequelize, DataTypes) => {
    const Gig = sequelize.define('gig', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
	    songkickId: DataTypes.INTEGER,
	    songkickJson: DataTypes.STRING,
    }, {
        freezeTableName: true,
	    charset: 'utf8',
	    collate: 'utf8_unicode_ci'
    });

	Gig.associate = function (models) {
		Gig.belongsToMany(models.user, {as: 'User', foreignKey: 'gigId', through: 'users_gigs'});
	};

	return Gig;
}