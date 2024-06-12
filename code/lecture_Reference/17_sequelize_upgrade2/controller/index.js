const { Player, Profile, Team, Game, TeamGame } = require('../models');
const { Op } = require('sequelize');

exports.index = (req, res) => {
  res.render('index');
};

// 다대다 확인
exports.getTeamGames = async (req, res) => {
  try {
    const teamGames = await TeamGame.findAll({
      include: [{ model: Team }, { model: Game }],
    });
    res.json(teamGames);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
