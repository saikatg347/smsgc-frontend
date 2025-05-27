import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout'
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home/>}/>
        </Route>

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
};
export default App;
