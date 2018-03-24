function registerusers(){
   var first = document.getElementById("textFirst").value;
   var last = document.getElementById("textLast").value;
   var email = document.getElementById("textEmail").value;
   var accepted = 'false';
   var mymealchoice = 'none';
   console.log(first);
   console.log(last);
   console.log(email);
   $("input:checkbox[class=chk]").each(function () {
         if($(this).is(":checked")){
           if($(this).attr("id") == "acceptInvite"){
              accepted = 'true';
           }
           if($(this).attr("id") == "mealchoice"){
              mymealchoice = $(this).val();
              console.log(mymealchoice);
           }
           console.log("Id: " + $(this).attr("id") + " Value: " + $(this).val() );
         }
      });
}
