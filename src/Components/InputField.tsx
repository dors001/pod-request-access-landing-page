import {
  Input,
  InputGroup,
  InputRightElement,
  Show,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onValidate: (validateText: string) => void;
  value: string;
  onEmailValidation: (getMessage: string) => void;
}

const InputField = ({ onValidate, value, onEmailValidation }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValidate(e.target.value);
  };

  const ref = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    const inputValue = ref.current?.value || "";
    onEmailValidation(inputValue);
    onValidate(inputValue);
  };

  return (
    <div>
      <Show breakpoint="(max-width: 767px)">
        <Input
          placeholder="Email address"
          _placeholder={{ color: "white", opacity: "50%", paddingLeft: "1rem" }}
          width="100%"
          height="46px"
          fontWeight="bold"
          fontSize="14px"
          variant="filled"
          color="#2C344B"
          textColor="white"
          focusBorderColor="#C2CBE5"
          borderRadius="25px"
          marginBottom="1rem"
          value={value}
          onChange={handleChange}
          required
        />
      </Show>
      <Show breakpoint="(min-width: 768px)">
        <InputGroup>
          <Input
            ref={ref}
            placeholder="Email address"
            _placeholder={{
              color: "white",
              opacity: "50%",
              paddingLeft: "1rem",
            }}
            width="100%"
            height="56px"
            fontWeight="bold"
            fontSize="14px"
            variant="filled"
            color="#2C344B"
            textColor="white"
            focusBorderColor="#C2CBE5"
            borderRadius="25px"
            marginBottom="1rem"
            value={value}
            onChange={handleChange}
            required
          />
          <InputRightElement
            width="162px"
            height="46px"
            marginTop="0.3rem"
            marginRight="0.3rem"
          >
            <Button
              width="100%"
              height="46px"
              color="#121725"
              fontWeight="bold"
              backgroundColor="#54E6AF"
              borderRadius="25px"
              padding="0 1rem"
              onClick={handleButtonClick}
            >
              Request Access
            </Button>
          </InputRightElement>
        </InputGroup>
      </Show>
    </div>
  );
};

export default InputField;
