var url = "https://api.github.com/users/";
var settings = {
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "Bearer 81d56ea6fd72a57e9a6ca996b09401c95232e2d1"
    },
  };
$("#submit").click(function(){
        callGithub();
});


function callGithub(){
  
  var username = $("#github").val();
  settings.url = url+username ; 
    $.ajax(settings).done(function (response) {
        // console.log(response);
        $("#github-img").attr("src",response.avatar_url);
      });
}
$('#form').submit(function(e){
  e.preventDefault();
  $.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/u/0/d/e/1FAIpQLScC3qPLfNkJvxhWkrJDsTiaRgpATq9puTLT_5AU0RtvVVywYw/formResponse",
      data: $(this).serialize(),
      type: "POST",
      dataType: "html",
      success: function(data) {
          console.log('Submission successful');
      },
      error: function(xhr, status, error) {
          console.log('Submission failed: ' + error);
      }
  });
});