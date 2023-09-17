export class Field {
  errors: string[];
  input: HTMLInputElement;

  constructor(input: HTMLInputElement) {
    this.input = input;
    this.errors = [];

    let errorMessage = document.createElement("p");
    errorMessage.className = "validationMessage";
    this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling);

    this.input.addEventListener("input", () => {
      this.errors = [];
      this.validate();
      errorMessage.innerText = this.errors[0] || "";
    });
  }

  validate() {}
}

export const SpaceFieldDecorator = (field: Field): Field => {
  let validate = field.validate;

  field.validate = function () {
    validate();
    let value = field.input.value;
    if (!value) {
      field.errors.push("I need something");
    }
  };

  return field;
}

export const HastagFieldDecorator = (field: Field): Field => {
  let validate = field.validate;

  field.validate = function () {
    validate();
    let value = field.input.value;

    if (value.indexOf("#") === -1) {
      field.errors.push("This is not a hastag");
    }
  };

  return field;
}
