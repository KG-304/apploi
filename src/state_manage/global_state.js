import React, { useReducer } from "react";
import user_context from "./user_context";
import { UserReducer } from "./user_reducer.js";

const GlobalState = props => {
    const user = {
        email: "",
        firstName: "",
        lastName: ""
    };

    const [userState, dispatch] = useReducer(UserReducer, user);

    const updateFirstName = firstName => {
        dispatch({ type: "update-first-name", firstName });
    };

    const updateLastName = lastName => {
        dispatch({ type: "update-last-name", lastName });
    };

    const updateEmail = email => {
        dispatch({ type: "update-email", email });
    };

    return (
        <user_context.Provider
            value={{
                user: userState,
                updateFirstName: updateFirstName,
                updateLastName: updateLastName,
                updateEmail: updateEmail,
            }}
        >
            {props.children}
        </user_context.Provider>
    );
};

export default GlobalState;