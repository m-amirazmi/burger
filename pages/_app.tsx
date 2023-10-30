import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ILayout } from "@/utils/types";
import LayoutMain from "@/components/layouts/layout-main";
import LayoutAdmin from "@/components/layouts/layout-admin";
import LayoutWrapper from "@/components/layouts/layout-wrapper";

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const LayoutComponent = getLayout(asPath, layouts);

  return (
    <ChakraProvider>
      <LayoutWrapper>
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </LayoutWrapper>
    </ChakraProvider>
  );
}

type Layouts = Record<string, React.FunctionComponent<ILayout>>;

const layouts: Layouts = {
  default: LayoutMain,
  admin: LayoutAdmin,
};

const getLayout = (path: string, l: Layouts) => {
  const layoutFromPath = path.split("/")[1];
  return l[layoutFromPath] ? l[layoutFromPath] : l["default"];
};
