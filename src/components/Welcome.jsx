'use client'
import Image from "next/image";
import pergunta from '@/assets/images/pergunta.png'
import { useContext } from "react";

import { QuizContext } from "@/context/quiz";

export default function Welcome(){

    const [quizState, dispatch] = useContext(QuizContext)

    
    return(
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl">Seja bem vindo</h2>
            <p className="italic">Clique no botão abaixo para começar</p>
            <button 
                onClick={()=>dispatch({type:"CHANGE_STATE"})} 
                className="my-4 transition ease-in-out duration-200 bg-[#1febbb] p-2 rounded text-[#022c22] hover:opacity-80">Iniciar</button>
            <Image src={pergunta} width={500} alt="imagem de quiz" />
        </div>
    )
}