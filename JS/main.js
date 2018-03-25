userInfo = {
    name: "",
    picurl: "",
    email: ""
};

$(document).ready(function(){
   $.ajaxSetup({ cache: true });
   $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
       FB.init({
         appId: '421844468260973',
         cookie     : true,
         xfbml      : true,
         version: 'v2.12' 
       });     
       $('#loginbutton,#feedbutton').removeAttr('disabled');
       FB.AppEvents.logPageView();   
       FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
       });
       $(document).trigger('fbload'); 
       });

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
               console.log(response);
               console.log('Successful login for: ' + response.name);
               console.log('relationship_status for: ' + response.relationship_status);
            });
            FB.api('/me?fields=email,picture', function(response) {
               console.log('email addresss: ' + response.email);
               userInfo.email = response.email;
               userInfo.picurl = response.picture.data.url;
               updateUserStatus(userInfo);
            });

        } else if (response.status === 'not_authorized') {
            // the user is logged in to Facebook,
            // but has not authenticated your app
        } else {
            // the user isn't logged in to Facebook.
        }
}

function updateUserStatus(user) {
   console.log(user.email);
   console.log(user.picurl);
   var img = document.createElement("IMG");
   img.src = user.picurl;
   $('#facebookbutton').html(img);
};
function checkLoginState() {
   FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
   });
}

//FB.AppEvents.logEvent("sentFriendRequest");
