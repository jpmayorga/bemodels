import {
  Box,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BM+</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        bg="white"
        w="100%"
        height="54px"
        boxShadow="sm"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading size="md" color="gray.600" fontWeight="extrabold">
          BM+
        </Heading>
      </Box>
      <Box w={{ base: "100%", lg: "600px" }} margin="auto">
        <img
          width="100%"
          src="https://scontent.fltx1-1.fna.fbcdn.net/v/t1.6435-9/162755073_132119145582873_3481728711598010053_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeGitQiXlV5eqIGuOii376vrdcsY-GwFC4R1yxj4bAULhD7tS3QkSNNVEV3vLGn-qRCldHfXSzGnmqloG0ybXTWA&_nc_ohc=LCdmw7fLqtoAX_G5pjs&_nc_ht=scontent.fltx1-1.fna&oh=00_AT_lYK9kjifvizPFqD6jwqeyoqqrKMyl0sOKeSLQ-6YX3Q&oe=621FAEB9"
        />
      </Box>
      <Box w={{ base: "100%", lg: "600px" }} margin="auto" px={4} my={8}>
        <Heading as="h1" size="md" color="gray.600" mb="2">
          Be Models Ecuador
        </Heading>
        <Text as="p" textAlign="justify" fontSize="sm" color="gray.400" mb="4">
          Somos una productora encargada de formar a su propio equipo de modelos
          para trabajar en nuestra propias producciones y que puedan
          desenvolverse de manera independiente con otras marcas, el rango de
          edad de los participantes es de 14 a 25 años en caso de ser menor de
          edad deberá contar con autorización de sus representantes, el programa
          presenta diciplinas como fotografía, modelaje, actuación, baile y
          video con la misión de formar y empoderar a los jóvenes a través de
          estas diciplinas.
        </Text>

        <Heading as="h1" size="md" color="gray.600" mb="4">
          Preguntas frecuentes
        </Heading>

        <Accordion allowMultiple allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  ¿Quiénes somos?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text as="p" textAlign="justify" fontSize="sm" color="gray.400">
                Somos una empresa creadora de contenido audiovisual. Fotografía
                y video en producciones personales y de empresas. Años de
                trayectoria nos avalan con una vasta experiencia en producción
                de casting y búsqueda de modelos, actores y personajes, dentro
                de todo el Ecuador. Gracias al scouting permanente de nuevos
                rostros contamos con nuevos y exclusivos modelos para aportar en
                diferentes producciones.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" color="gray.600">
                  ¿Cuál es el objetivo del proyecto?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text as="p" textAlign="justify" fontSize="sm" color="gray.400">
                Nuestro objetivo es encontrar, formar y promocionar el talento
                de jóvenes bailarines, cantantes, actores y modelos en el
                desarrollo de producciones en general a través de nuestros
                talleres/casting por ciudad. Además, como marca se busca
                establecer su staff de artistas y modelos seleccionando de entre
                los participantes a su equipo oficial de modelos.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" color="gray.600">
                  ¿Los vestuarios de las producciones los facilita la marca?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text as="p" textAlign="justify" fontSize="sm" color="gray.400">
                El vestuario para los talleres/casting por ciudad es facilitado
                por el participante en su totalidad, mientras que las
                producciones con el equipo oficial seleccionado vienen
                auspiciadas por la marca en un 50%.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" color="gray.600">
                  ¿Cuál es el costo de ingreso?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text as="p" textAlign="justify" fontSize="sm" color="gray.400">
                El costo de participación en los talleres/casting por ciudad
                tiene un costo de 40$. Una vez seleccionado como parte del
                equipo oficial la participación no tiene ningún costo.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" color="gray.600">
                  ¿Dónde están ubicados?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text as="p" textAlign="justify" fontSize="sm" color="gray.400">
                Nuestra sede oficial está ubicada en la ciudad de Baños. En el
                Barrio El Recreo. Av. Amazonas. Junto a la academia de baile
                “Optimus Dance Studio” Las reuniones por ciudad varían según su
                disponibilidad.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" color="gray.600">
                  ¿Desde que edad es permitido el ingreso?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text as="p" textAlign="justify" fontSize="sm" color="gray.400">
                Be Models cuenta con dos programas: infantil y juvenil
                <br />
                - Programa Kids (No disponible por el momento)
                <br />
                6 a 13 años <br />
                <br />
                - Programa Teen (Aperturado)
                <br /> 14 a 25 años
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" color="gray.600">
                  ¿Cuáles son los horarios que manejan?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text as="p" textAlign="justify" fontSize="sm" color="gray.400">
                Los encuentros por ciudad constan de tres sesiones. Dos en línea
                y una presencial.
                <br />
                <br />
                - Martes y jueves a las 17h00 en línea
                <br />
                - Sábados de 9 a 12h00 Presencial
                <br />
                <br />
                Las fechas varían según la ciudad
                <br />
                El equipo Oficial maneja producciones en horarios diferentes
                según su disponibilidad.
                <br />
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" color="gray.600">
                  En caso de ser escogida como pate del Equipo Oficial, ¿cuáles
                  serían los beneficios?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text as="p" textAlign="justify" fontSize="sm" color="gray.400">
                En caso de ser seleccionado como parte del equipo oficial tienes
                acceso a la formación y promoción personalizada por parte de
                nuestro equipo. <br />
                Desarrollo de contenido para tu portafolio personal. <br />
                Imagen Oficial de la marca a nivel nacional.
                <br />
                Descuento de participación en el Campamento nacional a
                realizarse en Julio.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" color="gray.600">
                  ¿En qué áreas nos capacitan?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text as="p" textAlign="justify" fontSize="sm" color="gray.400">
                Las áreas a capacitarse son múltiples, pero en esencia nos
                enfocamos en tres: baile, modelaje, expresión corporal. Además,
                se trabaja en el empoderamiento personal, autoestima, misión y
                visión de vida.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" color="gray.600">
                  ¿Que obtenemos al finalizar la experiencia?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text as="p" textAlign="justify" fontSize="sm" color="gray.400">
                Al finalizar la experiencia por ciudad los participantes
                <br />
                - Reconocen sus habilidades y las potencializan mediante los
                talleres formativos.
                <br />
                - Reciben el contenido realizado con ellos durante la
                experiencia. Fotografía individual y en grupo. Videos de
                participación.
                <br />
                - Certificado de participación
                <br />
                <span>
                  - Descuento de participación en el campamento nacional “Be
                  Camp 2022”
                </span>
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </div>
  );
};

export default Home;
