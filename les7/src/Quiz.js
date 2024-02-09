import React, { useState, useEffect } from 'react';
import {questions} from './Data'
export default function Quiz() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [guestAnswer, setGuestAnswer] = useState('');
    const [guestScore, setGuestScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [feedback, setFeedback] = useState('');

      const handleNextQuestion = () => {
        const correct = questions[currentQuestion].trueAnswer === guestAnswer;
        if (correct) {
            setGuestScore(guestScore + 1);
          setFeedback('True!');
        } else {
          setFeedback('False!');
        }
    
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setGuestAnswer('');
        } else {
          setQuizCompleted(true);
        }

      };

      const handlePreviousQuestion=()=>{
          if(currentQuestion>0){
            setCurrentQuestion(currentQuestion - 1);
        }
        else{
            alert("You can not move previous because you are in first question ")
        }

      };

      const handleRestartQuiz = () => {
        setCurrentQuestion(0);
        setGuestAnswer('')
        setGuestAnswer(0);
        setQuizCompleted(false);
        setFeedback('');
      };
      if (quizCompleted) {
        return (
          <div style={{backgroundColor:"antiquewhite", width:"70%",height:"100F"}}  >
            <h1>Quiz completed</h1>
            <p>Score : {guestScore}/{questions.length}</p>
            <button  onClick={handleRestartQuiz}>
              Start again!
            </button>
          </div>
        );
      }
  return (
    <div style={{backgroundColor:"antiquewhite", width:"70%", height:"100%"}} >
     
            <div >
                <h1 >QUIZ</h1>
            </div>
            <div >
                <h1 >{questions[currentQuestion].question}</h1>
              <ul >
                {questions[currentQuestion].answers.map((option, index) => (
                  <h1 key={index} >
                    <label style={{fontSize:"30px"}}>
                      <input
                        type="radio"
                        name={`question${currentQuestion}`}
                        value={option}
                        checked={guestAnswer === option}
                        onChange={(e) => setGuestAnswer(e.target.value)}
                      />
                      <span>{option}</span>
                    </label>
                  </h1>
                ))}
              </ul>
            </div>
            <div >
              <button
               style={{backgroundColor:"ThreeDDarkShadow",color:"white"}}
               type="button"
               onClick={handlePreviousQuestion}
             >
               Previous<i ></i>
             </button>
              <button
               style={{backgroundColor:"ThreeDDarkShadow",color:"white"}}
                type="button"
                onClick={handleNextQuestion}
                >
                 
                Next<i ></i>
              </button>
              <p>{feedback}</p>
            </div>
        </div>
  )
}
