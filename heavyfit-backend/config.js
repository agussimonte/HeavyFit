import Sequelize from 'sequelize';

const conexion = new Sequelize('sql10607002', 'sql10607002', 'pyj2Hp7Qeq', {
  host: 'sql10.freemysqlhosting.net',
  dialect: 'mysql',
});

export default conexion;