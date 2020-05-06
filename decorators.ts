@logConstructor
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

function logConstructor(constructor: Function): void {
  console.log(`Constructor of class Boat is ${constructor}`);
}
