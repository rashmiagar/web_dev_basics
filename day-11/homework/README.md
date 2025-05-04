# React Hooks E-Commerce Assignment

## Learning Objectives

- Understand and implement React's core hooks: useState, useEffect, and useContext
- Practice state management using Context API
- Learn to fetch and handle data from an API
- Implement a shopping cart functionality

## Assignment Tasks

1. Complete the Shopping Cart Implementation:

   - Add quantity tracking for each product
   - Implement remove from cart functionality
   - Calculate total price

2. Practice Areas:

   - useState: Manage product state and cart items
   - useEffect: Handle API data fetching
   - useContext: Share cart state across components

3. Components to Complete:
   - Products.jsx: Display products and implement add to cart
   - NavBar.jsx: Show cart summary
   - CartContext.jsx: Manage global cart state

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## API Information

This project uses the Fake Store API (https://fakestoreapi.com/products)

## Structure

```
src/
  ├── app/
  │   ├── Components/
  │   │   ├── Products.jsx
  │   │   └── NavBar.jsx
  │   └── Context/
  │       └── CartContext.jsx
  └── solutions/   # Check solutions after completing the assignment
```

## Requirements

- Implement all TODOs in the code
- Add proper error handling for API calls
- Use appropriate comments to explain your code
- Follow React best practices

## Solutions

Check the `solutions` directory after completing the assignment to compare your implementation.

## Tips

- Start by understanding the existing code structure
- Focus on one component at a time
- Use the browser's console for debugging
- Pay attention to the comments in the code

## Testing Your Implementation

### CartContext Tests

1. Test adding items to cart:

   - Add a single item
   - Add multiple quantities of an item
   - Add the same item multiple times
   - Verify total price updates correctly

2. Test removing items:

   - Remove an item completely
   - Verify cart count updates
   - Check total price updates

3. Test quantity updates:
   - Increase/decrease quantity
   - Verify total price changes
   - Check negative quantities are prevented

### Products Component Tests

1. UI Elements:

   - Verify product details display correctly
   - Check quantity selector works
   - Test "Add to cart" button

2. Functionality:
   - Test quantity selection
   - Verify add to cart updates context
   - Check error handling for invalid quantities

### NavBar Component Tests

1. Display Tests:

   - Verify cart count shows correctly
   - Check total price displays properly
   - Test cart preview hover functionality

2. Integration Tests:
   - Add items and check navbar updates
   - Remove items and verify count changes
   - Check price formatting

## Common Issues to Watch For

- Forgetting to update total price when changing quantities
- Not handling decimal places in prices
- Missing error handling for edge cases
- Incorrect prop types
- Missing key prop in lists

## Submission Requirements

1. All TODO items completed
2. All tests passing
3. Code properly commented
4. No console errors
5. Proper error handling implemented

## Grading Criteria

- Functionality (40%)
- Code Quality (30%)
- Error Handling (15%)
- UI/UX Implementation (15%)
