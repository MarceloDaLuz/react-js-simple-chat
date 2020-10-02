import React from 'react';
import { useSubscription , gql} from '@apollo/client';

const GET_MESSAGES = gql`
    subscription{
        messages{
            id,
            content,
            user
        }
    }
`;


const Message = ({user}) => {
    const { data } = useSubscription(GET_MESSAGES);
    if(!data || data.messages.length === 0) return(<div> Não possui mensagens...</div>)

    return(
        <div style={{height: "91%"}} >
            {data
                .messages
                .map(({id: messageId, user: messageUser, content: messageContent}) =>(
                    <div style={{
                        display:"flex",
                        justifyContent: user === messageUser ? 'flex-end':  "flex-start",
                        paddingBottom: "1rem"
                        }}
                        key={messageId}>
                        { 
                            user !== messageUser && (
                                <div
                                    style={{
                                        height: " 45px",
                                        width: " 45px",
                                        marginRight: "0.5rem",
                                        border: "1px solid black",
                                        borderRadius: "25px",
                                        textAlign: "center",
                                        fontSize: "18pt",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        {messageUser.slice(0, 2).toUpperCase()}
                                </div>
                            )
                        }
                        <div style={{
                            background: user === messageUser ? "#00ccff" : "#fdfd1e",
                            color: user === messageUser ? "#FFFFFF" : "#000000",
                            paddingBottom: "1rem",
                            borderRadius: "5px"
                        }}>
                            {messageContent}
                        </div>
                    </div>
                    )
                )
            }    
        </div>
    )
}

export default Message;