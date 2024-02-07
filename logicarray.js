class MyArray {
    constructor() {
        this.data = {}
        this.length = 0;
    }

    push(data) {
        this.data[this.length] = data;
        this.length++;
    }

    pop() {
        
        delete this.data[this.length - 1]
        this.length--;
    }

    delete(index) {
        delete this.data[index];
        this.dataShift(index);
    }

    dataShift(index) {
        for (let i = index; i < this.length; i++){
            this.data[i] = this.data[i + 1];
            delete this.data[this.length - 1];
            this.length--;
        }
    }

    addElement(index, element) {
        
        for (let i = index; i <= this.length; i++){
            
        }
    }


}

const newArray = new MyArray;

newArray.push('mentrow');
newArray.push('sujith');
newArray.push('hdd');
newArray.push('helo');
newArray.addElement(4,'heeeee')



console.log(newArray.data);