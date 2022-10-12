import { simpleSlide } from "crispy-presentation";

const table = [
  {
    name: "State location",
    atomic: "component-tree",
    context: "component-tree",
    monolithic: "external",
  },
  {
    name: "Recommended for",
    atomic: "Small applications",
    context: "Special use-cases",
    monolithic: "Medium to large applications",
  },
  {
    name: "Debugging tools",
    atomic: "Medium",
    context: "Weak",
    monolithic: "Very strong",
  },
  {
    name: "Render optimization",
    atomic: "Ensure atoms are appropriately broken up",
    context: "Poor. Ensure providers are broken up, but this gets messy",
    monolithic: "Ensure your selector functions only select what is necessary",
  },
];

const comparison = simpleSlide([
  <>
    <h1>Comparison</h1>
    <table>
      <tr>
        <th />
        <th>Context</th>
        <th>Atomic</th>
        <th>Monolithic</th>
      </tr>
      {table.map((item) => (
        <tr>
          <td>{item.name}</td>
          <td>{item.context}</td>
          <td>{item.atomic}</td>
          <td>{item.monolithic}</td>
        </tr>
      ))}
    </table>
  </>,
]);

export default comparison;
