import { ItemProps } from 'src/core/domain/item';

export class ItemEntity {
  TableName: string;
  Item: {
    userId: string;
    itemId: string;
    name: string;
    type: string;
  };

  constructor(props: ItemProps) {
    this.TableName = 'Item';
    this.Item = {
      userId: props.userId,
      itemId: props.itemId,
      name: props.name,
      type: props.type,
    };
  }
}
