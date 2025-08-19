import { useQuiz } from "..//QuizContext";

const Scoreboard = () => {
  const { score, questions, currentQuestionIndex } = useQuiz();
  return (
    <div className="mb-4 text-center">
      <p className="font-semibold">
        Score: {score} / {questions.length}
      </p>
      <p className="text-sm text-gray-600">
        Question {currentQuestionIndex + 1} of {questions.length}
      </p>
    </div>
  );
};

export default Scoreboard;
