// Render display with placeholder elements on page load.
// Provide an input to add items.
// Create a STORE object to store all data.
// Update STORE with new items.
// Display option to mark items as completed.
// When item marked as completed, update STORE.
// Invoke the rendering function each time STORE is affected.
// When STORE is updated with a new item, generate new html to displayed.
const STORE = [
  { name: "apples", checked: false },
  { name: "oranges", checked: false },
  { name: "milk", checked: true },
  { name: "bread", checked: false }
];

function renderShoppingList() {
  //  Get string from generateShoppingItemString().
  //  Put the string into the .js-shopping-list class ul below the form.
  const shoppingListItemString = generateShoppingItemString();
  $(".js-shopping-list").html(shoppingListItemString);

  console.log("renderShoppingList ran");
}
function generateItemElement(shoppingList){
    // Generate an html structure for each individual item in STORE and pass the string to generateShoppingItemString. Receive a
    return 
    
}

function generateShoppingItemString() {
  // 1. Generate a string of<li> elements from the STORE with item name is as inner html, their index in the SOURCE as an attribute, and whether or not the item is checked.
  return STORE.map((name, index) => {
    return this.name, this.index;
  });

  //             <li> Apples</li>
  //             <li> Oranges </li>
  //             <li> Mile </li>
  //             <li> Bird food </li>`;
}

function handleNewItemsSubmit() {
  // This function handles new items added by user.
  console.log("handleNewItems... ran");
}

function handleItemsCheckClicked() {
  // This function handles when user checks items as complete.
  console.log("Items checked ...");
}

function handleDeleteItemClicked() {
  // Handles when user clicks 'delete' button.
  console.log("Items delete...");
}

function handleShoppingList() {
  // Callback function to run everything.
  renderShoppingList();
  handleNewItemsSubmit();
  handleItemsCheckClicked();
  handleDeleteItemClicked();
}

$(handleShoppingList);
