# Hello Golf - Test Alternance

- Introduction (important!!!)
- Instructions
- Help : how to run the project

## Introduction (important!!!)

Hi ! Welcome to this short test for Hello Golf ⛳️🏌️‍♂️

As promised, this is a project set-up with Next.js. The aim of this exercise is to assess your abilities to execute basic tasks in React "quickly".

Read all of the instructions first ! Maybe you'll not have the time to do everything, so it can be useful to know first what is expected so that you can manage your time.

If you feel stuck on something, don't worry, and skip to the next task.

Before starting, fork this project on your personnal account, and invite me (profile `garlic-lover`) as a collaborator.

50 minutes after starting, please push your updates so that I can check your work. Please note that punctuality is an important criteria.

## Instructions

### Context

Throughout this little project, we are going to showcase the characters of the TV series Rick & Morty.

### 1- Basic CSS

The `Layout` folder contains the files that define the strucutre of our page.

Apply CSS properties of your choice to the `Header`, `Main` and `Footer` components so that, in any case, these elements take at least the full height of the window. There should be no space after the footer.

### 2- Display a list of characters

In the "Liste des personnages" page (`page/characters.js`), you will find a custom hook that I created, that provides the page some data.

Your objective is to use this data to render a list of Rick & Morty's characters. To do so, you'll have to modify and use two components :

- `components/Characters/CharacterCard.js` :

Each card should make use of all the available information provided for each character. You are free of the way to display the informations.

- `components/Characters/ListWrapper.js` :

As its name indicates, it should be the wrapper of the list of cards.

The list should use a grid layout with the following rules :

- vertical and horizantal spaces between cards of `12px` ;
- in desktop version : 4 cards per row ;
- less than 1000 px : 3 cards per row ;
- less than 800px : 2 cards per row ;
- less than 640px : 1 card per row.

### 3- A bit further

You can either choose to start with 3a or 3b, it doesn't matter which one you start with.

If you feel confused about about the API works, its can be found at `https://rickandmortyapi.com/graphql`.

#### 3a- Setup a pagination for the API requests

As the project is set up, there are only 20 characters displayed. We can call this a "page" of the information. What we want is to propose the user the possibility to navigate different pages of the data base.

In the custom hook that I created (`components/Characters/utils/useCharactersList.js`), you will notice that the GraphQl query receives a variables that is linked to a variable provided by the React hook useState.

The objective of this task is to create a navigation component that allows the user to change the current page. To do so, I encourage you to see the `pageInfo` data returned by the API.

You are free about the way to do it and about the esthetics of the component.

#### 3b- Enrich the characters' list

Modify the GraphQl query (`GraphQl/Queries/CHARACTERS.js`) so that we can also fetch the status and the gender with the characters' data.

Once done, in each of the characters' card :

- display its status ;
- display the appropriate icon based on the character's gender, between `public/icons/female.svg` and `public/icons/male.svg` and `public/icons/unknown.svg`.

#### Bonus

Enhance the esthetics of the page.

## Help : how to run the project

First, use `yarn install` or `npm i` to install all the required packages.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
