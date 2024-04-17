//1 Сортировка пузырьком (Bubble Sort)
// Сортировка вставками (Insertion Sort)
// Сортировка выбором (Selection Sort)
// Быстрая сортировка (Quick Sort)
// Сортировка слиянием (Merge Sort)
//

//2 Операторы:
// Арифметические операторы: +, -, *, /, % (остаток от деления).
// Операторы сравнения: ==, !=, ===, !==, >, <, >=, <=.
// Логические операторы: && (логическое "и"), || (логическое "или"), ! (логическое "не").
// Операторы присваивания: =, +=, -=, *=, /=, %=.
// Операторы инкремента и декремента: ++, --.
// Тернарный оператор: condition ? expr1 : expr2.

// Выражения:
// Арифметические выражения: x + y, 2 * (a + b).
// Логические выражения: x > 5 && y < 10, !(a === b).
// Строковые выражения: 'Hello, ' + name, \My age is ${age}``.

// Циклы:
// for: Позволяет выполнить блок кода несколько раз, указывая начальное значение, условие продолжения и шаг.
// while: Выполняет блок кода, пока указанное условие истинно.
// do...while: Выполняет блок кода один раз, а затем продолжает выполнять, пока указанное условие истинно.
// for...in: Перебирает перечислимые свойства объекта.
// for...of: Перебирает значения итерируемых объектов, таких как массивы или строки.

//3

function Person(name) {
    this.name = name;
}


Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
};


const person1 = new Person('John');
person1.sayHello();


const person2 = new Person('Alice');
person2.sayHello(); 


Person.prototype.logInfo = function() {
    console.log(`Name: ${this.name}`);
};

person1.logInfo(); 
person2.logInfo(); 



// Определение класса Person
class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }

    static logInfo(obj) {
        console.log(`Name: ${obj.name}`);
    }
}

const person1 = new Person('John');
person1.sayHello(); 

const person2 = new Person('Alice');
person2.sayHello(); 

Person.logInfo(person1);
Person.logInfo(person2); 

//4 

class Person {
    constructor(name) {
        this._name = name;;
    }

    
}


class PersonThree extends Person {
    constructor(name) {
        super(name); 
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

}


//bonus 
// O(n^2)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = 13;


const firstSum = (arr, total) => {
  for (let i in arr){
  	for (let j in arr){
    	if (j != i && arr[i] + arr[j] == 13){
      	    return [arr[i],arr[j]];
      }
    }
  }
}

console.log(firstSum(arr,total))


// O(n log n)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = 13;


const firstSum = (arr, total) => {
 	arr = arr.sort((a,b) => a - b);
  
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right){
  	let sum = arr[left] + arr[right];
    
    if (sum == total){
    	return [arr[left],arr[right]];
    }
    else if (sum < total){
    	left++;
    }
    else if(sum > total){
    	right--;
    }
 
  
  }
  
}

console.log(firstSum(arr,total))
