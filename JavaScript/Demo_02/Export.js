/**
 * Exported modules are always in stric mode
 */

// Default export
export default defaultExport = () => {
  console.log("Export default");
};

// Name export
export const constExport = () => {
  console.log("Const export");
};

const namedExport = () => {
  console.log("Named export");
};

// Renaming export
export { namedExport as renamedExport };

const foo = "foo";
const bar = "bar";
const foobar = "foobar";

export { foo, bar, foobar };
