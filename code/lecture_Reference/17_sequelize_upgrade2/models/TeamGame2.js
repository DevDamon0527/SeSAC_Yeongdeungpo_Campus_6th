const { DataTypes } = require('sequelize');

const TeamGameModel = (sequelize) => {
  const TeamGame = sequelize.define(
    'TeamGame',
    {
      team_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      game_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    },
  );

  return TeamGame;
};

module.exports = TeamGameModel;
