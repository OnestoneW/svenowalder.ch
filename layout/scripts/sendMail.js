function sendMail() {
var link = "mailto:sveno.walder@gmail.com"
             + "&subject=" + escape("www.svenowalder.ch - request")
             + "&body=" + escape("Type in your request:")
    ;

window.open = link;
    console.log("Submit Button worked.");
}