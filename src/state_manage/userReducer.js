const updateBearer = (firstName, state) => {
    return { ...state, firstName: firstName };
};

const updateBearer = (lastName, state) => {
    return { ...state, lastName: lastName };
};

const updateEmail = (email, state) => {
    return { ...state, email: email };
};

export const UserReducer = (state, action) => {
    switch (action.type) {
        case "update-first-name":
            return updateFirstName(action.firstName, state);
        case "update-first-name":
            return updateLastName(action.lastName, state);
        case "update-email":
            return updateEmail(action.email, state);
        default:
            return;
    }
};