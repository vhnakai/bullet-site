import Head from "next/head";

import {
  Avatar,
  Box,
  Flex,
  Container,
  SimpleGrid,
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
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";

import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
  MdOutlineCall,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson, BsWhatsapp, BsInstagram } from "react-icons/bs";

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
      <FilosofiaContext />
      <ContactForm />
      <Footer />
    </>
  );
};

function Menu() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box position={"fixed"} zIndex={100}>
      <Flex
        bg={"white"}
        color={"#4F351E"}
        minW={"100vw"}
        minH={"10vh"}
        align={"center"}
        p={10}
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
            bg={"#fff"}
            _hover={{
              bg: "#EFF1B9",
            }}
            _active={{
              bg: "#EFF1B9",
            }}
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
          spacing={4}
          ml={5}
        >
          <Button
          as={'a'}
            display={{ base: "none", lg: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"#4F351E"}
            bg={"#EFF1B9"}
            href={"#contato"}
            _hover={{
              bg: "#C7CA87",
            }}
            _active={{
              bg: "#CDD077"
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
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} mt={{base: "10vh"}}>
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
        mt="10vh"
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
        <Text fontSize={"md"} color={useColorModeValue("gray.400", "gray.400")}>
          Coach Pessoal
        </Text>
      </Box>
    </Stack>
  );
}

function CoachContext() {
  return (
    <Stack id="coach" minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} m={4} flex={1} align={"center"} justify={"center"} mt="10vh">
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
            O Coach age como uma ponte entre a pessoa e as ferramentas a sua
            disposição com o objetivo de facilitar, através de um método, na
            descoberta e melhoria do cliente para que ele atinja seu objetivo,
            que podem ser diversos.
          </Text>

          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"#1E1E1E"}
            textAlign={"justify"}
            as="p"
            textIndent={20}
          >
            O método que eu utilizo une os conhecimentos pertinentes da
            Filosofia Clínica com a metodologia do Coach, o que faz isso algo
            único. Procuro ajudar a pessoa pela pessoa, ou seja, você já tem
            todas as ferramentas para conseguir atingir o seu objetivo, cabe a
            mim ajudar a mostrar o caminho e mostrar para você quais são elas,
            respeitando sempre o cliente e sua singularidade existencial. Não
            existe fórmula mágica universal, o que existe é uma proposta de
            entendimento e compreensão que irá se aplicar somente ao cliente.
          </Text>

          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"#1E1E1E"}
            textAlign={"justify"}
            as="p"
            textIndent={20}
          >
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

function FilosofiaContext() {
  return (
    <Stack
      id="filosofia"
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
    >
      <Flex flex={1}>
        <Image
          alt={"estatua de Dante Alighieri, filosofo italiano."}
          objectFit={"cover"}
          src={"./rHOEmsbV_2x.jpg"}
        />
      </Flex>
      <Flex p={8} m={4} flex={1} align={"center"} justify={"center"} mt="10vh">
        <Stack spacing={8} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl" }}>
            <Text as={"span"} position={"relative"} color={"#4F351E"}>
              FILOSOFIA CLÍNICA
            </Text>
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"#1E1E1E"}
            textAlign={"justify"}
            as="p"
            textIndent={20}
          >
            A Filosofia Clínica é uma abordagem terapêutica idealizada e
            sistematizada pelo filósofo Lúcio Packter, que faz uso dos
            conhecimentos filosóficos, ou seja, dos conhecimentos da Filosofia
            Acadêmica teórica e os guia para o seu uso na terapia prática. A
            Filosofia Clínica dita uma atitude filosófica do terapeuta que leva
            em conta toda a bagagem de ensinamentos dos filósofos consagrados ao
            longo da história.
          </Text>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"#1E1E1E"}
            textAlign={"justify"}
            as="p"
            textIndent={20}
          >
            Importante salientar que a Filosofia Clínica não faz uso de jargões
            tipológicos e se afasta de conceitos como “doença”, “cura”,
            “normal”, “diferente”, dentre outros. Se cada um é singular em sua
            existência é normal que enxerguemos a singularidade existencial em
            cada um. Não existem duas pessoas iguais. Desse modo é difícil
            encarar, com um fundamento baseado na epistemologia, conceitos como
            “normal” e “diferente”, por exemplo. Cada pessoa é única em sua
            singularidade, em suas experiências, representações do mundo e na
            forma como desenvolve suas questões.
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
}

function ContactForm() {
  return (
    <Container id="contato"  bg="#EFF1B9" maxW="full" centerContent minH={"100vh"} >
      <Flex>
        <Box
          bg="#EFF1B9"
          color="#4F351E"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4} mt="10vh">
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading >Contato</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.800">
                    Preencha o formulário para entrar contato
                  </Text>

                  <VStack spacing={5} mt="5">
                    <FormControl id="name">
                      <FormLabel>Nome Completo</FormLabel>
                      <InputGroup borderColor="#4F351E">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<BsPerson color="#4F351E" />}
                        />
                        <Input
                          type="text"
                          size="md"
                          placeholder="Digite seu Nome."
                          _hover={{
                            border: "1px solid #585A19",
                          }}
                          _placeholder={{
                            color: "#585A19"
                          }}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="email">
                      <FormLabel>E-Mail</FormLabel>
                      <InputGroup borderColor="#4F351E">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<MdOutlineEmail color="#4F351E" />}
                        />
                        <Input
                          type="email"
                          size="md"
                          placeholder="Digite seu E-mail."
                          _hover={{
                            border: "1px solid #585A19",
                          }}
                          _placeholder={{
                            color: "#585A19"
                          }}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="telefone">
                      <FormLabel>Telefone</FormLabel>
                      <InputGroup borderColor="#4F351E">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<MdOutlineCall color="#4F351E" />}
                        />
                        <Input
                          type="tel"
                          size="md"
                          placeholder="Digite seu número de contato."
                          _hover={{
                            border: "1px solid #585A19",
                          }}
                          _placeholder={{
                            color: "#585A19"
                          }}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl id="Opcoes">
                      <FormLabel>Para qual finalidade de serviço:</FormLabel>
                      <RadioGroup  >
                        <Stack spacing={5} direction="row">
                          <Radio borderColor={"#4F351E"} size="md" value="Coach" colorScheme="orange" >
                            Coach
                          </Radio>
                          <Radio borderColor={"#4F351E"} size="md" value="Filosofia Clinica" colorScheme="orange">
                            Filosofia Clínica
                          </Radio>
                        </Stack>
                      </RadioGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel>Mensagem</FormLabel>
                      <Textarea
                        borderColor="#4F351E"
                        placeholder="Escreva sua mensagem"
                        _hover={{
                          border: "1px solid #585A19",
                        }}
                        _placeholder={{
                          color: "#585A19"
                        }}
                      />
                    </FormControl>
                    <FormControl id="name" float="right">
                      <Button
                        variant="solid"
                        fontWeight={600}
                        bg={"#4F351E"}
                        color={"white"}
                        _hover={{
                          bg: "#734B28",
                        }}
                        _active={{
                          bg: "#575916"
                        }}
                      >
                        Enviar
                      </Button>
                    </FormControl>
                  </VStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg" alignSelf="center">
                  <Box m={8} color="#0B0E3F" >
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}  >
                      <VStack pl={0} spacing={3} alignItems="flex-start" >
                        <Button
                        as={"a"}
                          size="md"
                          height="48px"
                          width="200px"
                          color="#585A19"
                          bg="white"
                          href="https://wa.me/+5514996294774"
                          target="_blank"
                          _hover={{ border: "2px solid #4F351E" }}
                          leftIcon={<BsWhatsapp color="#585A19" size="20px" />}
                        >
                          (14) 99629-4774
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          color="#585A19"
                          bg="white"
                          _hover={{ border: "2px solid #4F351E" }}
                          leftIcon={<MdEmail color="#585A19" size="20px" />}
                        >
                          hello@abc.com
                        </Button>
                        <Button
                        as={"a"}
                          size="md"
                          height="48px"
                          width="200px"
                          color="#585A19"
                          bg="white"
                          target={"_blank"}
                          _hover={{ border: "2px solid #4F351E" }}
                          href="https://www.instagram.com/izmcoachfilosofia/"
                          leftIcon={
                            <BsInstagram color="#585A19" size="20px" />
                          }
                        >
                          @izmcoachfilosofia
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          color="#585A19"
                          bg="white"
                          _hover={{ border: "2px solid #4F351E" }}
                          leftIcon={
                            <MdLocationOn color="#585A19" size="20px" />
                          }
                        >
                          Barra Bonita, SP
                        </Button>
                      </VStack>
                    </Box>
                    
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

function Footer() {
  return (
    <Flex
      bg={"#4F351E"}
      color={"#fff"}
      minH={"10vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid templateColumns={{ sm: "1fr", md: "2fr 3fr" }} spacing={8}>
          <Stack spacing={6}>
            <Flex alignSelf={{ base: "center", md: "start" }}>
              <Image src="./whitelogo.svg" />{" "}
            </Flex>
          </Stack>

          <Stack direction={{ base: "column", md: "row" }} spacing={6}>
            {NAV_ITEMS.map((navItem) => (
              <Flex
                key={navItem.label}
                display={"flex"}
                direction={{ base: "column", md: "row" }}
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
                      as="a"
                      m={5}
                      href={navItem.href ?? "#"}
                      fontSize={"sm"}
                      fontWeight={500}
                      color={"#fff"}
                      _hover={{
                        textDecoration: "none",
                      }}
                    >
                      {navItem.label}
                    </Link>
                  </PopoverTrigger>
                </Popover>
              </Flex>
            ))}
          </Stack>
        </SimpleGrid>
      </Container>
    </Flex>
  );
}

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
                as="a"
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
      bg={useColorModeValue("white", "#EFF1B9")}
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
    label: "COACH",
    href: "#coach",
  },
  {
    label: "FILOSOFIA CLÍNICA",
    href: "#filosofia",
  },
];

export default HOME;
