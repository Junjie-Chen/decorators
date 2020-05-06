class Boat {
  color: string = 'red';

  get getColor(): string {
    return `The color of the boat is ${this.color}`;
  }
}
