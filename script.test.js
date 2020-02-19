// unit test

const googleSearch = require("./script");

dbMock = ["dog.com", "cheespuff.com", "disney.com", "dogpics.com"];

it("it is a sample test", () => {
  expect("hello").toBe("hello");
});

it("is searching google", () => {
    // To Equal an Empty Array
  expect(googleSearch("testtest", dbMock)).toEqual([]);
  expect(googleSearch("dog", dbMock)).toEqual(['dog.com', 'dogpics.com']);
});
