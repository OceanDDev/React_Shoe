import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = formValues => {
    const errors = {};
    if (!formValues.fullname) {
        errors.fullname = 'Bạn phải nhập tên người dùng';
    }
    if (!formValues.email) {
        errors.email = 'Bạn phải nhập email';
    }
    if (!formValues.password) {
        errors.password = 'Bạn phải nhập mật khẩu';
    }
    return errors;
};

let UserForm = ({ handleSubmit, pristine, reset, submitting, onSave, onCancel, error }) => {
    const submitForm = (values) => {
        onSave(values);
        reset();
    };

    return (
        <form className='user-form' onSubmit={handleSubmit(submitForm)}>
            <div>
                <label htmlFor="fullname">Tên người dùng:</label>
                <Field
                    name="fullname"
                    component="input"
                    type="text"
                />
                <span className="error">{error?.fullname}</span>
            </div>
            <div>
                <label htmlFor="birthday">Ngày sinh:</label>
                <Field
                    name="birthday"
                    component="input"
                    type="date"
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <Field
                    name="email"
                    component="input"
                    type="email"
                />
                <span className="error">{error?.email}</span>
            </div>
            <div>
                <label htmlFor="password">Mật khẩu:</label>
                <Field
                    name="password"
                    component="input"
                    type="password"
                />
                <span className="error">{error?.password}</span>
            </div>
            <div>
                <label htmlFor="isAdmin">Quản trị:</label>
                <Field
                    name="isAdmin"
                    component="input"
                    type="checkbox"
                />
            </div>
            <div>
                <button type="submit" disabled={submitting}>
                    Lưu
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Reset
                </button>
                <button type="button" onClick={onCancel}>
                    Hủy bỏ
                </button>
            </div>
        </form>
    );
};

UserForm = reduxForm({
    form: 'UserForm',
    validate
})(UserForm);

export default UserForm;
