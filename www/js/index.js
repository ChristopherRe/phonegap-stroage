var key = "phone";
var value = "apple";

window.localStorage.setItem( key, value );

key = "keys";
value = "car";

window.localStorage.setItem( key, value );

key = "wallet";
value = "money";

window.localStorage.setItem( key, value );

key = "coat";
value = "rain";

window.localStorage.setItem( key, value );

key = "student_card";
value = "identification";

window.localStorage.setItem( key, value );

$(document).ready(function(){

key = "wallet";
value = window.localStorage.getItem(key);

$("#myText").text(value);
    
$("#myText2").text(window.localStorage.length);
    
});