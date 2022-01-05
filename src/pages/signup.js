import React, {useState, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase'
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from '../containers/header';
import { Form } from "../components";
import * as ROUTES from '../constants/routes';



export default function Signup(){

    const history = useNavigate();
    const { app } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName == '' || password == '' || emailAddress == '';

    const handleSignUp = (event) => {
        event.preventDefault();
        // firebase

        app
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => 
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1,

                })
                .then(() => {
                    history.push(ROUTES.BROWSE);
                })
            )
            .catch((error) => {
                setFirstName('');
                setEmailAddress('');
                setPassword('');
                setError('');
            });
    };

    return(
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Cadastro</Form.Title>
                    { error && <Form.Error>{ error }</Form.Error>}
                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input
                            placeholder="Nome"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        <Form.Input
                            placeholder="Email"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Senha"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Cadastre-se
                        </Form.Submit>

                        <Form.Text>
                            Ja possui cadastro? <Form.Link to="/signin">Login.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                        Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. Saiba mais.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
    
}