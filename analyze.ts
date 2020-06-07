import _ from "https://deno.land/x/deno_lodash/mod.ts";
const { groupBy, mapValue } = _
import nicknames from "./nicknames.js";

const tester = (x: string) => 
    /^[a-z]+(\d+)$/.exec(x) && (<RegExpExecArray>/^[a-z]+(\d+)$/.exec(x))[1].length

console.log([...Object.entries( mapValue(groupBy(nicknames, tester), (y: []) => y.length) )].map(x => x.join(",")).join("\n") )