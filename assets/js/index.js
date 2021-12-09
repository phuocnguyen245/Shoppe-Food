// const dataJson = [
//     {
//         "id": 1,
//         "img": "./assets/img/item1.jpg",
//         "shopName": "Quán ăn Phương Heo",
//         "address": "An Nhơn9, P. Mỹ An, Quận Sơn Trà, Đà Nẵng"
//     },
//     {
//         "id": 2,
//         "img": "./assets/img/item1.jpg",
//         "shopName": "Quán ăn Phương Bự",
//         "address": "An Nhơn9, P. Mỹ An, Quận Sơn Trà, Đà Nẵng"
//     },
//     {
//         "id": 3,
//         "img": "./assets/img/item1.jpg",
//         "shopName": "Quán ăn Phương Lợn",
//         "address": "An Nhơn9, P. Mỹ An, Quận Sơn Trà, Đà Nẵng"
//     }
// ]
// const renderData = () => {
//     const abc = document.querySelector('.content-container-right .container .right .right-wrapper .right__list .row')
//     const getData = dataJson.map(data => {
//         return `<div id={data.id} class="col-12 col-sm-6 col-md-3 col-lg-4 col-xl-4 p-1 right-item">
//         <a class="" href="">
//             <img src="${data.img}" alt="">
//             <div>
//                 <div class="right-item__desc">
//                     <p class="m-0"
//                         title="${data.shopName}">
//                         ${data.shopName}</p>
//                     <p class="m-0"
//                         title="${data.address}">${data.address}</p>
//                 </div>
//             </div>
//         </a>
//     </div>`
//     })
//     abc.innerHTML = getData.join(' ')
// }
// renderData()
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
const handleLogin = () => {
    const usernameInput = document.querySelector('#username')
    const passwordInput = document.querySelector('#password')
    const submitLogin = document.querySelector('.form-submit')

    //Save usersJson to LocalStorage
    window.localStorage.setItem('usersLocalStrorage', JSON.stringify(usersJson))
    //compare usersJson and object
    submitLogin.onclick = () => {
        const user = {
            username: usernameInput.value,
            password: passwordInput.value
        }
        const arrayUsersJson = JSON.parse(window.localStorage.getItem('usersLocalStrorage'));
        const isUser = arrayUsersJson.some(arrayUserJson => {
            if (arrayUserJson.username == user.username && arrayUserJson.password == user.password) {
                return true
            }
            return false
        })
        console.log(isUser);
        if(isUser){
            window.location.href = "index.html"
        }else{
            document.querySelector('.login-alert').style.display = 'block'
            document.querySelector('.login-alert').innerText = 'Vui lòng nhập lại'
        }
    }
}
handleLogin()