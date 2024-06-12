const express = require('express');
const app = express();
const PORT = 8000;
const {
  sequelize,
  Player,
  Profile,
  Team,
  Game,
  TeamGame,
} = require('./models');
const {
  PlayerData,
  ProfileData,
  TeamData,
  GameData,
  TeamGameData,
} = require('./seeds');
const router = require('./routes');
const player = require('./routes/player');
const team = require('./routes/team');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);
app.use('/players', player);
app.use('/teams', team);

async function insertSeedsToDb() {
  await Team.bulkCreate(TeamData);
  await Game.bulkCreate(GameData);
  await TeamGame.bulkCreate(TeamGameData);
  await Player.bulkCreate(PlayerData);
  await Profile.bulkCreate(ProfileData);
}

sequelize
  // force: true; 서버 실행마다 테이블 재생성
  // force: false; 서버 실행시 테이블 없으면 생성
  .sync({ force: true })
  // .sync({ alter: false })
  //.sync()
  .then(() => {
    // Insert seed data when server starts
    // Warning: Ordered data addition based on table relationships

    // Promise.all(): 순서 보장 안됨.
    // return Promise.all([
    //   Team.bulkCreate(TeamData),
    //   Game.bulkCreate(GameData),
    //   TeamGame.bulkCreate(TeamGameData),
    //   Player.bulkCreate(PlayerData),
    //   Profile.bulkCreate(ProfileData),
    // ])

    // db에 테이블간 관계 순서대로 임시 데이터 추가
    return insertSeedsToDb();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log('Database connection succeeded!');
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });

// sync({option}) ?
// Sequelize 모델을 기반으로 데이터베이스 테이블을 생성하거나 업데이트하는 데 사용
// force: true: force가 true로 설정되면 Sequelize는 모델에 해당하는 모든 기존 테이블을 삭제하고 현재 모델 정의에 따라 다시 생성합니다. 이는 해당 테이블의 모든 데이터가 영구적으로 손실된다는 것을 의미합니다. 이 옵션은 업데이트된 모델 정의와 일치하도록 데이터베이스 스키마를 신속하게 재설정하려는 개발 또는 테스트 단계에서 유용할 수 있습니다.
