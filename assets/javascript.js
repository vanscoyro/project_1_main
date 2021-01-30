

//github api call
var url = "https://api.github.com/users/";
var githubApiKey = atob("MDk1ZWQyYjMwOThhNmE1N2UxMWI3NTc3ZWE0NjU4YjRhMmE0Nzk0Mg==")

var settings = {
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "Bearer "+ githubApiKey,
    },
  };
$("#submit").click(function(){
        callGithub();
});


//callGithub() function
function callGithub(){
  

  var username = $("#github").val();
  settings.url = url+username ; 
    $.ajax(settings).done(function (response) {
        console.log(response);
        $("#github-img").attr("src",response.avatar_url);
      });
}


//google sheets API request call
var urlSheet = "https://sheets.googleapis.com/v4/spreadsheets/10KzkFG-9gv5m5-PrkunguT3BvJwU8kA01Vi0WOovg_8/values/FormResponse1!A2:Q1000?key="
var apiKeySheet = atob("QUl6YVN5RHJqdEFXdzRRZ2JlNWl0WHpWTUZLTGhmYW1ia3M0NEpv")


var settings = {
  "method": "GET",
  "timeout": 0,
};
settings.url = urlSheet + apiKeySheet
$.ajax(settings).done(function (response) {
  console.log(response);
});




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


function newCard(){
  var card = $("<div>").addClass("card").css("width","18rem")
  var image = $("<img>").attr("id", "github-img").attr("src","").addClass("card-img-top");
  var cardBody = $("<div>").addClass("card-body");
  var cardTitle = $("<h5>").addClass("card-title");
  var cardText = $("<p>").addClass("card-text");
  var ul = $("<ul>").addClass("list-group list-group-flush");
  var li = $("<li>").addClass("list-group-item")
  var footer = $("<div>").addClass("card-body");
  var a = $("<a>").addClass("card-link");
  cardBody.append(cardTitle);
  cardBody.append(cardText);
  card.append(image);
  card.append(cardBody);
  for (let i = 0; i < 3; i++) {
    var li = $("<li>").addClass("list-group-item")
    ul.append(li)
  }
  card.append(cardBody)
  card.append(ul)
  for (let i = 0; i < 2; i++) {
    var a = $("<a>").addClass("card-link");
    a.attr('href', "#");
    footer.append(a)
  }
  card.append(footer);
  $("body").append(card)
 }
