import './menu.less'

// This is the data we will be using, study it but don't change anything, yet.
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];
function menuMaker(linksArray){
  const menuWrapper = document.createElement('div');
  const menuList = document.createElement('ul');

  menuWrapper.appendChild(menuList);
  menuWrapper.classList.add('menu');
  linksArray.forEach(linkText => {
    const link = document.createElement('li');
    link.textContent = linkText;
    menuList.appendChild(link);
  })
  const hamMenu = document.querySelector('.menu-button');
  
  hamMenu.addEventListener('click', () => {
    menuWrapper.classList.toggle('menu--open');
  })

  return menuWrapper;
}
console.log(menuMaker(menuItems));

document.querySelector('.header').appendChild(menuMaker(menuItems));

//const newMenu = menuMaker(menuItems);
//const headerElem = document.querySelector('.header');
//headerElem,appendChild(newMenu);
/*
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
