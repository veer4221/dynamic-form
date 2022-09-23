import { staticERROR } from "../staticObjects";

export const fieldSlugGenerator = (formJSON) => {
  formJSON.Fields = formJSON?.Fields.map((field) => {
    return {
      ...field,
      ["fields-slug"]: `${formJSON["form-slug"]}-${field?.name}`,
    };
  });
  //   validateFormJSON();
  return formJSON;
};

export const validateFormJSON = (formJSON) => {
  var ErrorArr = [];
  if (!!formJSON["form-slug"]) ErrorArr.push(staticERROR.FORM_SLUG_MANDATORY);
  if (!!formJSON?.formName) ErrorArr.push(staticERROR.FORM_SLUG_MANDATORY);
  if (!!formJSON?.submitButton?.label)
    ErrorArr.push(staticERROR.FORM_SLUG_MANDATORY);
  if (!!formJSON?.resetButton?.label)
    ErrorArr.push(staticERROR.FORM_RESET_BUTTON_MANDATORY);
  if (ErrorArr.length === 0) return true;
  alert(ErrorArr[0]);
  return false;
};
