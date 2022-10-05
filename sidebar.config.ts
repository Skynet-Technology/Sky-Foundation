import { ElementType } from "react"
import { AiOutlineCompass } from "react-icons/ai"
import { HiOutlineViewGrid } from "react-icons/hi"

type SidebarItem =
  | {
      type: "category"
      icon?: ElementType
      id: string
      label: string
      collapsible?: boolean
      collapsed?: boolean
      items: SidebarItem[]
    }
  | {
      type: "doc"
      id: string
      label: string
      new?: boolean
      href?: string
    }
  | {
      type: "link"
      id: string
      label: string
      href: string
    }

const sidebar: Record<"docs", SidebarItem[]> = {
  docs: [
    {
      type: "category",
      label: "Overview",
      icon: AiOutlineCompass,
      id: "overview",
      items: [
        { type: "doc", label: "Introduction", id: "introduction" },
        { type: "doc", label: "Services", id: "installation" },
        { type: "doc", label: "FAQ", id: "faq" },
      ],
    },
  ],
}
//
export default sidebar