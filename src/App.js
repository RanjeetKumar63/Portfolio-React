import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={require("./portfolio.jpg")} alt="Our Image" />
      </div>
      <h3>Ranjeet Kumar</h3>
      <p>Frontend Developer</p>
      <img src="portfolio.jpg" alt="" />

      <button>
        <a href={require("./Ranjeet.pdf")} alt="pdf" title="_blank">
          Download CV
        </a>
      </button>
    </div>
  );
}

export default App;
