import { useQuiz } from "..//QuizContext";

const NextButton = () => {
  const { selectedOption, nextQuestion } = useQuiz();

  return (
    <button
      onClick={nextQuestion}
      disabled={!selectedOption}
      className={`mt-4 px-5 py-2 rounded-lg text-white font-semibold ${
        selectedOption
          ? "bg-green-500 hover:bg-green-600"
          : "bg-gray-400 cursor-not-allowed"
      }`}
    >
      Next
    </button>
  );
};

export default NextButton;
