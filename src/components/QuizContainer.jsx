import Question from "./Question";
import NextButton from "./NextButton";
import Scoreboard from "./Scoreboard";
import Result from "./Result";
import ProgressBar from "./ProgressBar";
import { useQuiz } from "../QuizContext";

const QuizContainer = () => {
  const { quizEnded } = useQuiz();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {!quizEnded ? (
        <>
          <Scoreboard />
          <ProgressBar />
          <Question />
          <NextButton />
        </>
      ) : (
        <Result />
      )}
    </div>
  );
};

export default QuizContainer;
