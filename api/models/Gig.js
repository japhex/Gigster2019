module.exports = (sequelize, DataTypes) => {
    const gig = sequelize.define('gig', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        band: DataTypes.STRING,
        date: DataTypes.DATE,
	    venue: DataTypes.STRING,
	    location: DataTypes.STRING,
    }, {
        freezeTableName: true
    });

	gig.associate = function (models) {
		gig.hasMany(models.support, {as: 'Supports', foreignKey: 'gigId'});
	};

	return gig;
}