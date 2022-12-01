// if you add 'async' before the function, it
// will return the Promise now

const friendlyFnSync = () => {
  return 'Hello my dear friend!';
};

const friendlyFnAsync = async () => {
  return 'Hello my dear friend!';
};

// Resolve (by default)
console.log(friendlyFnSync()); // Hello my dear friend!
console.log(friendlyFnAsync()); // Promise { 'Hello my dear friend!' }

// Rejecting (just throw an error)
const oops = async () => {
  throw 'I am the Error!';
};
oops().catch((err) => console.log(err));

// await is used only inside async function
// await pauses the execution of async
// await can wait for any async operation to return a promise (even another async function)
// await keyword waits for promise to resolve & extracts its resolved value,
// -- and then it resumes the async function's execution flow

// you can think of 'await' like a pause button (and it's a magic piece, that makes code look sync)

// Example
const fetchStarWarsCharacter = async () => {
  const response = await fetch('https://swapi.dev/api/people/1/');
  const person = await response.json();
  console.log(person.name);
  console.log('Here is the data!');
};
fetchStarWarsCharacter();

// Async Functions are simple and short, they can be used anywhere in our code

class Pokemon {
  constructor(id) {
    this.id = id;
  }

  async logName() {
    const url = `https://pokeapi.co/api/v2/pokemon/${this.id}`;
    const response = await fetch(url);
    const pokemonValue = await response.json();
    console.log(pokemonValue.name);
  }
}

let pokemon = new Pokemon(13);
pokemon.logName();

console.log('---- divider ----');
// Let's see how we can handle errors

const getUser = async (username) => {
  try {
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    const user = await response.json();
    console.log(user.name);
  } catch (error) {
    console.log('User not found');
  }
};

getUser('garbalau-github');
getUser('garbalau-no-github');
