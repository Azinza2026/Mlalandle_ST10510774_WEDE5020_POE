# Mlalandle_ST10510774_WEDE5020_POE
Manhattan Sweets products
This project is a multi-page website created for Manhattan Sweets. The website provides information about the brand and its products and gives users a simple way to navigate between the different sections of the site.
The website was developed using HTML5 for the structure and content of the webpages. An external CSS stylesheet is used separately to control the visual design. JavaScript is not used in this project.

The main HTML pages are:
`index.html` – Home page
`about.html` – About Manhattan Sweets
`products.html` – Product information
`enquiry.html` – Enquiry form
`contact.html` – Contact information

The website also contains:
`css/style.css` – External stylesheet
`images/` – Folder containing website images

Website Goals and Objectives
The main goals of the website are:
1. To create a clear online presence for Manhattan Sweets.
2. To introduce users to the brand.
3. To display examples of Manhattan Sweets products.
4. To make information easy to find through clear navigation.
5. To provide an enquiry form for users.
6. To create a website that works on desktop, tablet and mobile screen sizes.
7. To use semantic and organised HTML structure.
8. To keep the HTML and CSS separated so that the website is easier to maintain.


Key Features and Functionality
Navigation

The website contains a navigation menu linking the main pages:
Home
About
Products
Enquiry
Contact
The navigation is kept consistent across the pages.

The products page uses product cards to organise product names, descriptions and images.
The enquiry page contains form controls such as:
Name
Surname
Email
Phone number
Message

The form is structured using HTML form elements.
Images are stored inside the `images` folder. The HTML uses the `src` and `alt` attributes to display and describe images.
For responsive images, use `srcset` and `sizes` where multiple image resolutions are available. MDN explains that `srcset` provides possible image sources while `sizes` gives the browser information about the image's expected display width so it can select an appropriate source. (MDN Web Docs, 2026a)

Example:
```html
<img
    src="images/chocolates-800.jpg"
    srcset="
        images/chocolates-480.jpg 480w,
        images/chocolates-800.jpg 800w,
        images/chocolates-1200.jpg 1200w
  
    sizes="(max-width: 600px) 92vw, (max-width: 900px) 80vw, 1200px"
    alt="Manhattan chocolate products"
    width="1200"
    height="800">

The filenames above are examples. The actual files must exist in the `images` folder.
Picture Element

The `<picture>` element can be used when a different image is required for different screen sizes or when different image formats are available. The `<img>` element inside `<picture>` provides the fallback image. (MDN Web Docs, 2026b)

Example:
```html
<picture>
    <source
        media="(max-width: 600px)"
        srcset="images/banner-mobile.jpg">

    <source
        media="(max-width: 900px)"
        srcset="images/banner-tablet.jpg">

    <img
        src="images/banner-desktop.jpg"
        alt="Manhattan Sweets products"
        width="1200"
        height="500">
</picture>

HTML Structure
The pages use common HTML5 elements including:
```html
<header>
<nav>
<main>
<section>
<article>
<footer>

These elements help divide the webpage into meaningful sections.
The `<header>` contains the main website heading and branding.
The `<nav>` contains links to other pages.
The `<main>` contains the primary content of the page.
The `<section>` element groups related information.
The `<article>` element can be used for individual product cards or other self-contained content.
The `<footer>` contains the bottom section of the webpage.
Website Sitemap

```text
                    Manhattan Sweets
                          |
          +---------------+---------------+
          |               |               |
        Home            About          Products
          |                               |
          |                  +------------+------------+
          |                  |            |            |
          |              Product 1    Product 2    Product 3
          |
          +-------------+------------------+
                        |
                    Enquiry
                        |
                     Contact

 Sitemap in folder form

```text
ManhattanSweets/
│
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html

└── images/
    ├── logo.jpg
    ├── banner.jpg
    ├── chocolates.jpg
    └── other product images

Timeline and Milestones
1 Choose Manhattan Sweets as the website topic | Completed 
2 Plan the website and sitemap | Completed 
3 Create HTML page structure | Completed 
4 Add navigation between pages | Completed 
5 Add images and product information | Completed 
6 Create external CSS stylesheet | Completed 
7 Apply desktop layout | Completed 
8 Add tablet and mobile breakpoints | Completed 
9 Add responsive image techniques | Completed 
10 Test pages on different screen sizes | Completed 
11 Capture screenshot evidence | Completed 
12 Final checking and submission | Completed

HTML Changelog
Created the basic website structure.
Created `index.html`.
Created `about.html`.
Created `products.html`.
Created `enquiry.html`.
Created `contact.html`.
Added navigation links between pages.
Added headings and paragraphs.
Added product information.
Added enquiry form.
Added contact information.
Added images.
Organised images inside the `images` folder.
Added `alt` text to images.
Prepared image markup for responsive images using `srcset`, `sizes` and `<picture>`.

PART 2 – CSS
CSS Overview

CSS stands for Cascading Style Sheets. It is used to control the presentation and layout of a website.
The Manhattan Sweets website uses an external stylesheet:

```text
css/style.css
```
Every HTML page should contain the following line inside its `<head>` section:

```html
<link rel="stylesheet" href="css/style.css">

Using an external stylesheet allows the same design to be applied consistently across all pages.

CSS Reset and Browser Consistency

A small CSS reset is included at the beginning of `style.css`.

```css
 before,
  after {
    box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
figure {
    margin: 0;
}

The reset removes or standardises some browser default spacing. `box-sizing: border-box` makes an element's declared width include its padding and border, which makes sizing easier to manage. (MDN Web Docs, 2026c)

Form controls also inherit the website font:

```css
button,
input,
select,
textarea {
    font: inherit;
}
```
This helps keep form typography consistent.

Default Website Styles

The default body styling establishes the main font, size, colour, background and spacing.

```css
body {
    background-color: var(--background-soft);
    color: var(--text-dark);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 1.6;
}

The project uses `rem` units for many sizes and spacing values. This makes the design more flexible when the browser's base font size changes.


Colour Scheme
CSS variables are used to keep the colour scheme consistent.

```css
:root {
      brand-red: #d71920;
      brand-red-dark: #a90f15;
      brand-yellow: #f0c400;
      brand-yellow-light: #fff4b8;
      text-dark: #333333;
      text-light: #ffffff;
}
```

The main red is used for the header, navigation buttons and footer. Yellow is used as an interactive hover colour.
This also improves maintainability because the colours can be changed in one place.
Typography

The stylesheet uses the following typography properties:

`font-family`

Controls the typeface.

```css
font-family: Arial, Helvetica, sans-serif;
```
`font-size`
Controls the size of text.

```css
font-size: 1rem;
```
`font-weight`
Controls how light or bold text appears.

```css
font-weight: 700;

`letter-spacing`

Controls the space between characters.

```css
letter-spacing: 0.02em;
`line-height`

Controls the vertical spacing between lines.

```css
line-height: 1.6;


A typography scale is used for headings. The `clamp()` function allows heading sizes to change according to available screen width while maintaining minimum and maximum values.

Example:

```css
h1 {
    font-size: clamp(2rem, 4vw, 3rem);
}
Desktop Layout

The desktop version uses CSS Grid for the main page structure.

```css
.page-layout {
    display: grid;
    grid-template-areas:
        "main sidebar";
    grid-template-columns: minmax(0, 2fr) minmax(16rem, 1fr);
    gap: 2rem;
    align-items: start;
}

The layout contains a main content area and a sidebar.

CSS Grid is also used for the products:

```css
.products {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
}

This creates a three-column product layout on larger screens.

Flexbox
Flexbox is used for navigation and product card content.
Example:

```css
nav ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

The properties work as follows:
`display: flex` creates a Flexbox layout.
`flex-direction` controls the direction of the items.
`justify-content` controls horizontal distribution.
`align-items` controls alignment across the other axis.
`flex-wrap` allows items to move to another line.

Navigation Styling
The navigation links are styled as visible buttons.

```css
nav a {
    background-color: var(--brand-red);
    color: white;
    padding: 0.7rem 1.1rem;
    border: 2px solid var(--brand-red);
    border-radius: 0.375rem;
    font-weight: 700;
}

This makes the buttons easier to see against the light background.

Pseudo-classes
The website uses CSS pseudo-classes to provide interactive feedback.
 `:hover`
Used when the mouse is placed over an interactive element.

```css
nav a:hover {
    background-color: var(--brand-yellow);
    color: #000000;
}

 `:focus-visible`

Used to make keyboard focus visible.

```css
nav a:focus-visible {
    background-color: var(--brand-yellow);
    color: #000000;
}

 `:active`

Used while the element is being activated.

```css
nav a:active {
    background-color: var(--brand-red-dark);
    color: white;
}

These states help users understand which elements are interactive.
Borders, Shadows and Visual Styling

The website uses:

```css
border: 1px solid var(--border);
border-radius: 0.625rem;
box-shadow: var(--shadow);

`border` creates an outline around an element.
`border-radius` rounds the corners.
`box-shadow` adds depth around cards and sections.
These properties are used on product cards, forms, the welcome section and other content areas.
Responsive design allows the website to adjust to different screen sizes. Media queries are used to apply different CSS rules when the viewport becomes smaller. (MDN Web Docs, 2026d)

The project uses three general layouts:
Desktop
Above 900px
Three-column product grid.
Horizontal navigation.
Main content and sidebar can appear beside each other.

Tablet
601px–900px

Two-column product grid.
Main content and sidebar become a single-column arrangement.
Navigation becomes more compact.

Mobile
600px and below

One-column product layout.
Navigation links become full-width vertical buttons.
Smaller font and spacing values are used.
Forms and buttons use the available screen width.
This changes the product grid from three columns to two columns on tablet-sized screens.

Mobile Media Query

```css
@media screen and (max-width: 37.5rem) {
    nav ul {
        flex-direction: column;
        align-items: stretch;
    }

    .products {
        grid-template-columns: 1fr;
    }
}

This changes the navigation to a vertical layout and changes the product section to one column. Media queries are commonly used to create different layouts for different viewport sizes. (MDN Web Docs, 2026)

The CSS uses relative units such as:
- `rem`
- `em`
- `%`
- `vw`
For example:
```css
main {
    width: min(92%, 75rem);
}

This allows the main content to use a percentage of the available screen while still having a maximum width.

The CSS ensures images remain responsive:

```css
img {
    display: block;
    max-width: 100%;
    height: auto;
}
```
The HTML should use `srcset` and `sizes` when different image resolutions are available.
Example:
```html
<img
    src="images/chocolates-800.jpg"
    srcset="
        images/chocolates-480.jpg 480w,
        images/chocolates-800.jpg 800w,
        images/chocolates-1200.jpg 1200w"
    sizes="(max-width: 600px) 92vw,
           (max-width: 900px) 80vw,
           1200px"
    alt="Manhattan chocolate products">

The browser can use the available image information to select a suitable source for the image's display size. (MDN Web Docs, 2026)

The website should be tested using browser developer tools.

In Google Chrome:

1. Open the Manhattan Sweets website.
2. Right-click on the webpage.
3. Select Inspect.
4. Select the Toggle device toolbar button.
5. Select different devices from the device list.
6. Test the page at desktop, tablet and mobile widths.
7. Check the navigation, images, product cards, forms and footer.
8. Resize the viewport manually to check the breakpoints.

The purpose of testing is to check that content remains readable and that the layout does not break when the screen becomes smaller.
Screenshots should be added to the final README as evidence that the responsive design was tested.

What to show:
Full website page
Horizontal navigation
Three-column product layout
Header and footer

 

Figure 1: Manhattan Sweets website displayed at desktop size.

Tablet
Two-column product layout
Responsive navigation
Content fitting within the tablet viewport

Mobile
Vertical navigation buttons
Single-column products
Responsive images
Readable text

 

26. CSS Changelog

Created external `css/style.css`.
Added default body font, colour, background and spacing.
Added CSS reset for more consistent browser rendering.
Added CSS variables for the colour scheme.
Added typography styling.
Added heading sizes.
Added navigation styling.
Added button styling.
Added hover, focus and active states.
Added CSS Grid for the desktop product layout.
Added Flexbox for navigation and flexible content.
Added product cards.
Added form styling.
Added borders, rounded corners and box shadows.
Added tablet breakpoint.
Added mobile breakpoint.
Changed product grid from three columns to two columns and then one column.
Changed mobile navigation to a vertical layout.
Added responsive spacing and typography.
Added responsive image CSS.
Prepared HTML for `srcset`, `sizes` and `<picture>`.
Added reduced-motion support.
Added final testing requirements and screenshot evidence.
