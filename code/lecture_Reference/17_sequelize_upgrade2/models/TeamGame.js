const { Sequelize } = require('sequelize');

const TeamGameModel = (sequelize) => {
  const TeamGame = sequelize.define(
    'TeamGame',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      freezeTableName: true,
    },
  );

  return TeamGame;
};

module.exports = TeamGameModel;
