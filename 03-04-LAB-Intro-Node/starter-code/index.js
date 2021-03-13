class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length ++;
  }

  get(pos) {
    if(!this.length || pos > this.length){
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if(!this.length){
      throw new Error ("EmptySortedList");
    }
    return Math.max(...this.items);
    // return this.items[this.length-1];
  }

  min() {
    if(!this.length){
      throw new Error ("EmptySortedList");
    }
    return this.items[0];
  }

  avg() {
    if(!this.length){
      throw new Error ("EmptySortedList");
    }
    return this.sum()/this.length;
  }

  sum() {
    if(!this.length){
      return 0;
    }
    return this.items.reduce((total, currentValue ) => total + currentValue );
  }
}

module.exports = SortedList;

