import { useQuiz } from "..//QuizContext";

const Result = () => {
  const { score, questions, restartQuiz } = useQuiz();
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="bg-white p-6 rounded-lg shadow text-center w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Quiz Finished</h2>
      <p className="mb-2">
        You scored <span className="font-semibold">{score}</span> out of{" "}
        {questions.length}
      </p>
      <p className="mb-4">Percentage: {percentage}%</p>
      <button
        onClick={restartQuiz}
        className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
