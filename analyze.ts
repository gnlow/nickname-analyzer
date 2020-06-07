import _ from "https://deno.land/x/deno_lodash/mod.ts";
const { groupBy, mapValue } = _
import nicknames from "./nicknames.js";

const tester = (x: string) => 
    !!( /^[a-z]+((19\d|20[01])\d)$/.exec(x) )

console.log([...Object.entries( mapValue(groupBy(nicknames, tester), (y: []) => y.length) )].map(x => x.join(",")).join("\n") )