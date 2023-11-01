document.addEventListener("DOMContentLoaded", () => {
  // cookie
  const cookieWindow = document.querySelector(".cookie");
  const cookieWindowButtons = cookieWindow.querySelectorAll("button");

  // Кнопка вызовы формы, форма, кнопки формы и т.д.
  const buttonsContact = document.querySelectorAll(".button-contact");
  const modalWindow = document.querySelector(".modal");
  const form = document.querySelector(".modal__form");
  const modalWindowCloseButton = document.querySelector(".form__close");
  const errorsMsg = form.querySelectorAll(".error-message");
  const inputs = form.querySelectorAll("input");

  // Окно после отправки формы и кнопка
  const superWindow = document.querySelector(".super");
  const superButtons = superWindow.querySelectorAll("button");

  // Бургер, меню, кнопки. Обрабатывается только кнопка закрытия. Пункты меню не обрабатываются, т.к. и в задании не требуется
  const buttonBurger = document.querySelector(".button-burger");
  const modalBurger = document.querySelector(".menu-burger");
  const closeBurger = document.querySelector(".menu-burger__close");

  // Валидация и маска
  let isValid = false;
  let selectorTel = document.querySelector("input[type='tel']");
  let im = new Inputmask("+7 999 999 99 99");
  im.mask(selectorTel);

  // cookie
  cookieWindowButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      cookieWindow.classList.add("hide");
    });
  });

  // Форма и связанное с ней
  buttonsContact.forEach((btn) => {
    btn.addEventListener("click", () => modalWindow.classList.remove("hide"));
  });

  modalWindowCloseButton.addEventListener("click", () =>
    modalWindow.classList.add("hide")
  );

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && !modalWindow.classList.contains("hide")) {
      modalWindow.classList.add("hide");
    }
  });

  // Валидация
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    for (i = 0; i < 3; i++) {
      if (inputs[i].value === "") {
        inputs[i].classList.add("borderRed");
        errorsMsg[i].classList.remove("hide");
      } else {
        inputs[i].classList.remove("borderRed");
        errorsMsg[i].classList.add("hide");
      }
    }

    if (
      inputs[0].value === "" ||
      inputs[1].value === "" ||
      inputs[2].value === ""
    ) {
      errorsMsg[3].classList.remove("hide");
      isValid = false;
      //   superWindow.classList.add("hide");
    } else {
      errorsMsg[3].classList.add("hide");
      modalWindow.classList.add("hide");
      isValid = true;
      superWindow.classList.remove("hide");
    }
  });

  // Окно после отправки формы
  superButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (isValid) {
        superWindow.classList.add("hide");
        isValid = false;
      }
    });
  });

  // Бургер и меню
  buttonBurger.addEventListener("click", () => {
    modalBurger.classList.remove("hide");
  });

  closeBurger.addEventListener("click", () => {
    modalBurger.classList.add("hide");
  });
});
