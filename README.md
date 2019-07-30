# Trusted Environment
## Trusted Environment Ontology for sharing Identity Verifying Events

  <p>

  The Trusted Environment project is working on an hypothesis that organisations with an existing relationship with someone can help those people prove who they are and what they are entitled to do by providing other organisations with proof of due diligence events that they have undertaken.
  </p>
<p>
The project is run under the direction of the <a target="_blank" href="https://www.openidentityexchange.org/">Open Identity Exchange</a> and is sponsored by <a target="_blank" href="https://www.gov.uk/government/organisations/government-digital-service">UK Gov GDS</a> and <a target="_blank" href="https://www.gov.uk/government/organisations/hm-revenue-customs">HMRC</a>. The working group includes <a target="_blank" href="https://www.hsbc.co.uk/">HSBC</a>, <a target="_blank" href="https://www.santander.co.uk/">Santander</a>, <a target="_blank" href="https://www.gov.uk/government/organisations/department-for-work-pensions">Department for Work and Pensions</a>, <a target="_blank" href="https://www.gov.uk/government/organisations/government-digital-service">Government Digital Services</a>, <a target="_blank" href="https://next.factern.com/">Factern</a>, <a target="_blank" href="https://www.idemia.com/">Idemia</a>, <a target="_blank" href="https://mydex.org/">Mydex CIC</a>, <a target="_blank" href="https://www.tscheme.org/">tScheme</a> and <a target="_blank" href="https://www.zonafide.net/">Zonafide</a>.
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

### Report all the types of things

~~~~
SELECT ?concept ?description WHERE {
  
  # list all the Classes and Properties with their labels and descriptions in a table
  
  ?s a owl:Class ; rdfs:label ?concept ; dc:description ?description . 

} 
~~~~

<a target="_blank" href="https://fuseki.interition.info/OIXTrustedEnvironment?query=PREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20owl%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0APREFIX%20mdmp%3A%20%3Chttps%3A%2F%2Fontology.openidentityexchange.org%2Friskmodel%23%3E%0APREFIX%20oix%3A%20%3Chttps%3A%2F%2Fwww.openidentityexchange.org%2F%3E%0APREFIX%20dc%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0A%0ASELECT%20%3Fconcept%20%3Fdescription%20WHERE%20%7B%0A%20%20%0A%20%20%23%20list%20all%20the%20Classes%20and%20Properties%20with%20their%20labels%20and%20descriptions%20in%20a%20table%0A%20%20%0A%20%20%3Fs%20a%20owl%3AClass%20%3B%20rdfs%3Alabel%20%3Fconcept%20%3B%20dc%3Adescription%20%3Fdescription%20.%20%0A%0A%7D%20"> Execute Query</a>

### Report all the properties/relationships that refer to things

~~~~
SELECT ?concept ?description WHERE {
  
  # list all the Classes and Properties with their labels and descriptions in a table  
  ?s a owl:ObjectProperty ; rdfs:label ?concept ; dc:description ?description . 

} 
~~~~
<a target="_blank" href="https://fuseki.interition.info/OIXTrustedEnvironment?query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20owl%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0APREFIX%20mdmp%3A%20%3Chttps%3A%2F%2Fontology.openidentityexchange.org%2Friskmodel%23%3E%0APREFIX%20dc%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0APREFIX%20oix%3A%20%3Chttps%3A%2F%2Fwww.openidentityexchange.org%2F%3E%0A%0ASELECT%20%3Fconcept%20%3Fdescription%20WHERE%20%7B%0A%20%20%0A%20%20%23%20list%20all%20the%20Classes%20and%20Properties%20with%20their%20labels%20and%20descriptions%20in%20a%20table%0A%20%20%0A%20%20%3Fs%20a%20owl%3AObjectProperty%20%3B%20rdfs%3Alabel%20%3Fconcept%20%3B%20dc%3Adescription%20%3Fdescription%20.%20%0A%0A%20%20%0A%7D%20> Execute Query</a>

### Was a check supervised by a qualified individual?

~~~~

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

<a target="_blank" href="https://fuseki.interition.info/OIXTrustedEnvironment?query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20owl%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0APREFIX%20mdmp%3A%20%3Chttps%3A%2F%2Fontology.openidentityexchange.org%2Friskmodel%23%3E%0APREFIX%20oix%3A%20%3Chttps%3A%2F%2Fwww.openidentityexchange.org%2F%3E%0APREFIX%20dc%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0A%0ASELECT%20%20%3FsupervisorName%20%3FevidenceDescription%20%20WHERE%20%7B%0A%20%20%0A%20%20%23%20get%20the%20relationships%20we%20want%20to%20use%20from%20the%20Ontology%0A%20%20%23%20get%20the%20relationship%28s%29%20known%20as%20%22hasBiometricInformationCheckedBy%22%0A%20%20%3FhasBiometricInformationCheckedBy%20rdfs%3Alabel%20%27hasBiometricInformationCheckedBy%27%20.%0A%20%20%23%20get%20the%20relationship%28s%29%20known%20as%20%27supervisedBy%27.%0A%20%20%3FsupervisedBy%20rdfs%3Alabel%20%27supervisedBy%27%20.%0A%20%20%23%20get%20the%20relationship%28s%29%20known%20as%20%27hasEvidence%27%0A%20%20%3FhasEvidence%20rdfs%3Alabel%20%27hasEvidence%27%20.%0A%20%20%0A%20%20%23%20Subject%20of%20the%20test%20is%20the%20claimed%20identity%20for%20Boris%20Johnson%0A%20%20%3Chttp%3A%2F%2Fwebprotege.stanford.edu%2FR9gwlbOvPSN884Pt9CnGl7J%3E%20%3FhasBiometricInformationCheckedBy%20%3FbiometricInformationCheck%20.%0A%20%20%0A%20%20%23%20who%20did%20the%20check%20%3F%0A%20%20%3FbiometricInformationCheck%20%3FsupervisedBy%20%3Fsupervisor%20.%0A%20%20%3Fsupervisor%20rdfs%3Alabel%20%3FsupervisorName%20.%0A%20%20%3Fsupervisor%20%3FhasEvidence%20%3Fevidence%20.%0A%20%20%0A%20%20%3Fevidence%20rdfs%3Alabel%20%3FevidenceDescription%20.%0A%0A%7D%20%0ALIMIT%2010%0A"> Execute Query</a>

## Other Queries

### Get W3C Verifiable Credential

~~~~

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
<a target="_blank" href="https://fuseki.interition.info/OIXTrustedEnvironment?query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20owl%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0APREFIX%20mdmp%3A%20%3Chttps%3A%2F%2Fontology.openidentityexchange.org%2Friskmodel%23%3E%0APREFIX%20oix%3A%20%3Chttps%3A%2F%2Fwww.openidentityexchange.org%2F%3E%0APREFIX%20dc%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0A%0A%0ASELECT%20%20%3Fevidence%20%3FevidenceLabel%20%3FVerifiableCredentialType%20%20WHERE%20%7B%0A%20%20%0A%20%20%23%20get%20the%20relationships%20we%20want%20to%20use%20from%20the%20Ontology%0A%20%20%23%20get%20the%20relationship%28s%29%20known%20as%20%27hasEvidence%27%0A%20%20%3FhasEvidence%20rdfs%3Alabel%20%27hasEvidence%27%20.%0A%20%20%3FVerifiableCredentialType%20rdfs%3Alabel%20%27AlumniCredential%27%20.%0A%20%20%0A%20%20%23%20Subject%20of%20the%20test%20is%20the%20claimed%20identity%20for%20Boris%20Johnson%0A%20%20%3Chttp%3A%2F%2Fwebprotege.stanford.edu%2FR9gwlbOvPSN884Pt9CnGl7J%3E%20%3FhasEvidence%20%3Fevidence%20.%0A%0A%20%20%23%20Get%20the%20evidence%20of%20type%20AlumniCredential%0A%20%20%3Fevidence%20rdf%3Atype%20%3FVerifiableCredentialType%20.%0A%20%20%0A%20%20%3Fevidence%20rdfs%3Alabel%20%3FevidenceLabel%0A%7D%20%0ALIMIT%2010"> Execute Query</a>

### Get the W3C Verifiable Credential Id and Issuance Date 

~~~~

SELECT ?evidenceLabel ?subjectLabel ?id ?issuanceDate   WHERE {
  
  # get any types we want to use
  ?VerifiableCredentialType rdfs:label 'AlumniCredential' .
  
  # get the relationships we want to use from the Ontology
  # get the relationship(s) known as 'hasEvidence'
  ?hasEvidence rdfs:label 'hasEvidence' .
  ?credentialSubject rdfs:label 'credentialSubject' .
  ?hasId rdfs:label 'id' .
  ?hasIssuanceDate rdfs:label 'issuanceDate' .
  
  # Subject of the test is the claimed identity for Boris Johnson
  <http://webprotege.stanford.edu/R9gwlbOvPSN884Pt9CnGl7J> ?hasEvidence ?evidence .

  # Get the evidence of type AlumniCredential
  ?evidence rdf:type ?VerifiableCredentialType .
  
  ?evidence ?credentialSubject ?subject ; 
  			?hasId ?id ;
     		?hasIssuanceDate ?issuanceDate .
  
  ?subject rdfs:label ?subjectLabel .
  
  ?evidence rdfs:label ?evidenceLabel
} 
LIMIT 10

~~~~
<a target="_blank" href="https://fuseki.interition.info/OIXTrustedEnvironment?query=SELECT%20%3FevidenceLabel%20%3FsubjectLabel%20%3Fid%20%3FissuanceDate%20%20%20WHERE%20%7B%0A%20%20%0A%20%20%23%20get%20any%20types%20we%20want%20to%20use%0A%20%20%3FVerifiableCredentialType%20rdfs%3Alabel%20%27AlumniCredential%27%20.%0A%20%20%0A%20%20%23%20get%20the%20relationships%20we%20want%20to%20use%20from%20the%20Ontology%0A%20%20%23%20get%20the%20relationship%28s%29%20known%20as%20%27hasEvidence%27%0A%20%20%3FhasEvidence%20rdfs%3Alabel%20%27hasEvidence%27%20.%0A%20%20%3FcredentialSubject%20rdfs%3Alabel%20%27credentialSubject%27%20.%0A%20%20%3FhasId%20rdfs%3Alabel%20%27id%27%20.%0A%20%20%3FhasIssuanceDate%20rdfs%3Alabel%20%27issuanceDate%27%20.%0A%20%20%0A%20%20%23%20Subject%20of%20the%20test%20is%20the%20claimed%20identity%20for%20Boris%20Johnson%0A%20%20%3Chttp%3A%2F%2Fwebprotege.stanford.edu%2FR9gwlbOvPSN884Pt9CnGl7J%3E%20%3FhasEvidence%20%3Fevidence%20.%0A%0A%20%20%23%20Get%20the%20evidence%20of%20type%20AlumniCredential%0A%20%20%3Fevidence%20rdf%3Atype%20%3FVerifiableCredentialType%20.%0A%20%20%0A%20%20%3Fevidence%20%3FcredentialSubject%20%3Fsubject%20%3B%20%0A%20%20%09%09%09%3FhasId%20%3Fid%20%3B%0A%20%20%20%20%20%09%09%3FhasIssuanceDate%20%3FissuanceDate%20.%0A%20%20%0A%20%20%3Fsubject%20rdfs%3Alabel%20%3FsubjectLabel%20.%0A%20%20%0A%20%20%3Fevidence%20rdfs%3Alabel%20%3FevidenceLabel%0A%7D%20%0ALIMIT%2010"> Execute Query</a>
### Get the W3C Verifiable Credential Id, Issuance Date and Name of Credential Issuer

~~~~

SELECT ?evidenceLabel ?subjectLabel ?issuerLabel ?id ?issuanceDate   WHERE {
  
  # get any types we want to use
  ?VerifiableCredentialType rdfs:label 'AlumniCredential' .
  
  # get the relationships we want to use from the Ontology
  # get the relationship(s) known as 'hasEvidence'
  ?hasEvidence rdfs:label 'hasEvidence' .
  ?credentialSubject rdfs:label 'credentialSubject' .
  ?hasId rdfs:label 'id' .
  ?hasIssuanceDate rdfs:label 'issuanceDate' .
  ?hasIssuer rdfs:label 'issuer' .
  
  # Subject of the test is the claimed identity for Boris Johnson
  <http://webprotege.stanford.edu/R9gwlbOvPSN884Pt9CnGl7J> ?hasEvidence ?evidence .

  # Get the evidence of type AlumniCredential
  ?evidence rdf:type ?VerifiableCredentialType .
  
  ?evidence ?credentialSubject ?subject ; 
  			?hasId ?id ;
     		?hasIssuanceDate ?issuanceDate ;
       		?hasIssuer ?issuer .
  
  ?subject rdfs:label ?subjectLabel .
  
  ?evidence rdfs:label ?evidenceLabel.
  
  ?issuer rdfs:label ?issuerLabel .
} 
LIMIT 10

~~~~
<a target="_blank" href="https://fuseki.interition.info/OIXTrustedEnvironment?query=SELECT%20%3FevidenceLabel%20%3FsubjectLabel%20%3FissuerLabel%20%3Fid%20%3FissuanceDate%20%20%20WHERE%20%7B%0A%20%20%0A%20%20%23%20get%20any%20types%20we%20want%20to%20use%0A%20%20%3FVerifiableCredentialType%20rdfs%3Alabel%20%27AlumniCredential%27%20.%0A%20%20%0A%20%20%23%20get%20the%20relationships%20we%20want%20to%20use%20from%20the%20Ontology%0A%20%20%23%20get%20the%20relationship%28s%29%20known%20as%20%27hasEvidence%27%0A%20%20%3FhasEvidence%20rdfs%3Alabel%20%27hasEvidence%27%20.%0A%20%20%3FcredentialSubject%20rdfs%3Alabel%20%27credentialSubject%27%20.%0A%20%20%3FhasId%20rdfs%3Alabel%20%27id%27%20.%0A%20%20%3FhasIssuanceDate%20rdfs%3Alabel%20%27issuanceDate%27%20.%0A%20%20%3FhasIssuer%20rdfs%3Alabel%20%27issuer%27%20.%0A%20%20%0A%20%20%23%20Subject%20of%20the%20test%20is%20the%20claimed%20identity%20for%20Boris%20Johnson%0A%20%20%3Chttp%3A%2F%2Fwebprotege.stanford.edu%2FR9gwlbOvPSN884Pt9CnGl7J%3E%20%3FhasEvidence%20%3Fevidence%20.%0A%0A%20%20%23%20Get%20the%20evidence%20of%20type%20AlumniCredential%0A%20%20%3Fevidence%20rdf%3Atype%20%3FVerifiableCredentialType%20.%0A%20%20%0A%20%20%3Fevidence%20%3FcredentialSubject%20%3Fsubject%20%3B%20%0A%20%20%09%09%09%3FhasId%20%3Fid%20%3B%0A%20%20%20%20%20%09%09%3FhasIssuanceDate%20%3FissuanceDate%20%3B%0A%20%20%20%20%20%20%20%09%09%3FhasIssuer%20%3Fissuer%20.%0A%20%20%0A%20%20%3Fsubject%20rdfs%3Alabel%20%3FsubjectLabel%20.%0A%20%20%0A%20%20%3Fevidence%20rdfs%3Alabel%20%3FevidenceLabel.%0A%20%20%0A%20%20%3Fissuer%20rdfs%3Alabel%20%3FissuerLabel%20.%0A%7D%20%0ALIMIT%2010"> Execute Query</a>
## Querying Events

### Find all the Events that Coroberate a Change Of Address (Use Case Subject for Project Outcome)

~~~~

~~~~

### Inspect an Event published by a Resource Provider that Checked a Higher Education Certificate

We would like to know who the Resource Provider was, when the check was done and the signature to verify the event was published by the Resource Provider.

~~~~

SELECT ?eventLabel ?pLabel  ?oLabel  WHERE {
  
  # a known check event, a URI shared by the Claiment in a Self-Sovereign solution
  # note: the Claiments ownership of the 
  
  <https://www.openidentityexchange.org/RDVPalBVjOOF9xBT6XgVbLQ> ?p ?o ; rdfs:label ?eventLabel .

  ?o rdfs:label ?oLabel .
  ?p rdfs:label ?pLabel .
  
  # then where the property is refering to a Proof proceed to validate it...
} 
LIMIT 10

~~~~
<a target="_blank" href="https://fuseki.interition.info/OIXTrustedEnvironment?query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20owl%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0APREFIX%20mdmp%3A%20%3Chttps%3A%2F%2Fontology.openidentityexchange.org%2Friskmodel%23%3E%0APREFIX%20oix%3A%20%3Chttps%3A%2F%2Fwww.openidentityexchange.org%2F%3E%0APREFIX%20dc%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0A%0A%0A%0ASELECT%20%3FeventLabel%20%3FpLabel%20%20%3FoLabel%20%20WHERE%20%7B%0A%20%20%0A%20%20%23%20a%20known%20check%20event%2C%20a%20URI%20shared%20by%20the%20Claiment%20in%20a%20Self-Sovereign%20solution%0A%20%20%23%20note%3A%20the%20Claiments%20ownership%20of%20the%20%0A%20%20%0A%20%20%3Chttps%3A%2F%2Fwww.openidentityexchange.org%2FRDVPalBVjOOF9xBT6XgVbLQ%3E%20%3Fp%20%3Fo%20%3B%20rdfs%3Alabel%20%3FeventLabel%20.%0A%0A%20%20%3Fo%20rdfs%3Alabel%20%3FoLabel%20.%0A%20%20%3Fp%20rdfs%3Alabel%20%3FpLabel%20.%0A%20%20%0A%20%20%23%20then%20where%20the%20property%20is%20refering%20to%20a%20Proof%20proceed%20to%20validate%20it...%0A%7D%20%0ALIMIT%2010"> Execute Query</a>
## Validating the Proofs

### W3C Verifiable Credential

~~~~

~~~~

### OIX Verifiable Event

~~~~

~~~~
