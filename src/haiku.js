export default class Haiku {
  constructor(text) {
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
    } if (this.text.length <= 2) {
      console.log('There is not enough lines');
      return false;
    } if (this.text.length >= 4) {
      console.log('there are to many lines');
      return false;
    }
  }

  maxWordCounter() {
    if (this.line1.length > 5) {
      console.log("Line 1 has to many syllables - more then 5 are present, use 5 or less");
      return false;
    } if (this.line2.length > 7) {
      console.log("Line 2 has to many syllables - more then 5 are present, use 5 or less");
      return false;
    } if (this.line3.length > 5) {
      console.log("line three has two many syllables 5 are needed");
      return false;
    } if (this.line1.length <= 5) {
      console.log("line1 word count passes second check");
      return true;
    } if (this.line2.length <= 7) {
      console.log('line2 passes first check');
      return true;
    } if (this.line3.length <= 5) {
      console.log('line3 passes first check');
      return true;
    }
  }

  vowelCountForY(str) {
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelCount++
      }
    }
    return vowelCount
  }

  syllableCounter(word) {
    //moddified from brian on stack exchange
    // on https://stackoverflow.com/questions/5686483/how-to-compute-number-of-syllables-in-a-word-in-javascript
    word = word.toLowerCase();
    let t_some = 0;
    let beauCount = 0;
    if (word.length <= 3 && this.vowelCountForY(word) == 1) {
      return 1;
    } else if (word.length <= 3 && this.vowelCountForY(word) == 2 && word.endsWith("y")) {
      return 2;
    }
    if (word.substring(0) == "Y") {
      word = word.replace("y")
      //subtract1
    }
    if (word.length > 3) {
      if (word.substring(0, 4) == "some") {
        word = word.replace("some", "");
        t_some++;
      } else if (word.substring(0, 4) == "beau") {
        word = word.replace("beau", "");
        beauCount++;
      }
    }
    word = word.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    //return word.match(/[aeiouy]{1,2}/g).length;   
    let syl = word.match(/[aeiouy]{1,2}/g);
    // console.log(syl, "syllables");
    if (syl) {
      //console.log(syl);
      return syl.length + t_some + beauCount;
    }
  }

  lineSyllableCounter() {
    this.line1.forEach((word) => {
      this.line1SyllableCount += this.syllableCounter(word);
    });

    this.line2.forEach((word) => {
      console.log(word);
      console.log(this.syllableCounter(word));
      this.line2SyllableCount += this.syllableCounter(word);
    });

    this.line3.forEach((word) => {
      this.line3SyllableCount += this.syllableCounter(word);
    });
  }

  haikuLine1Check() {
    if (this.line1SyllableCount == 5) {
      console.log("Line one has 5 syllables")
      return true;
    } else if (this.line1SyllableCount < 5) {
      console.log("Line one less then 5 syllables")
      return false;
    } else if (this.line1SyllableCount > 5) {
      console.log("Line one is more than 5 syllables")
      return false;
    };
  }

  haikuLine2Check() {
    if (this.line2SyllableCount == 7) {
      console.log("Line one has 7 syllables")
      return true;
    } else if (this.line2SyllableCount < 7) {
      console.log("Line one less then 7 syllables")
      return false;
    } else if (this.line2SyllableCount > 7) {
      console.log("Line one is more than 7 syllables")
      return false;
    };
  }

  haikuLine3Check() {
    if (this.line3SyllableCount == 5) {
      console.log("Line one has 5 syllables")
      return true;
    } else if (this.line3SyllableCount < 5) {
      console.log("Line one less then 5 syllables")
      return false;
    } else if (this.line3SyllableCount > 5) {
      console.log("Line one is more than 5 syllables")
      return false;
    };
  }

  haikuCheck() {
    if (this.haikuLine1Check() == true && this.haikuLine2Check() == true && this.haikuLine3Check() == true) {
      console.log("this is a haiku syllables of lines are 5, 7, 5");
      return true
    } else if (this.haikuLine1Check() == false && this.haikuLine2Check() == false && this.haikuLine3Check() == false) {
      console.log("this is not a haiku lines need to equal 5, 7, 5 syllables")
      return false
    }
  }

};
