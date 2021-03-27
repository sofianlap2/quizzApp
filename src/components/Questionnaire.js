import React from 'react'


const Questionnaire = ({handlenextQuestion,showAnswers, handleAnswer, data: {question,correct_answer,answers}}) => {
    
 
    return(
    <div>
        <div className=" text-4xl rounded p-12 bg-white text-purple-700" dangerouslySetInnerHTML={{__html:question}}></div>
     <div className=" grid grid-cols-2 gap-x-5 gap-y-5 mt-5 ">
        {
            answers.map(answer=> {
                const bgColor = showAnswers ?
                (correct_answer === answer ? 'bg-green-500' : 'bg-red-500') : 'bg-white' ;
                const textColor = showAnswers ? 'text-white' : 'text-purple-800'
                return(
                    <button className={`${bgColor} ${textColor} bg-white p-5 text-3xl rounded shadow font-semibold `}  onClick={()=>handleAnswer(answer)} dangerouslySetInnerHTML={{__html:answer}} />
                )
            }
            )
        }
     </div>
{
    showAnswers && (
        <button  onClick={handlenextQuestion} className="bg-blue-400  mt-6 p-8 text-white rounded shadow font-semibold">Next Question</button>

    )
}    </div>
)}

export default Questionnaire;