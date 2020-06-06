import _ from "https://deno.land/x/deno_lodash/mod.ts";
const { groupBy, mapValue } = _
import nicknames from "./nicknames.js";

const tester = (x: string) => 
    [
        "String + Number",
        "Number + String",
        "String",
        "Number",
        "Other",
    ][
        [
            /^[a-z]+\d+$/,
            /^\d+[a-z]+$/,
            /^[a-z]+$/,
            /^\d+$/,
            /.+/,
        ].findIndex(regex => regex.exec(x))
    ]

console.log([...Object.entries( mapValue(groupBy(nicknames, tester), (y: []) => y.length) )].map(x => x.join(",")).join("\n") )