import { Flex } from "@chakra-ui/react";
import { ButtonSubmit } from "../elements/buttons/button";
import { InputForm } from "../elements/inputs";

export function LoginFragment() {
  return (
    <>
    <Flex flexDir={"column"} gap={"1rem"}>
    <InputForm label="Email" type="email"/>
    <InputForm label="Password" type="password"/>
    <ButtonSubmit label="Login"/>
    </Flex>
    </>
  );
}
