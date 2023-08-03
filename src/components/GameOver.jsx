'use client'
import { useContext } from "react"
import { QuizContext } from "@/context/quiz"


export default function GameOver(){
    const [quizState, dispatch] = useContext(QuizContext)
    return(
        <div className="flex flex-col justify-center items-center">
           <h1 className="text-2xl font-bold">Fim de jogo</h1>
           <p className="italic">Pontuação:{quizState.score}</p>
           <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
           <button
            onClick={()=>dispatch({type: "NEW_GAME"})}
            className="my-4 transition ease-in-out duration-200 bg-[#1febbb] p-2 rounded text-[#022c22] hover:opacity-80"
            >
                Reiniciar
           </button>
        </div>
    )
}