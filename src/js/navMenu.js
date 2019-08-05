module.exports = class NavMenu{
    constructor(options){
        var defaults = {
            "buttonClass": "header__nav-cta",
            "dropdownWrapClass": "header__nav-cta-wrap",
            "openClass": "header__nav-cta-wrap--open"
          };
      
          let populated = Object.assign(defaults, options);
          for (let key in populated) {
            if (populated.hasOwnProperty(key)) {
              this[key] = populated[key];
            }
          }
      
          this.setup();
    }

    setup() {
        var obj = this;

        var registerButton = document.querySelector("."+obj.buttonClass);
        
        if(registerButton){
            var dropdown = document.querySelector("."+obj.dropdownWrapClass);
            registerButton.addEventListener('click', (event) =>{
                if(dropdown){
                    if(dropdown.classList.contains(obj.openClass)){
                        dropdown.classList.remove(obj.openClass);
                    }
                    else{
                        dropdown.classList.add(obj.openClass);
                    }
                }
            });
            
        }
    }
}