import "./style/App.css";
import { Home } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar, WomenContent, MenContent, AllContent } from "./component";
import { Detail, Cart } from "./pages";
import Dashboard from "./pages/Admin/Dashboard";
import AddShoes from "./pages/Admin/AddShoes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home side={<Sidebar />} content={<AllContent />} />}
          />
          <Route path="dashboard">
            <Route
              path="pria"
              element={<Home side={<Sidebar />} content={<MenContent />} />}
            />
            <Route
              path="wanita"
              element={<Home side={<Sidebar />} content={<WomenContent />} />}
            />
          </Route>
          <Route path="detail">
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="admin" element={<Dashboard />} />
          <Route path="add" element={<AddShoes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
