
import { Wrapper, WrapperError, WrapperInput } from "./form-elements.e";

const FormElements  = ({
  inputType,
  name,
  classN,
  placeholder,
  type,
  onChange,
  onBlur,
  error,
}) => {
  switch (inputType) {
    case "input-text":
      return (
        <WrapperInput>
          <input
            type={type}
            placeholder={placeholder}
            className={`form-control ${classN}`}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
          />
          <WrapperError>{error}</WrapperError>
        </WrapperInput>
      );
      break;
  }
  return null;
};

export default FormElements;
