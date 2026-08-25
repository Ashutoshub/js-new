const MarvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
const DCHeroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"];
// MarvelHeroes.push(DCHeroes);
// console.log(MarvelHeroes); made array of arrays
// using concat to merge arrays
const allHeroes = MarvelHeroes.concat(DCHeroes);
// console.log(allHeroes);
// using spread operator to merge arrays
const allHeroes2 = [...MarvelHeroes, ...DCHeroes];
// console.log(allHeroes2);
const weirdArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
// console.log(weirdArr.flat(2)); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
console.log(Array.isArray("Ashutosh")); // Output: false
console.log(Array.from("Ashutosh")); // Output: ['A', 's', 'h', 'u', 't', 'o', 's', 'h']
console.log(Array.from({name: "Ashutosh"})); // Output: []interestingly empty array because
//  the object doesn't have a length property