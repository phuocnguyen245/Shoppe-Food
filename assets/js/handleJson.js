Promise.all([
    fetch('http://localhost:3000/categoryJsons'),
    fetch('http://localhost:3000/shopJsons')
])
    .then(function (responses) {
        // Get a JSON object from each of the responses
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    })
    .then(function (data) {
        return {
            categories: data[0],
            shops: data[1]
        };
    })
    .then((value) => {
        //get all value of shops
        const getShops = value.shops.map((shopJson) => shopJson);
        //get category of shop === category id 
        const getCateByShop = value.categories.filter((categoryJson) => {
            return getShops.some((shop) => {
                return shop.category === categoryJson.id;
            });
        });
        return {
            shopValue: getShops,
            categoryValue: getCateByShop,
        }
    })
    .then((item) => {
        // get category
        item.categoryValue.map((category) => {

            const rightContainer = document.querySelector('.content-container-right .container .right');
            //create section right-wrapper
            const rightWrapper = document.createElement('section')
            rightWrapper.className = "right-wrapper"
            // create div: right__title
            let rightTitle = document.createElement('div');
            rightTitle.className = "right__title";
            // create span in right__title
            const spanTitle = document.createElement("span")
            // create tag b in spanTitle
            const spanTitleB = document.createElement("b")
            spanTitleB.innerText = `${category.categoryName}`

            // push tab B into spanTitle 
            spanTitle.appendChild(spanTitleB)
            // push spanTitle into rightTitle
            rightTitle.appendChild(spanTitle)
            // push rightTitle into rightWrapper
            rightWrapper.appendChild(rightTitle)
            //push rightWrapper into rightContainer
            rightContainer.appendChild(rightWrapper)

            // if category id === shop category
            const shopByCategory = item.shopValue.filter((shop) => {
                return shop.category === category.id;
            });

            let shopListHtml = ``;
            // get each shop by category and renderData
            shopByCategory.forEach((shop) => {
                shopListHtml +=
                    `
                    <div class="col-12 col-sm-6 col-md-3 col-lg-4 col-xl-4 p-1 right-item" id="${shop.id}">
                        <a class="" href="#">
                            <img src="${shop.img}" alt="">
                            <div>
                                <div class="right-item__desc">
                                    <p class="m-0"title="${shop.shopName}">${shop.shopName}
                                    <p class="m-0"title="${shop.address}">${shop.address}</p>
                                </div>
                                <div class="row flex justify-content-start flex-nowrap ml-1 right-item__disc">
                                    <div class="flex justify-content-start pl-1 pr-1">
                                        <i class="fas fa-tag pr-1 "></i>
                                        <p class="m-0">${shop.cost}</p>
                                    </div>
                                    <div class="flex justify-content-start align-center pl-1 pr-1">
                                        <i class="fa fa-dollar pr-1"></i>
                                        <p class="m-0">Giá 40k</p>
                                    </div>
                                </div>
                                <div class="row flex justify-content-start flex-nowrap right-item__disc">
                                    <div class="flex justify-content-start align-center mr-1">
                                        <i class="fas fa-tag pl-1"></i>
                                        <p class="m-0 pr-1">Mã giảm 20k</p>
                                    </div>
                                    <div class="flex justify-content-start align-center">
                                        <i class="fas fa-motorcycle pl-1 pr-1"></i>
                                        <p class="m-0 pr-1">Giá 20k</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                `
            });
            // create rightList contain all shops by category
            const rightList = document.createElement("div")
            rightList.className = 'right__list row m-0'
            // push shopListHtml into rightList HTML
            rightList.innerHTML = shopListHtml
            // push rightList into rightWrapper
            rightWrapper.appendChild(rightList)
        });
        const shopItems = document.querySelectorAll('.right-item')
        const shopId = []
        shopItems.forEach(item1 => {
            item1.onclick = () => {
                shopId.push(Number(item1.id))
                console.log(shopId);
                const findShopById = item.shopValue.filter(items => {
                    return shopId.some(id => items.id == id)
                })
                console.log(findShopById);
                const getCost = findShopById.reduce((a, b) => {
                    return b.cost + a
                }, 0)
                console.log(getCost);
            }
        })

    })
    // Payment with Stripe

    // https://www.youtube.com/watch?v=1r-F3FIONl8&t