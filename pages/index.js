import Head from "next/head";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
  Image,
} from "@chakra-ui/react";

//const vector = () => <Image src={"./Vector.svg"} width={280} height={60} />;

function Menu() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box mt={8}>
      <Flex
        bg={"white"}
        color={"#4F351E"}
        minH={"60px"}
        py={{ base: 2 }}
        
        align={"center"}
        mt={8}
        mb={8}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <Text w={5} h={5}>
                  X
                </Text>
              ) : (
                <Text w={5} h={5}>
                  #
                </Text>
              )
            }
            variant={"ghost"}
            aria-label={"Alternar a navegação"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "space-between" }}
        >
          <Image src="./Vector.svg" />
          <Flex display={{ base: "none", md: "flex" }}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          ml={8}
        >
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"#4F351E"}
            bg={"#EFF1B9"}
            href={"#"}
            _hover={{
              bg: "#C7CA87",
            }}
          >
            CONTATO
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

function Hero() {
  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"left"}>
        <Stack spacing={8} w={"full"} maxW={"lg"}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          >
            <Text as={"span"} position={"relative"} color={"#4F351E"}>
              filosofia clínica e <br />
              coach de vida
            </Text>
            <br />{" "}
            <Text
              color={"#4F351E"}
              as={"span"}
              fontSize={"lg"}
              fontWeight={200}
            >
              Não sei o suficiente
            </Text>{" "}
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"#1E1E1E"}
            textAlign={"justify"}
          >
            Um resumo de duas linhas falando de forma generalista o que você
            oferece (sem ser o seu corpo).
          </Text>
          <Stack direction={{ base: "column", md: "row" }}>
            <Button
              mt={8}
              href={"#"}
              fontWeight={600}
              bg={"#4F351E"}
              color={"white"}
              _hover={{
                bg: "#734B28",
              }}
            >
              MARQUE UMA SESSÃO
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={"./caleb-woods-iobrSsVqp28-unsplash.jpg"}
        />
      </Flex>
    </Stack>
  );
}

const HOME = () => {
  return (
    <>
      <Head>
        <title>Ivan Za</title>
      </Head>
      <Box margin={150} marginTop={0}>
        <Menu />
        <Hero />
      </Box>

      <Heading>trY</Heading>
    </>
  );
};

const DesktopNav = () => {
  const linkColor = "#4F351E";

  return (
    <Stack direction={"row"} spacing={6}>
      {NAV_ITEMS.map((navItem) => (
        <Box
          key={navItem.label}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={3}
          borderBottomStyle={"solid"}
          borderColor={"transparent"}
          _hover={{
            border: 3,
            borderBottomStyle: "solid",
            borderColor: "#EFF1B9",
          }}
        >
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                m={5}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={useColorModeValue("#4F351E", "gray.200")}>
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "INICIO",
    href: "#",
  },
  {
    label: "SOBRE MIM",
    href: "#",
  },
  {
    label: "COACH&FILOSOFIA CLÍNICA",
    href: "#",
  },
];

export default HOME;
