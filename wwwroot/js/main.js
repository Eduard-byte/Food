const sign = document.querySelector(".sign");
const exit = document.querySelector(".exit");
const cart = document.querySelector(".cart");
const userName = document.querySelector(".user-name");
const authorization = document.querySelector(".authorization-position");
const authorizationBtn = document.querySelector(".authorization__button");
const category = document.querySelector(".category-position");
const addCategory = document.querySelector(".add-category");
const btnBackCategory = document.querySelector(".btn__back-category");

sign.addEventListener("click", function(){
    authorization.classList.add('active');
});

authorizationBtn.addEventListener("click", function(){
    authorization.classList.remove('active');
    sign.classList.add('active');
    exit.classList.add('active');
    cart.classList.add('active');
    userName.classList.add('active');
    addCategory.classList.add('active');
});

exit.addEventListener("click", function(){
    sign.classList.remove('active');
    exit.classList.remove('active');
    cart.classList.remove('active');
    userName.classList.remove('active');
    addCategory.classList.remove('active');
});

addCategory.addEventListener('click', function(){
    category.classList.add('active');
});

btnBackCategory.addEventListener('click', function(){
    category.classList.remove('active');
});