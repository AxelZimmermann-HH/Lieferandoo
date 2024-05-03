function generateMenusHTML(container, formattedPrice, i) {
  return `
    <div class="dish-container">
        <div class="dish-container-left">
            <div class="dish-info">
                <h3 id="dish-name">${container["name"]}</h3>
                <img src="img/icons/info.svg" alt="">
            </div>
            <p class="font-thin">${container["description"]}</p>
            <h3 id="dish-price">${formattedPrice} €</h3>
        </div>
        <div onclick="addToBasket(${i})" id="add-button" class="icon-border-grey-small">
            <img src="img/icons/plus.svg" alt="">
        </div>
    </div>`;
}


function generateSearchHeadline() {
  return `
        <div class="search-headline">
            <div>Deine Suchergebnisse:</div>
            <div id="close-search" onclick="openSearch()" class="icon-border-grey"</div>
                <img src="img/icons/xmark-clear.svg" alt="" />
        </div>
    `;
}


function generateSearchContainer(container, formattedPrice, i) {
  return `
        <div class="dish-container">
            <div class="dish-container-left">
                <div class="dish-info">
                    <h3 id="dish-name">${container["name"]}</h3>
                    <img src="img/icons/info.svg" alt="">
                </div>
                <p class="font-thin">${container["description"]}</p>
                <h3 id="dish-price">${formattedPrice} €</h3>
            </div>
            <div onclick="addToBasket(${i})" id="add-button" class="icon-border-grey-small">
                <img src="img/icons/plus.svg" alt="">
            </div>
        </div>
    `;
}


function generateEmptyBasketHTML() {
  return `
    <div class="empty-basket">
        <img src="img/icons/bag.svg" alt="">
        <h2>Fülle deinen Warenkorb</h2>
        <p class="font-thin">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
    </div>
    `;
}


function generateBasketHTML(container, priceResult, i) {
  return `
        <div class="basket-item-container">  
            <div class="basket-item">
                <p class="item-amount p-larger">${container["amount"]}</p>
                <div class="item-infos">
                    <p class="underline p-larger"><b>${container["name"]}</b></p>
                    <p class="font-thin">${container["size"]}</p>
                    <p onclick="showNoteLayer(${i})" class="note-text font-thin underline">Anmerkung <br> hinzufügen</p>
                </div>
                <div class="price-add-amount">
                    <p class="font-thin  font-thin-larger">${priceResult} €</p>
                    <div class="var-amount">
                        <div class="icon-border-grey" onclick="reduceAmount(${i})">
                            <img src="img/icons/minus.svg" alt="">
                        </div>
                        <p>${container["amount"]}</p>
                        <div class="icon-border-grey" onclick="increaseAmount(${i})">
                            <img src="img/icons/plus.svg" alt="">
                        </div>
                    </div>
                </div> 
            </div>
            <div id="note${i}" class="note font-thin d-none"><i><b>Anmerkung:</b><br>${container["note"]}</i></div>
            <div class="line"></div>
        </div>

        <div id="add-note${i}" class="layer d-none">
            <div class="innerLayer">    
                <textarea class="writeNote" id="writeNote${i}" placeholder="Deine Anmerkung..."></textarea>
                <div class="icons-layer">
                    <img onclick="removeNoteLayer(${i})" src="img/icons/xmark-clear.svg" alt="">
                    <img id="saveButton" onclick="addNote(${i})" src="img/icons/check.svg" alt="">
                </div>
            
            </div>
        </div>
        `;
}


function generateBasketResponsiveHTML(container, priceResult, i) {
  return `<div class="basket-item-container">  
    <div class="basket-item">
        <p class="item-amount p-larger">${container["amount"]}</p>
        <div class="item-infos">
            <p class="underline p-larger"><b>${container["name"]}</b></p>
            <p class="font-thin">${container["size"]}</p>
            <p onclick="showNoteLayer(${i})" class="note-text font-thin underline">Anmerkung <br> hinzufügen</p>
        </div>
        <div class="price-add-amount">
            <p class="font-thin  font-thin-larger">${priceResult} €</p>
            <div class="var-amount">
                <div class="icon-border-grey" onclick="reduceAmount(${i})">
                    <img src="img/icons/minus.svg" alt="">
                </div>
                <p>${container["amount"]}</p>
                <div class="icon-border-grey" onclick="increaseAmount(${i})">
                    <img src="img/icons/plus.svg" alt="">
                </div>
            </div>
        </div> 
    </div>
    <div id="noteRes${i}" class="note font-thin d-none"><i><b>Anmerkung:</b><br>${container["note"]}</i></div>
    <div class="line"></div>
</div>

<div id="add-noteRes${i}" class="layer d-none">
    <div class="innerLayer">    
        <textarea class="writeNote" id="writeNoteRes${i}" placeholder="Deine Anmerkung..."></textarea>
        <div class="icons-layer">
            <img onclick="removeNoteLayer(${i})" src="img/icons/xmark-clear.svg" alt="">
            <img id="saveButtonRes" onclick="addNote(${i})" src="img/icons/check.svg" alt="">
        </div>
    
    </div>
</div>`;
}


function generateSums(formattedSum, formattedFinalSum, delivery) {
  return `

    <table class="font-thin">
        <tr>
            <td>Zwischensumme</td>
            <td>${formattedSum} €</td>          
        </tr>
        <tr>
            <td>Lieferkosten</td>
            <td id="del">${delivery} €</td>
        </tr>
        <tr>
            <td>Transaktionskosten PayPal</td>
            <td>0,29 €</td>
        </tr>
        <tr>
            <td><b>Gesamt</b></td>
            <td><b>${formattedFinalSum} €</b></td>
        </tr>
    </table>
    
    <div onclick="showConfirm()" class="order-button">Bezahlen (${formattedFinalSum} €)</div>`;
}

function generateResponsiveSums(formattedSum, formattedFinalSum, delivery) {
    return `
      <table class="font-thin">
          <tr>
              <td>Zwischensumme</td>
              <td>${formattedSum} €</td>          
          </tr>
          <tr>
              <td>Lieferkosten</td>
              <td id="delRes">${delivery} €</td>
          </tr>
          <tr>
              <td>Transaktionskosten PayPal</td>
              <td>0,29 €</td>
          </tr>
          <tr>
              <td><b>Gesamt</b></td>
              <td><b>${formattedFinalSum} €</b></td>
          </tr>
      </table>
      
      <div onclick="showConfirm()" class="order-button">Bezahlen (${formattedFinalSum} €)</div>`;
  }


function generateBasketButton(formattedFinalSum) {
  return `<div onclick="showFullBasket()" class="order-button">Warenkorb (${formattedFinalSum} €)</div>`;
}


function generateMinimumBasketButton(formattedFinalSum) {
  return `<div class="order-button order-button-minimum">Warenkorb (${formattedFinalSum} €)</div>`;
}


function generateMinimumOrder(formattedSum, formattedFinalSum, delivery) {
  return `
    <div class="minimum-order font-thin">
        <p>Leider kannst du noch nicht bestellen. 
            AXELLENT liefert erst ab einem Mindestbestellwert von 14,90 € (exkl. Lieferkosten).</p>
    </div>

    <table class="font-thin">
        <tr>
            <td>Zwischensumme</td>
            <td>${formattedSum} €</td>          
        </tr>
        <tr>
            <td>Lieferkosten</td>
            <td id="del">${delivery} €</td>
        </tr>
        <tr>
            <td>Transaktionskosten PayPal</td>
            <td>0,29 €</td>
        </tr>
        <tr>
            <td><b>Gesamt</b></td>
            <td><b>${formattedFinalSum} €</b></td>
        </tr>
    </table>
    
    <div class="order-button order-button-minimum">Bezahlen (${formattedFinalSum} €)</div>`;
}


function generateMinimumResOrder(formattedSum, formattedFinalSum, delivery) {
    return `
      <div class="minimum-order font-thin">
          <p>Leider kannst du noch nicht bestellen. 
              AXELLENT liefert erst ab einem Mindestbestellwert von 14,90 € (exkl. Lieferkosten).</p>
      </div>
  
      <table class="font-thin">
          <tr>
              <td>Zwischensumme</td>
              <td>${formattedSum} €</td>          
          </tr>
          <tr>
              <td>Lieferkosten</td>
              <td id="del">${delivery} €</td>
          </tr>
          <tr>
              <td>Transaktionskosten PayPal</td>
              <td>0,29 €</td>
          </tr>
          <tr>
              <td><b>Gesamt</b></td>
              <td><b>${formattedFinalSum} €</b></td>
          </tr>
      </table>
      
      <div class="order-button order-button-minimum">Bezahlen (${formattedFinalSum} €)</div>`;
  }