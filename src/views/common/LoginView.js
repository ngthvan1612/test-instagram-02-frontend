import React, { useState } from 'react'
import * as AuthApi from '../../api/auth'
import { handleErrorResponse, handleSuccessResponse } from '../../api/toast'
import { ACCESS_TOKEN_KEY_NAME } from '../../types'

const INITIAL_STATE_FORM_DATA = { 
  username: '',
  password: '',
}

const LoginView = (props) => {
    const [formData, setFormData] = useState(INITIAL_STATE_FORM_DATA)
    const [message, setMessage] = useState('')

    const onSubmitForm = (e) => {
        e.preventDefault();
        const preparedData = {...formData};
        AuthApi.authLogin(preparedData)
            .then(resp => {
                handleSuccessResponse(resp);
                const accessToken = resp.data.data.accessToken;
                const user = resp.data.data.user;
                localStorage.setItem(ACCESS_TOKEN_KEY_NAME, accessToken);
                setMessage('Đã lưu thông tin accessToken = ' + accessToken + '<br/>' + 'Thông tin đăng nhập: ' + JSON.stringify(user))
            })
            .catch(err => {
                handleErrorResponse(err);
            })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <>
            <form onSubmit={onSubmitForm}>
                <label>Tên đăng nhập</label>
                <input
                    value={formData.username}
                    onChange={handleInputChange}
                    name="username"
                >
                </input>
                <br/>
                <label>Mật khẩu</label>
                <input
                    value={formData.password}
                    onChange={handleInputChange}
                    name="password"
                >
                </input>
                <br/>
                <input type="submit" value="Đăng nhập"></input>
            </form>
            {message}
        </>
    )
}

export default LoginView
