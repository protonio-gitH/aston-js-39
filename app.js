//1
// В JS массивы называют "неправильными" потому, что они могут совмещать в себе черты нескольких различных структур данных.
//
// Массивы в JavaScript часто используются как упорядоченные списки, где каждый элемент имеет свой индекс. Это позволяет 
// эффективно хранить и обрабатывать упорядоченные коллекции данных.
//
// Массивы в JavaScript могут использоваться как стеки и очереди с помощью методов push(), pop(), shift() и unshift().
// Например, push() используется для добавления элемента в конец массива, что соответствует операции push в стеке.
//
// Массивы в JavaScript могут использоваться как хэш таблицы.
// Поскольку массивы в JavaScript являются объектами, они могут иметь собственные свойства и методы, что делает их 
// более похожими на обычные объекты. Например, вы можете добавить новое свойство к массиву, как к объекту.


//2

function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

const boundLogger = logger.bind(obj);
logger.call(obj)
logger.apply(obj);

//3.1

let arr = [1,2,3,4,5,6];
let sum = arr.reduce((acc,curr) => acc + curr,0);

let arrStr = ['a','b','c'];
let str = arrStr.join('');

const max = Math.max(...arr);
const min = Math.min(...arr);

//3.2
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Недостаток элементов";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}


//3.3

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Очередь пуста";
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return "Очередь пуста";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}


class CashierQueue {
    constructor() {
        this.queue = [];
    }

    
    enqueue(customer) {
        this.queue.push(customer);
        console.log(`${customer} встал в очередь`);
    }

    
    dequeue() {
        if (this.isEmpty()) {
            return "Очередь пуста";
        }
        const customer = this.queue.shift();
        console.log(`${customer} обслужен и покидает очередь`);
        return customer;
    }

    
    isEmpty() {
        return this.queue.length === 0;
    }

    
    printQueue() {
        console.log("Текущая очередь:", this.queue.join(", "));
    }
}


const cashierQueue = new CashierQueue();

cashierQueue.enqueue("Иванов");
cashierQueue.enqueue("Петров");
cashierQueue.enqueue("Сидоров");

cashierQueue.printQueue();

cashierQueue.dequeue();
cashierQueue.printQueue();

cashierQueue.dequeue();
cashierQueue.printQueue();

cashierQueue.dequeue();
cashierQueue.printQueue();

cashierQueue.dequeue(); 


//bonus

Function.prototype.bind = function(context, ...args) {
    let fn = this;
    return function(...innerArgs) {
        return fn.call(context, ...args, ...innerArgs);
    };
};