const dataJson = [
    {
        "id": 1,
        "img": "./assets/img/item1.jpg",
        "shopName": "Quán ăn Phương Heo",
        "address": "An Nhơn9, P. Mỹ An, Quận Sơn Trà, Đà Nẵng"
    },
    {
        "id": 2,
        "img": "./assets/img/item1.jpg",
        "shopName": "Quán ăn Phương Bự",
        "address": "An Nhơn9, P. Mỹ An, Quận Sơn Trà, Đà Nẵng"
    },
    {
        "id": 3,
        "img": "./assets/img/item1.jpg",
        "shopName": "Quán ăn Phương Lợn",
        "address": "An Nhơn9, P. Mỹ An, Quận Sơn Trà, Đà Nẵng"
    }
]
const renderData = () => {
    const abc = document.querySelector('.content-container-right .container .right .right-wrapper .right__list .row')
    const getData = dataJson.map(data => {
        return `<div id={data.id} class="col-12 col-sm-6 col-md-3 col-lg-4 col-xl-4 p-1 right-item">
        <a class="" href="">
            <img src="${data.img}" alt="">
            <div>
                <div class="right-item__desc">
                    <p class="m-0"
                        title="${data.shopName}">
                        ${data.shopName}</p>
                    <p class="m-0"
                        title="${data.address}">${data.address}</p>
                </div>
            </div>
        </a>
    </div>`
    })
    abc.innerHTML = getData.join(' ')
}
renderData()

const setUserName = () => {
    const changeName = document.querySelector('.btn-login a')
    const currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
    const username = currentUser.username;
    changeName.innerText = 'Đăng xuất' + username
    const logout = {
        username: null,
        password: null
    }
    changeName.onclick = () => {
        window.localStorage.setItem('currentUser', JSON.stringify(logout))
        changeName.location.href = 'login.html';
    }
}
setUserName()
