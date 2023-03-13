// Esercizio 1
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static isOlder(x, y) {
    return x.age > y.age
      ? `${x.firstName} is older than ${y.firstName}`
      : `${y.firstName} is older than ${x.firstName}`;
  }
}

const marioRossi = new User("Mario", "Rossi", 38, "Italy");
const chiaraBianchi = new User("Chiara", "Bianchi", 22, "Italy");

console.log(User.isOlder(marioRossi, chiaraBianchi));
