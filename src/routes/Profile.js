import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { v4 as uuidv4} from "uuid";
import { authService, dbService } from "../fBase";

const Profile = ({userAuth}) => {
    const history = useHistory();
    const [question, setQuestion] = useState("");
    const [questions, setQuestions] = useState([]);
    const [selection, setSelection] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();

    const onSubmit = async (e) => {
        e.preventDefault();
        const questionObj = {
            question,
            id: uuidv4(),
            answerArray: [],
            registered_dttm: Date.now(),
            updated_dttm: 0,
        }
        await dbService.collection(`${userAuth}`).doc(`${question}`).set(questionObj)
        setSelection(questionObj)
        setQuestion("");
    }

    const onQuestionChange = e => {
        const {target: {value}} = e;
        setQuestion(value);
    }

    const onSelectChange = e => {
        const {target: {value}} = e;
        questions.map((question) => question.question === value && setSelection(question))
    }

    const onLinkClick = (e) => {
        e.preventDefault();
        const tempElem = document.createElement('input')
        tempElem.value = `${window.location.protocol}//${window.location.host}/${userAuth}/${selection.id}#/${userAuth}/${selection.id}`
        document.body.appendChild(tempElem)
        tempElem.select();
        document.execCommand("copy");
        history.push(`/${userAuth}/${selection.id}`)
    }

    const onLogOut = (e) => {
        e.preventDefault();
        authService.signOut();
        history.push("/")
    }

    const onDeleteAnswer = id => {
        return function () {
            if (window.confirm("정말 해당 답변을 삭제하시겠습니까?")) {
                selection.answerArray.splice(id, 1)
                dbService.collection(`${userAuth}`).doc(`${selection.question}`)
                .update({
                    answerArray : selection.answerArray
                })
            }
        }
    }

    const onDeleteQuestion = selectionToDel => {
        return function () {
            if (window.confirm("정말 해당 질문을 삭제하시겠습니까? \n 포함된 답변들도 모두 삭제됩니다.")) {
                dbService.collection(`${userAuth}`).doc(`${selectionToDel.question}`).delete();
                if (questions) {
                    setSelection(questions[0])
                }
            }
        }
    }

    const getQuestions = async () => {
        dbService.collection(`${userAuth}`)
        .onSnapshot(snapshot => {
            const questionsData = snapshot.docs.map((doc) => ({
                id:doc.id,
                ...doc.data(),
            }))
            setQuestions(questionsData)
        })
    }

    const getSelection = async () => {
        const question = await dbService.collection(`${userAuth}`).get()
        if (question.docs[0]) {
            setSelection(question.docs[0].data())
        }
        setIsLoading(true);
    }

    useEffect(() => {
        if (id !== userAuth) {
            history.push('/auth')
        } else {
            getSelection();
            getQuestions();
        }
    }, [userAuth])

    return (
        <div className="profile__container">
            {isLoading ? 
            <>
                <h3 className="profile__title">Q & A</h3>
                <h5>질문 만들기</h5>
                <form onSubmit={onSubmit} className="question__form">
                    <input className="question__text" type="text" placeholder="질문" onChange={onQuestionChange} value={question}/>
                    <input className="question__submit" type="submit" value="질문 만들기"/>
                </form>
                <hr style={{width: "80%"}}/>
                { questions ? questions.length !== 0 &&
                    <>
                        <h5>질문 관리 & 답변 보기</h5>
                        <select className="question-pages" onChange={onSelectChange} value={selection.question}>
                            {questions.map((question, index) => {
                                return (<option key={index}>{question.question}</option>)
                            })}
                        </select>
                        <Link className="question-page__link" to={`/${userAuth}/${selection.id}/custom`}>답변 페이지 커스텀 + 답변 보기</Link><br />
                        <button onClick={onLinkClick} className="answer-page__link" >' {selection.question} ' 답변 링크 공유하기</button>
                    </>
                : null
                }
                    <div>
                    {selection.answerArray ? selection.answerArray.length !== 0 &&
                    <>
                        <table className="answer__table-container">
                            <thead>
                                <tr>
                                    <th>글쓴이</th>
                                    <th>내용</th>
                                    <th>인스타 아이디</th>
                                    <th>삭제</th>
                                </tr>
                            </thead>
                            <tbody  className="answer__table-body">                                

                            {selection.answerArray.map((answer, index) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{answer.nickname}</td>
                                            <td>{answer.answerContent}</td>
                                            <td>{answer.instaID}</td>
                                            <td><button onClick={onDeleteAnswer(index)}>X</button></td>
                                        </tr>
                                    </>
                                )
                            })}
                            </tbody>
                        </table><br />
                    </>
                    : null
                    }
                    <div className="profile__button-container">
                        { questions ? questions.length !== 0 &&
                        <button onClick={onDeleteQuestion(selection)}>질문 삭제하기</button>
                        : null
                        }
                        <button onClick={onLogOut}>로그아웃</button>
                    </div>
                </div>
            </>
            : "Loading..."}
        </div>
    )
}

export default Profile;