import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwith from "./ColorModeSwith";

const NavBar = () => (
  <HStack justifyContent="space-between" padding="10px">
    <Image src={logo} boxSize="60px"></Image>
    <ColorModeSwith />
  </HStack>
);

export default NavBar;
