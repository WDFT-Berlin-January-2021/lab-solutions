class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = undefined;
    this.splitsList = [];
  }

  startClick() {  
    this.intervalId = setInterval(() => this.currentTime++, 10);
  }

  getMinutes() {
    return this.twoDigitsNumber(parseInt(this.currentTime/6000) % 60);
  }

  getSeconds() {
    return this.twoDigitsNumber(parseInt(this.currentTime/100) % 60);
  }

  getSubsecs() {
    return this.twoDigitsNumber(this.currentTime % 100);
  }

  twoDigitsNumber(number) {
    const numberString = number.toString();
    if (numberString.length < 2) return "0" + numberString;
    else return numberString;
  }
  
  stopClick() {
    clearInterval(this.intervalId)
  }
  
  resetClick() {
    this.currentTime = 0;
    this.splitsList = [];
  }
  
  splitClick() {
    this.splitsList.push(this.getMinutes() + ":" + this.getSeconds() + "." + this.getSubsecs());
  }
}
