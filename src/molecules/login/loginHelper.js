export const checkEmail = (email) => {
    let check = /\S+@\S+\.\S+/;
    if (check.test(email)) {
        return true
    } else {
        return false;
    }
};

export const checkName = (name) => {
    let check = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/;
    if (check.test(name)) {
        return false
    }
    else if (name === "") {
        return false;
    }
    else {
        return true;
    }

}