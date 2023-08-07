import { Box, Show } from "@chakra-ui/react";

export interface Props {
  onEmailValidation: (getMessage: string) => void;
  getMessage: string;
}

const ButtonField = ({ onEmailValidation, getMessage }: Props) => {
  const handleClick = () => {
    onEmailValidation(getMessage);
  };

  return (
    <div>
      <Show breakpoint="(max-width: 767px)">
        <Box
          as="button"
          width="100%"
          height="46px"
          color="#121725"
          fontWeight="bold"
          backgroundColor="#54E6AF"
          borderRadius="25px"
          padding="0 1rem"
          onClick={handleClick}
        >
          Request Access
        </Box>
      </Show>
    </div>
  );
};

export default ButtonField;
