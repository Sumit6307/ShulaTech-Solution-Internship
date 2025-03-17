import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BooksPage from "./pages/BooksPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/books" element={<BooksPage />} />
            </Routes>
        </Router>
    );
};

export default App;
