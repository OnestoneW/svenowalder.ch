document.addEventListener('DOMContentLoaded', function() {
    var submit = document.getElementById('submit');
    var submitmail = document.getElementById('submitmail');
    // onClick's logic below:
    submit.addEventListener('click', function() {
        sendMail();
    });
    submitmail.addEventListener('click', function () {
        sendMail();
    });
});

function sendMail() {
    var request_name = document.getElementById("request_name").value;
    var request_email = document.getElementById("request_email").value;
    var link = "mailto:sveno.walder@gmail.com?subject=www.svenowalder.ch%20-%20request%20from:%20" + request_name + " (" + request_email + ")";
    window.open(link);
    console.log("Submit button worked properly: " + link)
}