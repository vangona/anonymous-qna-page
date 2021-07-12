import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { v4 as uuidv4} from "uuid";
import { dbService } from "../fBase";

const Profile = ({userAuth}) => {
    const history = useHistory();
    const [question, setQuestion] = useState("");
    const [questions, setQuestions] = useState([]);
    const [selection, setSelection] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    let questionDB = [];

    const onSubmit = async (e) => {
        e.preventDefault();
        await dbService.collection(`${userAuth}`).doc("질문들").get().then((doc) => {
            console.log(doc.data())
            if (doc.exists) {
                questionDB = doc.data().questionArray
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        const questionArrayObj = {
            questionArray: [...questionDB, question]
        }
        const questionObj = {
            question,
            id: uuidv4(),
            answer: [],
            registered_dttm: Date.now()
        }
        await dbService.collection(`${userAuth}`).doc(`${question}`).set(questionObj)
        await dbService.collection(`${userAuth}`).doc("질문들").set(questionArrayObj)
        setQuestion("");
    }

    const onQuestionChange = e => {
        const {target: {value}} = e;
        setQuestion(value);
    }

    const onSelectChange = e => {
        const {target: {value}} = e;
        setSelection(value);
    }

    const getQuestions = async () => {
        await dbService.collection(`${userAuth}`).where('id', '!=', "questionArray").get()
        .then((snapshot) => {
            const questionsData = snapshot.docs.map((doc) => ({
                id:doc.id,
                ...doc.data(),
            }))
            setQuestions(questionsData)
        })
        setIsLoading(true);
    }

    useEffect(() => {
        console.log(id)
        if (id !== userAuth) {
            history.push(`/${id}/a`)
        }
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
                    {questions.map(question => {
                        return (<option>{question.question}</option>)
                    })}
                    </select> 
                    <div>{questions.map(question => question.question === selection 
                        ? <a href={`http://localhost:3000/#/YGuWuFyRnEbojXt1J1SewSpDjkt2/${question.id}`}>{question.question} 답변 링크</a>
                        : null)}
                    </div>
                </div>
            </>
            : "Loading..."}
        </div>
    )
}

export default Profile;