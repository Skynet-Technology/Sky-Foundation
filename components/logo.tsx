import React from "react"
import { chakra, HTMLChakraProps } from "@chakra-ui/system"
import { useRouter } from "next/router"
import Link from "next/link"

export function Logo(props: HTMLChakraProps<"svg">) {
  return (
    <chakra.svg
      width="377"
      height="133"
      viewBox="0 0 377 133"
      fill="none"
      {...props}
    >
      <path
        d="M243.68 67.7895L310.68 13.0287L265.18 112L369.68 7"
        stroke="#00C65E"
        strokeWidth="19"
      />
    </chakra.svg>
  )
}

export function LogoWithLink() {
  const { asPath } = useRouter()
  return (
    <Link href="/" passHref>
      <a
        aria-label="Go to Sky Foundation homepage"
        aria-current={asPath === "/" ? "page" : undefined}
      >
        <Logo color="#000" height="8" />
      </a>
    </Link>
  )
}
