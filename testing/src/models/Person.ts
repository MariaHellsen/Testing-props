export class Person {
  id: number;
  constructor(public name: string, public age: number, public happy: boolean) {
    this.id = Date.now();
  }
}
