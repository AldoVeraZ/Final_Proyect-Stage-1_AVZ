const validateStrings = (string) => {
  /* crear expresion regular */
  const regex = new RegExp("^[A-Za-z Ññ]+$");
  return regex.test(string);
};

/* Validacion para lo q es el largo */
const validateStgLength = (stg, minLength, maxLength) => {
  if (stg.length < minLength) {
    return `El valor debe tener al menos ${minLength} caracteres.`;
  } else if (stg.length > maxLength) {
    return `El valor debe tener no más ${maxLength} caracteres.`;
  } else {
    return true;
  }
};

/* 
const validateStgLength = (stg, minLength, maxLength) => {
  if (stg.length < minLength) {
    return `El valor debe tener al menos ${minLength} caracteres.`;
  } else if (stg.length > maxLength) {
    return `El valor debe tener no más de ${maxLength} caracteres.`;
  } else {
    return true;
  }
};


*/

// Precio *
/* Stock *  */
// Edad desde y hasta
/* Valida input numericos */
/* validar q sean mayores a cero */
const validatePositiveNumber = (num) => num >= 0;

/* validar que es entero */
const validateInt = (num) => Number.isInteger(num);

// Foto *

const saveToy = (toy) => {
  /* ver is hay algo guardado con la key */
  /* ver si es el primero juguete que vamos a guardar o no */
  const initialValue = localStorage.getItem("toys");
  /* ver si initialValue  es algo haremos una accion*/
  if (initialValue) {
    /* hay que parsearlo */
    let values = JSON.parse(initialValue);
    /* vamos a tener nuestro array ya con cosas adentro */
    /* al array le agregamos el valor nuevo, el nuevo valor sera el viejo valor agregandole el toy que recibo por parametro */
    values.push(toy);
    /* tengo que pasarlo a string de vuelta */
    const newValStg = JSON.stringify(values);
    localStorage.setItem("toys", newValStg);
  } else {
    /* si no hay nada, es el primer juguete que se va a guardar*/
    /* lo pasamos a stringify porque necesitamos a nuestro array como string, colocamos el primer juguete q nos llega por parametro */
    const initialToys = JSON.stringify([toy]);
    localStorage.setItem("toys", initialToys);
  }
  alert("El juego ha sido guardado correctamente");
};

const onSubmitProduct = (e) => {
  e.preventDefault();
  let validForm = true;
  const nameInput = document.getElementById("name");
  const priceInput = document.getElementById("price");
  const stockInput = document.getElementById("stock");
  const brandInput = document.getElementById("brand");
  const categoryInput = document.getElementById("category");
  const shortDescriptionInput = document.getElementById("shortDescription");
  const longDescriptionInput = document.getElementById("longDescription");
  const freeDeliverInput = document.getElementById("freeDeliver");
  const ageFromInput = document.getElementById("ageFrom");
  const ageToInput = document.getElementById("ageTo");
  const photoInput = document.getElementById("photo");

  const nameError = document.getElementById("nameError");
  const priceError = document.getElementById("priceError");
  const stockError = document.getElementById("stockError");
  const brandError = document.getElementById("brandError");
  const categoryError = document.getElementById("categoryError");
  const shortDescriptionError = document.getElementById(
    "shortDescriptionError"
  );
  const ageFromError = document.getElementById("ageFromError");
  const ageToError = document.getElementById("ageToError");
  // console.log(name);

  // Nombre *
  if (validateStrings(nameInput.value)) {
    /* Verificar la longitud */
    const validStg = validateStgLength(nameInput.value, 2, 30);
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
    nameError.innerText = "Debe colocar caracteres alfabéticos.";
    nameError.style.display = "block";
    validForm = false;
  }

  // Marca
  if (brandInput.value.length > 0) {
    if (validateStrings(brandInput.value)) {
      /* Verificar la longitud */
      const validStgBrand = validateStgLength(brandInput.value, 2, 30);
      if (validStgBrand === true) {
        brandInput.ariaInvalid = false;
        brandError.innerText = "";
        brandError.style.display = "none";
      } else {
        brandInput.ariaInvalid = true;
        brandError.innerText = validStgBrand;
        brandError.style.display = "block";
        validForm = false;
      }
    } else {
      brandInput.ariaInvalid = true;
      brandError.innerText = "Debe colocar caracteres alfabéticos.";
      brandError.style.display = "block";
      validForm = false;
    }
  }
  // Categoría *
  if (validateStrings(categoryInput.value)) {
    const validStgCat = validateStgLength(categoryInput.value, 2, 15);

    if (validStgCat === true) {
      categoryInput.ariaInvalid = false;
      categoryError.innerText = "";
      categoryError.style.display = "none";
    } else {
      categoryInput.ariaInvalid = true;
      categoryError.innerText = validStgCat;
      categoryError.style.display = "block";
      validForm = false;
    }
  } else {
    categoryInput.ariaInvalid = true;
    categoryError.innerText = "Debe colocar caracteres alfabéticos.";
    categoryError.style.display = "block";
    validForm = false;
  }

  // Descripción corta *
  if (validateStrings(shortDescriptionInput.value)) {
    const validStgDesc = validateStgLength(
      shortDescriptionInput.value,
      10,
      140
    );
    if (validStgDesc === true) {
      shortDescriptionInput.ariaInvalid = false;
      shortDescriptionError.innerText = "";
      shortDescriptionError.style.display = "none";
    } else {
      shortDescriptionInput.ariaInvalid = true;
      shortDescriptionError.innerText = validStgDesc;
      shortDescriptionError.style.display = "block";
      validForm = false;
    }
  } else {
    shortDescriptionInput.ariaInvalid = true;
    shortDescriptionError.innerText = "Debe colocar caracteres alfabéticos.";
    shortDescriptionError.style.display = "block";
    validForm = false;
  }

  // Precio *
  if (!validatePositiveNumber(priceInput.value)) {
    priceInput.ariaInvalid = true;
    priceError.innerText = "Debe ser un número positivo";
    priceError.style.display = "block";
    validForm = false;
  } else {
    priceInput.ariaInvalid = false;
    priceError.innerText = "";
    priceError.style.display = "none";
  }

  /* Stock *  */
  if (!validatePositiveNumber(stockInput.value)) {
    stockInput.ariaInvalid = true;
    stockError.innerText = "Debe ser un número positivo";
    stockError.style.display = "block";
    validForm = false;
  } else if (!validateInt(parseInt(stockInput.value))) {
    stockInput.ariaInvalid = true;
    stockError.innerText = "Debe ser un número entero";
    stockError.style.display = "block";
    validForm = false;
  } else {
    stockInput.ariaInvalid = false;
    stockError.innerText = "";
    stockError.style.display = "none";
  }

  // Edad desde y hasta
  if (ageFromInput.value.length || ageToInput.value.length) {
    if (!validatePositiveNumber(ageFromInput.value)) {
      ageFromInput.ariaInvalid = true;
      ageFromError.innerText = "Debe ser un número positivo";
      ageFromError.style.display = "block";
      validForm = false;
    } else if (!validateInt(parseInt(ageFromInput.value))) {
      ageFromInput.ariaInvalid = true;
      ageFromError.innerText = "Debe ser un número entero";
      ageFromError.style.display = "block";
      validForm = false;
    } else {
      ageFromInput.ariaInvalid = false;
      ageFromError.innerText = "";
      ageFromError.style.display = "none";
    }
    if (!validatePositiveNumber(ageToInput.value)) {
      ageToInput.ariaInvalid = true;
      ageToError.innerText = "Debe ser un número positivo";
      ageToError.style.display = "block";
      validForm = false;
    } else if (!validateInt(parseInt(ageToInput.value))) {
      ageToInput.ariaInvalid = true;
      ageToError.innerText = "Debe ser un número entero";
      ageToError.style.display = "block";
      validForm = false;
    } else if (parseInt(ageFromInput.value) >= parseInt(ageToInput.value)) {
      ageToInput.ariaInvalid = true;
      ageToError.innerText = "La edad hasta no debe ser menor a edad desde.";
      ageToError.style.display = "block";
      validForm = false;
    } else {
      ageToInput.ariaInvalid = false;
      ageToError.innerText = "";
      ageToError.style.display = "none";
    }
  }

  if (validForm) {
    /* armar un objeto con todos los datos */
    const toy = {
      name: nameInput.value,
      price: parseFloat(priceInput.value),
      stock: parseInt(stockInput.value),
      brand: brandInput.value,
      category: categoryInput.value,
      shortDescription: shortDescriptionInput.value,
      description: longDescriptionInput.value,
      freeDeliver: freeDeliverInput.checked,
      ageFrom: ageFromInput.value === "" ? "" : parseInt(ageFromInput.value),
      ageTo: ageToInput.value === "" ? "" : parseInt(ageToInput.value),
      photo: photoInput.value,
    };
    saveToy(toy);
  }
};
