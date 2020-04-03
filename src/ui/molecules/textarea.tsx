import * as React from "react";
import { Box } from "@ui/layouts/box";
import { Text } from "@ui/atoms";
import { CustomElement } from "react-hook-form";

type TextareaProps = {
  name: string;
  errors: any;
  register: (
    ref: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | CustomElement | null
  ) => void;
};

export const Textarea = ({ name, errors, register }: TextareaProps) => (
  <>
    <textarea name={name} ref={register}></textarea>;
    {errors && (
      <Box pt={"xs"} pl={"xss"}>
        <Text color="#ce0000">{errors.type}</Text>
      </Box>
    )}
  </>
);
