//ES5
const numbers = [10, 20, 30];
let sum = 0;
console.log("* ES5 for문 numbers 배열 계산 *");
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];

  console.log("합계:", sum, "값:", numbers[i]);
}

//ES6
sum = numbers.reduce((acc, number) => {
  return acc + number;
}, 0);
console.log("* ES6 for문 numbers 배열 계산 *");
// {acc}: retrun value

let multiply = numbers.reduce((acc, number) => acc * number, 1);
console.log(multiply);
const strings = ["apple ", "is ", "good"];

const summed = strings.reduce((acc, str) => acc + str, "");
console.log(summed);

// map함수 구현하기
let dNumber = numbers.map(e => e * 2);
dNumbers = numbers.reduce((acc, number) => {
  acc.push(number * 2); // return acc.push(number * 2); => undifind
  return acc;
}, []);
console.log(dNumbers);

//실제로
/*
올바르게 닫힌 괄호 : ((())), ()(), (), ((()()))
올바르게 닫히지 않은 괄호 : ), )(())(, ()())
*/
function isGoodParens(string) {
  return !string.split("").reduce((acc, char) => {
    if (acc < 0) {
      return acc;
    } else if (char === "(") {
      ++acc;
    } else {
      --acc;
    }
    return acc;
  }, 0); //'abc'.split('') => ['a', 'b', 'c']
}
// '()()' acc:0, char: ( => 1, ) => 0, ( => 1, ) => 0
console.log(isGoodParens(")("));
console.log(isGoodParens("((((()()))))"));
console.log(isGoodParens("()()())"));
//실습1
const 참석자 = [
  { id: 1, type: "sitting" },
  { id: 2, type: "sitting" },
  { id: 3, type: "standing" },
  { id: 4, type: "sitting" },
  { id: 5, type: "standing" }
];
//reduce를 사용해서 서있는사람, 혹은 앉아있는 사람의 수를 출력
const 서있는사람 = 참석자.reduce((acc, person) => {
  if (person.type === "standing") acc++;
  return acc;
}, 0);
// function sitting(참석자) {
//   return !참석자.split("sitting").reduce((참석자, char) => {
//     if (참석자 === "sitting") {
//       return 참석자;
//     } else if (참석자 === "standing") {
//       --참석자;
//     }
//   }, []);
// }
console.log(서있는사람);

//실습2
//unique를 만들어봅시다.
const samples = [10, 20, 30, 20, 40, 10, 50];
//const result = unique(samples);
//[10, 20, 30, 40, 50];
function unique(arr) {
  //채워주세요!
  //reduce를 사용하구요
  //find도 사용하면 좋아요
  //someArr.find(callback):만족하는 값이 없다면?
  //undefined를 리턴합니다.
  return arr.reduce((acc, element) => {
    if (!acc.find(el => el === element)) {
      acc.push(element);
    }
    return acc;
  }, []);
}
