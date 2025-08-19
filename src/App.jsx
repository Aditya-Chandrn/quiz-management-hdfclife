import QuizContainer from "./components/QuizContainer";
import { QuizProvider } from "./QuizContext";

function App() {
  return (
    <QuizProvider>
      <QuizContainer />
    </QuizProvider>
  );
}

export default App;
