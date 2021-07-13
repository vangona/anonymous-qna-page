import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
        <div>Home</div>
        <Link to="/auth">로그인</Link>
        </>
    )
}

export default Home;