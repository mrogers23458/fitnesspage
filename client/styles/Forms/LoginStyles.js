import styled from 'styled-components'

const LoginStyles = styled.div`
    border: 1px solid #2b2b2b;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;
    width: 20vw;
    margin-top: 10rem;
    margin-left: 5rem;
    .login-inputs{
        display: flex;
        flex-direction: column;
        margin-top: -5rem;
    }
    input {
        width: 15rem;
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 10px;
    }
    button {
        width: 10rem;
        background: black;
        color: white;
        padding: 1rem;
        border-radius: 10px;
    }
    label {
        padding-bottom: 0.5rem;
    }
`

export default LoginStyles;