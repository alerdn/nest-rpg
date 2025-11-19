import * as dynamoose from 'dynamoose';

export const ItemSchema = new dynamoose.Schema({
  userId: {
    type: String,
    hashKey: true,
  },
  itemId: {
    type: String,
    rangeKey: true,
  },
  name: String,
  type: String,
});
