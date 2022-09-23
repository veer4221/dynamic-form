export { FieldTypes, staticERROR };

const FieldTypes = {
  TEXT: "text",
  NUMBER: "number",
  EMAIL: "email",
  PASSWORD: "password",
  PSWD: "password",
  EMAIL: "email",
  SELECT: "select",
  RADIO: "radio",
  DATE: "date",
  TIME: "time",
  CHECKBOX: "checkbox",
};

const staticERROR = {
  FORM_SLUG_MANDATORY: "Please Enter Form-slug in JSON..",
  FORM_NAME_MANDATORY: "Please Enter Form Name in JSON..",
  FORM_SUBMIT_BUTTON_MANDATORY: "submitButton.lable is require in JSON..",
  FORM_RESET_BUTTON_MANDATORY: "resetButton.lable is require in JSON..",
};
