class Car {
  constructor(car) {
    this.name = car.name;
    this.price = car.price;
    this.year = car.year;
    console.log("create construct");
  }

  drive() {
    console.log("부릉부릉");
  }
}

const avante = new Car({
  name: "아반떼",
  price: 2500,
  year: 2019
});

const moring = new Car({
  name: "모닝",
  price: 1200,
  year: 2019
});
avante.drive();
moring.drive();

/*
class App extends React.Component {}
ReactDOM.render(<App />, document.querySelector("#root"));

class Project {}
<>
  <Project name="근태관리시스템" />
  <Project name="광고플랫폼" />
</>;
*/

class SuperCar extends Car {
  constructor(options) {
    super(options);
    console.log("create super_car");
  }
  booster() {
    console.log("부아ㅏㅏㅏ앙");
  }
}

const 벤틀리 = new SuperCar({
  name: "벤틀리",
  price: 20000000,
  year: 2019
});
벤틀리.drive();
벤틀리.booster();

/*실습1 RPG게임 개발
Monster 클래스의 instance는 생성될 때, health가 100이다.
constructor는 options라는 인자를 받으며
options는 name이라는 key가 있다..{name:''}
Monster를 만들고 피카츄라는 이름을 가진 몬스터를 만들자
*/

class Monster {
  constructor(monster) {
    this.name = monster.name;
    this.health = monster.health;
    console.log("Monster setting ....");
  }
  create() {
    console.log("create Monster!");
  }
}

const Pikachu = new Monster({
  name: "Pikachu",
  health: "100"
});

Pikachu.create();
console.log(Pikachu);
/*실습2 RPG게임 개발
Monster 자식 클래스 Dinosaur를 만들어주시되,
생성자함수는 같고,
Dinosaur는 몸통박치기라는 메소드를 갖습니다.
몸통박치기는 다른 몬스터 인스턴스를 인자로 받고,
결과로 인자로 받은 몬스터의 health를 10깎습니다.
Tirano. 몸통박치기(피카츄) => console.log(pikachu.health) => 90
*/

class Dinosaur extends Monster {
  constructor(dinosaur) {
    super(dinosaur);
    this.skill = dinosaur.skill;
    console.log("Dinosaur Monster setting ....");
  }
  create() {
    console.log("Dinosaur create!");
  }
  Attack(monster) {
    monster.health -= 10;
    console.log("Dinosaur Attack");
  }
}

const Charizard = new Dinosaur({
  name: "Charizard"
});

Charizard.Attack(Pikachu);

console.log(Pikachu);
