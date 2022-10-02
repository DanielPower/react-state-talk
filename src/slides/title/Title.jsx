/* eslint-disable react/jsx-key */
import React from "react";
import { Appear, Heading, ListItem, Text } from "spectacle";

const Title = () => (
  <>
    <Heading>{"Dan's React State Talk"}</Heading>
    {React.Children.toArray(
      [
        "Why React Renders",
        "Component State (useState)",
        "Dependency Injection (useContext)",
        "Atomic Global State (jotai, reactiveVars)",
        "Action / Reducer based Global State (Zustand, Redux)",
      ].map((v) => (
        <Appear>
          <Text>
            <ListItem>{v}</ListItem>
          </Text>
        </Appear>
      ))
    )}
  </>
);

export default Title;
