/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_RedTab}", "click", function(sym, e) {
         // Lookup the Edge Animate Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         
         //var bluePageSym = sym.getSymbol("bluePageSymbol");
         //bluePageSym.hide();
         
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("bluePageSymbol").hide();
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         var r = sym.$("redPageSymbol").show();
         
         
         // Lookup the Edge Animate Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         var myRedSym = sym.getSymbol("redPageSymbol");
         
         
         //get the value of a Symbol variable
         // var myRedSym = sym.getVariable("redPageSymbol");
         myRedSym.play();
         
         /*
         var redPageSym = sym.getSymbol("redPageSymbol");
         redPageSym.show();
         */
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_BlueTab}", "click", function(sym, e) {
         // insert code for mouse click here
         /*
         var bluePageSym = sym.getSymbol("bluePageSymbol");
         bluePageSym.show();
         var redPageSym = sym.getSymbol("redPageSymbol");
         redPageSym.hide();
         */
         
         
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("redPageSymbol").hide();
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("bluePageSymbol").show();
         
         
         // Lookup the Edge Animate Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         var myBluePage = sym.getSymbol("bluePageSymbol");
         
         myBluePage.play();
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'bluePageSymbol'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // sym.$("name") resolves an Edge Animate element name to a DOM
         // element that can be used with jQuery
         var blueBox = sym.$("BluePageInput");
         
         
         var injectHTML = $('<textarea id="demoText" placeholder="Type in here..." autofocus ></textarea>');
         injectHTML.css("width","400px").css("height","80px");
         blueBox.html(injectHTML);
         
         injectHTML = $('<button id="demoButton" style="width:200px; height:60px">Send Message</button>');
         blueBox.append(injectHTML);
         
         $("#demoButton").on("click",function(e) {
         
         	// demo is to just save any input or generated content etc in javascript variables
         	// in this case, I have introduced a single global object to contain the namespace to a single
         	// global object: DEMOanyApp
         
         
         	// demo:
         	//save the text entered in javascript variable demoTestValue...
         	DEMOanyApp.demoTextValue = $("#demoText").val();
         //		^^^^^^
         //
         //feedback that the message is processed... use \" to escape the quotes
         	blueBox.append($("<p>message: \""+DEMOanyApp.demoTextValue+"\" sent</p>").css("color","white"));
         
         	//this is later retrieved in button5.click - so look at that code next...
         
         });
         

      });
      //Edge binding end

   })("bluePageSymbol");
   //Edge symbol end:'bluePageSymbol'

   //=========================================================
   
   //Edge symbol: 'redPageSymbol'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_button1}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // sym.$("name") resolves an Edge Animate element name to a DOM
         // element that can be used with jQuery
         var lorem = sym.$("loremText");
         lorem.hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button1}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         var lorem = sym.$("loremText");
         lorem.show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button2}", "mouseenter", function(sym, e) {
         var lorem = sym.$("loremText");
         
         // http://api.jquery.com/css/
         lorem.css("color","red");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button3}", "mouseenter", function(sym, e) {
         // insert code to be run when the mouse enters an element
         // http://api.jquery.com/css/
         var lorem = sym.$("loremText");
         lorem.css("color","yellow");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button4}", "mouseenter", function(sym, e) {
         // insert code to be run when the mouse enters an element
         // http://api.jquery.com/css/
         var lorem = sym.$("loremText");
         
         lorem.css("color","green");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button5}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // http://api.jquery.com/css/
         var lorem = sym.$("loremText");
         
         lorem.css("color","orange");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button5}", "click", function(sym, e) {
         // insert code for mouse click here
         // Lookup the Edge Animate Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         
         var popOverObj = sym.getSymbol("popOverSym"); 
         popOverObj.play();
         
	var t = setTimeout(function() { //delay execution...

	var myPop = popOverObj.$("popOver");

	var myHTML = "<h1 id='hello'>Hello!</h1>";
//	myHTML += "<p>lots of content in html goes in here!</p>";
//	myHTML += "<p>lots of content in html goes in here!!</p>";

	// demo:
	///////////////////////////////////////////
	myHTML += "<p>You sent the message :<span id='myMessage'>" + DEMOanyApp.demoTextValue + "</span></p>";
//                                                             ^^^^^^^^^^^^^^^
//	uses demoTextValue that was saved earlier on Blue Page when the user types then pressed the button...
	///////////////////////////////////////////

	myPop.html(myHTML);  //set inner html of the div element

	//colorise the text with css:
	$("#myMessage").css("color", "red");
	$("#hello").css("color","blue");

   }, 600);   // exectutes after 0.6 seconds... ie. after animation which is 0.5 seconds


      });
      
      Symbol.bindElementAction(compId, symbolName, "${_button1}", "click", popOverRedScreen);
      Symbol.bindElementAction(compId, symbolName, "${_button2}", "click", popOverRedScreen);
      Symbol.bindElementAction(compId, symbolName, "${_button3}", "click", popOverRedScreen);
      Symbol.bindElementAction(compId, symbolName, "${_button4}", "click", popOverRedScreen);

      
      //Edge binding end

   })("redPageSymbol");
   //Edge symbol end:'redPageSymbol'

	//added own function for popover here...
	function popOverRedScreen(sym,e) {
		   var popOverObj = sym.getSymbol("popOverSym");
         popOverObj.play();
	}
	
	
	
	
	
	
   //=========================================================
   
   //Edge symbol: 'popOverSym'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_closeBox}", "click", function(sym, e) {
         // insert code for mouse click here
         // Lookup the Edge Animate Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         //var mySymbolObject = sym.getSymbol("popOverSym");
         
         sym.$("popOver").html(""); //delete the content added by set inner html to "" (empty)
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_closeBox}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         
         // Lookup the Edge Animate Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         
         //chain get jquery element [using $("name") ]to get inner div and use jquery functions chained...
         sym.getSymbol("closeBox").$("closeInnerCircle").html("X").css("text-align","center").css("margin-top","0.2em");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_closeBox}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.getSymbol("closeBox").$("closeInnerCircle").html(""); // removes X on rollout
         

      });
      //Edge binding end

   })("popOverSym");
   //Edge symbol end:'popOverSym'

   //=========================================================
   
   //Edge symbol: 'closeBox'
   (function(symbolName) {   
   
   })("closeBox");
   //Edge symbol end:'closeBox'

})(jQuery, AdobeEdge, "EDGE-Demo1");