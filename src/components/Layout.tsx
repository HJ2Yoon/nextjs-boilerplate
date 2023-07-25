import { PropsWithChildren } from "react";
import Helmet from "./Helmet";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Helmet />
      {children}
    </>
  );
}
