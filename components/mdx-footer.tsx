import { Box } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import siteConfig from "site.config"
import { Pagination } from "./pagination"

export function MdxFooter() {
  return (
    <chakra.footer mt="12">
      <Pagination />
      <Box
        pt="10"
        borderTopWidth="1px"
        display={{ sm: "flex" }}
        justifyContent="space-between"
      >
        <Box fontSize="sm" mb={{ base: "6", sm: "0" }}>
          <p>
            Proudly made in
            <chakra.span role="img" aria-label="India" mx="2">
              IN
            </chakra.span>
            by Solomon Shalom Lijo
          </p>
        </Box>
      </Box>

      <Box
        fontSize="sm"
        mt="4"
        mb="28"
        opacity={0.5}
        dangerouslySetInnerHTML={{ __html: siteConfig.copyright }}
      />
    </chakra.footer>
  )
}
