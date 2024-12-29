# 3D Portfolio Website

This project is a dynamic, interactive 3D portfolio website built using HTML, CSS, JavaScript, and Three.js. The site features a simple, minimal, 3x3 grid gallery where each 3D project is rendered as an interactive 3D scene. The website is fully responsive, with a navbar that switches to a hamburger menu on smaller screens. The site uses Three.js to render rotating 3D cubes in place of traditional 2D image galleries, offering users a more immersive and interactive experience.

## Key Features

- **Responsive Navbar:** The website includes a flexible navigation bar that adjusts for mobile and desktop views. On larger screens, the menu items are displayed horizontally. On smaller screens, the menu collapses into a hamburger menu for a more compact and mobile-friendly design.
- **3D Gallery:** The main section of the site showcases a 3D portfolio displayed as an image gallery. Each gallery item is a 3D cube rendered using Three.js.
- **Interactive Experience:** The 3D cubes are placed within individual containers (one for each project) that users can rotate around and zoom in or out. The experience is powered by the `OrbitControls` feature from the Three.js library, providing an immersive, hands-on feel to the portfolio display.
- **Footer with Social Icons:** The footer includes links to social media with interactive, circle-bordered icons that change color on hover. This provides both functional links and an aesthetically pleasing design.

## Project Structure

The project consists of three main files: `index.html`, `styles.css`, and `script.js`.

### `index.html`

This file serves as the structure for the entire webpage, organizing content into sections and linking all external resources.

- **Head Section:**
    - Contains metadata about the website.
    - Links to Google Fonts for typography and Font Awesome for social icons.
    - References the external stylesheets (`styles.css`) 

- **Body Section:**
    - **Header/Navbar:**
        - The navbar contains a logo and navigation links for "About", "Contact", and "Portfolio". A hamburger menu button is included for mobile screens.
        - The button toggles the `.active` class on the navbar to show or hide the menu.
    - **Main Section (Gallery):**
        - This section contains a heading and a grid of nine gallery items (3x3 layout). Each item is assigned an ID to allow it to be initialized as a 3D project using Three.js
    - **Footer:**
        - The footer contains social media icons (YouTube, GitHub, Instagram, and Email) wrapped in a `.socials` div, the year is dynamically updated using JavaScript.

### `styles.css`

The stylesheet provides the visual design and layout for the entire website. Key elements include:

- **General Styling:**
    - Resets default margins and paddings for all elements, sets `box-sizing` to `border-box` for a consistent layout.
    - The body uses the `Open Sans` Google font and a light background color.

- **Navbar:**
    - The navbar is designed with a fixed position at the top of the page, ensuring that it stays visible as the user scrolls.
    - The logo and navigation items are styled to stand out against a dark background. On smaller screens (max-width: 768px), the navbar collapses into a hamburger menu.

- **Gallery Section:**
    - The gallery is styled as a grid using CSS Grid. The `.gallery` container uses `grid-template-columns` to create a 3x3 layout for desktop screens, and switches to a single column layout on mobile screens (via a media query).
    - Each gallery item maintains a square shape using a `padding-top` trick (based on percentage) to preserve aspect ratio.
    - The gallery items are positioned in the grid, each containing a 3D cube rendered by Three.js.
  
- **Footer:**
    - The footer is styled with a dark background and centered text. Social icons are placed within circles, and their colors change on hover, providing interactivity.

### `script.js`

This JavaScript file contains all the functionality required for the interactive aspects of the site.

- **Menu Toggle Function:**
    - The `toggleMenu()` function toggles the `.active` class on the navbar, which is used to show and hide the navigation links on smaller screens.

- **Dynamic Footer Year:**
    - The footer's year is dynamically updated using `new Date().getFullYear()`, which pulls the current year and updates the content of the `#year` element.

- **Three.js 3D Rendering:**
    - The `initInteractiveThreeJS()` function initializes Three.js for each gallery item (project). It sets up the scene, camera, light, and a rotating cube with `OrbitControls` for interactivity.
    - The `resize` event listener adjusts the size of the renderer and camera when the window is resized, ensuring the 3D scene remains properly scaled.

## Design Choices

### Navbar and Hamburger Menu
The navbar is designed to be both functional and aesthetic. On desktop screens, the links are displayed horizontally, while on mobile screens, the hamburger menu provides a cleaner layout. The use of Flexbox ensures that the navbar is responsive and adapts well to different screen sizes. The mobile menu toggle is done using JavaScript to add or remove the `.active` class on the navbar.

### Three.js Gallery
Three.js was chosen for its ability to render 3D graphics directly in the browser, creating an immersive experience for the portfolio. Instead of using static 2D images, the gallery features interactive 3D cubes that users can rotate and zoom. This adds a layer of interactivity and modernity to the portfolio, and represents this project's point of distinction from traditional websites.

### Responsive Design
The website is fully responsive, ensuring that it functions well on both desktop and mobile devices. The use of media queries allows the layout to adapt to smaller screens by switching from a 3x3 grid to a single column for the gallery. This ensures that the user experience remains consistent regardless of the device.

### Hover Effects
Both the navbar links and social media icons feature hover effects. They both change color on hover. Additionally, individual 3D projects become active on hover, offering the ability to move around and engage with each unique 3-Dimensional environment. These subtle effects add to the overall interactivity and enhance the user experience.

## Installation

To get this project up and running, simply follow these steps:

1. **Clone the Repository**:
   - `git clone https://github.com/kevinkell-y/3d-portfolio.git`
   
2. **Navigate to the Project Directory**:
   - `cd 3D-Portfolio`

3. **Open `index.html` in a Web Browser**:
   - You can simply open the `index.html` file in any modern browser to view the site.

4. **Optional: Customize Content**:
   - Update the `index.html` file to change the gallery items, social links, and other content as needed for your own portfolio.

## Conclusion

This project demonstrates a fully responsive, interactive 3D portfolio website using Three.js and basic web technologies. The clean, modular code structure allows for easy customization and expansion, making it a solid base for anyone looking to build unique, engaging, online portfolios.

---

### License

This project is licensed under the **GNU General Public License v2 (GPL-2.0)**, which means:

- You are free to use, modify, and distribute this project.
- Any derivative work must also be distributed under the same license.

For more details on this license, please refer to the [GPL-2.0 License](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html).

---

### License Information

This project is made freely available for use, modification, and distribution under the GNU GPL-2.0 license.

---

Happy coding! Enjoy your 3D Portfolio!

