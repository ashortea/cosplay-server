module.exports=(sequelize, Datatypes) =>{
    const Cosplay= sequelize.define('cosplay', {
        image:{
            type: Datatypes.STRING,
            allowNull: false
        },
        caption: {
            type: Datatypes.STRING,
            allowNull: false
        },
        owner: {
            type: Datatypes.INTEGER,
            allowNull: false
        }
    })
    return Cosplay; 
}