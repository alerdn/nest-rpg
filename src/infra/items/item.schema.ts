import * as dynamoose from 'dynamoose';

export const ItemSchema = new dynamoose.Schema({
  itemId: {
    type: String,
    hashKey: true,
  },
  name: String,
  type: String,
});
