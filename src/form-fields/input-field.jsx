/* eslint-disable no-new-func */

import React from 'react';
import { Input, Form } from 'antd';
import { useField } from 'react-final-form';
import PropTypes from 'prop-types';

function InputField({ name, className, defaultValue, type, placeholder }) {

    let { input, meta } = useField(name, { defaultValue: defaultValue });
    let validateStatus = meta.touched && meta.error ? 'error' : '';
    let help = meta.touched ? meta.error : '';

    function onChange(v) {
        input.onChange(v);
    }

    if (type === 'password') {
        return (
            <Form.Item validateStatus={validateStatus} help={help}>
                <Input.Password
                    {...input}
                    className={className}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </Form.Item>
        );
    }

    return (
        <Form.Item validateStatus={validateStatus} help={help}>
            <Input
                {...input}
                type={type}
                className={className}
                placeholder={placeholder}
                onChange={onChange}
            />
        </Form.Item>
    );
}

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    type: PropTypes.string
};

export default InputField;
