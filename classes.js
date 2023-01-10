class Characters {
  constructor(name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }
  static properties() {
    console.log(
      "This character class takes in a name, age, height, weight in that order"
    );
  }
  display() {
    console.log(this.name);
  }
}

class Races extends Characters {
  constructor(name, age, height, weight, race = "Human", type = "none") {
    super(name, age, height, weight);
    this.race = race;
    this.type = type;
  }

  battlecry() {
    switch (this.race) {
      case "Giant":
        console.log(
          `My name is ${this.name}, RAWR, These are my legs! fear me im a ${
            this.type + " " + this.race
          }`
        );
        break;
      case "Human":
        console.log(
          `My name is ${this.name}, Whats the deal its D ${
            this.type + " " + this.race
          }`
        );
        break;
      case "Dwarf":
        console.log(
          `My name is ${this.name}, It's giant poppin time >;) ${
            this.type + " " + this.race
          }`
        );
        break;
      default:
        console.log("oops i did it again ");
        break;
    }
  }
}

const Tanner = new Races("Tanner", 32, "3'11", 250, "Dwarf", "Drunkin");
const Mike = new Races("Mike", 10, "7'11", 350, "Giant", "Stone");
const Darius = new Races("Darius", 24, "6'0", 182);
const Rafael = {
  name: "rafael",
};
Mike.name = "Darius";
console.log(Mike.name);
