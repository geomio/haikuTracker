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
 
 syllableCounter(word) {
   //by brian from stack exchange
   // on https://stackoverflow.com/questions/5686483/how-to-compute-number-of-syllables-in-a-word-in-javascript
  word = word.toLowerCase();
  let t_some = 0;
  let beauCount = 0;
  if(word.length>3)
      {
      if(word.substring(0,4)=="some")
          {
          word = word.replace("some","");
          t_some++;
          }else if(word.substring(0,4)=="beau") {
            word = word.replace("beau","");
            beauCount++;
          }
      }
  word = word.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, '');   
  word = word.replace(/^y/, '');                                 
  //return word.match(/[aeiouy]{1,2}/g).length;   
  let syl = word.match(/[aeiouy]{1,2}/g);
  console.log(syl);
  if(syl)
  {
      //console.log(syl);
      return syl.length+t_some + beauCount;
  }
}
 
};