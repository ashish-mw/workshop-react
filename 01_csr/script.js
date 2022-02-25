const movies = [
  { id: 100, name: "The Matrix", year: 1998 },
  { id: 101, name: "The Matrix Revolutions", year: 2003 },
];

function makeLi(m) {
  const li = document.createElement("li");
  li.setAttribute("id", m.id);
  li.innerText = `${m.name} - ${m.year}`;
  return li;
}

function buildMovieList() {
  let ul = document.createElement("ul");

  for (const m of movies) {
    let li = makeLi(m);
    ul.appendChild(li);
  }

  return ul;
}

// start of app
const app = document.querySelector("#app");
app.appendChild(buildMovieList());
