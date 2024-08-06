# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful links](#useful-links)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Switch the large product image by clicking on the small thumbnail images
- Users can see hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image (needs to be added)
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](./design/desktop-preview.jpg)

### Links

- [Github repo](https://github.com:Mary2021/e-commerce-product-page.git)
- [Live URL](https://mary2021.github.io/e-commerce-product-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. 
https://vitejs.dev/guide/


### React-bootstrap

- [React Bootstrap](https://react-bootstrap.netlify.app/)

`npm install react-bootstrap bootstrap`

### Yet Another React Lightbox

- [Yet Another React Lightbox](https://react-bootstrap.netlify.app/)

`npm install yet-another-react-lightbox`


### Redux 

- [Getting started with Redux](https://redux.js.org/introduction/getting-started)

- `npm install @reduxjs/toolkit`
- `npm i react-redux`

### Testing

[Vitest and React Testing Library](https://victorbruce82.medium.com/vitest-with-react-testing-library-in-react-created-with-vite-3552f0a9a19a)

- `npm install --save-dev vitest`
- add script => "test": "vitest"
- `npm install --save-dev jsdom`
- `npm install --save-dev @testing-library/jest-dom @testing-library/react @testing-library/user-event`
- add to vite.config =>

```javascript
test: {
  //add jsdom to vite
  environment: 'jsdom',
  //make all imports from Vitest global so that we don’t manually import in each test file
  globals: true,
  //include this setup test file
  setupFiles: './src/tests/setup.jsx', // assuming the test folder is in the src of our project
}
```

### Web-vitals

[Install web-vitals](https://www.npmjs.com/package/web-vitals)

### Useful links

- [React folder structure](https://blog.webdevsimplified.com/2022-07/react-folder-structure/)
- [React set global css](https://bobbyhadz.com/blog/react-set-global-css)
- [Semantic html5 guide](https://www.semrush.com/blog/semantic-html5-guide/)
- [Carosel indicators](https://stackoverflow.com/questions/34808477/can-i-customize-carousel-indicators-in-react-bootstrap) 
- [React border component](https://mdbootstrap.com/docs/react/utilities/borders/)
- [How to Customize the React Carousel Component](https://www.youtube.com/watch?v=hVeXkSCuu5k)
- [Creating context](https://react.dev/reference/react/createContext)
- [Lightbox for Bootstrap 5](https://trvswgnr.github.io/bs5-lightbox/)

## Author

- Website - [Mary P](https://github.com/Mary2021)