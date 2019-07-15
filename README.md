# Trusted Environment
## Trusted Environment Ontology for sharing Identity Verifying Events

  <p>

  The Trusted Environment project is working on an hypothesis that organisations with an existing relationship with someone can help those people prove who they are and what they are entitled to do by providing other organisations with proof of due diligence events that they have undertaken.
  </p>
<p>
The project is run under the direction of the <a target"_blank" href="https://www.openidentityexchange.org/">Open Identity Exchange</a> and is sponsored by <a target="_blank" href="https://www.gov.uk/government/organisations/government-digital-service">UK Gov GDS</a> and <a target="_blank" href="https://www.gov.uk/government/organisations/hm-revenue-customs">HMRC</a>. The working group includes <a target="_blank" href="https://www.hsbc.co.uk/">HSBC</a>, <a target="_blank" href="https://www.santander.co.uk/">Santander</a>, <a target="_blank" href="https://www.gov.uk/government/organisations/department-for-work-pensions">Department for Work and Pensions</a>, <a target="_blank" href="https://www.gov.uk/government/organisations/government-digital-service">Government Digital Services</a>, <a target="_blank" href="https://next.factern.com/">Factern</a>, <a target="_blank" href="https://www.idemia.com/">Idemia</a>, <a target="_blank" href="https://mydex.org/">Mydex CIC</a>, <a target="_blank" href="https://www.tscheme.org/">tScheme</a> and <a target="_blank" href="https://www.zonafide.net/">Zonafide</a>.
</p>

## Ontology 

This Ontology, model, is being worked on at https://ontologies.interition.info/webprotege/ , exported and checked into this repository.

## Tests

This repository is for developing the queries for testing the hypothesis and laying the foundations for a framework on which implementations can evolve.

### Examples

Tests for UK GOV <a href="https://www.gov.uk/government/publications/identity-proofing-and-verification-of-an-individual">GPG 45</a> .

* Was a check supervised by a qualified individual?
* Was the check done with an accepted method?
* Did the check use an official template?
* Was the person doing the check trained in X?
* Was evidence validated using an authoritative source?

## Querying

The Ontology can be queried against a SPARQL server. One is available at https://fuseki.interition.info/ , dataset OIXTrustedEnvironment.

## Prefix's
The following prefixing should be used with the SPARQL queries:

~~~~
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX mdmp: <https://ontology.openidentityexchange.org/riskmodel#>
PREFIX oix: <https://www.openidentityexchange.org/>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
~~~~

## Queries

### Was a check supervised by a qualified individual?

~~~~
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX mdmp: <https://ontology.openidentityexchange.org/riskmodel#>
PREFIX oix: <https://www.openidentityexchange.org/>
PREFIX dc: <http://purl.org/dc/elements/1.1/>

SELECT  ?supervisorName ?evidenceDescription  WHERE {
  
  # get the relationships we want to use from the Ontology
  # get the relationship(s) known as "hasBiometricInformationCheckedBy"
  ?hasBiometricInformationCheckedBy rdfs:label 'hasBiometricInformationCheckedBy' .
  # get the relationship(s) known as 'supervisedBy'.
  ?supervisedBy rdfs:label 'supervisedBy' .
  # get the relationship(s) known as 'hasEvidence'
  ?hasEvidence rdfs:label 'hasEvidence' .
  
  # Subject of the test is the claimed identity for Boris Johnson
  <http://webprotege.stanford.edu/R9gwlbOvPSN884Pt9CnGl7J> ?hasBiometricInformationCheckedBy ?biometricInformationCheck .
  
  # who did the check ?
  ?biometricInformationCheck ?supervisedBy ?supervisor .
  ?supervisor rdfs:label ?supervisorName .
  ?supervisor ?hasEvidence ?evidence .
  
  ?evidence rdfs:label ?evidenceDescription .

} 
LIMIT 10
~~~~

## Other Queries

### Get W3C Verifiable Credential

~~~~
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX mdmp: <https://ontology.openidentityexchange.org/riskmodel#>
PREFIX oix: <https://www.openidentityexchange.org/>
PREFIX dc: <http://purl.org/dc/elements/1.1/>

SELECT  ?evidence ?evidenceLabel ?VerifiableCredentialType  WHERE {
  
  # get the relationships we want to use from the Ontology
  # get the relationship(s) known as 'hasEvidence'
  ?hasEvidence rdfs:label 'hasEvidence' .
  ?VerifiableCredentialType rdfs:label 'AlumniCredential' .
  
  # Subject of the test is the claimed identity for Boris Johnson
  <http://webprotege.stanford.edu/R9gwlbOvPSN884Pt9CnGl7J> ?hasEvidence ?evidence .

  # Get the evidence of type AlumniCredential
  ?evidence rdf:type ?VerifiableCredentialType .
  
  ?evidence rdfs:label ?evidenceLabel
} 
LIMIT 10

~~~~



