// Task 2.1
// If rating is 8 or more (green) otherwise (red)

export function ConditionalStyling() {
  // Must be object & Key camelCase
  // Conditional Styling - Dynamic styling
  const styles = {
    fontSize: 5 < 4 ? "5rem" : "2rem",
    color: "crimson",
  };

  // inline style
  return <h1 style={styles}>This is fun</h1>;
}
