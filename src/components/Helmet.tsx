import Head from "next/head";
import { useRouter } from "next/router";

const pages: { [key: string]: string } = {
  "/": "Home",
};
export default function Helmet() {
  const router = useRouter();

  return (
    <Head>
      <title>{pages[router.pathname]}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}
