//object in shorthand
const name = 'JJ';
const userAge = 20;

const user = {
    name,
    age:userAge,
    location:'Bangkok'
};
console.log(user)

//object destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
}

const {label:productLable, stock:pStock, rating=5} = product
console.log(productLable)
console.log(pStock);

const transaction = (type,{label,stock}) =>{
    console.log(type,label,stock);
}

transaction('order',product)