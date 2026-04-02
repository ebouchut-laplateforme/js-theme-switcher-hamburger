# JavaScript Theme Switcher

This HTML page offers the ability to **switch between light and dark themes** 
via a **hamburger menu** and a button.  
The page displays an image that reflects the current theme.

Clicking a theme:
- toggles a single CSS class (`page--dark`) on the page:
- [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) recolor everything
-  **JavaScript** swaps the **image** (with its `alt` text) 
on the page to **reflect the selected theme** and keeps the buttons' ARIA states in sync.

The menu layout changes depending on the device width thanks to CSS media queries:
- On a **mobile** (screen **< `768px`**), the menu hides 
  behind a **hamburger button** and drops down vertically.
- On **tablet and desktop** (screen width >= `768px`), it is a plain horizontal menu.

To close the hamburger menu, you can use the `Escape` key.

The chosen theme is stored in the Web Browser's **LocalStorage** 
and restored when the page is loaded.
