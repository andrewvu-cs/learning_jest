const fetch = require('node-fetch');
const swapi = require('./script2');

it ('calls swapi to get people', (done) => {
    // wrong way, believes the async code is finished
    expect.assertions(1);
    swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87);
        // pass done in the param to see when the async value is done
        done();
    })
})

// When running ASYNC test always implement expect assertions!
it ('calls swapi to get people', () => {
    expect.assertions(1);
    return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87);
    })
})

it ('calls swapi to get people', () => {
    expect.assertions(2);
    return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87)
        expect(data.results.length).toBeGreaterThan(3);
    })
})

it ('calls swapi to get people with a promise', () => {
    swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(87);
    })
})