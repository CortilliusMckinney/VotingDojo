import "./App.css";
import AddPet from "./components/AddPet";
import LandingPage from "./components/LandingPage";
import PetDetail from "./components/PetDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditPet from "./components/EditPet";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/addPet" element={<AddPet />} />
          <Route path="/petDetail/:id" element={<PetDetail />} />
          <Route path="/editPet/:id" element={<EditPet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
