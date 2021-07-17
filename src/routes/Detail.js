import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { dbService } from "../fBase";

const Detail = ({userAuth}) => {
    const { id, questionid, answerindex } = useParams();
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const getDetail = async () => {
        await dbService.collection(`${id}`).where("id", "==", questionid)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach((doc) => {
                setQuestion(doc.data())
                setAnswer(doc.data().answerArray[answerindex])
                setIsLoading(true);
            })
        })
    }

    useEffect(() => {
        if ( id !== userAuth ) {
            <Redirect to="/" />
        }
        getDetail();
    }, [])
    return (
        <div>
            {isLoading 
                ? (
                    <>
                        <span>{question.question}</span><br />
                        <span>{answer.answerContent}</span>
                    </>
                ) : "Loading..."      
            }
        </div>
    )
}

export default Detail;