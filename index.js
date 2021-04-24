

$(document).ready( function(){ 

$( function() {
    $( '.show-more-btn' ).click( function() {
        $( '.article-card:hidden' ).css("display", "flex");
        if( $( '.article-card' ).length == $( '.article-card:visible' ).length ) {
$( '.show-more-btn' ).hide();                
  }
    } );
} );

function GEEKFORGEEKS() { 
    var name = document.forms["contact-form"]["Name"]; 
    var email = document.forms["contact-form"]["EMail"]; 
   

    if (name.value == "") { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 

    if (email.value == "") { 
        window.alert( 
          "Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

    return true; 
} 





});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
