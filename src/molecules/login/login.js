import { useState, useContext } from 'react'
import { Button, Modal, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import user_context from "../../state_manage/user_context";
import { Backdrop } from "@material-ui/core";
import Fade from '@material-ui/core/Fade';
import { checkEmail, checkName } from './loginHelper'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: "25px",
            width: "90%",
            height: "100%",
            outline: "none",
        },
    },
    button: {
        border: "solid 0.5px blue",
        borderRadius: "10px",
        display: 'inline-block',
        color: 'blue',
        marginTop: '5%'
    },
    input: {
        margin: '5% 5% 0% 5%',
        width: '90%',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 'none',
        fontFamily: 'sans-serif'
    },
    backdrop: {
        background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '400% 400%',
        animation: `$gradient 15s ease infinite`
    },
    fade: {
        outline: 'none',
        backgroundColor: 'white',
        textAlign: 'center',
        borderRadius: '5px',
        width: '40%'
    },
    title: {
        padding: '0% 0% 5% 0%',
        color: 'grey',
        fontSize: '15pt'
    },
    "@keyframes gradient": {
        '0%': {
            backgroundPosition: '0% 50%'
        },
        '50%': {
            backgroundPosition: '100% 50%'
        },
        '100%': {
            backgroundPosition: '0% 50%'
        }
    }
}));

const Login = () => {
    const classes = useStyles();
    const context = useContext(user_context);
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [load, setLoad] = useState(false)

    const validate = () => {
        if (checkEmail(email) && checkName(firstName) && checkName(lastName)) {
            setLoad(true)
            window.setTimeout(() => { //simulate API
                context.updateEmail(email);
                context.updateFirstName(firstName);
                context.updateLastName(lastName);
                history.push("/home");
                setLoad(false);
            }, 3000)
        }
    }

    return (
        <div className="app-container">
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={true}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                    className: classes.backdrop,
                    title: <span>Loading</span>
                }}
            >
                <>
                    <Fade in={true} className={classes.fade}>
                        <div>
                            <ul style={{ listStyle: 'none' }}>
                                <span className={classes.title}>Welcome, please provide your email, first, and last name:</span>
                                <TextField required className={classes.input} error={!checkEmail(email)} onChange={event => setEmail(event.target.value)} type="email" value={email} placeholder="Please input a valid email" id="filled-basic" label="Email" variant="filled" />
                                <TextField required className={classes.input} error={!checkName(firstName)} onChange={event => setFirstName(event.target.value)} value={firstName} placeholder="Please input a valid first name" id="filled-basic" label="First Name" variant="filled" />
                                <TextField required className={classes.input} error={!checkName(lastName)} onChange={event => setLastName(event.target.value)} value={lastName} placeholder="Please input a valid last name" id="filled-basic" label="Last Name" variant="filled" />
                                <Button onClick={() => validate()} className={classes.button}>Submit</Button>
                                <span>{load ? "Loading..." : null}</span>
                            </ul>
                        </div>
                    </Fade>
                </>
            </Modal>
        </div>

    )
}

export default Login