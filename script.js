// Esercizio 1
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static isOlder(x, y) {
    return x.age > y.age
      ? `${x.firstName} is older than ${y.firstName}`
      : `${y.firstName} is older than ${x.firstName}`;
  }
}

const marioRossi = new User("Mario", "Rossi", 38, "Italy");
const chiaraBianchi = new User("Chiara", "Bianchi", 22, "Italy");

console.log(User.isOlder(marioRossi, chiaraBianchi));

//Esercizio 2
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  static sameOwner(pet1, pet2) {
    return pet1.ownerName === pet2.ownerName
      ? "The two pets have the same owner"
      : "The two pets have different ownners";
  }
}

// Array su cui salvare tutti le istanze Pet create tramite il form
const petsArray = [];

// viene selezionato il form
let petForm = document.getElementById("addPetForm");

petForm.addEventListener("submit", event => {
  event.preventDefault(); //Evita che venga inviato il form

  let FormOwnerName = document.getElementById("ownerName").value;
  let FormPetName = document.getElementById("petName").value;
  let FormSpecies = document.getElementById("species").value;
  let FormBreed = document.getElementById("breed").value;

  // Vengono ripuliti i campi imput
  document.getElementById("ownerName").value = "";
  document.getElementById("petName").value = "";
  document.getElementById("species").value = "";
  document.getElementById("breed").value = "";

  // Viene creato una nuova istanza della classe pet
  petsArray.push(new Pet(FormPetName, FormOwnerName, FormSpecies, FormBreed));

  let list = document.querySelector("ol");
  list.innerHTML = "";

  for (pet of petsArray) {
    console.log(pet);
    let listItem = document.createElement("li");
    listItem.innerHTML = `<strong> Owner: </strong> ${pet.ownerName}, <strong> Pet:</strong> ${pet.petName}, <strong>Species:</strong> ${pet.species}, <strong>Breed:</strong> ${pet.breed}`;
    list.appendChild(listItem);
  }
});
