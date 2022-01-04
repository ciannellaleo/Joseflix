import React, {useState, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase'
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from '../containers/header';
import { Form } from "../components";
import * as ROUTES from '../constants/routes';


export default function Signin(){
    const history = useNavigate();
    const { app } = useContext(FirebaseContext);
    const [emailAdrress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');



    // Confere se os elementos do input são válidos
     // Email e Senha

    const isInvalid = password == '' || emailAdrress == '';
    const handleSignIn = (event) => {
        event.preventDefault();

        // o firebase funcionará aqui.
        app
            .auth()
            .signInWithEmailAndPassword(emailAdrress, password)
            .then(() => {
                // push para a página do browser
                history.push(ROUTES.BROWSE);

            })
            .catch((error) => {
                setEmailAdress('');
                setPassword('');
                setError(error.message);
            });
    };

   

    return(
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Entrar</Form.Title>
                    { error && <Form.Error> {error} </Form.Error> }

                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input
                            placeholder="Email"
                            value={emailAdrress}
                            onChange={({ target }) => setEmailAdress(target.value)}
                        />
                        <Form.Input
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Senha"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Entrar
                        </Form.Submit>
                        <Form.Text>
                            Novo por Aqui? <Form.Link to="/signup">Assine agora.</Form.Link>
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