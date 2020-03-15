class SortedList {
    constructor() {
        this.arr = [];
        this.size = 0;
    }

    add(element) {
        this.arr.push(element);
        this.arr.sort((a, b) => a - b);
        this.size++;
        return this.arr;
    };

    remove(index) {
        if (index >= 0 && index < this.arr.length) {
            this.arr.splice(index, 1);
            this.arr.sort((a, b) => a - b);
            this.size--;
            return this.arr;
        }
    }

    get(index) {
        if (index >= 0 && index < this.arr.length) {
            return this.arr[index];
        }
    }
}

let list = new List();
console.log(list.hasOwnProperty('add'));
list.add(5);
list.add(6);
list.add(7);
list.add(1);
list.add(-20);
list.add(3);
list.add(1);
console.log(list.elements);
list.remove(3);
console.log(list.elements);
list.add(3);
console.log(list.elements);
console.log(list.size);


