import React from "react";
import { useState } from "react";
import { Image } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Text,
  Button, Box, HStack
} from "@chakra-ui/react";
//import Bg from "./assets/Bg.png";
import Image1 from './assets/Image1.png'
import Chef01 from "./assets/Chef01.png";
import Hero from "./assets/Hero.png";
import Image01 from "./assets/Image01.png";

const Menu = () => {
    const [add, setAdd] = useState(0);

    const handleClick = (values) => {
        const newAdd = {
            data: values.data,
        };

        setAdd([...add, newAdd]);
    };

  return (
    <SimpleGrid alignItems={"center"}
      spacing={6} margin={20} p={5}
      templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
    >
      <Card alignItems={"center"} display="flex" justifyContent="space-between" >
        <CardHeader textAlign={"center"}>
          <Heading size="md">Rice & Vegetable</Heading>
        </CardHeader>
        <CardBody>
          <HStack spacing={1}>
            <Box boxSize="200px" px={1}>
              <Image src={Image1} alt="Little-lemon" alignItems={"center"}/>
            </Box>
          </HStack>
          <Text p={3}>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button width={60} type="handleClick" onClick={handleClick.data} backgroundColor={"#F4CE14"}>Select</Button>
        </CardFooter>
      </Card>
      <Card alignItems={"center"}>
        <CardHeader textAlign={"center"}>
          <Heading textAlign={"center"} size="md">Starters</Heading>
        </CardHeader>
        <CardBody>
        <HStack spacing={1}>
            <Box boxSize="200px" px={1}>
              <Image src={Chef01} alt="Little-lemon" />
            </Box>
          </HStack>
          <Text p={3}>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button width={60} type="handleClick" onClick={handleClick.data} backgroundColor={"#F4CE14"}>Select</Button>
        </CardFooter>
      </Card>
      <Card alignItems={"center"}>
        <CardHeader textAlign={"center"}>
          <Heading size="md">Pizza four cheese</Heading>
        </CardHeader>
        <CardBody>
        <HStack spacing={1}>
            <Box boxSize="12.5rem" px={1}>
              <Image src={Hero} alt="Little-lemon"/>
            </Box>
          </HStack>
          <Text p={3}>Our pizza of all the time our customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button width={60} type="handleClick" onClick={handleClick.data} backgroundColor={"#F4CE14"}>Select</Button>
        </CardFooter>
      </Card>
      <Card alignItems={"center"} >
        <CardHeader textAlign={"center"}>
          <Heading size="md"> Salad</Heading>
        </CardHeader>
        <CardBody>
          <HStack spacing={1}>
            <Box boxSize="200px" px={1}>
              <Image src={Image01} alt="Little-lemon" />
            </Box>
          </HStack>
          <Text p={3}>Best Salad ever for our customers over the last month.</Text>
        </CardBody>
        <CardFooter itemtAlign={"center"}>
          <Button width={60} type="handleClick" onClick={handleClick.data}  backgroundColor={"#F4CE14"}>Select</Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
};

export default Menu;
