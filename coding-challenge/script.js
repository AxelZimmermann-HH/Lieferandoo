let menus = ["Döner", "Pizza", "Pommes"];

let prices = [7.99, 12.99, 5.99];

let amounts = [1, 1, 1];

function getValueFromInput(input) {
  return document.getElementById(input).value;
}

function getMenuFromInput() {
  let spaces = getValueFromInput("menu");
  return spaces.trim();
}

function getPriceFromInput() {
  let string = getValueFromInput("price");
  return Number(string);
}

function onAddMenu() {
  let newmenu = getMenuFromInput();
  let newprice = getPriceFromInput();

  if (getMenuIndex(newmenu) === -1) {
    menus.push(newmenu);
    prices.push(newprice);
    amounts.push(1);
  } else {
    amounts[getMenuIndex(newmenu)]++;
  }
  render();
}

function getMenuIndex(menu) {
  let index = menus.indexOf(menu);
  return index;
}

//ADDITIONAL
function render() {
  let content = document.getElementById("output");
  content.innerHTML = ``;

  for (i = 0; i < menus.length; i++) {
    const menu = menus[i];
    const amount = amounts[i];
    const price = prices[i];

    content.innerHTML += `<p>${menu} ${amount} ${price}</p>`;
  }
}
