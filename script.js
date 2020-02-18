const googleDB = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavouritecats.com'
];


const googleSearch = searchInput => {
    const matches = googleDB.filter(website => {
        return website.includes(searchInput);
    })
    return matches.length > 3 ? matches.slice(0,3) : matches;
};

console.log(googleSearch('cats'));