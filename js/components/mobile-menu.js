let show = true;

class MobileMenu {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);

    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.navList.classList.toggle("on", show);
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);

    this.navLinks.forEach((item) => {
      item.addEventListener("click", this.handleClick);
    });
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileMenu = new MobileMenu(
  ".mobile-menu",
  ".nav-list",
  ".nav-list .item",
  ".nav-list .item .main-action"
);

mobileMenu.init();
