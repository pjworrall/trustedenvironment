const $rdf = require("rdflib");


const store = new $rdf.IndexedFormula; // or const store  = $rdf.graph();

const me = store.sym('https://example.com/alice/card#me');

const profile = me.doc();       //i.e. store.sym(''https://example.com/alice/card#me')

const VCARD = new $rdf.Namespace("http://www.w3.org/2006/vcard/ns#");

store.add(me, VCARD("fn"),'John Bloggs', profile);

let name = store.any(me, VCARD('fn'), null, profile);

console.log("fn: " + name);



