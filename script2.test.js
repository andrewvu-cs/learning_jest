const fetch = require("node-fetch");
const swapi = require("./script2");

it("calls swapi to get people", done => {
  // wrong way, believes the async code is finished
  expect.assertions(1);
  swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
    // pass done in the param to see when the async value is done
    done();
  });
});

// When running ASYNC test always implement expect assertions!
it("calls swapi to get people", () => {
  expect.assertions(1);
  return swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
  });
});

it("calls swapi to get people", () => {
  expect.assertions(2);
  return swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(3);
  });
});

it("calls swapi to get people with a promise", () => {
  swapi.getPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(87);
  });
});

// API tests can take too long, so we would want to create a mock
// Mock functions are also known as spies because we are allowed to view the behavior of the function
it("getPeople retrurns count and results", () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 87,
          results: [0, 1, 2, 3, 4, 5]
        })
    })
  );
  expect.assertions(4);
  return swapi.getPeoplePromise(mockFetch).then(data => {
    // how many times this has been called
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith("https://swapi.co/api/people");
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
