const baseConfig = {
  repo: "https://github.com/skynet-technology/sky-foundation",
  title: "Sky Foundation - Building and providing tools that empower!",
  description:
    "We help church's, christians and people around the world by empowering them!",
  url: "https://skyfoundation.ml",
}

const siteConfig = {
  ...baseConfig,
  projectName: "Sky-Foundation",
  copyright: `Copyright &copy; ${new Date().getFullYear()}`,
  openCollective: {
    url: "https://opencollective.com/chakra-ui",
  },
  author: {
    name: "Sky Foundation",
    github: "https://github.com/skynet-technology",
    twitter: "#",
    linkedin: "#",
    email: "skynet@skiff.com",
  },
  repo: {
    url: "https://github.com/skynet-technology/sky-foundation",
    editUrl: `${baseConfig.repo}/edit/main/data`,
    blobUrl: `${baseConfig.repo}/blob/main`,
  },
  discord: {
    url: "https://discord.gg/43h2FhdfM9",
  },
  seo: {
    title: baseConfig.title,
    titleTemplate: "%s - Sky Foundation",
    description: baseConfig.description,
    siteUrl: baseConfig.url,
    twitter: {
      handle: "#",
      site: baseConfig.url,
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: baseConfig.url,
      title: baseConfig.title,
      description: baseConfig.description,
      site_name: baseConfig.title,
      images: [
        {
          url: `${baseConfig.url}/open-graph/website.png`,
          width: 1240,
          height: 480,
        },
        {
          url: `${baseConfig.url}/open-graph/twitter.png`,
          width: 1012,
          height: 506,
        },
      ],
    },
  },
}

export default siteConfig
