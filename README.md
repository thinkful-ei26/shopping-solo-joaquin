This shopping list app has the following functionality:

1.  A shopping list is displayed on page load.
2.  User can add items to list.
3.  User can mark items as complete.
4.  User can remove items.
5.  User can chose to hide all items marked as 'complete', without deleting them.

 

The main goals of this exercise are to:
1. Demonstrate functional programming, where tasks are delegated to dedicated and separate functions, and where callback functions are nested within primary functions.

2. It integrates JavaScript and Jquery methods with a simple html structure to update an initial display with user inputs.

3. Demonstrate how not to alter the main data object too much ? >>>>>>>> edit



>>>>>stub
 The core of this app is the 'renderShoppingList()' function, which calls on two, additional, nested functions (callback functions), as follows:
    1. generateShoppingItemsString() has the task of iterating(or looping) through the main data object (called STORE, here, but before this function acts on STORE, it holds a placeholder argument called 'shoppingList'. We don't want to call on STORE from multiple steps in the program, to avoid unintended side effects as we flow through the code). generateShoppingItemsString() simply takes a data object, loops through it and extracts two pieces of information, which we are calling  