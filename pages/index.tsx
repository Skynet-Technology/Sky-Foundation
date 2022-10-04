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

          <HStack spacing="12">
            <ReactIcon />
            <VueIcon />
            <SolidIcon />
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
            The better way to model component logic
          </chakra.h2>
          <chakra.div fontSize="md" className="x">
            Today, design systems are becoming a very popular toolkit for
            companies to create a cohesive and accessible user experience for
            their customers.
            <br /> <br />
            With the rise of component-driven development, there's an endless
            re-implementation of common widgets (tabs, menu, etc.) in multiple
            frameworks. These implementations tend to grow in complexity over
            time and often become hard to understand, debug, improve, or test.
            <chakra.blockquote
              layerStyle="blockquote"
              fontWeight="semibold"
              borderLeft="2px"
              borderLeftColor="green.500"
            >
              We need a better way to model component logic.
            </chakra.blockquote>
            <mark>Zag is a new approach</mark> to the component design process,
            designed to help you avoid re-inventing the wheel and build better
            UI components regardless of framework. Heavily inspired by XState,
            but built to make it easier to maintain, test, and enhance.
            <br /> <br />
            With Zag, we're abstracting the complex logic for many components
            into a cohesive, framework-agnostic system — giving you complete
            control over styling and providing a thin adapter for your favorite
            framework.
            <br /> <br />
            <mark>
              Welcome to the future of building interactive components!
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
                Segun Adebayo
              </chakra.h3>
              <chakra.p fontSize="md" textStyle="text.sm">
                Creator of Zag.js
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
