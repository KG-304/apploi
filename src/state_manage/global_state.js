import React, { useReducer } from "react";
import UserContext from "./userContext";
import { UserReducer } from "./userReducer.js";

const GlobalState = props => {
    const user = {
        email: "",
        firstName: "",
        lastName: ""
    };

    const [userState, dispatch] = useReducer(UserReducer, user);

    const updateFirstName = bearer => {
        dispatch({ type: "update-first-name", bearer });
    };

    const updateLastName = bearer => {
        dispatch({ type: "update-lasy-name", bearer });
    };

    const updateEmail = email => {
        dispatch({ type: "update-email", email });
    };

    return (
        <UserContext.Provider
            value={{
                user: userState,
                updateFirstName: updateFirstName,
                updateLastName: updateLastName,
                updateEmail: updateEmail,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default GlobalState;