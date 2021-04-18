import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase'
import { HeaderContainer }  from '../containers/header';
import { Form }  from '../components/index';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

function SignIn() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const isInvalid = password === '' || emailAddress === '';

    const handleSignIn = (e) => {
        e.preventDefault();

        //firebase work here
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE);

            })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            })

    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign in</Form.Title>
                    {error && <Form.Error data-testid="error">{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method='post'>
                        <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            autoCOmplete="off"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign in
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a robot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer></FooterContainer>
        </>
    )
}

export default SignIn;
