let delivery = true;
let search = false;


function formatNumber(x) {
  return x.toLocaleString(undefined, {minimumFractionDigits: 2,});
}


function renderMenus() {
  document.getElementById("content-specials").innerHTML = ``;
  document.getElementById("content-classic").innerHTML = ``;
  document.getElementById("content-salads").innerHTML = ``;
  document.getElementById("content-drinks").innerHTML = ``;

  for (i = 0; i < menus.length; i++) {
    let container = menus[i];
    let menuType = container["type"];
    let price = container["price"];
    let formattedPrice = formatNumber(price);

    if (menuType === "special") {
      document.getElementById("content-specials").innerHTML += generateMenusHTML(container, formattedPrice, i);
    }
    if (menuType === "classic") {
      document.getElementById("content-classic").innerHTML += generateMenusHTML(container, formattedPrice, i);
    }
    if (menuType === "salads") {
      document.getElementById("content-salads").innerHTML += generateMenusHTML(container, formattedPrice, i);
    }
    if (menuType === "drinks") {
      document.getElementById("content-drinks").innerHTML += generateMenusHTML(container, formattedPrice, i);
    }
  }
}


function openSearch() {
  if (search === false) {
      document.getElementById('input').classList.remove('d-none');
      document.getElementById('search').classList.add('lightgray');
      search = true;
  } else {
      document.getElementById('search-container').innerHTML = ``;
      document.getElementById('input').classList.add('d-none');
      document.getElementById('search').classList.remove('lightgray');
      search = false;
  }
}


function filterMenus() {
    let search = document.getElementById('input').value; 
    search = search.toLowerCase(); 

    let menuList = document.getElementById('search-container'); 

    menuList.innerHTML = ``;
    menuList.innerHTML += generateSearchHeadline();
  
  for (let i=0; i<menus.length; i++) {
    let container = menus[i]; 
    let price = container["price"];
    let formattedPrice = formatNumber(price);
    
    if (container['name'].toLowerCase().includes(search) || container['description'].toLowerCase().includes(search)) {
      menuList.innerHTML += generateSearchContainer(container, formattedPrice, i);
    }
  }
  document.getElementById('input').value = ``;
}


function like() {
  let heart = document.getElementById('heart');
  if (heart.src.includes('/img/icons/heart.svg')) {
      heart.src = ('img/icons/heart-solid.svg');
  } else {
      heart.src = ('img/icons/heart.svg');
  }
}


function showNoteLayer(i) {
  let container = basketItems[i];
  let lastValue = container['note'];
    
  document.getElementById(`add-note${i}`).classList.remove('d-none');
  document.getElementById(`add-noteRes${i}`).classList.remove('d-none');
}


function removeNoteLayer(i) {
  document.getElementById(`add-note${i}`).classList.add('d-none');
  document.getElementById(`add-noteRes${i}`).classList.add('d-none');
}


function addNote(i) {
  let container = basketItems[i];
  let input = document.getElementById(`writeNote${i}`);
  let inputRes = document.getElementById(`writeNoteRes${i}`);
    
  if (input.value.trim() !== "") {
    container['note'] = input.value;
    input.value = "";
       
  } else if (inputRes.value.trim() !== "") {
      container['note'] = inputRes.value; 
      inputRes.value = "";
  }

  document.getElementById(`add-note${i}`).classList.add('d-none');
  document.getElementById(`add-noteRes${i}`).classList.add('d-none');

  document.getElementById(`note${i}`).classList.remove('d-none');
  document.getElementById(`noteRes${i}`).classList.remove('d-none');

  renderBasket();
  addSums();
  save();

}


function renderBasket() {
  let content = document.getElementById("content-basket");
  let contentRes = document.getElementById("content-res-basket");

  content.innerHTML = ``;
  contentRes.innerHTML = ``;

  if (basketItems.length < 1) {
    content.innerHTML = generateEmptyBasketHTML();
    document.getElementById('sums').classList.add('d-none');
    document.getElementById('basket-responsive').classList.add('d-none');
    document.getElementById('full-basket').classList.add('d-none');
  } else {
    renderBasketWithItems();
  }
}


function renderBasketWithItems() {
  let content = document.getElementById("content-basket");
  let contentRes = document.getElementById("content-res-basket");
  
  for (i = 0; i < basketItems.length; i++) {
    let container = basketItems[i];
    let price = container["price"];
    let amount = container["amount"];
    let priceResult = price * amount;
    let formattedResult = formatNumber(priceResult);

    content.innerHTML += generateBasketHTML(container, formattedResult, i);
    contentRes.innerHTML += generateBasketResponsiveHTML(container, formattedResult, i);
    
    if (container['note'] !== "") {
      document.getElementById(`note${i}`).classList.remove('d-none');
      document.getElementById(`noteRes${i}`).classList.remove('d-none');
    }
  }
  let content2 = document.getElementById('sums');
  let contentRes2 = document.getElementById('sumsRes');
  content2 = ``;
  content2.innerHTML += `<div id="sum"></div>`;
  contentRes2.innerHTML += `<div id="sumRes"></div>`;
}


function delivered() {
  delivery = true;
  renderSums(2.28, '1,99');
  document.getElementById('switch1').classList.add('switch-background');
  document.getElementById('switch2').classList.remove('switch-background');
  document.getElementById('switch1Res').classList.add('switch-background');
  document.getElementById('switch2Res').classList.remove('switch-background');
}


function takeaway() {
  delivery = false;
  renderSums(0.29, 0);
  document.getElementById('switch1').classList.remove('switch-background');
  document.getElementById('switch2').classList.add('switch-background');
  document.getElementById('switch1Res').classList.remove('switch-background');
  document.getElementById('switch2Res').classList.add('switch-background');
}


function addSums() {
  if (delivery === true) {
      renderSums(2.28, '1,99');
  } else {
      renderSums(0.29, '0');
  };
}


function calcSum() {
let sum = 0;

for (i = 0; i < basketItems.length; i++) {
  let container = basketItems[i];
  sum += container["price"] * container["amount"];
}

return sum;
}

// renderBasketWithItems lädt den Container 'sums'
// renderSums lädt die Inhalte aus den Templates in 'sums'
// addSums fürgt renderSums abhängig von delivered ein

// Lösung: id sums aus content-basket auslagern und sticky machen


function renderSums(x, delCost) {
let sum = calcSum();
let formattedSum = formatNumber(sum);
let finalSum = sum + x;
let formattedFinalSum = formatNumber(finalSum);

if (basketItems.length > 0) {
  if (sum < 14.9) {
    document.getElementById('sums').innerHTML = generateMinimumOrder(formattedSum, formattedFinalSum, delCost);
    document.getElementById('sumsRes').innerHTML = generateMinimumResOrder(formattedSum, formattedFinalSum, delCost);
    document.getElementById('basket-responsive').classList.remove('d-none')
    document.getElementById('basket-responsive').innerHTML = generateMinimumBasketButton(formattedFinalSum);
  } else {
    document.getElementById('sums').innerHTML = generateSums(formattedSum, formattedFinalSum, delCost);
    document.getElementById('sumsRes').innerHTML = generateResponsiveSums(formattedSum, formattedFinalSum, delCost);
    document.getElementById('basket-responsive').innerHTML = generateBasketButton(formattedFinalSum);
  }
} 
}


function addToBasket(i) {
  let container = menus[i];

  let existingContainerIndex = basketItems.indexOf(container);

  if (existingContainerIndex === -1) {
    basketItems.push(container);
  } else {
    container["amount"]++;
  }
  document.getElementById('sums').classList.remove('d-none');
  renderBasket();
  addSums();
  save();
}


function increaseAmount(i) {
  let container = basketItems[i];
  container["amount"]++;

  let existingContainerIndex = menus.findIndex(item => item.name === container.name);

  if (existingContainerIndex !== -1) {
    menus[existingContainerIndex]["amount"] = container["amount"];
  }

  renderBasket();
  addSums();
  save();
}


function reduceAmount(i) {
  let container = basketItems[i];
  if (container["amount"] > 1) {
      container["amount"]--;

      let existingContainerIndex = menus.findIndex(item => item.name === container.name);

      if (existingContainerIndex !== -1) {
          menus[existingContainerIndex]["amount"] = container["amount"];
      }
  } else {
      basketItems.splice(i, 1);
  }

  renderBasket();
  addSums();
  save();
}


function showConfirm() {
    document.getElementById('order-layer').classList.remove('d-none');  
}


function returnToStart() {
    document.getElementById('order-layer').classList.add('d-none');

    basketItems.length = 0;
    renderBasket();

    for (let i = 0; i < menus.length; i++) {
        menus[i].amount = 1; 
        menus[i].note = ""; 
    };

    save();
}


function showFullBasket() {
  document.getElementById('full-basket').classList.remove('d-none');
}


function hideFullBasket() {
  document.getElementById('full-basket').classList.add('d-none');
}


function save() {
  let menusAsText = JSON.stringify(menus); 
  let basketItemsAsText = JSON.stringify(basketItems);
  
  localStorage.setItem('menus', menusAsText); 
  localStorage.setItem('basketItems', basketItemsAsText);
}


function load() {
  let menusAsText = localStorage.getItem('menus');
  let basketItemsAsText = localStorage.getItem('basketItems');
  
  if (menusAsText && basketItemsAsText) {
      menus = JSON.parse(menusAsText);
      basketItems = JSON.parse(basketItemsAsText);
  }
}









