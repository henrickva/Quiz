'use client'
import { useContext } from "react"
import { QuizContext } from "@/context/quiz"
import Option from "./Options"

export default function Question(){
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]
    function onSelectOption(option){
        dispatch({
            type:"CHECK_ANSWER",
            payload: {answer: currentQuestion.answer, option}
        })
    }

    return(
        <div className="text-center bg-teal-900 rounded-xl p-4">
            <p className="italic">Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h1 className="text-xl w-72 text-center font-bold my-2">{currentQuestion.question}</h1>
            <div className="">
                {currentQuestion.options.map((option)=>(
                    <Option 
                        option={option} 
                        key={option} 
                        answer={currentQuestion.answer}
                        selectOption={()=>onSelectOption(option)}
                    />
                )
                    
                )}
            </div>

           {quizState.answerSelected && (
             <button 
             onClick={()=> dispatch({type: "CHANGE_QUESTION"})}
             className="my-4 transition ease-in-out duration-200 bg-[#1febbb] p-2 rounded text-[#022c22] hover:opacity-80">Continuar</button>
           )}
        </div>
    )

}