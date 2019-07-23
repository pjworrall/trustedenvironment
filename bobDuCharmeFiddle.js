// Utility function for outputting SELECT results
function outputSPARQLResults(results) {
    for (row in results) {
        printedLine = ''
        for (column in results[row]) {
            printedLine = printedLine + results[row][column].value + ' '
        }
        console.log(printedLine)
    }
}

// Create an rdfstore
var rdfstore = require('rdfstore')

// Define a query to execute.
var listISBNs = 'PREFIX s: <http://schema.org/> \
PREFIX ls: <http://learningsparql.com/ns/data#> \
PREFIX wco: <http://www.worldcat.org/title/-/oclc/> \
PREFIX wci: <http://worldcat.org/isbn/> \
SELECT ?isbn \
FROM ls:g1 WHERE { ?book s:isbn ?isbn } '

rdfstore.create(function(err, store) {   // no error handling

    store.execute(
        // Load data about the book Learning SPARQL into named graph g1 in the rdfstore.
        'LOAD <http://worldcat.org/oclc/890467322.ttl> \
        INTO GRAPH <http://learningsparql.com/ns/data#g1>', function(err) {

            store.setPrefix('s', 'http://schema.org/')
            store.setPrefix('ls', 'http://learningsparql.com/ns/data#')
            store.setPrefix('wco', 'http://www.worldcat.org/title/-/oclc/')
            store.setPrefix('wci', 'http://worldcat.org/isbn/')

            store.execute(listISBNs, function(err, results) {
                console.log("=== ISBN value ===")
                outputSPARQLResults(results)
            })
        }
    )


})