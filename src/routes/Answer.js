import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dbService } from "../fBase";
import emailjs from "emailjs-com"
import Apikeys from "../ApiKeys";

const Answer = () => {
    const { id, questionid } = useParams();
    const [questionInfo, setQuestionInfo] = useState({});
    const [newAnswer, setNewAnswer] = useState("");
    const [instaID, setInstaID] = useState("익명");
    const [nickname, setNickname] = useState("익명");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async e => {
        e.preventDefault();
        const prevArray = questionInfo.answerArray;
        const newAnswerObj = {
            answerContent: newAnswer,
            instaID,
            nickname
        }
        await dbService.collection(`${id}`).doc(`${questionInfo.question}`).update({
            answerArray: [...prevArray, newAnswerObj]
        }).then(() => {
            alert("성공적으로 답장했습니다. 감사합니다.")
            emailjs.sendForm(Apikeys.SERVICE_ID, Apikeys.TEMPLATE_ID, e.target, Apikeys.USER_ID)
            .then(result => {
                console.log("Success", result)
            }).catch(error => {
                console.log("Error", error.text)
            })
        }).catch((error) => {
            alert("무언가 문제가 생겼습니다. 스크린샷을 통해 알려주시면 감사하겠습니다. 감사합니다.", error)
        });
        setNewAnswer("");
        setInstaID("익명");
        setNickname("익명");
    }

    const onChange = e => {
        const {target: {name, value}} = e;
        if (name === "answer") {
            setNewAnswer(value)
        } else if (name === "instagram") {
            setInstaID(value)
        } else if (name === "nickname") {
            setNickname(value)
        }
    }

    const getQuestion = async () => {
        await dbService.collection(`${id}`).where("id", "==", questionid)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach((doc) => {
                setQuestionInfo(doc.data())
                setIsLoading(true);
            })
        })
    }

    useEffect(() => {
        getQuestion();
    }, [])
    return (
        <div className="answer__container">
            {isLoading ? 
            <>
                <h3 className="answer__title">{questionInfo.question}</h3>
                <form className="answer__form" onSubmit={onSubmit}>
                    <textarea className="answer__content" type="text" placeholder="대답을 적어주세요." name="answer" onChange={onChange} value={newAnswer} required />
                    <div className="answer__input-container">
                        <div className="answer__nickname-container">
                            <label className="answer__nickname-label" htmlFor="nickname">이름 : </label>
                            <input className="answer__nickname-input" type="text" name="nickname" placeholder="이름" onChange={onChange} value={nickname} />
                        </div>
                        <div className="answer__instagram-container">
                        <label className="answer__instagram-label" htmlFor="instagram">인스타그램 ID : </label>
                            <input className="answer__instagram-input" type="text" name="instagram" placeholder="인스타 아이디" onChange={onChange} value={instaID} />
                        </div>
                        <input className="answer__submit" type="submit" value="답장 보내기"/>
                    </div>
                </form>
            </>
            : "Loading..." }
        </div>
    )
}

export default Answer;