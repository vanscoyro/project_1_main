

var url = "https://api.github.com/users/";
var settings = {
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "Bearer 095ed2b3098a6a57e11b7577ea4658b4a2a47942"
    },
  };
$("#submit").click(function(){
        callGithub();
});

//google sheets API request call
var urlSheet = "https://sheets.googleapis.com/v4/spreadsheets/10KzkFG-9gv5m5-PrkunguT3BvJwU8kA01Vi0WOovg_8/values/FormResponse1!A2:Q1000?key="
var apiKeySheet = "QUl6YVN5RHJqdEFXdzRRZ2JlNWl0WHpWTUZLTGhmYW1ia3M0NEpv"


var settings = {
  "method": "GET",
  "timeout": 0,
};
settings.url = urlSheet + atob(apiKeySheet)
$.ajax(settings).done(function (response) {
  console.log(response);
});



function callGithub(){
  

   var username = $("#github").val();
   settings.url = url+username ; 
     $.ajax(settings).done(function (response) {
         console.log(response);
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
})


