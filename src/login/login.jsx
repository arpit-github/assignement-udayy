import React from 'react';
import { Form } from 'react-final-form';
import InputField from '../form-fields/input-field';
// import PropTypes from 'prop-types';

import styles from './login.module.css'

function Login() {
    
    function onSubmit(values) {
        console.log(values)
    }

    return (
        <div className={styles["container"]}>
            <div className={styles["wrap-container"]}>
                <Form
                    initialValues={{}}
                    onSubmit={onSubmit}
                    render={({ handleSubmit }) =>
                        <form className={styles["form"]} onSubmit={handleSubmit}>
                            <span className={styles["form-title"]}>
                                Welcome to Udayy
                            </span>
                            <div className={styles["wrap-input"]}>
                                <span className={styles["label-input"]}>Your Username</span>
                                <InputField name='username' className={styles["input"]} type='text' placeholder="Enter your username" />
                            </div>
                            <div className={styles["wrap-input"]}>
                                <span className={styles["label-input"]}>Password</span>
                                <InputField name='password' className={styles["input"]} type='text' placeholder="Enter your password" />
                            </div>
                            <button className={styles["form-btn"]}>SUBMIT</button>
                        </form>
                    }
                />
            </div>
        </div>
    );
}

Login.propTypes = {};

export default Login;
