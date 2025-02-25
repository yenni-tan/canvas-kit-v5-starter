import * as React from 'react';
import styled from '@emotion/styled';
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';
// import {Box, BoxProps} from '@workday/canvas-kit-labs-react/common';
// import locally until Box is in v5
import {Box, BoxProps} from '../primitives/Box';

import {flex, FlexProps as FlexBaseProps} from './utils/flex';

export type FlexProps = StyledType & BoxProps & FlexBaseProps;

const StyledFlex = styled(Box)<FlexProps>(
  {
    display: 'flex',
  },
  flex
);

/**
 * `Flex` is a low-level layout component that provides a common, ergonomic API for applying CSS flexbox styles.
 * It is highly flexible, and can be used on its own or to build other components. `Flex` is built on top of `Box` and has access to all `BoxProps`.
 *
 * @example
 * import { Flex, FlexProps } from '@workday/canvas-kit-labs-react/layout';
 *
 * interface CardProps extends FlexProps {
 *   // card-specific props
 * }
 *
 * // `Card`'s default values are set using `FlexProps`
 * const Card = (props: CardProps) => (
 *   <Flex flexDirection="column" alignItems="flex-start" depth={2} space="m" {...props}>
 *     <h1>Hello, Card!</h1>
 *     <p>This card uses flexbox to set its layout.</p>
 *   </Flex>
 * );
 *
 */
export const Flex = createComponent('div')<FlexProps>({
  displayName: 'Flex',
  Component: ({children, ...elemProps}: FlexProps, ref, Element) => {
    return (
      <StyledFlex as={Element} ref={ref} {...elemProps}>
        {children}
      </StyledFlex>
    );
  },
});
