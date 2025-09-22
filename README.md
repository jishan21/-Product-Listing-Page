E-Commerce Product Page

This is a modern and responsive e-commerce product page built with React, Vite, and TypeScript. You can view products, filter them, sort them, and navigate easily.

Features

1. Responsive Layout: Works well on desktop, tablet, and mobile.

2. Filters: Find products by color and price range.

3. Sorting: Sort products by name or price (high-to-low or low-to-high).

4. Pagination: Navigate through large lists of products easily.

5. Clean Design: Simple and modern look for a smooth experience.


Technologies Used

1. React – for building the user interface

2. Vite – for fast development

3. TypeScript – for safer and better code

4. Tailwind CSS – for styling



File Structure

The project is easy to understand and organized well. All main components are in the src/components folder:

1. Header.tsx: Shows the top header with logo, navigation, and cart icon.
   
2. NavBar.tsx: Menu with links to different pages or sections.
   
4. ProductsBodySection.tsx: Main container that manages filters, sorting, and pagination.
   
5. Products.tsx: Shows the grid of product cards and uses FilterBar and Pagination.
   
6. SideBar.tsx: Filter panel for brand, color, and price. Uses smaller components from SideBar folder and works as a mobile drawer too.
   
7. Pagination.tsx: Handles the page navigation buttons.
   
8. Footer.tsx: Bottom section with links and social media icons.


How to Run
1.	Clone the repository
    git clone  https://github.com/jishan21/-Product-Listing-Page
2.	Go to project folder
    cd Product_Ui

  Make sure you are in the main branch
  git checkout main

3.	Install dependencies
    npm install

4.	Start the project
    npm run dev

After a few seconds, the terminal will show a local address like
  http://localhost:5173

5.	Open your browser at http://localhost:5173

