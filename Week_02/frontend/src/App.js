import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuizPage from "./pages/QuizPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/quizzes" element={<QuizPage />} />
            </Routes>
        </Router>
    );
};

export default App;
