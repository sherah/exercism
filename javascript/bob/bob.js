var Bob = function(){


  this.hey = function(conversationStarter){
    var response;

    if(conversationStarter === conversationStarter.toUpperCase()){
      response = 'Woah, chill out!';
    } else if(conversationStarter.charAt(conversationStarter.length-1) === '?'){
      response = 'Sure.';
    } else {
      response = "Whatever.";
    }

    return response;
    
  }; 



};




module.exports = Bob;
