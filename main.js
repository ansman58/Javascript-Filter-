let charactersNames;
let characterHouse = document.querySelectorAll("p");
const section = document.querySelector(".section");
let error = document.querySelector(".error");

const input = document.querySelector("input");

input.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  const target = e.target.value.toLowerCase();
  const filter = charactersNames.filter(
    (el) =>
      el.name.toLowerCase().includes(target) ||
      el.house.toLowerCase().includes(target)
  );

  hh(filter);
});

const fetchData = async () => {
  try {
    const charactersData = await fetch(
      "http://hp-api.herokuapp.com/api/characters"
    );
    charactersNames = await charactersData.json();
    // const slice = charactersNames.slice(0, 10);
    hh(charactersNames);
  } catch (error) {
    console.error(error);
  }
};

const hh = (dd) => {
  let html = dd
    .map((el, index) => {
      return `
      <div class="container">
        <h1> ${el.name}</h1>
        <p>${el.house}</p>
        <div class="image-container">
            <img src=${el.image} alt = ""/>
        </div>
    </div>
    `;
    })
    .join(" ");
  section.innerHTML = html;
};

fetchData(charactersNames);
