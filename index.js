// Render display with placeholder elements on page load.
// Provide an input to add items.
// Create a STORE object to store all data.
// Update STORE with new items.
// Display option to mark items as completed.
// When item marked as completed, update STORE.
// Invoke the rendering function each time STORE is affected.
// When STORE is updated with a new item, generate new html to displayed.


function renderShoppingList(){
    // This function will render the STORE.
    // 1. Get html elements from generateItems();
    console.log('renderShoppingList ran');
}

function handleNewItemsSubmit(){
    // This function handles new items added by user.
    console.log('Add item');
}

function handleItemsCheckClicked(){
    // This function handles when user checks items as complete.
    console.log('Mark item as checked');

}

function handleDeleteItemClicked(){
    // Handles when user clicks 'delete' button.

}

function handleShoppingList(){
    // Callback function to run everything.
    renderShoppingList();
    handleNewItemsSubmit();
    handleItemsCheckClicked();   
    handleDeleteItemClicked();
}