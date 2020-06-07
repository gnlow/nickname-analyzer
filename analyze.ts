import _ from "https://deno.land/x/deno_lodash/mod.ts";
const { groupBy, mapValue } = _
import nicknames from "./nicknames.js";

const tester = (x: string) => 
    [
        "Initial + Birth",
        "String + Birth",
        "String + Number",
        "Other",
    ][
        [
            /^[a-z]{3}(?:0[1-9]|1[012])(?:0[1-9]|[12][0-9]|3[01])$/,
            /^[a-z]+(?:0[1-9]|1[012])(?:0[1-9]|[12][0-9]|3[01])$/,
            /^[a-z]+\d+$/,
            /.+/,
        ].findIndex(regex => regex.exec(x))
    ]

console.log([...Object.entries( mapValue(groupBy(nicknames, tester), (y: []) => y.length) )].map(x => x.join(",")).join("\n") )