import { list, simpleSlide } from "../presentation";

const extraReading = simpleSlide([
  <>
    <h1>Extra Reading</h1>
    {list(
      [
        [
          "React re-renders guide",
          "https://www.developerway.com/posts/react-re-renders-guide",
        ],
        ["Redux Style Guide", "https://redux.js.org/style-guide"],
        [
          [
            "While we don't use Redux, many of their best practices, and the rationale behind them apply to our Opine store as well",
          ],
        ],
      ].map(([title, url]) => (url ? <a href={url}>{title}</a> : title))
    )}
  </>,
]);

export default extraReading;
