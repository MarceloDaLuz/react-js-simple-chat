import React from 'react';
import { 
    ApolloClient, 
    InMemoryCache, 
    ApolloProvider,     
} from '@apollo/client';

import { WebSocketLink } from '@apollo/client/link/ws';

//components
import Message from '../Message';
import Keyboard from '../Keyboard';

//GraphQl
const link = new WebSocketLink({
    uri: `ws://localhost:4000/`,
    options: {
        reconnect: true
    }
});

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
    link: link
});

const Chat = ({user, setUser }) => {
    return (
        <ApolloProvider client={client}>
            <>
                <h2 style={{height: "4%"}}>My chat</h2>
                <Message user={user.name}/>
                <Keyboard user={user} setUser={setUser}/>
            </>
        </ApolloProvider>
    )
};

export default Chat;