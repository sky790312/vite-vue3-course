interface HeaderMenu {
  name: string;
  text: string;
  url: string;
}

export const headerMenus: HeaderMenu[] = [
  {
    name: "about",
    text: "這是什麼",
    url: '/about',
  },
  {
    name: "faq",
    text: "FAQ",
    url: '/faq',
  },
  {
    name: "contact",
    text: "聯絡我們",
    url: '/contact',
  }
];
