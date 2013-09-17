var Bob = function(){

  "use strict";

  this.hey = function(input){

    var conversationStarter = new ConversationStarter(input);

    if( conversationStarter.isSayingNothing() ){ return "Fine. Be that way!"; }
    if( conversationStarter.isShouting() ){ return 'Woah, chill out!'; }
    if( conversationStarter.isAskingQuestion() ){ return 'Sure.'; }
    
    return "Whatever.";
    
  };


};

var ConversationStarter = function(input){

  this.isSayingNothing = function(){

    if(!input || input.match(/^\s+$/)) { return true; }

  };

  this.isShouting = function(){

    if(input === input.toUpperCase()) { return true; }

  };

  this.isAskingQuestion = function(){

    if(input.charAt(input.length-1) === '?') { return true; }

  };

};


module.exports = Bob;
