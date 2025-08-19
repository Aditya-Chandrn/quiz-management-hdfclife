import { useQuiz } from "..//QuizContext";

const Option = ({ option }) => {
  const { selectedOption, setSelectedOption } = useQuiz();

  return (
    <button
      onClick={() => setSelectedOption(option)}
      className={`p-3 rounded-lg border text-left ${
        selectedOption === option
          ? "bg-blue-500 text-white"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
    >
      {option}
    </button>
  );
};

export default Option;
