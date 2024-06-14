const TeamData = [
  // team_id (pk) is auto increment
  { name: 'SK' },
  { name: 'KT' },
  { name: 'NC' },
  { name: 'LG' },
];

const PlayerData = [
  // player_id (pk) is auto increment
  { name: '홍길동', age: 20, TeamId: 1 },
  { name: '성춘향', age: 21, TeamId: 3 },
  { name: '김첨지', age: 22, TeamId: 2 },
  { name: '김수지', age: 23, TeamId: 4 },
  { name: '강민재', age: 19, TeamId: 1 },
  { name: '황찬수', age: 28, TeamId: 1 },
  { name: '이장우', age: 24, TeamId: 2 },
  { name: '박나래', age: 30, TeamId: 3 },
];

const ProfileData = [
  // profile_id (pk) is auto increment
  { position: '1B', salary: 100, PlayerId: 1 },
  { position: '2B', salary: 150, PlayerId: 2 },
  { position: '3B', salary: 80, PlayerId: 3 },
  { position: 'LF', salary: 200, PlayerId: 4 },
  { position: '1B', salary: 100, PlayerId: 5 },
  { position: '2B', salary: 150, PlayerId: 6 },
  { position: '3B', salary: 80, PlayerId: 7 },
  { position: 'LF', salary: 200, PlayerId: 8 }
];

const GameData = [
  // game_id (pk) is auto increment
  { date: '2023-10-1', location: 'Seoul' },
  { date: '2023-10-3', location: 'London' },
  { date: '2023-10-5', location: 'LA' },
]

const TeamGameData = [
  // id (pk) is auto increment
  { TeamId: 1, GameId: 1 },
  { TeamId: 2, GameId: 1 },
  { TeamId: 2, GameId: 2 },
  { TeamId: 3, GameId: 2 },
  { TeamId: 1, GameId: 3 },
  { TeamId: 3, GameId: 3 },
]

module.exports = {
  TeamData,
  PlayerData,
  ProfileData,
  GameData,
  TeamGameData
};
