# Setup App

- Install firebase
  - npm i firebase
- Install storybook
  - npx storybook@latest init
  - npm install @storybook/addon-styling
- Install react router do
  - npm i react-router-dom
- Install redux toolkit
  - npm install @reduxjs/toolkit
  - npm install react-redux
- Install tailwind css
  - npm install -D tailwindcss postcss autoprefixer
  - npx tailwindcss init -p

# Firebase Config

- created config file in firebase folder
- created env file and placed all the firebase keys
- updated envPrefix in viteconfig file {envPrefix: "APP\_"}

# Tailwind css

- updated index.css

# Storybook

- npm run storybook
- created storybook folder inside the src

# Router Dom

- created router folder and config `createBrowserRouter`
- config `RouterProvider` in app file
- above steps are not working so `createBrowserRouter` and `RouterProvider` config in the app file

# Redux toolkit

- created redux folder and created store file
