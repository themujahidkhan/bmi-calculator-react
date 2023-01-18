import CALCULATOR from "./components/CALCULATOR";
import CHART from "./components/CHART";
import "./styles/style.css";
{
  document.title = "BMI CALCULATOR";
}

function App() {
  return (
    <div className="App">
      <CALCULATOR />
      <CHART />
    </div>
  );
}

export default App;
