function getId(id){
    return document.getElementById(id).value.trim();
}
function showError(meror){
    errors = document.getElementById('error');
    return errors.innerHTML = meror;
}
var submit = document.querySelector('#submit');
var car = [];
submit.onclick = function(e){
    e.preventDefault();
    var product;
    if (getId('carName') == '') {
        showError('Vui lòng điền tên xe');
    }else if(getId('carName').length < 10){
        showError('Tên xe tối thiểu 10 ký tự');
    }else if(getId('carCode') == ''){
        showError('Vui lòng nhập mã số xe');
    }else if(getId('carColor') == ''){
        showError('Vui lòng chọn màu xe');
    }else if(getId('quantity') == ''){
        showError('Vui lòng nhập số lượng');
    }else if(isNaN(getId('quantity')) == true || Number(getId('quantity')) < 0){
        showError('Số lượng phải lớn hơn 0');
    }else if(getId('price') == ''){
        showError('Vui lòng nhập giá tiền');
    }else if(isNaN(getId('price')) == true || Number(getId('price')) < 0){
        showError('Giá tiền phải lớn hơn 0');
    }else{
        showError('');
        product = {
            name: getId('carName'),
            code: getId('carCode'),
            color: getId('carColor'),
            quantity: getId('quantity'),
            price: getId('price')
        }
        car.push(product);
        showCar();
        sumMoney();
    }
}
function showCar(){
    var showProduct = document.querySelector('#showCar');
    showProduct.innerHTML = '';
    for (let i = 0; i < car.length; i++) {
        showProduct.innerHTML += `
        <tr>
            <td>${car[i].name}</td>
            <td>${car[i].code}</td>
            <td>${car[i].color}</td>
            <td>${car[i].quantity}</td>
            <td>${car[i].price}</td>
            <td><button class = "btn" onclick="remove(${i})">Xóa</button></td>
        </tr>
        `
        
    }
}
function sumMoney(){
    var sumMn = document.querySelector('#sumMoney');
    var sum = 0;
    for (let i = 0; i < car.length; i++) {
        sum += Number(car[i].price)*Number(car[i].quantity);   
    }
    sumMn.innerHTML = sum;
}
function remove(index){
    car.splice(index,1);
    showCar();
    sumMoney();
}