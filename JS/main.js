$(document).ready(function(){

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '421844468260973',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.12'
    });
      
    FB.AppEvents.logPageView();   
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
    $(document).trigger('fbload'); 
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


});

$(document).on(
    'fbload',  //  <---- HERE'S OUR CUSTOM EVENT BEING LISTENED FOR
    function(){
       console.log("fbload ran");
});

function statusChangeCallback(response) {
   console.log(response);
        if (response.status === 'connected') {
            // the user is logged in and has authenticated your
            // app, and response.authResponse supplies
            // the user's ID, a valid access token, a signed
            // request, and the time the access token
            // and signed request each expire
            var uid = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;
            FB.api('/me', function(response) {
               console.log('Successful login for: ' + response.name);
               document.getElementById('status').innerHTML =
                  'Thanks for logging in, ' + response.name + '!';
            });

        } else if (response.status === 'not_authorized') {
            // the user is logged in to Facebook,
            // but has not authenticated your app
        } else {
            // the user isn't logged in to Facebook.
        }
}

function checkLoginState() {
   FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
   });
}

//FB.AppEvents.logEvent("sentFriendRequest");
