import React from 'react';
import {useMutation, gql} from '@apollo/client';

const POST_MESSAGE = gql`
    mutation($user: String!, $content: String!){
        postMessage(user: $user, content: $content)
    }
`;
const Keyboard = ({user, setUser}) => {

    const [postMessage] = useMutation(POST_MESSAGE);

    //
    const onUserNameChange = (e) => {
        const username = e.target.value;    
        setUser({...user, name: username});
    }

    //
    const onContentChange = (e) => {
        const content = e.target.value;
        setUser({...user, content: content});
        console.log(user);
    }
    
    //
    const onClickHandler = (e) => {
        e.preventDefault();
        if(user.content.length > 0){
            const {name, content} = user;            
            postMessage({variables:{user:name, content}});
            setUser({...user, content: ""});
        }
    }
    
    //
    return(
        <>
            <form style={{
                display: "flex",
                justifyContent: "space-around",
                height: "5%"
            }}>
                <input 
                    style={{width: "20%"}} 
                    type="text" 
                    name="user-name"
                    value={user.name}
                    onChange={onUserNameChange}/>
                <input 
                    style={{width: "60%"}} 
                    type="text" 
                    name="content" 
                    value={user.content}
                    onChange={onContentChange}/>
                <button 
                    style={{width: "20%"}}
                    onClick={onClickHandler}
                    >Enviar</button>
            </form>
        </>
    )
}

export default Keyboard;