import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
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

    const onLogOut = e => {
        e.preventDefault();
        authService.signOut();
        history.push("/logout")
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
        setSelection(question.docs[0].data())
        setIsLoading(true);
    }

    useEffect(() => {
        if (id !== userAuth) {
            history.push(`/${id}/a`)
        }
        getSelection();
        getQuestions();
    }, [])

    return (
        <div>
            {isLoading ? 
            <>
                <h3>프로필(질문 만들기)</h3>
                <form onSubmit={onSubmit}>
                <input type="text" placeholder="질문" onChange={onQuestionChange} value={question}/>
                <input type="submit" />
                </form>
                <div>
                    <h5>질문 목록</h5>
                    <select onChange={onSelectChange}>
                        {questions.map((question, index) => {
                            return (<option key={index}>{question.question}</option>)
                        })}
                    </select> <br />
                    <a href={`http://localhost:3000/#/YGuWuFyRnEbojXt1J1SewSpDjkt2/${selection.id}`}>{selection.question} 답변 링크</a>
                    <div><br />
                    <table>
                        <thead>
                            <tr>
                                <th>글쓴이</th>
                                <th>내용</th>
                                <th>인스타 아이디</th>
                            </tr>
                        </thead>
                        <tbody>
                        {selection.answerArray.map((answer, index) => {
                            return (
                            <tr key={index}>
                                <td>{answer.nickname}</td>
                                <td>{answer.answerContent}</td>
                                <td>{answer.instaID}</td>
                            </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    <button onClick={onLogOut}>로그아웃</button>
                    </div>
                </div>
            </>
            : "Loading..."}
        </div>
    )
}

export default Profile;