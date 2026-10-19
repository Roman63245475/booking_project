import SignIn from "@/SignIn.tsx";

const SignUp = () => {
    return (
        <>
            <h1>Sign up</h1>
            <form className={'form-style'}>
                <label htmlFor={'username'}>Username:</label>
                <input id={'username'} type={'text'}></input>

                <label htmlFor={'email'}>Email:</label>
                <input id={'email'} type={'email'}></input>

                <label htmlFor={'password'}>Password:</label>
                <input id={'password'} type={'password'}></input>


                <button type={'submit'}>Register</button>
            </form>
        </>

    )
}

export default SignUp