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

    return !input || input.trim() === "";

  };

  this.isShouting = function(){

    return input === input.toUpperCase();

  };

  this.isAskingQuestion = function(){

    return input.charAt(input.length-1) === '?';

  };

};


module.exports = Bob;
