const jokes = [
    "What rock group has four men that don't sing? Mount Rushmore.",
    "When I was a kid, my mother told me I could be anyone I wanted to be. Turns out, identity theft is a crime.",
    "What do sprinters eat before a race? Nothing, they fast!",
    "What concert costs just 45 cents? 50 Cent featuring Nickelback!",
    "What do you call a mac 'n' cheese that gets all up in your face? Too close for comfort food!"
];

const onClick = document.querySelector("button");

function getJoke() {
    let randomNumber = Math.floor(Math.random() * jokes.length);
    let selectedJoke = jokes[randomNumber];
    document.getElementById('displayJoke').innerHTML = selectedJoke;
    document.getElementById('jokeLength').innerHTML = `Character Count: ${selectedJoke.length}`;
}

onClick.addEventListener("click", getJoke);