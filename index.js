console.log("Sanity check");

console.clear();

// connect wit index.html

const numberOfPeopleInSpace = document.querySelector('[data-js="number-of-people-in-space"]');

// fetch + filter data

async function fetchNames () {

    const response = await fetch("http://api.open-notify.org/astros.json");
    const data = await response.json();
    console.log("data: ", data.people.length);

    const number = data.people.length;
    console.log(number);
    numberOfPeopleInSpace.textContent = number;

}
fetchNames();
