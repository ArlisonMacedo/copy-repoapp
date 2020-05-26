module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5433',
  username: 'postgres',
  password: 'root',
  database: 'copy_repoapp',
  define: {
    timesTamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
