const STORE = [
    {name: "apples", checked: false},
    {name: "oranges", checked: false},
    {name: "milk", checked: true},
    {name: "bread", checked: false}
  ];

function generateStringHTML(items) {
    return items.map((item, index) => {
        return `<li>
        <span class="shopping-item" data-item-index="${index}"> ${item.name} </span>
        <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
        </div>
    </li>`
    });
};

function renderShoppingList() {
    // this function will be responsible for rendering the shopping list in
    // the DOM
    //
    
    const html = generateStringHTML(STORE);
    ('.shopping-list').html(html);


//For each item in STORE, generate a string representing an <li> with:
// the item name rendered as inner text .innerHTML()      .text()
// the item's index in the STORE set as a data attribute on the <li> (more on that in a moment)
// the item's checked state (true or false) rendered as the 
//presence or absence of a CSS class for indicating checked items (specifically, .shopping-item__checked from index.css)
// Join together the individual item strings into one long string
// Insert the <li>s string inside the .js-shopping-list <ul> in the DOM.
    
    console.log('`renderShoppingList` ran');
  }
  
 
  
  function handleNewItemSubmit() {
    // this function will be responsible for when users add a new shopping list item

    //store the actual name of the new item based form input --> event listener on .submit() form
    //add it as a new object name in STORE with default checked value: false

    //invoke renderShoppingList()
    console.log('`handleNewItemSubmit` ran');
  }
  
  
  function handleItemCheckClicked() {
    // this function will be responsible for when users click the "check" button on
    // a shopping list item.

    //event listener on parent element of click event
    //find class name of clicked object and save title (inner HTML/text)
    //compare text with STORE.name values
    //if title matches value, update STORE.checked value from false to true or vice versa 
    //invoke renderSHoppingList()
    console.log('`handleItemCheckClicked` ran');
  }
  
  
  function handleDeleteItemClicked() {
    // this function will be responsible for when users want to delete a shopping list
    // item

    //event listener on parent element of click event
    //find class name of clicked object and save title (inner HTML/text)
    //compare text with STORE.name values
    //if title matches value, remove object from STORE
    //invoke renderSHoppingList()
    console.log('`handleDeleteItemClicked` ran')
  }
  
  // this function will be our callback when the page loads. it's responsible for
  // initially rendering the shopping list, and activating our individual functions
  // that handle new item submission and user clicks on the "check" and "delete" buttons
  // for individual shopping list items.
  function handleShoppingList() {
    renderShoppingList();
    handleNewItemSubmit();
    handleItemCheckClicked();
    handleDeleteItemClicked();
      
  }

$(handleShoppingList);