import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Coded by {}
          <a href="https://github.com/SophieLMD" target="blank">
            Sophie Davies
          </a>
          , open sourced on {}
          <a
            href="https://github.com/SophieLMD/react-weather-app"
            target="blank"
          >
            Github {}
          </a>
          and website hosted on {}
          <a href="https://react-weather-app-slmd.netlify.app/" target="blank">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
