function AddForm(props) {
  const [name, setName] = React.useState("");
  const [year, setYear] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.onAdd({
      id: new Date().getTime(),
      name,
      year,
    });
    setName("");
    setYear("");
  }

  return (
    <>
      <h3>Add a movie</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Year
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>

        <input type="submit" value="Add movie" />
      </form>
    </>
  );
}

function MoviesList(props) {
  const { movies, onDelete } = props;

  return (
    <>
      <h3>Movies</h3>
      <ul>
        {movies.map((m) => (
          <li key={m.id}>
            {m.name} - {m.year}
            <button onClick={() => onDelete(m.id)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    const moviesStorage = localStorage.getItem("movies");
    if (moviesStorage) {
      const json = JSON.parse(moviesStorage);
      setMovies(json);
    }
  }, []);

  React.useEffect(() => {
    const str = JSON.stringify(movies);
    localStorage.setItem("movies", str);
  }, [movies]);

  function handleAdd(movie) {
    setMovies((prev) => [...prev, movie]);
  }

  function handleDelete(movieId) {
    const filtered = movies.filter((m) => m.id != movieId);
    setMovies(filtered);
  }

  return (
    <>
      <React.StrictMode>
        <AddForm onAdd={handleAdd} />
        <MoviesList movies={movies} onDelete={handleDelete} />
      </React.StrictMode>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
