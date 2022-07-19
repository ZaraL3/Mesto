const selectors = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible',
  }
  
  // добавление класса с ошибкой
  const showInputError = (formElement, inputElement, errorMessage)=> {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(selectors.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(selectors.errorClass);
  };
  

  // удаление класса с ошибкой
  const hideInputError = (formElement, inputElement) => {
    const errorElement =  formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(selectors.inputErrorClass);
    errorElement.classList.remove(selectors.errorClass);
    errorElement.textContent = '';
};

// сообщение ошибки 
 const  editErrorMessage = (inputElement) => {
    inputElement.setCustomValidity('');
  
    if (inputElement.validity.valueMissing) {
        inputElement.setCustomValidity('Вы пропустили это поле.');
    }
  
    if (inputElement.validity.typeMismatch && inputElement.type === 'url') {
        inputElement.setCustomValidity('Введите адрес сайта.');
    }
  }
  

  // добавление или удаление текста ошибки в зависимости от валидности поля ввода
  const checkInputValidity = (formElement, inputElement, selectors)=> {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
       hideInputError(formElement, inputElement);
    }
    toggleButtonState(formElement, selectors);
};
  
 // отключение/включение кнопки submit
  const toggleButtonState = (formElement, selectors)=> {
    const buttonElement = formElement.querySelector(selectors.submitButtonSelector);
    
    if (formElement.checkValidity()) {
      buttonElement.removeAttribute('disabled');
      buttonElement.classList.remove(selectors.inactiveButtonClass);
    } else {
      buttonElement.setAttribute('disabled', 'disabled');
      buttonElement.classList.add(selectors.inactiveButtonClass);
    } 
  }
  
  const setEventListeners = (formElement, selectors) => {
    const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
     inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement, selectors);
        });
    });
  };
  
  // валидация формы
  const  enableValidation = (selectors) => {
    const formList = Array.from(document.querySelectorAll(selectors.formSelector));
  
    formList.forEach(function(formElement) {
      setEventListeners(formElement, selectors);
      toggleButtonState(formElement, selectors);
    })
  }
  
  enableValidation(selectors);