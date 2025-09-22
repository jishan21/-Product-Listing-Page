E-Commerce Product Page

This is a modern and responsive e-commerce product page built with React, Vite, and TypeScript. You can view products, filter them, sort them, and navigate easily.

Features
Responsive Layout: Works well on desktop, tablet, and mobile.

Filters: Find products by color and price range.

Sorting: Sort products by name or price (high-to-low or low-to-high).

Pagination: Navigate through large lists of products easily.

Clean Design: Simple and modern look for a smooth experience.


Technologies Used
React – for building the user interface

Vite – for fast development

TypeScript – for safer and better code

Tailwind CSS – for styling



File Structure

The project is easy to understand and organized well. All main components are in the src/components folder:

Header.tsx: Shows the top header with logo, navigation, and cart icon.
NavBar.tsx: Menu with links to different pages or sections.
ProductsBodySection.tsx: Main container that manages filters, sorting, and pagination.
Products.tsx: Shows the grid of product cards and uses FilterBar and Pagination.
SideBar.tsx: Filter panel for brand, color, and price. Uses smaller components from SideBar folder and works as a mobile drawer too.
Pagination.tsx: Handles the page navigation buttons.
Footer.tsx: Bottom section with links and social media icons.


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

