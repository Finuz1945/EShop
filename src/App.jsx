import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ProdukLists from "./components/ProdukLists";
import ProdukDetail from "./components/ProdukDetail";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<ProdukLists />} />
          <Route path="/products/:id" element={<ProdukDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
