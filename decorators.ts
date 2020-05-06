class Boat {
  color: string = 'red';

  get getColor(): string {
    return `The color of the boat is ${this.color}`;
  }

  pilot(engine: string, speed: string): void {
    if (engine && speed) {
      console.log('Boat is sailing');
    } else {
      throw new Error();
    }
  }
}
