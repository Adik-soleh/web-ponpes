import { Flex } from "@chakra-ui/react";
import { ButtonSubmit } from "../elements/buttons/button";
import { InputForm } from "../elements/inputs";

export function RegisterFragment() {
  return (
    <>
    <Flex flexDir={"column"} gap={"1rem"}>
    <InputForm label="Fullname" type="text"/>
    <InputForm label="Email" type="email"/>
    <InputForm label="Password" type="password"/>
    <InputForm label="Confirm Password" type="password"/>
    <ButtonSubmit label="Register"/>
    </Flex>
    </>
  );
}
