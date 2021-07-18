import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { dbService } from "../fBase";

const Detail = ({userAuth}) => {
    const { id, questionid } = useParams();
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [backgroundColor, setBackgroundColor] = useState("");
    const [font, setFont] = useState("");
    const [fontStyle, setFontStyle] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = e => {
        e.preventDefault();
        dbService.collection(`${id}`).doc(`${question.question}`)
        .update({
            style: {
                font,
                fontStyle,
                backgroundColor,
            }
        });
        alert("성공적으로 변경되었습니다.");
    }

    const onBgColorChange = e => {
        const {target: {value}} = e;
        setBackgroundColor(value);
    }

    const onFontChange = e => {
        const {target: {value}} = e;
        setFont(value);
    }

    const onFontStyleChange = e => {
        const {target: {value}} = e;
        setFontStyle(value);
    }

    const getDetail = async () => {
        await dbService.collection(`${id}`).where("id", "==", questionid)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach((doc) => {
                setQuestion(doc.data())
                setAnswer(doc.data().answerArray)
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
        <div style={{backgroundColor: backgroundColor}} className="answer__container">
        {isLoading ? 
        <>
            <h3 style={{fontStyle: fontStyle, fontFamily: font}} className="answer__title">{question.question}</h3>
            <form onSubmit={onSubmit} className="answer__form">
                <textarea className="answer__content" type="text" placeholder="대답을 적어주세요." name="answer" />
                <div className="answer__input-container">
                    <div className="answer__nickname-container">
                        <label className="answer__nickname-label" htmlFor="nickname">질문 폰트 : </label>
                        <select onChange={onFontChange} value={font}>
                            <option value="sans-serif">sans-serif</option>
                            <option value="serif">serif</option>
                        </select>
                        <select onChange={onFontStyleChange} value={fontStyle}>
                            <option value="normal">normal</option>
                            <option value="italic">italic</option>
                        </select>
                    </div>
                    <div className="answer__instagram-container">
                    <label className="answer__instagram-label" htmlFor="instagram">배경 색상 : </label>
                        <input onChange={onBgColorChange} type="color" value={backgroundColor}/>
                    </div>
                    <input className="answer__submit" type="submit" value="답장 하기"/>
                </div>
            </form>
        </>
        : "Loading..." }
        </div>
    )
}

export default Detail;