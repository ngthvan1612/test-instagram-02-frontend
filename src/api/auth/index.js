import { authInstance } from '../axios'

/**
 * User login
 * @param User **Thông tin đăng nhập**
 * 
 * - `username`: Tên người dùng
 * - `password`: Mật khẩu
 */
const authLogin = async(user) => {
    return authInstance.post(`login`, user)
}

export {
    authLogin
}
