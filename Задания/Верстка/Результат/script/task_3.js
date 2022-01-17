const form = document.forms.form;

/**
 * View state form elements 
 */
const inputView = (boolean, element) => {
  !boolean
  ? (element.dataset.state = "false")
  : (element.dataset.state = "true");
};

/**
 * valid invalid Form elements 
 */
const state = (name, value , element) => {
  let boolean = null;
  switch (name) {
    case "first-name": boolean = /^[а-яёa-z]{2,16}$/iu.test(value); break ;
    case "last-name": boolean = /^[а-яёa-z]{2,16}$/iu.test(value); break ;
    case "patronymic": boolean = /^[а-яёa-z]{2,16}$/iu.test(value); break ;
    case "date": boolean = validateDate(value); break ;
    case "comment": boolean = /^[а-яёa-z]{2,16}$/iu.test(value); break ;
  };
  inputView(boolean, element);
  return  boolean ;
}

/**
 * 
 * @param {String} date 
 * @returns Boolean
 */
const validateDate = (date) => {
  let aTmp = date.split(".");
  if (aTmp.length != 3) {return false;}
  if (parseInt(aTmp[2], 10) <= 1910 || parseInt(aTmp[2], 10) >= 2020) {
    return false;
  }
  let sTmp = aTmp[2] + "-" + aTmp[1] + "-" + aTmp[0];
  if (new Date(sTmp) == "Invalid Date") {
    return false;
  } else {
    return true;
  }
}


/**
 * validate form
 * @param {HTMLFormElement} form 
 */
const validate = (form) => {
  const formElements = Array.from(form.elements);
  const stateElements = [];
  const date = {};
  
  formElements.forEach((element) => {
    let { name, value } = element;
    if (name !== "btn") {
      let stateElement = state(name, value, element);
      stateElements.push(stateElement);
      if ( name === "first-name" ||  name === "last-name" ||  name === "patronymic" ||  name === "comment"){
        date[name] = value
      }
      if (name === "date") {
        date[name] = ((value) => {
          let aTmp = value.split(".");
          let sTmp = aTmp[2] + "-" + aTmp[1] + "-" + aTmp[0];
          return new Date(sTmp);
        })(value);
      }
    }
  });
  
  if (!stateElements.includes(false)) {
    console.log( JSON.stringify(date) );
    };
};






form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate(form);
});









