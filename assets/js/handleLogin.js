
const usersJson = [
    {
        username: 'nguyen1',
        password: '1'
    },
    {
        username: 'nguyen2',
        password: '2'
    },
    {
        username: 'nguyen3',
        password: '3'
    }
]
//Save usersJson to LocalStorage
window.localStorage.setItem('usersLocalStrorage', JSON.stringify(usersJson))

const handleLogin = () => {
    const usernameInput = document.querySelector('#username')
    const passwordInput = document.querySelector('#password')
    const submitLogin = document.querySelector('.form-submit')

    //compare usersJson and object
    submitLogin.onclick = () => {
        let userLogin = [{
            username: usernameInput.value,
            password: passwordInput.value
        }]

        const arrayUsersJson = JSON.parse(window.localStorage.getItem('usersLocalStrorage'));

        const isUser = arrayUsersJson.filter(arrayUserJson => userLogin.some(user => arrayUserJson.username === user.username && arrayUserJson.password === user.password));
        // if exist isUser -> assign isUser to userLogin
        userLogin = isUser

        if (isUser.length > 0) {
            window.localStorage.setItem('currentUser', JSON.stringify(userLogin))
            window.location.href = "index.html"
        } else {
            document.querySelector('.login-alert').style.display = 'block'
            document.querySelector('.login-alert').innerText = 'Vui lòng nhập lại'
        }
    }
}
handleLogin()
