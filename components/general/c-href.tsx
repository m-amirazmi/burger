import NextLink from "next/link";
import { Link as CLink, LinkProps } from "@chakra-ui/react";

export default function Link(props: LinkProps) {
  return <CLink as={NextLink} {...props} />;
}
