import { list, simpleSlide } from "crispy-presentation";
import styled from "styled-components";
import Mermaid from "../mermaid";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const limitationsOfUseState = simpleSlide(
  [
    <h1>Limitation of useState</h1>,
    ...list([
      "useState values must be shared manually between components",
      [
        "If a value must be read by a deeply nested child, it must be passed through each component in-between",
        [
          "Even if none of the children in-between use that value",
          "More difficult to read, components need to handle data that is unrelated to them",
        ],
        "State may only be passed down the tree.",
        [
          "If cousin components require the same state, it must be hoisted to the nearest parent",
        ],
        "State setters must also be manually passed this way",
        'This results in a pattern known as "Prop Drilling"',
      ],
    ]),
    <>
      <h1>Prop Drilling</h1>
      <Row>
        <img src="banana_hat.png" style={{ height: "25rem" }} />
        <Mermaid>{`
      graph TD;
        StorePage--setItemsInCart-->MainContent;
        StorePage--itemsInCart-->TopBar;
        TopBar--itemsInCart-->CartIcon;
        CartIcon--itemsInCart-->CartItemsIndicator;
        MainContent--setItemsInCart-->ItemListing;
        ItemListing--setItemsInCart-->BuyNowButton;
    `}</Mermaid>
      </Row>
    </>,
  ],
  ["If time allows, maybe show Drive as an example"]
);

export default limitationsOfUseState;
