import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={require("./profile-pic.png")} alt="Our Image" />
      </div>
      <h3>Ranjeet Kumar</h3>
      <p className="pr">Frontend Developer</p>
      <img src="profile-pic.png" alt="" />

      <button>
        <a href={require("./resume.pdf")} alt="pdf">
          Download CV
        </a>
      </button>
    </div>
  );
}

export default App;
