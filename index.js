/*eslint-env jquery*/
'use strict';
// Render display with placeholder elements on page load.
// Provide an input to add items.
// Create a STORE object to store all data.
// Update STORE with new items.
// Display option to mark items as completed.
// When item marked as completed, update STORE.
// Invoke the rendering function each time STORE is affected.
// When STORE is updated with a new item, generate new html to displayed.
const STORE = {
  itemList: [
  { name: "apples", checked: false },
  { name: "oranges", checked: false },
  { name: "milk", checked: true },
  { name: "bread", checked: false }
],

hideCheckedItems: false,
searchThisItem: false,
};

function generateItemElement(item, itemIndex, template) {    //what is the 'template' argument for?
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
  const shoppingListItemString = generateShoppingItemsString(STORE.itemList);
  console.log('rendering page');
  $(".js-shopping-list").html(shoppingListItemString);
}

function addItemToShoppingList(item) {
  STORE.itemList.push({ name: item, checked: false }); //mutates global STORE.
  console.log('addItemToShoppingList');
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
    addItemToShoppingList(newItemAdded);
    renderShoppingList();
  });

}

function toggleCheckedListItem(index) {
  STORE[index].checked = !STORE[index].checked;
}

function getItemIndexFromElement(item) {
  const itemIndexString = $(item)
    .closest(".js-item-index-element")
    .attr("data-item-index");
  return parseInt(itemIndexString, 10);
}

function handleItemCheckClicked() {
  // This function handles when user checks items as complete.
  // Listen for when user checks an item as complete 'js-item-toggle', with event delegation.
  // Find that item in STORE, retrieve it's index from the data attribute.
  // Change that items 'checked' status to call a css strikethrough style.
  // Re-render the page to implement the new style
  $(".js-shopping-list").on("click", ".js-item-toggle", event => {
    const itemIndex = getItemIndexFromElement(event.currentTarget);
    toggleCheckedListItem(itemIndex);
    renderShoppingList();
  });

  //   console.log("Items checked hanga banga ...");
}
function deleteCheckedListItem(index) {
  STORE.splice(index,1);

}
function handleDeleteItemClicked() {
  // Handles when user clicks 'delete' button.
  // Listen on .js-shopping-list for when user clicks a delete button on .js-item-delete using event delegation.
  // Find that item in STORE, retrieve it's index from the data attribute (re-use getItemIndexFromElement for this).
  // Remove that item from STORE, in an outside function deleteCheckedListItem().
  // Re-render page.
  $('.js-shopping-list').on('click', '.js-item-delete', event =>{
    const itemIndex = getItemIndexFromElement(event.currentTarget);
    deleteCheckedListItem(itemIndex);
    renderShoppingList();
  });
}

function checkedItemDisplay(){
  // Provide a button to show checked items 'Show checked items?'
  // Listen on that button (no delegation), for clicks.
  // If clicked re-render the page without checked items.
  //    Somehow, assign a class of .hidden to checked items.
  //    addClass would work
  //    find those items by index and attribute 'checked'
  //    maybe run a filter on STORE that finds items by index and if checked, apply class.
  $('.js-display-checked-items').click(function(event){
    STORE.hideCompleted = !STORE.hideCompleted;

  console.log('checked item function');
});
};


function searchBox(){
  // Provide a search box.
  // Filter the rendered STORE on search items.
}

function editItemName(){
  // Provide a way to change item names.
}

function handleShoppingList() {
  // Callback function to run everything.
  renderShoppingList();
  handleNewItemsSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
  checkedItemDisplay();
}

$(handleShoppingList);
