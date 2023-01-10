class Characters {
  constructor(name, age, weight, height) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
  }

  static properties() {
    console.log(
      " This Character Class takes in a name, age, weight, and height properties"
    );
  }

  display() {
    console.log(this);
  }
}

class Races extends Characters {
  constructor(name, age, weight, height, race = "Human", type = "none") {
    super(name, age, weight, height);
    this.race = race;
    this.type = type;
  }
  introduce() {
    switch (this.type) {
      case "wood":
        console.log(
          `my name is ${this.name}, and I am a ${
            this.type + " " + this.race
          } no one can heal better than me`
        );
        break;
      case "dark":
        console.log(
          `my name is ${this.name}, and I am a ${
            this.type + " " + this.race
          } no one can scheme better than me`
        );
        break;
      case "high":
        console.log(
          `my name is ${this.name}, and I am a ${
            this.type + " " + this.race
          } no one can fight better than me`
        );
        break;
      default:
        console.log("something when wrong");
    }
  }
}

const Darius = new Races("Darius", 25, "180", "5'11", "Elf", "wood");
const Jason = new Races("Jason", 25, "170", "5'11", "Elf", "high");
const Troy = new Races("Troy", 25, "160", "5'1", "Elf", "dark");
//Darius.display();
Darius.introduce();
Jason.introduce();
Troy.name = "hi";

Troy.display();
