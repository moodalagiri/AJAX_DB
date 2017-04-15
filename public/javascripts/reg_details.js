/**
 * Created by manasabharatesha on 10/16/2016.
 */
$(document).ready(function () {
    $("#register").on("click", function (e) {

        // as you have used hyperlink(a tag), this prevent to redirect to another/same page
        e.preventDefault();

        // get values from textboxs
        var userid = $('#uid').val();
        // alert('name');
        var pwd1 = $('#pwd').val();
        var pwd2 = $('#pwd2').val();
        var email = $('#email').val();
        var email2 = $('#email2').val();
        var Security_Question1 = $('#Security_Question1').val();
        var Securityans = $('#Securityansl').val();
        var Security_Question2 = $('#Security_Question2').val();
        var Securityans2 = $('#Securityans2').val();
        var mobNum = $('#mobile').val();
        var address = $('#address').val();
        var areas = $('#areas').val();
        alert(userid);
        $.ajax({
            url: "http://localhost:8000/reg_page",
            type: "POST",
            dataType: "json",

            data: {type: "add", ID: userid,password : pwd1  ,password2 : pwd2 ,mail :  email, mail2 :email2, Sec_Quest1:Security_Question1, Secans:Securityans,Sec_Quest2: Security_Question2,Secans2:Securityans2,Mob_Num: mobNum, Addr: address, area :areas},

            ContentType: "application/json",
            success: function (response) {
                alert(JSON.stringify(response));
            },
            error: function (err) {
                alert(JSON.stringify(err));
            }
        })
    });
});