console.log("Sanity check");

console.clear();

// const

const numberOfPeople = document.querySelector('[data-js="numberOfPeople"]');

// fetch + filter

async function fetchData () {

    const response = await fetch("http://api.open-notify.org/astros.json");
    const data = await response.json();
    console.log("data: ", data.people.length);

    const peopleInSpace = data.people.length;
    console.log(peopleInSpace);
    numberOfPeople.textContent = peopleInSpace;

}
fetchData();
