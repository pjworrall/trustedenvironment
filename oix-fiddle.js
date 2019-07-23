// not working, don't know why.

const sf = require("./lib/sparql-fiddle.js"); // or browser equivalent

let fiddle = {
    data  : "https://github.com/pjworrall/trustedenvironment/blob/master/root-ontology.ttl",
    query : "SELECT ?s ?o ?p WHERE {?s ?o ?p .}",
    wanted : "HTML"
};

sf.run(fiddle).then( results => {
    console.log(results)
}, err => console.log(err) );

