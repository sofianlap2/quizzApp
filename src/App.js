import './App.css';
import React, {useState, useEffect} from 'react'
import {Questionnaire} from './components'

const TRIVIA_API="https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"

function App() {

  const [questions,setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers]= useState(false)

  useEffect(()=>{
    fetch(TRIVIA_API).then(res=> res.json()).then(data=>
       {
        const questions = data.results.map((question)=> 
          ({
            ...question,
            answers: [question.correct_answer, ...question.incorrect_answers].sort(()=>Math.random()-0.5)
          }));
        setQuestions(questions)
      });
  }, []);

  const handleAnswer = (answer) => {
    if(!showAnswers) {
    //   const newIndex = currentIndex + 1
    // setCurrentIndex(newIndex)
    if(answer=== questions[currentIndex].correct_answer){
      //increase the score
      setScore(score + 1)
    }}
   setShowAnswers(true)
  }
  const handlenextQuestion = () => {
    setCurrentIndex(currentIndex+1)
    setShowAnswers(false);
  }

  return (
    questions.length > 0 ? 
     (<div className="container">
      {currentIndex >= questions.length ?
      (<h1 className="text-3xl text-white font-bold">Your score was {score} </h1>) :
    <Questionnaire 
    handlenextQuestion={handlenextQuestion}
    data={questions[currentIndex]} showAnswers={showAnswers} handleAnswer={handleAnswer} />
   }
   </div>)
    : (<h2 className="text-2xl text-white">Loading ...</h2>)
  );
}

export default App;
