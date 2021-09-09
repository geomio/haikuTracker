import Haiku from "../src/haiku";

describe('Haiku', () => {
  
  test('should create a object that holds text in an array', () => {
    const haiku = new Haiku(['text line one', 'text line 2','text line 3']);
    expect(haiku.text.length).toEqual(3);
  });
  
  test('linesAndWordSplitter should count the lines of a haiku and see if there are three lines', () => {
    const haiku = new Haiku(['text line one', 'text line 2','text line 3']);
    expect(haiku.linesAndWordSplitter()).toEqual(true);
  });
  
  test('linesAndWordSplitter should count the lines of a haiku and see if less three lines are there', () => {
    const haiku = new Haiku(['text line one', 'text line 2',]);
    expect(haiku.linesAndWordSplitter()).toEqual(false);
  });
  
  test('linesAndWordSplitter should count the lines of a haiku and see if more than three lines are present', () => {
    const haiku = new Haiku(['text line one', 'text line 2','text line 3', 'text line 4']);
    expect(haiku.linesAndWordSplitter()).toEqual(false);
  });
  
  test('linesAndWordSplitter should split strings into individual word array into this.line1 ', () => {
    const haiku = new Haiku(['text line one', 'text line','text']);
    haiku.linesAndWordSplitter();
    const line1Length = haiku.line1.length;
    const line2Length = haiku.line2.length;
    const line3Length = haiku.line3.length;
    expect(line1Length).toEqual(3);
    expect(line2Length).toEqual(2);
    expect(line3Length).toEqual(1);
  });
  
  test('maxWordCounter should check to see if lines1 = 5 or less words, line2 = 7 or less words, and line3 = 5 or less words', () => {
    const haiku = new Haiku(['text line one has five', 'text line must have up to seven','the text is at five']);
    haiku.linesAndWordSplitter();
    const line1Length = haiku.line1.length;
    const line2Length = haiku.line2.length;
    const line3Length = haiku.line3.length;
    expect(haiku.maxWordCounter(line1Length)).toEqual(true);
    expect(haiku.maxWordCounter(line2Length)).toEqual(true);
    expect(haiku.maxWordCounter(line3Length)).toEqual(true);
  });
  
  test('maxWordCounter should check to see if lines1 = 5 or less words, line2 = 7 or less words, and line3 = 5 or less words', () => {
    const haiku = new Haiku(['text line one has five and one', 'text line must have up to seven here is too much','the text is at five this also is bad']);
    haiku.linesAndWordSplitter();
    const line1Length = haiku.line1.length;
    const line2Length = haiku.line2.length;
    const line3Length = haiku.line3.length;
    expect(haiku.maxWordCounter(line1Length)).toEqual(false);
    expect(haiku.maxWordCounter(line2Length)).toEqual(false);
    expect(haiku.maxWordCounter(line3Length)).toEqual(false);
  });
  
});