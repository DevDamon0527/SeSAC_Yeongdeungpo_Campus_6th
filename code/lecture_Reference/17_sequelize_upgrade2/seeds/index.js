const TeamData = [
  // team_id (pk) is auto increment
  { name: 'SK' },
  { name: 'KT' },
  { name: 'NC' },
  { name: 'LG' },
];

const PlayerData = [
  // player_id (pk) is auto increment
  { name: '홍길동', age: 20, team_id: 1 },
  { name: '성춘향', age: 21, team_id: 3 },
  { name: '김첨지', age: 22, team_id: 2 },
  { name: '김수지', age: 23, team_id: 4 },
  { name: '강민재', age: 19, team_id: 1 },
  { name: '황찬수', age: 28, team_id: 1 },
  { name: '이장우', age: 24, team_id: 2 },
  { name: '박나래', age: 30, team_id: 3 },
];

const ProfileData = [
  // profile_id (pk) is auto increment
  { position: '1B', salary: 100, player_id: 1 },
  { position: '2B', salary: 150, player_id: 2 },
  { position: '3B', salary: 80, player_id: 3 },
  { position: 'LF', salary: 200, player_id: 4 },
  { position: '1B', salary: 100, player_id: 5 },
  { position: '2B', salary: 150, player_id: 6 },
  { position: '3B', salary: 80, player_id: 7 },
  { position: 'LF', salary: 200, player_id: 8 }
];

const GameData = [
  // game_id (pk) is auto increment
  { date: '2023-10-1', location: 'Seoul' },
  { date: '2023-10-3', location: 'London' },
  { date: '2023-10-5', location: 'LA' },
]

const TeamGameData = [
  // id (pk) is auto increment
  { team_id: 1, game_id: 1 },
  { team_id: 2, game_id: 1 },
  { team_id: 2, game_id: 2 },
  { team_id: 3, game_id: 2 },
  { team_id: 1, game_id: 3 },
  { team_id: 3, game_id: 3 },
]

module.exports = {
  TeamData,
  PlayerData,
  ProfileData,
  GameData,
  TeamGameData
};
