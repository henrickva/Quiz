'use client'
import { useContext } from "react"
import { QuizContext } from "@/context/quiz"


export default function Option({option, selectOption, answer}){
    const [quizState, dispatch] = useContext(QuizContext)


    return(
        <div onClick={()=>selectOption()}>
            <p 
                className={`bg-teal-800 p-2 my-2 rounded-lg hover:opacity-90 cursor-pointer ${quizState.answerSelected && option !== answer ? 'bg-red-900 text-red-500 opacity-70' :""} ${quizState.answerSelected && option === answer ? 'bg-green-900' :""}`}>
                {option}
            </p>
        </div>
    )
} ``