import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/logo.webp';
const Navbar = () => {
    return (
       <>
        <HStack>  {/* Hstack allows you to put objects in a horizontal line */}
          <Image src={logo} boxSize={'60px'}></Image> {/* The boxsize attribute allows you to scale the img size to 60px*/}
          <Text fontSize='2xl' fontWeight='bold'>Chakra UI</Text>
        </HStack>
       </>
    );
}

export default Navbar;