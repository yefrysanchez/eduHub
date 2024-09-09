import "./App.css";
import CalendarContainer from "./components/Calendar/CalendarContainer";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="font-inter relative flex flex-col-reverse lg:flex-row">
      <Navbar />
      <HomePage />
   
    </div>
  );
}

export default App;
