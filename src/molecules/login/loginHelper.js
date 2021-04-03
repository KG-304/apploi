export const checkEmail = (email) => {
    let check = /\S+@\S+\.\S+/;
    if (check.test(email)) {
        return true
    } else {
        return false;
    }
};

export const checkName = (name) => {
    let check = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (check.test(name)) {
        return true
    }
    else {
        return false;
    }

}