export const config = {
  name: 'wyt',
  age: 19,
  sex: 1
}

export class Person{
  constructor(config) {
    this.config = Object.assign({}, {
      name: 'lfl',
      age: 17
    }, config)
  }

  sayName() {
    console.log(this.config.name);
  }

  sayAge() {
    console.log(this.config.age);
  }
}