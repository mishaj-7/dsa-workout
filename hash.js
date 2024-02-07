class MyHash {
    constructor(size) {
        this.data = new Array(size)
    };
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    put(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value])
        console.log(this.data);
    }
}

const newobj = new MyHash(0);
// create 50 sized object
console.log(newobj);
newobj.put('hai', 'holo');