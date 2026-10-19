import {useNavigate} from "react-router";

export default function UpBar(){
    const navigate = useNavigate();
    return (
        <ul className={'upbar'}>
            <li><button onClick={() => navigate("sign-in")}>Sign in</button></li>
            <li><button onClick={() => navigate("sign-up")}>Sign up</button></li>
        </ul>
    )
}