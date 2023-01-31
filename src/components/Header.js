import React, { useEffect, useRef } from "react";
import { Box, HStack, Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Logo1 from "./assets/Logo1.png";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };
  return (
   <Stack  >
    <Box
      position={'-moz-initial'}
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      ref={headerRef}
    >
      <Box color="#000000" maxWidth="1280px" margin="0 auto" mt={-8}>
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
            <Box boxSize="220px">
                <Image src={Logo1} alt="Little-lemon" mt={20} ml={21} />
              </Box>
        
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#home" onClick={handleClick("projects")}>
                HOME
              </a>
              <a href="#about" onClick={handleClick("contactme")}>
                ABOUT
              </a>
              <a href="#menu" onClick={handleClick("projects")}>
                MENU
              </a>
              <a href="#reservations" onClick={handleClick("projects")}>
                RESERVATIONS
              </a>
              <a href="#order" onClick={handleClick("projects")}>
                ORDER ONLINE
              </a>
              <a href="#login" onClick={handleClick("projects")}>
                LOGIN
              </a>
              <a href="#contacts" onClick={handleClick("projects")}>
                CONTACTS
              </a>
              <a href="#booking" onClick={handleClick("projects")}>
                BOOKING
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
    </Stack>
  );
};

export default Header;
