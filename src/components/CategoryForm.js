import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = formValues => {
    const errors = {};
    if (!formValues.name) {
        errors.name = 'Bạn phải nhập tên danh mục';
    }
    if (!formValues.description) {
        errors.description = 'Bạn phải nhập mô tả';
    }
    return errors;
}

let CategoryForm = ({ handleSubmit, pristine, reset, submitting, initialValues, onSave, onCancel, error }) => {
    console.log(initialValues);
    
    const submitForm = (values) => {
        onSave(values);
        reset();
    }

    return (
        <form className='cate-form' onSubmit={handleSubmit(submitForm)}>
            <div>
                <label htmlFor="name">Tên danh mục:</label>
                <Field
                    name="name"
                    component="input"
                    type="text"
                />
                {error && error.name && <span>{error.name}</span>}
            </div>
            <div>
                <label htmlFor="description">Mô tả:</label>
                <Field
                    name="description"
                    component="textarea"
                />
                {error && error.description && <span>{error.description}</span>}
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
    )
}

CategoryForm = reduxForm({
    form: 'CategoryForm',
    validate
})(CategoryForm);

export default CategoryForm;
