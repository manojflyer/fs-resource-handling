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
- Install classnames
  - npm i classnames

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

# Steps

- config `Lato` font-family from the google fonts
- colors update as per figma design
- checked font family and color is working
- Icons svg downloaded from figma
- implemented in the storybook
- created reusable button component
- updated `alias` in the vite.config and ts.config.json file
- \*tried to create all the buttons in three types in storybook but not worked
- installed classnames package it will be useful with the tailwind css
- created all the three types of buttons `Primary`,`Secondary`,`Disabled`
