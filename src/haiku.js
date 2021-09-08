export default class Haiku{ 
  constructor(text,) {
    this.text = text
}

checkLines() {
  if (this.text.length == 3) {
    console.log('A Haiku has three lines');
    return true;
  }if (this.text.length <= 2 ) {
    console.log('There is not enough lines');
    return false;
  }if (this.text.length >=4) {
    console.log('there are to many lines');
    return false;
  }
 }
};