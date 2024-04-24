// Personal website for Alexander Hamilton
import { Box, Flex, Heading, Text, Image, Link, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaBirthdayCake, FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
        <VStack align="left" spacing={4}>
          <Heading as="h1" size="xl">
            Alexander Hamilton
          </Heading>
          <Text fontSize="lg">Economist, Political Philosopher, Former U.S. Secretary of the Treasury</Text>
          <HStack spacing={2}>
            <Icon as={FaBirthdayCake} />
            <Text>January 11, 1755</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaMapMarkerAlt} />
            <Text>New York, NY</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaEnvelope} />
            <Link href="mailto:alexander.hamilton@example.com">alexander.hamilton@example.com</Link>
          </HStack>
        </VStack>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBbGV4YW5kZXIlMjBIYW1pbHRvbiUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMzk1MzI2OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Alexander Hamilton" />
      </Flex>
      <Box mt={10}>
        <Heading as="h2" size="lg">
          Biography
        </Heading>
        <Text mt={4}>Alexander Hamilton was a Founding Father of the United States, chief staff aide to General George Washington, one of the most influential interpreters and promoters of the U.S. Constitution, the founder of the nation's financial system, and the founder of the first American political party.</Text>
        <Text mt={4}>As the first Secretary of the Treasury, Hamilton was the main author of the economic policies of the administration of President George Washington. He took the lead in the funding of the states' debts by the Federal government, the establishment of a national bank, a system of tariffs, and friendly trade relations with Britain. His vision included a strong central government led by a vigorous executive branch, a strong commercial economy, with a national bank and support for manufacturing, and a strong military.</Text>
      </Box>
      <Box mt={10}>
        <Heading as="h2" size="lg">
          Connect with Me
        </Heading>
        <HStack spacing={4} mt={4}>
          <Link href="https://www.linkedin.com/in/alexander-hamilton" isExternal>
            <Icon as={FaLinkedin} w={6} h={6} />
          </Link>
          <Link href="https://twitter.com/alexhamilton" isExternal>
            <Icon as={FaTwitter} w={6} h={6} />
          </Link>
          <Link href="https://github.com/alexhamilton" isExternal>
            <Icon as={FaGithub} w={6} h={6} />
          </Link>
        </HStack>
      </Box>
      <Box mt={10}>
        <Heading as="h2" size="lg">
          Projects
        </Heading>
        <VStack mt={4} spacing={4}>
          <Box>
            <Heading as="h3" size="md">Federalist Papers</Heading>
            <Text>A series of 85 articles and essays written by Alexander Hamilton, James Madison, and John Jay promoting the ratification of the United States Constitution.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="md">The Bank of New York</Heading>
            <Text>Founded by Alexander Hamilton, this was the first company to be listed on the New York Stock Exchange and is one of the oldest banks in the United States.</Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Index;
