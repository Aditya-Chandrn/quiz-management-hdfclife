import { useQuiz } from "..//QuizContext";
import Option from "./Option";

const Question = () => {
  const { questions, currentQuestionIndex } = useQuiz();
  const question = questions[currentQuestionIndex];

  return (
    <div className="bg-white p-6 rounded-lg shadow w-full max-w-xl mx-auto">
      <h2 className="text-lg font-bold mb-4">
        {question.id}. {question.question}
      </h2>
      <div className="grid gap-3">
        {question.options.map((option, idx) => (
          <Option key={idx} option={option} />
        ))}
      </div>
    </div>
  );
};

export default Question;
