import * as React from "react";

import { useAllCoffee } from "../../providers/AllCoffee";
import { Card } from "../../components/Card";
import { Flex } from "../../components/common/layout";

export const Home: React.FC = () => {
  const { coffee } = useAllCoffee();
  return (
    <Flex as="main" flexDirection="column" padding="xl" flex="1">
      <Flex flexWrap="wrap" alignItems="flexStart">
        {coffee.map((brew) => (
          <Card key={brew.id}>
            <Card.Image type={brew.img} alt={`${brew.name} coffee bag`} />
            <Card.Content>
              <Card.Heading>{brew.name}</Card.Heading>
              <Card.Body>{brew.flavorProfile}</Card.Body>
              <Card.Detail>
                ${brew.price} | {brew.bagWeight} oz.
              </Card.Detail>
            </Card.Content>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};
