
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

let subMenuEl = document.getElementById(`sub-menu`);
subMenuEl.style.height = `100%`;
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;
subMenuEl.classList.add(`flex-around`);
subMenuEl.style.position = `absolute`;
subMenuEl.style.top = `0`;

//Part 4

var menuLinks = [
  { text: `about`, href: `/about`},
  {
    text: `catalog`,
    href: `#`,
    subLinks: [
      { text: `all`, href: `/catalog/all` },
      { text: `top selling`, href: `/catalog/top` },
      { text: `search`, href: `/catalog/search` },
    ],
  },
  {
    text: `account`,
    href: `#`,
    subLinks: [
      { text: `profile`, href: `/account/profile` },
      { text: `settings`, href: `/account/settings` },
      { text: `sign out`, href: `/account/signout` },
    ],
  },
];

let topMenuLinks = topMenuEl.querySelectorAll(`a`);

topMenuEl.addEventListener(`click`, function (event) {
  event.preventDefault();

  if (event.target.tagName !== `A`) return;
  console.log(event.target.textContent.toLowerCase());

  topMenuLinks.forEach((link) => link.classList.remove(`active`));

  if (!event.target.classList.contains(`active`)) {
    event.target.classList.add(`active`);
  }
});

//Part 5

function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = ``;

  subLinks.forEach((link) => {
    let subLinkEl = document.createElement(`a`);
    subLinkEl.setAttribute(`href`, link.href);
    subLinkEl.textContent = link.text;
    subMenuEl.appendChild(subLinkEl);
  });
}

topMenuEl.addEventListener(`click`, function (event) {
  event.preventDefault();

  if (event.target.tagName !== `A`) return;
  console.log(event.target.textContent.toLowerCase());

  topMenuLinks.forEach((link) => link.classList.remove(`active`));

  if (!event.target.classList.contains(`active`)) {
    event.target.classList.add(`active`);

    let clickedLink = menuLinks.find(
      (link) => link.text === event.target.textContent.toLowerCase()
    );

  if (clickedLink && clickedLink.subLinks) {
    subMenuEl.style.top = `100%`;
    buildSubMenu(clickedLink.sublinks);
  } else {
    subMenuEl.style.top = `0`;
  }
  } else {
    subMenuEl.style.top = `0`;
  }
});

subMenuEl.addEventListener(`click`, function (event) {
  event.preventDefault();

  if (event.target.textContent);
  console.log(event.target.textContent);

  subMenuEl.style.top = `0`;
  topMenuLinks.forEach((link) => link.classList.remove(`active`));
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
});