// reference: https://gngsn.tistory.com/71?category=851217
'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

//모델
const Player = require('./Player')(sequelize);
const Profile = require('./Profile')(sequelize);
const Team = require('./Team')(sequelize);
const Game = require('./Game')(sequelize);
const TeamGame = require('./TeamGame2')(sequelize);

// 관계 형성
// 1) Player : Profile = 1 : 1
Player.hasOne(Profile, {
  // delete, update cascade setting
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  // fk 이름 다르게 설정 (else fk name is 'PlayerPlayerId')
  foreignKey: 'player_id',
  sourceKey: 'player_id',
});
Profile.belongsTo(Player, {
  // fk 이름 다르게 설정 (else fk name is 'PlayerPlayerId')
  foreignKey: 'player_id',
  targetKey: 'player_id',
});

// 2) Team : Player = 1 : N
Team.hasMany(Player, {
  foreignKey: 'team_id',
  sourceKey: 'team_id',
});
Player.belongsTo(Team, {
  foreignKey: 'team_id',
  targetKey: 'team_id',
});

// 3) Team : Game = N : M
// case1
Team.hasMany(TeamGame, { foreignKey: 'team_id' });
TeamGame.belongsTo(Team, { foreignKey: 'team_id' });
Game.hasMany(TeamGame, { foreignKey: 'game_id' });
TeamGame.belongsTo(Game, { foreignKey: 'game_id' });
// case2
// Team.belongsToMany(Game, {
//   through: TeamGame,
//   foreignKey: 'team_id',
//   otherKey: 'game_id',
// });
// Game.belongsToMany(Team, {
//   through: TeamGame,
//   foreignKey: 'game_id',
//   otherKey: 'team_id',
// });

db.Player = Player;
db.Profile = Profile;
db.Team = Team;
db.Game = Game;
db.TeamGame = TeamGame;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

/*

foreignKey, sourceKey, targetKey, otherKey는 Sequelize에서 모델 간 관계를 정의할 때 사용되는 키 값입니다. 
이들은 데이터베이스 테이블 간의 외래 키(Foreign Key) 관계를 설정하는 데 사용됩니다. 아래에서 각각의 의미와 역할을 자세히 설명하겠습니다.

foreignKey:
foreignKey는 현재 모델에서 외래 키(Foreign Key)로 사용될 컬럼을 지정합니다.
관계를 형성하는 다른 모델과의 연결에 대한 외래 키 컬럼을 명시적으로 지정할 수 있습니다.
이를 통해 기본적으로 생성되는 외래 키 이름 대신 원하는 컬럼 이름을 사용할 수 있습니다.

sourceKey:
sourceKey는 현재 모델과 연결된 다른 모델에서 찾아야 하는 소스(원본) 컬럼을 지정합니다.
보통 기본적으로 생성되는 외래 키인 경우, 해당 컬럼이 소스(원본) 컬럼이 됩니다.
하지만, 원하는 다른 컬럼을 소스(원본) 컬럼으로 사용하고자 할 때 명시적으로 지정할 수 있습니다.

targetKey:
targetKey는 현재 모델과 연결된 다른 모델에 있는 대상(Target) 컬럼을 지정합니다.
보통 기본적으로 생성되는 와일드카드(fk_name + id 등)가 아닌 다른 대상(Target) 컬럼을 사용하고자 할 때 명시적으로 지정할 수 있습니다.

otherKey:
M:N (다대다) 관계에서만 해당됩니다.
중간(joining) 모델에 있는 타겟(Target)컬럼을 나타냅니다.
즉, 두 개의 M:N 관계를 맺고 있는 중간(joining table 또는 model)에서 타겟(Target: 해당 예제에서 TeamGame 에서 game_id 가 해당됨.)커맨드로 쓰입니다.
위 설명은 Sequelize에서 일반적으로 사용되는 용어 및 규칙에 따라 해석한 것입니다. 그러나 실제 프로젝트나 데이터베이스 스키마에 따라 조금씩 달라질 수도 있으므로, 실제 코드와 데이터베이스 구조에 맞게 설정해야 합니다.

Sequelize 문서 (https://sequelize.org/master/manual/associations.html#foreign-keys_1 ) 에서도 이러한 용어들과 함께 자세한 내용 및 예제를 확인하실 수 있으니 찾아보시면 도움이 될 것입니다

*/
