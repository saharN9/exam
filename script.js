class Item {
    constructor(id,name, price, imageSrc, category) {
        this.id = id;
      this.name = name;
      this.price = price;
      this.imageSrc = imageSrc;
      this.category = category;

    }

  }

  class Food{
     static vegetables = [new Item(1,'Tomato', 1.50, "https://icons.iconarchive.com/icons/bingxueling/fruit-vegetables/96/tomato-icon.png","food"), 
     new Item(2,'Carrot', 2.90, "https://icons.iconarchive.com/icons/google/noto-emoji-food-drink/96/32361-carrot-icon.png","food"),
     new Item(3,'Pepper', 3.50, "https://icons.iconarchive.com/icons/bingxueling/fruit-vegetables/96/pepper-icon.png","food")];

     static fruits = [new Item(4,'Apple', 4.00, "https://icons.iconarchive.com/icons/bingxueling/fruit-vegetables/96/apple-red-icon.png","food"), 
     new Item(5,'Banana', 4.20, "https://icons.iconarchive.com/icons/designcontest/casino/96/Banana-icon.png","food") ];
  }
  class Electronic{
    static headphones= [new Item(6,'Razer Headphones', 235.00, "https://icons.iconarchive.com/icons/3xhumed/tools-hardware-pack-3/96/Razer-Headphone-1-icon.png","headphones"),
    new Item(7,'Classic Headphones', 170.00, "https://icons.iconarchive.com/icons/iconmoon/viva/96/Headphones-icon.png","headphones"),
    new Item(8,'DJ Headphones', 213.00, "https://icons.iconarchive.com/icons/iconshock/disc-jockey/128/headphones-icon.png","headphones")
];
    static pc =  [new Item(9,'Mac X900 Pc', 960.00, "https://icons.iconarchive.com/icons/sirubico/black-metal/96/PC-icon.png","pc"),
    new Item(10,'i7 HP 780', 483.00, "https://icons.iconarchive.com/icons/sirubico/black-metal/96/PC-a-icon.png","pc")
];
 }
 class Games{
    static vidGames = [new Item(11,'Minecraft', 70.00, "https://icons.iconarchive.com/icons/jeno-cyber/game-cover-51/96/Minecraft-icon.png","vidGames"),
    new Item(12,'Fallout', 90.00, "https://icons.iconarchive.com/icons/jeno-cyber/game-cover-51/96/Fallout-New-Vegas-Ultimate-Edition-icon.png","vidGames")
];
 }

 function ItemToCard(item)
 {
return `<div class="col-lg-4 col-md-6 mb-4">
<div class="card h-100">
  <a href="#"><img class="card-img-top imgCard" src="${item.imageSrc}" alt=""></a>
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <h5>${item.price}$</h5>
    <p class="card-text">Category: ${item.category}</p>
    <a href="#" class="btn btn-primary" id ="Item${item.id}Click">Add to cart</a>
  </div>
  <div class="card-footer">
    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
  </div>
</div>
</div>
`     
 }

 const cart = [];

const CardContainer = document.getElementById("itemsContainer");
 document.getElementById("vegsClick").addEventListener('click', function(){
    CardContainer.innerHTML = "";
for(item of Food.vegetables){
CardContainer.innerHTML += ItemToCard(item);    
}
 });
 document.getElementById("fruitsClick").addEventListener('click', function(){
    CardContainer.innerHTML = "";
for(item of Food.fruits){
CardContainer.innerHTML += ItemToCard(item);    
}
 });
 
 document.getElementById("headpClick").addEventListener('click', function(){
    CardContainer.innerHTML = "";
for(item of Electronic.headphones){
CardContainer.innerHTML += ItemToCard(item);    
}
 });
 document.getElementById("pcClick").addEventListener('click', function(){
    CardContainer.innerHTML = "";
for(item of Electronic.pc){
CardContainer.innerHTML += ItemToCard(item);    
}
 });
 document.getElementById("vidClick").addEventListener('click', function(){
    CardContainer.innerHTML = "";
for(item of Games.vidGames){
CardContainer.innerHTML += ItemToCard(item);    
}
 });
 document.getElementById("vegsClick").addEventListener('click', function(){
    CardContainer.innerHTML = "";
for(item of Food.vegetables){
CardContainer.innerHTML += ItemToCard(item);    
}
 });

 document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'Item1Click'){
          cart.push(Food.vegetables[0]);
     }
     if(e.target && e.target.id== 'Item2Click'){
        cart.push(Food.vegetables[1]);
   }
   if(e.target && e.target.id== 'Item3Click'){
    cart.push(Food.vegetables[2]);
}
if(e.target && e.target.id== 'Item4Click'){
    cart.push(Food.fruits[0]);
}
if(e.target && e.target.id== 'Item5Click'){
    cart.push(Food.fruits[1]);
}
if(e.target && e.target.id== 'Item6Click'){
    cart.push(Electronic.headphones[0]);
}
if(e.target && e.target.id== 'Item7Click'){
    cart.push(Electronic.headphones[1]);
}
if(e.target && e.target.id== 'Item8Click'){
    cart.push(Electronic.headphones[2]);
}
if(e.target && e.target.id== 'Item9Click'){
    cart.push(Electronic.pc[0]);
}
if(e.target && e.target.id== 'Item10Click'){
    cart.push(Electronic.pc[1]);
}
if(e.target && e.target.id== 'Item11Click'){
    cart.push(Games.vidGames[0]);
}
if(e.target && e.target.id== 'Item12Click'){
    cart.push(Games.vidGames[1]);
}
 });

 const body = document.getElementById('cartList');
 function CartToList(cart){
   body.innerHTML ="";
    let listed = [];
for(item of cart)
{
if(!listed.includes(item.id)){
    body.innerHTML +=  `<li class="list-group-item">${item.name} ${item.price}$ Quantity:<input type="number" value="1" min="0" max="10" step="1"/></li>`;
    listed.push(item.id);
}
}
    
 }
 document.getElementById('cartClick').addEventListener('click', function(){
  CardContainer.innerHTML= `<div class="card">
  <h5 class="card-header">Cart <span id="itemsCount">(${cart.length} items)
  </span></h5>
  <div class="card-body">
    <h5 class="card-title">Order summary</h5>
    <ul class="list-group" id="cartList">
    </ul>
   
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Checkout</a>
  </div>
</div>`;

  CartToList(cart);


 });
