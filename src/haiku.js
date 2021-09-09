export default class Haiku{ 
  constructor(text,) {
    this.text = text
    this.line1 = []
    this.line2 = []
    this.line3 = []
    this.line1SyllableCount = 0
    this.line2SyllableCount = 0
    this.line3SyllableCount = 0
}

linesAndWordSplitter() {
  if (this.text.length == 3) {
    console.log('A Haiku has three lines');
    this.line3 = this.text[2].split(" ");
    this.line2 = this.text[1].split(" ");
    this.line1 = this.text[0].split(" ");
    console.log(this.line1);
    console.log(this.line2);
    console.log(this.line3);
    return true;
  }if (this.text.length <= 2 ) {
    console.log('There is not enough lines');
    return false;
  }if (this.text.length >=4) {
    console.log('there are to many lines');
    return false;
  }
 }
 
 maxWordCounter() {
   if (this.line1.length > 5) {
     console.log("Line 1 has to many syllables - more then 5 are present, use 5 or less");
     return false;
   } if (this.line2. length > 7) {
    console.log("Line 2 has to many syllables - more then 5 are present, use 5 or less");
    return false;
   }if (this.line3.length > 5) {
     console.log("line three has two many syllables 5 are needed");
     return false;
   } if (this.line1.length <= 5) {
     console.log("line1 word count passes second check");
     return true;
   }if (this.line2.length <= 7) {
     console.log('line2 passes first check');
     return true;
   }if (this.line3.length <= 5) {
     console.log('line3 passes first check');
     return true;
   }
 }
 
//  splitLinesToWordArrays() {
//    this.line1 = this.text[2].split(" ");
//    this.line2 = this.text[1].split(" ");
//    this.line3 = this.text[0].split(" ");

//  }
 
};