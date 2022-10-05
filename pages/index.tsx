import Icon from "@chakra-ui/icon"
import {
  Box,
  Center,
  Circle,
  Flex,
  HStack,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { Button } from "components/button"
import { CodeArea } from "components/code-area"
import { Footer } from "components/footer"
import {
  AccessibilityIcon,
  ArrowRightIcon,
  CheckIcon,
  FrameworkAgnosticIcon,
  PlayIcon,
  ReactIcon,
  SolidIcon,
  StatechartIcon,
  VueIcon,
} from "components/icons"
import { Illustration } from "components/illustration"
import { MultiframeworkTabs } from "components/mutli-framework"
import { TopNavigation } from "components/top-navigation"
import { NextSeo } from "next-seo"
import Image from "next/image"
import Link from "next/link"
import { ElementType } from "react"
import siteConfig from "site.config"

type FeatureItemProps = {
  title: string
  icon: ElementType
  children: string
}

function FeatureItem(props: FeatureItemProps) {
  const { title, children, icon } = props
  return (
    <Box fontSize="lg">
      <Icon as={icon} fontSize="6xl" />
      <Box mt="4">
        <Text fontWeight="bold">{title}</Text>
        <Text mt={2}>{children}</Text>
      </Box>
    </Box>
  )
}

export default function Home() {
  return (
    <Box>
      <NextSeo title={siteConfig.title} />

      <TopNavigation />

      <Box as="header" position="relative">
        <Box layerStyle="contain">
          <Box pos="relative" maxW="4xl" pt={{ base: "16", md: "24" }}>
            <chakra.h1 textStyle="display.2xl">
            We build and provide tools that empower! 
            </chakra.h1>
            <chakra.p
              className="has-highlight"
              textStyle="text.xl"
              maxW="xl"
              mt="6"
            >
              We help <mark>church's</mark>, <mark>christians</mark> and <mark>people</mark> around the world by empowering them!{" "}
            </chakra.p>
          </Box>

          <chakra.svg
            display={{ base: "none", md: "initial" }}
            as={Illustration}
            pos="absolute"
            bottom="0"
            right="0"
            width="min(50%,48vw)"
            height="auto"
          />

          <Stack
            direction={{ base: "column", sm: "row" }}
            mt="8"
            mb="12"
            spacing="5"
          >
            <Link href="/overview/introduction" passHref>
              <Button as="a" variant="green">
                <HStack spacing="6">
                  <span>Get Started</span>
                  <Icon as={ArrowRightIcon} />
                </HStack>
              </Button>
            </Link>
            <Button hidden>
              <HStack spacing="2">
                <Icon as={PlayIcon} />
                <span>Watch Demo</span>
              </HStack>
            </Button>
          </Stack>
        </Box>
      </Box>

      <Box
        as="section"
        bg={{ base: "green.100", md: "unset" }}
        layerStyle="contain"
        my={{ base: "20", md: "32" }}
      >
        <Box bg="green.100" px={{ md: "20" }} py={{ base: "10", md: "20" }}>
          <chakra.h2 textStyle="display.xl" mb="8" maxW="24ch">
            Sky provides tools and services to empower churches!
          </chakra.h2>

          <Link href="/overview/introduction" passHref>
            <Button as="a" variant="black" width={{ base: "full", md: "auto" }}>
              Get Started
            </Button>
          </Link>

          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: "8", lg: "20" }}
            mt="12"
          >
            <FeatureItem icon={StatechartIcon} title="Social Media">
              We connect and grow your socials to a whole new height!
            </FeatureItem>
            <FeatureItem icon={AccessibilityIcon} title="Development">
              We build and maintain websites // applications for your church or community
            </FeatureItem>
            <FeatureItem
              icon={FrameworkAgnosticIcon}
              title="Growth"
            >
              We grow your presence across multiple channel and manage your missionary // community
            </FeatureItem>
          </Stack>
        </Box>
      </Box>

      <Box as="section" my={{ base: "20", md: "32" }} layerStyle="contain">
        <Flex
          gap="64px"
          direction={{ base: "column", xl: "row" }}
          align={{ base: "flex-start", xl: "center" }}
        >
          <Box flex="1">
            <chakra.h2 mb="8" maxW="24ch" textStyle="display.xl">
              We handle everything, so sit-back and chill!
            </chakra.h2>
            <chakra.p maxW="64ch" fontSize="lg">
              Our team of experts manage your missionary // community, no matter the size - we always deliver!
            </chakra.p>

            <List spacing="5" mt="8" fontSize="lg">
              {[
                "Affordable",
                "Breakthrough-Quality",
                "Growth",
              ].map((item, index) => (
                <ListItem key={index} display="flex" alignItems="flex-start">
                  <ListIcon fontSize="3xl" mr="2" as={CheckIcon} />
                  <span>{item}</span>
                </ListItem>
              ))}
            </List>
          </Box>

          <Center
            position="relative"
            width="full"
            maxW={{ xl: "800px" }}
            minHeight="500px"
          >
            <Box
              width="full"
              mx="auto"
              height="84%"
              position="absolute"
              bg="green.400"
              rounded="2xl"
            />
            <Box
              width={{ base: "full", xl: "max(640px,80%)" }}
              mx="auto"
              bg="white"
              rounded="2xl"
              shadow="base"
              height="full"
              position="relative"
            >
              <CodeArea slug="website/snippet" />
            </Box>
          </Center>
        </Flex>
      </Box>

      <Box as="section" my="10" layerStyle="contain">
        <Box maxW="72ch" mx="auto">
          <chakra.h2 textStyle="display.xl" mb="10">
            Empowering and growing, together!
          </chakra.h2>
          <chakra.div fontSize="md" className="x">
            Today, a lot of communities struggle with growth and some are losing hope
            <br /> <br />
            That's where sky foundation, brides the gap between your communtiy and success
            by providing tools that will empower and grow it for a global impact. 
            <chakra.blockquote
              layerStyle="blockquote"
              fontWeight="semibold"
              borderLeft="2px"
              borderLeftColor="green.500"
            >
              We don't just provide tools that empower you in the short-term, but we do it for an everlasting
              impact
            </chakra.blockquote>
            The best part? we manage // create almost everything you would need for the future for your church // 
            community in an affordable package :D 
            <br /> <br />
            So, don't worru - leave everything to us, while you can just sit, chill, maybe take a cup of coffee and
            see the growth you always wanted!
            <br /> <br />
            <mark>
              Welcome to the future of communties!
            </mark>
          </chakra.div>

          <HStack mt="10" spacing="4">
            <Circle overflow="hidden" bg="gray.100">
              <Image
                src="/segun-adebayo-headshot.png"
                width="64px"
                height="64px"
                alt="Segun Adebayo"
              />
            </Circle>
            <Stack spacing="1">
              <chakra.h3 fontSize="lg" fontWeight="semibold">
                Solomon Shalom Lijo
              </chakra.h3>
              <chakra.p fontSize="md" textStyle="text.sm">
                Co-Founder and CTO
              </chakra.p>
            </Stack>
          </HStack>
        </Box>
      </Box>

      <Box
        as="section"
        bg={{ base: "green.100", md: "unset" }}
        layerStyle="contain"
        my={{ base: "20", md: "32" }}
      >
        <Box bg="green.100" px={{ md: "20" }} py={{ base: "10", md: "20" }}>
          <chakra.h2 textStyle="display.xl" mb="8" maxW="24ch">
            What are you waiting for? Schedule a call!
          </chakra.h2>

          <Stack direction={{ base: "column", sm: "row" }} spacing="5">
            <Link href="/overview/introduction" passHref>
              <Button
                as="a"
                variant="black"
                width={{ base: "full", md: "auto" }}
              >
                Get Started
              </Button>
            </Link>

            <Button hidden width={{ base: "full", md: "auto" }}>
              <HStack spacing="2">
                <Icon as={PlayIcon} />
                <span>Watch Demo</span>
              </HStack>
            </Button>
          </Stack>
        </Box>
      </Box>

      <Footer />
    </Box>
  )
}
