import Head from "next/head";

import {
  Avatar,
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
        px={{ base: 4 }}
        align={"center"}
        m={8}
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
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
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
    <Stack id="inicio" minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} m={4} flex={1} align={"center"} justify={"left"}>
        <Stack spacing={8} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text as={"span"} position={"relative"} color={"#4F351E"}>
              filosofia clínica e <br />
              coach pessoal
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

function AboutMe() {
  return (
    <Stack
      id="sobre"
      minH={"100vh"}
      bg={useColorModeValue("gray.50", "gray.800")}
      pt={24}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"justify"}
        maxW={"3xl"}
        as="cite"
      >
        Formado em Direito com especialização em <b>Filosofia e Sociologia</b>{" "}
        pela Estácio de Sá e em <b>Filosofia Clínica certificado B </b> e em
        fase de estágio para o <b>certificado A </b> através do{" "}
        <b>Instituto Packter</b>, descobri através dessas áreas o quanto esse
        conhecimento poderia me ajudar e me transformar como pessoa e através da
        Filosofia Clínica o quanto eu poderia ajudar outras pessoas.
        <br />
        <b>
          Percebi que a busca pelas ideias e do conhecimento não precisa
          acontecer apenas no âmbito intelectual, ela pode ser externalizada
          através de nossas ações e dos nossos hábitos e para isso é necessário
          respeitar a nossa singularidade e a singularidade do próximo.
        </b>
        <br />
        Esse entendimento fez de mim uma pessoa em constante evolução para
        buscar ser sempre uma pessoa melhor e isso é algo que quero ajudar as
        pessoas a atingirem. Sempre disse que gostaria de usar a filosofia para
        ajudar as pessoas a serem suas melhores versões e esse é meu objetivo,
        ajudar pessoas.
      </Text>
      <Box textAlign={"center"}>
        <Avatar
          src={
            "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
          }
          alt={"IVAN ZANET MANGILI"}
          mb={2}
        />

        <Text fontWeight={600}>IVAN ZANET MANGILI</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.400", "gray.400")}>
          Coach Pessoal
        </Text>
      </Box>
    </Stack>
  );
}

function CoachContext() {
  return (
    <Stack id="coach" minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} m={4} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={8} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl" }}>
            <Text as={"span"} position={"relative"} color={"#4F351E"}>
              Coach
            </Text>
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"#1E1E1E"}
            textAlign={"justify"}
            as="p"
            textIndent={20}
          >
            <p>
              O Coach age como uma ponte entre a pessoa e as ferramentas a sua
              disposição com o objetivo de facilitar, através de um método, na
              descoberta e melhoria do cliente para que ele atinja seu objetivo,
              que podem ser diversos.
            </p>
            <br />
            <p>
              O método que eu utilizo une os conhecimentos pertinentes da
              Filosofia Clínica com a metodologia do Coach, o que faz isso algo
              único. Procuro ajudar a pessoa pela pessoa, ou seja, você já tem
              todas as ferramentas para conseguir atingir o seu objetivo, cabe a
              mim ajudar a mostrar o caminho e mostrar para você quais são elas,
              respeitando sempre o cliente e sua singularidade existencial.
            </p>
            <br />
            <p>
              Não existe fórmula mágica universal, o que existe é uma proposta
              de entendimento e compreensão que irá se aplicar somente ao
              cliente.
            </p>
            <br />
            <b>Lembre-se</b>: Coach não é terapia, é uma ferramenta para ajudar
            com problemas pontuais.
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Imagem de duas pessoas se ajudando a subir em uma pedra"}
          objectFit={"cover"}
          src={"./vyba4i0R_2x.jpg"}
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

      <Menu />
      <Hero />
      <AboutMe />
      <CoachContext />
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
    href: "#inicio",
  },
  {
    label: "SOBRE MIM",
    href: "#sobre",
  },
  {
    label: "COACH&FILOSOFIA CLÍNICA",
    href: "#coach",
  },
];

export default HOME;
