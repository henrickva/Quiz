'use client'
import Welcome from "@/components/Welcome"
import Question from "@/components/Questions"
import GameOver from "@/components/GameOver"
import { useContext, useEffect } from "react"
import { QuizContext } from "@/context/quiz"

export default function Home() {

  const [quizState,  dispatch] = useContext(QuizContext)

  useEffect(()=>{
    dispatch({type:'REORDER_QUESTIONS'})
  }, [])
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-10 text-center">Quiz de Programação</h1>
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Playing" && <Question />}
        {quizState.gameStage === "End" && <GameOver />}
      </div>
    </main>
  )
}
