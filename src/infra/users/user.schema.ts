import * as dynamoose from 'dynamoose';

export const UserSchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true,
  },
  'inventory::armor': {
    type: Array,
    schema: [String],
  },
  'inventory::weapon': {
    type: Array,
    schema: [String],
  },
});
