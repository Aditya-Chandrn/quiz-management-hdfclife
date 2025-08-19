import { useQuiz } from "../QuizContext";

const ProgressBar = () => {
  const { currentQuestionIndex, questions } = useQuiz();
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="w-full max-w-xl bg-gray-300 rounded-full h-3 mb-4">
      <div
        className="bg-blue-500 h-3 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
