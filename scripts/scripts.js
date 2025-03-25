
//Part Three
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

//Part One
let mainEl = document.querySelector(`main`);
mainEl.style.backgroundColor = `var(--main-bg)`;
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;
mainEl.classList.add(`flex-ctr`);

console.log(`mainEl`);

//Part Two
let topMenuEl = document.getElementById(`top-menu`);
topMenuEl.style.height = `100%`;
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
topMenuEl.classList.add(`flex-around`);

//Part Three cont.

menuLinks.forEach((link) => {
  let aTag = document.createElement(`a`);
  aTag.setAttribute(`href`, link.href);
  aTag.textContent = link.text;
  topMenuEl.appendChild(aTag);
})

// menuLinks.forEach(function(link) {
//     const aTag = document.createElement(`a`);
//     aTag.setAttribute(`href`, link.href);
//     aTag.textContent = link.text;
//     topMenuEl.appendChild(aTag);
// });