'use client'

import { useViewTransitionApiIfIsCompatible } from "@/libs/transitions"
import { useEffect } from "react"

export const ViewTransitionApi = () => {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useViewTransitionApiIfIsCompatible()
  }, [])
  return null
}