@logConstructor
class Boat {
  @logField
  color: string = 'red';

  @logColor
  get getColor(): string {
    return `The color of the boat is ${this.color}`;
  }

  @logErrorMessage('The boat needs to fix')
  pilot(@logParameterIndex engine: string, @logParameterIndex speed: string): void {
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

function logField(target: any, key: string): void {
  console.log(`Field is ${key}`);
}

function logColor(target: any, key: string): void {
  console.log(target[key]);
}

function logErrorMessage(message: string): Function {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function() {
      try {
        method();
      } catch (error) {
        console.error(message);
      }
    };
  };
}

function logParameterIndex(target: any, key: string, index: number): void {
  console.log(`Parameter is at index ${index}`);
}
