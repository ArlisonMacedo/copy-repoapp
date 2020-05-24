import Sequelize, { Model } from 'sequelize';

class Repository extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        link: Sequelize.STRING,
        description: Sequelize.STRING,
        tags: Sequelize.ARRAY(Sequelize.TEXT),
      },
      {
        sequelize,
        tableName: 'repository',
      }
    );
  }
}

export default Repository;
