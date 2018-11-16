module.exports = class Slidenav {
  constructor(options) {
    var defaults = {
      'slideNavClass' : 'slide-nav',
      'slideNavActiveClass': "slide-nav--active",
      'slideNavOverlayClass': 'slide-nav__overlay',
      "slideNavBtnCloseClass":"slide-nav__close",
      'overlayNavClass': 'overlay-nav',
      'overlayNavClassActive': 'overlay-nav--active',
      'overlayNavOpenBtnClass': 'overlay-nav__button'
    };

    let populated = Object.assign(defaults, options);
    for(let key in populated) {
      if(populated.hasOwnProperty(key)) {
        this[key] = populated[key];
      }
    }
    this.makeOverlayNavActive(this);
    this.toggleSlideNav(this);
  }

  makeOverlayNavActive (obj) {
    window.addEventListener("scroll", function (event) {
      var distanceScrolled = window.scrollY;
      var overlayNav = document.querySelector("."+ obj.overlayNavClass);

      //check if the primary nav is already hidden
      if(typeof distanceScrolled != 'undefined' && distanceScrolled > 32 && !overlayNav.classList.contains(obj.overlayNavClassActive)) {

        overlayNav.classList.add(obj.overlayNavClassActive);
      }
      //check if the primary nav is not hidden
      else if(distanceScrolled < 32 && overlayNav.classList.contains(obj.overlayNavClassActive)){

        overlayNav.classList.remove(obj.overlayNavClassActive);
      }
    });
  }

  toggleSlideNav(obj) {
    var overlayNavOpenBtn = document.querySelector("."+obj.overlayNavOpenBtnClass);
    var slideNav = document.querySelector("."+obj.slideNavClass);
    // console.log(overlayNavOpenBtn);
    overlayNavOpenBtn.addEventListener("click", (event) => {
      if(slideNav.classList.contains(obj.slideNavActiveClass)){
        slideNav.classList.remove(obj.slideNavActiveClass);
      } else {
        slideNav.classList.add(obj.slideNavActiveClass);
      }
    });

    document.addEventListener("click", (event) => {
      var target = event.target;
      // console.log(target);
      //hide slidenav if clicked else where
      if(target.classList.contains(obj.slideNavOverlayClass)){
        slideNav.classList.remove(obj.slideNavActiveClass);
      }
      if(target.classList.contains(obj.slideNavBtnCloseClass)){
        slideNav.classList.remove(obj.slideNavActiveClass);
      }
      if(target.classList.contains(obj.overlayNavClass)){
        slideNav.classList.remove(obj.slideNavActiveClass);
      }
    });
  }
}
