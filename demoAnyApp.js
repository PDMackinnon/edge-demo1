// DEMOanyApp namespace for adobe edge demo
// just saving data during the singe page edge animate web app
// data is not persisted to back end - just exists as long as the page is open

// this DEMOanyApp is in global scope
// add any variables in there to avoid further global namespace pollution
// so to minimize risk of name conlict. e.g. another script included may use:
// name = "user name";
// so instead:
// DEMOanyApp.name = "the user name"
// and any such variables are contained thus
//
// this file must be included in the html using <script> tag or 
// alternatively can use yepnope js loader which is included in Edge

var DEMOanyApp ={};

