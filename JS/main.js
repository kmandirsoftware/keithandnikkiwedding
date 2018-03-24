$(document).ready(function(){

   FB.getLoginStatus(function(response) {
       statusChangeCallback(response);
   });

});


function statusChangeCallback(response) {
   console.log(response);
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
