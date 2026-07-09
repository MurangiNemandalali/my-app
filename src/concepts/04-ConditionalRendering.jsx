import { Counter } from "./03-Counter";

// Conditional Rendering
// Ternary operator in JSX
export function ConditionalRendering() {
  return <div>{5 > 4 ? <h1>Awesome</h1> : <Counter />}</div>;
}
