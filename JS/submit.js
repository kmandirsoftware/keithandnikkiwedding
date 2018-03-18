function registerusers(){
   var first = document.getElementById("textFirst").value;
   var last = document.getElementById("textLast").value;
   console.log(first);
   console.log(last);
   $("input:checkbox[class=chk]").each(function () {
         if($(this).is(":checked")){
           console.log("Id: " + $(this).attr("id") + " Value: " + $(this).val() + " url: " + $(this).attr("url"));
         }
      });
}
