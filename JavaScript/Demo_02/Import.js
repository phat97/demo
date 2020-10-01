import defaultImport from "Export";
import { constExport } from "Export";
import { renamedExport } from "Export";
import { foo, bar, foobar as barfoo } from "./Export;";

defaultImport();
constExport();
renamedExport();
console.log(`${foo} ${bar} ${barfoo}`);
