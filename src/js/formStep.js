module.exports = class Slidenav {
  constructor(options) {
    var defaults = {
      "formClass": "form-step",
      "hiddenClass": "form-step--hidden",
      "nextStepButtonClass": "form-step__next",
      "prevStepButtonClass": "form-step__previous",
      "lastStepNextBtnClass": "form-step__next--last",
      "stepsNavClass": "form-step__next--last",
      "stepsNavItemClass": "form-step__step-btn",
      "stepNavItemActiveClass": "form-step__item--active",
      "activeStep": 1,
      "formErrorHiddenClass": "form-error__hidden",
      "confirmationTableClass": "form-step__confirmation-table",
      "formSubmitButtonClass": "form-step__btn-submit"
    };

    let populated = Object.assign(defaults, options);
    for (let key in populated) {
      if (populated.hasOwnProperty(key)) {
        this[key] = populated[key];
      }
    }

    this.setup(this);
  }

  //hide all other form steps
  setup(obj) {
    var form = document.querySelector("." + obj.formClass);
    if (form) {
      var steps = form.querySelectorAll('fieldset');
      var totalSteps = steps.length;

      if (steps) {

        for (var i = 0; i < steps.length; i++) {

          if (steps[i].dataset.step != obj.activeStep) {
            steps[i].classList.add(obj.hiddenClass);
          }
        }


        var nextStepBtns = obj.getNextStepBtns(obj);
        var navItems = obj.getNavItems(obj);
        var previousStepBtns = obj.getPreviousStepBtns(obj);

        //next step functionality
        this.nextStep(this, nextStepBtns, steps, form);

        //previous step functionality
        this.previousStep(this, previousStepBtns, navItems);

        //navigation functionality
        navItems[0].classList.add(obj.stepNavItemActiveClass);
        this.navigateSteps(this, navItems, steps, form);

        //form submit
        obj.formSubmit(obj,form);
      }
    }
  }

  nextStep(obj, nextStepBtns, steps, form) {
    var navStepsBtns = obj.getNavItems(obj);
    if (nextStepBtns) {

      for (var i = 0; i < nextStepBtns.length; i++) {
        nextStepBtns[i].addEventListener('click', (event) => {

          if (obj.validateActiveStep(obj, steps) == true) {
            var wantedStep = event.target.parentNode;
            var nextStep = wantedStep.nextElementSibling || wantedStep.nextSibling;

            //hide the current tab
            wantedStep.classList.add(obj.hiddenClass);

            navStepsBtns[obj.activeStep - 1].classList.remove(obj.stepNavItemActiveClass);
            // //show the next tab
            nextStep.classList.remove(obj.hiddenClass);
            navStepsBtns[obj.activeStep].classList.add(obj.stepNavItemActiveClass);

            obj.activeStep = obj.activeStep + 1;
            console.log(obj.activeStep);

            obj.showAllDetails(obj,form);

          } else {
            console.log("Show Validation Errors");
          }
        });

      }
    }
  }

  previousStep(obj, previousStepBtns, navItems) {

    if (previousStepBtns) {
      for (var i = 0; i < previousStepBtns.length; i++) {
        previousStepBtns[i].addEventListener('click', (event) => {
          var wantedStep = event.target.parentNode;
          var prevStep = wantedStep.previousElementSibling || wantedStep.previousSibling;
          //hide the current tab
          wantedStep.classList.add(obj.hiddenClass);
          navItems[obj.activeStep - 1].classList.remove(obj.stepNavItemActiveClass);
          //show the next tab
          prevStep.classList.remove(obj.hiddenClass);
          navItems[obj.activeStep - 2].classList.add(obj.stepNavItemActiveClass);

          obj.activeStep = obj.activeStep - 1;
          console.log(obj.activeStep);
        });
      }
    }
  }

  navigateSteps(obj, navItems, steps, form) {

    if (navItems) {
      var allSteps = steps;

      for (var j = 0; j < navItems.length; j++) {
        navItems[j].addEventListener('click', (event) => {
          var navText = event.target.textContent;

          for (var k = 0; k < allSteps.length; k++) {
            navItems[k].classList.remove(obj.stepNavItemActiveClass);
            var stepName = allSteps[k].dataset.name;
            var tempActive = obj.activeStep;

            if (navText != stepName) {
              allSteps[k].classList.add(obj.hiddenClass);
            } else if (navText == stepName) {
              allSteps[k].classList.remove(obj.hiddenClass);
              obj.activeStep = k + 1;
            }
          }

          // console.log(stepName);
          event.target.classList.add(obj.stepNavItemActiveClass);
          console.log(obj.activeStep);

            obj.showAllDetails(obj,form);
        });

      }
    }
  }



  validateActiveStep(obj, steps) {

    //Getting the active form step node
    var activeFormStep = steps[obj.activeStep - 1];
    console.log(activeFormStep);

    var activeFormStepFields = activeFormStep.querySelectorAll("input");

    for (var l = 0; l < activeFormStepFields.length; l++) {
      if (activeFormStepFields[l].value === '' && activeFormStepFields[l].hasAttribute('required') && (activeFormStepFields[l].type == "text" || activeFormStepFields[l].type == "email")) {
        var errorNode = obj.getNextSibling(activeFormStepFields[l]);
        errorNode.classList.remove(obj.formErrorHiddenClass)
        return false;
      }
    }

    return true;
  }



  getAllDetails(obj, form) {
    var allFieldsWrap = form.querySelectorAll(".form-group");

    console.log(allFieldsWrap);

    var fields = [];
    for (var m = 0; m < allFieldsWrap.length; m++) {
      var name = allFieldsWrap[m].querySelector("label").textContent;
      var fieldText = allFieldsWrap[m].querySelector("input").textContent;
      var fieldValue = allFieldsWrap[m].querySelector("input").value;

      var value = "";
      if (fieldText == "" || typeof fieldText == undefined) {
        value = fieldValue;
      } else
      if (fieldText != "") {
        value = fieldText;
      }

      var field = {
        "name" : name,
        "value": value
      };

      fields.push(field);
    }
    return fields;
  }

  showAllDetails(obj, form) {
    if(obj.activeStep == 4) {
      var formDetails = obj.getAllDetails(obj, form);

        var table = form.querySelector("."+obj.confirmationTableClass);
        // console.log(table);

          table.innerHTML = "";
        for(var n = 0; n < formDetails.length; n++) {

          var tr = document.createElement('tr');
          var td1 = formDetails[n].name;
          var td2 = formDetails[n].value;
          tr.innerHTML = `<td>${td1}</td> <td>${td2}</td>`;
          table.appendChild(tr);
        }


    }
  }

  submitDetails(obj, form){
    var formDetails = obj.getAllDetails(obj,form);
    var inputToSubmit = document.createElement('input');
    inputToSubmit.type = "hidden";
    inputToSubmit.name = "formFields";
    inputToSubmit.value = JSON.stringify(formDetails);
    console.log(inputToSubmit);
    form.appendChild(inputToSubmit);
    form.submit();
  }

  formSubmit(obj, form) {
    var submitBtn = obj.getSubmitBtn(obj);

    submitBtn.addEventListener("click", (event) => {
      event.preventDefault();
      obj.submitDetails(obj,form);
    });
  }



  getNextSibling(Node) {
    return Node.nextElementSibling || Node.nextSibling;
  }

  getPreviousSibling(Node) {
    return Node.previousElementSibling || Node.previousSibling;
  }

  getNavItems(obj) {
    var navSteps = document.querySelectorAll("." + obj.stepsNavItemClass);
    return navSteps;
  }

  getNextStepBtns(obj) {
    var n = document.querySelectorAll("." + obj.nextStepButtonClass);
    return n;
  }

  getPreviousStepBtns(obj) {
    var p = document.querySelectorAll("." + obj.prevStepButtonClass);
    return p;
  }

  getLastNextStepBtn(obj) {
    return document.querySelector("." + obj.lastStepNextBtnClass);
  }

  getSubmitBtn(obj){
    return document.querySelector("."+obj.formSubmitButtonClass);
  }

};
