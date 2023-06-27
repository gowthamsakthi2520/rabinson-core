/*==============================================================*/
// Raque Contact Form  JS
/*==============================================================*/

(function ($) {
    "use strict"; // Start of use strict
    $("#Model_form").validator().on("submit", function (event) {

        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Did you fill in the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });


    function submitForm(){
        document.getElementById('num_validate').innerHTML=" ";
        $('.capctha_error').html('');
        // Initiate Variables With Form Content
        var Name = $("#name").val();
        var Number = $("#number").val();
        var Email= $('#email').val();
        var City= $('#city').val();
        var type= $('#type').val();
        var captcha_valid=grecaptcha.getResponse();

         var form_data = new FormData();
         form_data.append('name',Name);
         form_data.append('number',Number);
         form_data.append('email',Email);
         form_data.append('city',City);
         form_data.append('type',type);
         form_data.append('captcha_valid',captcha_valid);
         if(Number.length == 10){
        $.ajax({
            type: "POST",
            url: "php/mail.php",
            cache: false,
            contentType: false,
            processData: false,    
            data: form_data,
            success : function(text){
   
                    if (text == "success"){
                        $('.home_pageform').css('display','block');
                        setTimeout(()=>{
                            window.location.reload();
                        },3000)
                     } else if(text=="captcha_invalid"){
                        $('.capctha_error').html('Please select captcha');
                     }
                }
               
            
        });
    } else{
        document.getElementById('num_validate').innerHTML="Must be 10 Character Only";
    }
   
    }

    function formSuccess(){
        $("#Model_form")[0].reset();
        submitMSG(true, "Message Submitted!")
    }

    function formError(){
        
        $("#Model_form").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
          
        });
      
    }

    function submitMSG(valid, msg){
        if(valid){
            var msgClasses = "h4 tada animated text-success";
        } else {
            var msgClasses = "h4 text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
}(jQuery)); // End of use strict




// if(text=="success"){
//     $(".homepage_form").css('display','block');
//     setTimeout(()=>{
//         window.location.reload();
        
//     },3000)
// }
// else if(text=="captcha_invalid"){
//     $(".captcha_error").html("please select a captcha");
// }