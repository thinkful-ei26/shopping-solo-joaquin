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

function generateItemElement(item, itemIndex, template) {
  // Receives an item  and itemIndex from generateShopingItemsString.
  // Generate an html structure for each individual item .
  return `
    <li class="js-item-index-element" data-item-index="${itemIndex}">
      <span class="shopping-item js-shopping-item ${
        item.checked ? "shopping-item__checked" : ""
      }">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
}

function generateShoppingItemsString(shoppingList) {
  //  Receive a list from the render function, maps over it to generate items and itemIndex, then calls generateItemElements and passes item and itemIndex to it.
  const items = shoppingList.map((item, index) =>
    generateItemElement(item, index)
  );

  return items.join();
}

function renderShoppingList() {
  //  Passes data to generateShoppingItemsString.
  //  Put the string into the .js-shopping-list class ul below the form.
  const shoppingListItemString = generateShoppingItemsString(STORE);
  $(".js-shopping-list").html(shoppingListItemString);
}

function handleNewItemsSubmit() {
  // This function handles new items added by user.
  // 1.Listen for when a new item is added
  // 2.Get the name of the new item.
  // 3.Push the new item to the STORE
  // 4.Clear out the input field.
  // 5.Re-render the page.
  $("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
    const newItemAdded = $(".js-shopping-list-entry").val();
    $(".js-shopping-list-entry").val(" ");
    STORE.push({ name: newItemAdded, checked: false });
  });
  // renderShoppingList();
  console.log("handleNewItems... ran");
}

function handleItemsCheckClicked() {
  // This function handles when user checks items as complete.
  //   console.log("Items checked hanga banga ...");
}

function handleDeleteItemClicked() {
  // Handles when user clicks 'delete' button.
  //   console.log("Items delete...");
}

function handleShoppingList() {
  // Callback function to run everything.
  renderShoppingList();
  handleNewItemsSubmit();
  handleItemsCheckClicked();
  handleDeleteItemClicked();
}

$(handleShoppingList);
