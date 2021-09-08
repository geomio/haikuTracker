import Haiku from "../src/haiku";

describe('Haiku', () => {
  
  test('should create a object that holds text in an array', () => {
    const haiku = new Haiku(['text line one', 'text line 2','text line 3']);
    expect(haiku.text.length).toEqual(3);
  });
  
  test('checkLines should count the lines of a haiku and see if there are three lines', () => {
    const haiku = new Haiku(['text line one', 'text line 2','text line 3']);
    expect(haiku.checkLines()).toEqual(true);
  });
  
  test('checkLines should count the lines of a haiku and see if less three lines are there', () => {
    const haiku = new Haiku(['text line one', 'text line 2',]);
    expect(haiku.checkLines()).toEqual(false);
  });
  
  test('checkLines should count the lines of a haiku and see if more than three lines are present', () => {
    const haiku = new Haiku(['text line one', 'text line 2','text line 3', 'text line 4']);
    expect(haiku.checkLines()).toEqual(false);
  });
  
});