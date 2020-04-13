import * as React from "react";
import { Header } from "@features/shared/header";
import { Box } from "@ui/layouts/box";
import { H2 } from "@ui/atoms";
import { MainTempalte } from "@ui/templates/main-template";

export const HomePage = () => (
  <MainTempalte
    header={<Header />}
    main={
      <Box>
        <H2>paygo</H2>
        <H2>paygo</H2>
        <H2>paygo</H2>
        <H2>paygo</H2>
        <H2>paygo</H2>
      </Box>
    }
  />
);
