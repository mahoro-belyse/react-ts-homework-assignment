import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ProfileCard name="mahoro belyse" age={22} isStudent={false} />
    </div>
  );
}

export default App;
