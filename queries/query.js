// adapted from Bob DuCharmes example at http://www.snee.com/bobdc.blog/2018/01/javascript-sparql.html


// Utility function for outputting SELECT results
function outputSPARQLResults(results) {
    for (row in results) {
        printedLine = '';
        for (column in results[row]) {
            printedLine = printedLine + results[row][column].value + ' '
        }
        console.log(printedLine)
    }
}

// Create an rdfstore
let rdfstore = require('rdfstore');

// Define a query to execute.

let varListContents = 'SELECT ?s ?o ?p \
        FROM <g1> WHERE { ?s ?o ?p } ' ;


rdfstore.create(function(err, store) {   // no error handling

    store.execute(
        // Load from OIX triplestore into named graph g1 in the rdfstore.
        'LOAD <https://ontologies.interition.info/root-ontology.ttl> \
        INTO GRAPH <g1>', function(err) {

            if(err) {
                console.log('error loading from source: ' + err);
            } else {
                store.setPrefix('oixg','http://openidentityexchange.com/ns/data#');
                store.setPrefix('rdfs', 'http://www.w3.org/2000/01/rdf-schema#');
                store.setPrefix('owl','http://www.w3.org/2002/07/owl#');
                store.setPrefix('mdmp','https://ontology.openidentityexchange.org/riskmodel#');
                store.setPrefix('oix','https://www.openidentityexchange.org/');
                store.setPrefix('dc','http://purl.org/dc/elements/1.1/');


                store.execute(varListContents, function(err, results) {
                    console.log("=== TRIPLES ===");
                    outputSPARQLResults(results)
                })
            }

        }
    );

});