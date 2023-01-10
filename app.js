
class Characters{

    spyral = "spanky"

    constructor(name, health = 50, speed = 2, attackpower = 10, defense = 5){
        this.name = name
        this.speed = speed
        this.health = health
        this.attackpower = attackpower
        this.defense = defense
        this.powerLevel = 9000
    }
    display(){
        console.log(this.hello())
    }
    battlecry(){
        return `${this.name}`
    }
    battlePhrase(){
        return `Get ready my Power Level is OVER ${this.powerLevel}`
    }
}

function battle(c1 , c2){
    console.log(`${c1.name} vs ${c2.name}`)
    let counter = 0
    while(c1.health < 1  || c2.health < 1){
        if(counter % 2 === 0){

        }else{
            
        }
    }
}

function startgame(){
   
    const Jason = new Characters("Jason", 100, 1, 20, 50)
    const Freddy = new Characters("Freddy", 90, 3)

    battle(Jason, Freddy)
}
startgame()