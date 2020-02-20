// // unit test

const googleSearch = require("./script");

dbMock = ["dog.com", "cheespuff.com", "disney.com", "dogpics.com"];


// describe, Grouping tests that are similar. Easier to navigate tests
describe('googleSearch', () => {

    it("it is a sample test", () => {
        expect("hello").toBe("hello");
      });
      
      it("is searching google", () => {
          // To Equal an Empty Array
        expect(googleSearch("testtest", dbMock)).toEqual([]);
        expect(googleSearch("dog", dbMock)).toEqual(['dog.com', 'dogpics.com']);
      });
      
      
      // Testing out undefined and null 
      it('work with undefined and null input', () => {
          expect(googleSearch(undefined, dbMock)). toEqual([]);
          expect(googleSearch(null, dbMock)). toEqual([]);
      })
      
      it('does not return more than 3 matches', () => {
          expect(googleSearch('.com', dbMock).length).toEqual(3);
      })
})
