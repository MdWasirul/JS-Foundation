function Animal(type) {
    this.type = type;
  }
  Animal.prototype.speak = function () {
    return `${this.type} makes sound `;
  };
  let spk=new Animal("quack quack"); 
  console.log(spk.speak());