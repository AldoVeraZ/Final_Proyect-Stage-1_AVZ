const onSubmitContact = (e) => {
  e.preventDefault();

  let validForm = true;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const comentInput = document.getElementById("message");

  /* Errores */
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");

  /* Validar nombre */
  if (validateStrings(nameInput.value)) {
    const validStg = validateStgLength(nameInput.value, 3, 20);

    if (validStg === true) {
      nameInput.ariaInvalid = false;
      nameError.innerText = "";
      nameError.style.display = "none";
    } else {
      nameInput.ariaInvalid = true;
      nameError.innerText = validStg;
      nameError.style.display = "block";
      validForm = false;
    }
  } else {
    nameInput.ariaInvalid = true;
    nameError.innerText = "Debe colocar caractéres alfanuméricos";
    nameError.style.display = "block";
    validForm = false;
  }

  /* EMAIL */
  if (validateEmails(emailInput.value)) {
    emailInput.ariaInvalid = false;
    emailError.innerText = "";
    emailError.style.display = "none";
  } else {
    emailInput.ariaInvalid = true;
    emailError.innerText = "Ingrese un email correctamente";
    emailError.style.display = "block";
    validForm = false;
  }
  if (validForm && comentInput.value) {
    /* Armar el objeto */
    const newComent = {
      name: nameInput.value,
      email: emailInput.value,
      coment: comentInput.value,
    };
    /* Pasarlo a string */
    /* lo guardo como un objeto */
    const stgComent = JSON.stringify(newComent);
    /* lo guardo en local storage */
    localStorage.setItem("message", stgComent);
    alert("Comentarios enviados correctamente");
  } else {
    alert("Debe completar correctamente el comentario a enviar correctamente");
  }
};
