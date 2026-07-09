// Named

// Style of Named - ❌
// export const dbl = (n) => n * 2;
// export const secret = "Don't say this to anyone";

const dbl = (n) => n * 2;
const secret = "Don't say this to anyone";

// Named export - At the bottom - ✅
export { dbl, secret };

// Both live together
export default function sum(a, b) {
  return a + b;
}
