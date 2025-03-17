import { useEffect, useState } from "react";
import axios from "axios";

const QuizPage = () => {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        const fetchQuizzes = async () => {
            const res = await axios.get("/api/quizzes");
            setQuizzes(res.data);
        };
        fetchQuizzes();
    }, []);

    return (
        <div>
            <h2>Available Quizzes</h2>
            {quizzes.map((quiz) => (
                <div key={quiz._id}>
                    <h3>{quiz.title}</h3>
                    <button>Start Quiz</button>
                </div>
            ))}
        </div>
    );
};

export default QuizPage;
