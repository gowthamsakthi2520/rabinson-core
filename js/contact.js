/*==============================================================*/
// Raque Contact Form  JS
/*==============================================================*/

(function ($) {
    "use strict"; // Start of use strict
    $("#submit_form").validator().on("submit", function (event) {

        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            // submitMSG(false, "Did you fill in the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });


    function submitForm() {
        document.getElementById('contact_num_validate').innerHTML = "";
        var sqft_1 = $("#sqft_1").val();
        var sqft_2 = $("#sqft_2").val();
        var sqft_3 = $("#sqft_3").val();
        var name = $('#contact_name').val();
        var number = $('#contact_number').val();
        var city = $('#contact_city').val();
        var type = $("#payment_type").val();
        var email = $("#contact_email").val();
            


        var form_data = new FormData();
        form_data.append('sqft_1', sqft_1);
        form_data.append('sqft_2', sqft_2);
        form_data.append('sqft_3', sqft_3);
        form_data.append('type', type);
        form_data.append('name', name);
        form_data.append('number', number);
        form_data.append('email', email);
        form_data.append('city', city);
        form_data.append('captcha_valid', captcha_valid);
        if (number.length == 10) {
            $.ajax({
                type: "POST",
                url: "php/mail.php",
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,
                success: function (text) {
                    console.log('sucess');
                    // if(Number.length == 10){
                    if(text=="success"){
                        $('.message-model').css('display','block');
                        setTimeout(()=>{
                            //$('.home_pageform').css('display','none');--->already comment
                            window.location.reload();
                        },3000)
                    }

                }
            });

        }
        else {
            document.getElementById('contact_num_validate').innerHTML = "Must be 10 Character Only";
        }


    }

    function formSuccess() {
        $("#submit_form")[0].reset();
        submitMSG(true, "Message Submitted!")
    }

    function formError() {

        $("#submit_form").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();

        });

    }

    function submitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h4 tada animated text-success";
        } else {
            var msgClasses = "h4 text-danger";
        }
    }
}(jQuery)); // End of use strict




    