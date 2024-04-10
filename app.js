//1

let counter = {};

let counter = new Object();

let counter = Object.create(null);

function NewCounter() {

}

let counter = new NewCounter();

class NewCounter {

}

let counter = new NewCounter();


//2

let counterCopy = {...counter};

let counterCopy = Object.assign({},counter);

let counterCopy = JSON.parse(JSON.stringify(counter));

let counterCopy = {};
for (let key in counter) {
    counterCopy[key] = counter[key];
}

let counterCopy = Object.create(Object.getPrototypeOf(counter), Object.getOwnPropertyDescriptors(counter));


//3


function makeCounter() {
    
}

let makeCounter = new Function();

let makeCounter = function() {
    
};

let makeCounter = () => {
    
};

let obj = {
    makeCounter: function() {
        
    }
};

let makeCounter = obj.makeCounter;


//4 structuredClone позволяет глубоко копировать объекты, так же позволяет скопировать инстансы различных классов.
// Не копирует цепочку прототипов, не копирует DOM ноды, дескрипоторы, сеттеры и геттеры.


function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }

    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
        return false;
    }

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}



function reverseStr(str) {
    return str.split('').reverse().join('');
}



