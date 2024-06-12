const { Player, Profile, Team, Game, TeamGame } = require('../models');
const { Op } = require('sequelize');

exports.getTeams = async (req, res) => {
  try {
    // const teams = await Team.findAll();
    const { sort, search } = req.query;
    console.log(req.query);
    let teams;

    if (sort === 'name_asc') {
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
        order: [['name', 'ASC']],
      });
    } else if (search) {
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
        where: {
          name: { [Op.like]: '%' + search + '%' },
        },
      });
    } else {
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
      });
    }

    res.json(teams);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.getTeam = async (req, res) => {
  try {
    const { team_id } = req.params;
    const team = await Team.findOne({
      where: { team_id },
    });

    res.json(team);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.getTeamPlayers = async (req, res) => {
  try {
    const { team_id } = req.params;
    const team = await Team.findOne({
      where: { team_id },
      include: [{ model: Player }],
    });

    res.json(team);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
