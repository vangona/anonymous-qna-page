import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dbService } from "../fBase";

const Answer = () => {
    const { id, question } = useParams();
    const [questionInfo, setQuestionInfo] = useState({});
    const [answer, setAnswer] = useState("");
    const [instaID, setInstaID] = useState("익명");
    const [nickname, setNickname] = useState("익명");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = e => {
        e.preventDefault();
    }

    const onChange = e => {
        const {target: {name, value}} = e;
        if (name === "answer") {
            setAnswer(value)
        } else if (name === "instagram") {
            setInstaID(value)
        } else if (name === "nickname") {
            setNickname(value)
        }
    }

    const getQuestion = async () => {
        await dbService.collection(`${id}`).where("id", "==", question)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach((doc) => {
                setQuestionInfo(doc.data())
            })
        })
        setIsLoading(true);
    }

    useEffect(() => {
        getQuestion();
    }, [])
    return (
        <div>
            {isLoading ? 
            <>
                <span>{questionInfo.question}</span>
                <form onSubmit={onSubmit}>
                    <textarea placeholder="뀨" name="answer" onChange={onChange} value={answer} required />
                    <input type="text" name="nickname" placeholder="이름" onChange={onChange} value={nickname} />
                    <input type="text" name="instagram" placeholder="인스타 아이디" onChange={onChange} value={instaID} />
                    <input type="submit" value="뀨"/>
                </form>
            </>
            : "Loading..." }
        </div>
    )
}

export default Answer;