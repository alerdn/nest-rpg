export interface ItemProps {
  userId: string;
  itemId: string;
  name: string;
  type: string;
}

export class Item {
  private constructor(public props: ItemProps) {}

  static create(props: ItemProps): Item {
    return new Item(props);
  }

  get userId(): string {
    return this.props.userId;
  }

  get itemId(): string {
    return this.props.itemId;
  }

  get name(): string {
    return this.props.name;
  }

  get type(): string {
    return this.props.type;
  }
}
