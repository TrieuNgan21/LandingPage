function autoType(elementClass, typingSpeed){
    var now = $(elementClass);
    now.css({
      "position": "relative",
      "display": "inline-block"
    });
    now.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
    now = now.find(".text-js");
    var text = now.text().trim().split('');
    var amtOfChars = text.length;
    var newString = "";
    now.text("|");
    setTimeout(function(){
        nows.css("opacity",1);
        now.prev().removeAttr("style");
        now.text("");
      for(var i = 0; i < amtOfChars; i++){
        (function(i,char){
          setTimeout(function() {        
            newString += char;
            now.text(newString);
          },i*typingSpeed);
        })(i+1,text[i]);
      }
    },1500);
  }
  
  $(document).ready(function(){
    // Now to start autoTyping just call the autoType function with the 
    // class of outer div
    // The second paramter is the speed between each letter is typed.   
    autoType(".type-js",200);
  });