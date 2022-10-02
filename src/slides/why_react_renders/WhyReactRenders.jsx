/* eslint-disable react/jsx-key */
import React from "react";
import { Appear, Heading, Link, ListItem, Text } from "spectacle";

const WhyReactRenders = () => (
  <>
    <Heading>{"Why React Renders"}</Heading>
    {React.Children.toArray(
      [
        "Subscribed state changes",
        "Parent renders (not because props changed)",
      ].map((v) => (
        <Appear>
          <Text>
            <ListItem>{v}</ListItem>
          </Text>
        </Appear>
      ))
    )}
    <Appear>
      <Text>
        <ListItem>
          See{" "}
          <Link
            target="_blank"
            href="https://www.joshwcomeau.com/react/why-react-re-renders/"
          >
            Why React Renders
          </Link>{" "}
          For more detail
        </ListItem>
      </Text>
    </Appear>
  </>
);

export default WhyReactRenders;
