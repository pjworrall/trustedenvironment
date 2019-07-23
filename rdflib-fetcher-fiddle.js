const $rdf = require("rdflib");

const store = $rdf.graph();
const stuff = store.sym('https://github.com/pjworrall/trustedenvironment/blob/master/root-ontology.ttl/').doc();
const RDFS = new $rdf.Namespace('http://www.w3.org/2000/01/rdf-schema#');

const fetcher =new $rdf.Fetcher(store);

fetcher.load(profile).then(response => {
    let name = store.any(me, RDFS(‘label’));
    console.log(`Loaded {$name || ‘wot no name?’}`);
}, err => {
    console.log(“Load failed “ +  err);
});

