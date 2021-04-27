import * as React from "react";

import { Box, BoxProps } from "./common/primitives/Box";

export const Sidebar: React.FC = ({ children, ...props }: BoxProps) => {
  return (
    <Box
      as="aside"
      minWidth={400}
      borderRight="solid 1px"
      borderRightColor="soap400"
      padding="xl"
    >
      {children}
    </Box>
  );
};
