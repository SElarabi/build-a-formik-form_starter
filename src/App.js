/** @format */

import React from 'react';
// TODO: import useFormik from formik library
import { useFormik } from 'formik';

function App() {
	// TODO: add a const called formik assigned to useFormik()
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: (values) => {
			//  alert(JSON.stringify(values, null, 2));
			alert('Login Successful');
		},
		validate: (values) => {
			let errors = {};
			if (!values.email) {
				errors.email = 'Required';
			} else if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
			) {
				errors.email = 'Username should be an email';
			}
			if (!values.password) {
				errors.password = 'Password Required !';
			}
			return errors;
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			{/* //-------------------E-mail Section------------------- */}
			<div>E-mail:</div>
			<input
				id='emailField'
				name='email'
				type='text'
				onChange={formik.handleChange}
				value={formik.values.email}
				style={{ padding: '5 px' }}
			/>
			{formik.errors.email ? (
				<div style={{ color: 'red' }}>{formik.errors.email}</div>
			) : null}
			{/* //---------------Password section--------------------- */}
			<div>Password:</div>
			<input
				id='pswField'
				name='password'
				type='text'
				onChange={formik.handleChange}
				value={formik.values.password}
			/>
			<br />
			{formik.errors.password ? (
				<div style={{ color: 'red' }}>{formik.errors.password}</div>
			) : null}

			<button
				type='submit'
				id='submitBTN'>
				Submit
			</button>
		</form>
	);
}

export default App;
