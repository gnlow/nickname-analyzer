import _ from "https://deno.land/x/deno_lodash/mod.ts";
const { groupBy, mapValue } = _
import nicknames from "./nicknames.js";

console.log(Object.values( mapValue(groupBy(nicknames, (x: string) => x.length), (y: []) => y.length) ).join("\n") )