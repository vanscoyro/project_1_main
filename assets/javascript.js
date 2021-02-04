
getGoogleSheetData();
//hides loaded cards 

function getGoogleSheetData(){

//google sheets API request call
var urlSheet = "https://sheets.googleapis.com/v4/spreadsheets/10KzkFG-9gv5m5-PrkunguT3BvJwU8kA01Vi0WOovg_8/values/FormResponse1!A2:Q1000?key="
var apiKeySheet = atob("QUl6YVN5RHJqdEFXdzRRZ2JlNWl0WHpWTUZLTGhmYW1ia3M0NEpv")


var settings = {
  "method": "GET",
  "timeout": 0,
};
settings.url = urlSheet + apiKeySheet

  console.log(settings);
  $.ajax(settings).done(function (response) {
    console.log(response);
    for(var index = 0; index < response.values.length; index ++){
      
      loopSheet(response.values[index]);
      $(".cardContainer").addClass("d-none")

    }

  });
}



//github api call
var url = "https://api.github.com/users/";
  var githubApiKey = "a58f754c63aa0bb328b80a7f80fe7dd9c8352c04"
  
  var settings = {
      "method": "GET",
      "timeout": 0,
      "headers": {
        "Authorization": "Bearer "+ githubApiKey,
      },
    };
  
$("#submit").click(function(){
        callGithub2();
});


//callGithub() function - take in username as an input
// function callGithub(){
  

//   var username = $("#github").val();
//   settings.url = url+username ; 
//     $.ajax(settings).done(function (response) {
//         console.log(response);

//         //select element by name inputted
//         $("#github-img").attr("src",response.avatar_url);
//       });
// }

function callGithub2(gitHubUsername){
  
  settings.url = url+gitHubUsername ; 
    $.ajax(settings).done(function (response) {
        console.log(response);

        //select element by name inputted
        $("#github-img-"+gitHubUsername).attr("src",response.avatar_url);
      });
}

// //google sheets API request call
// var urlSheet = "https://sheets.googleapis.com/v4/spreadsheets/10KzkFG-9gv5m5-PrkunguT3BvJwU8kA01Vi0WOovg_8/values/FormResponse1!A2:Q1000?key="
// var apiKeySheet = atob("QUl6YVN5RHJqdEFXdzRRZ2JlNWl0WHpWTUZLTGhmYW1ia3M0NEpv")


// var settings = {
//   "method": "GET",
//   "timeout": 0,
// };
// settings.url = urlSheet + apiKeySheet



function loopSheet(currentRow){
  var nameContent = currentRow[1];
  var locationContent = currentRow[2]
  var thingsToDo = currentRow[3]
  var funFact = currentRow[4]
  var gitHubUsername = currentRow[5]
  
  
  var card = $("<div>").addClass("card col-3").css("width","18rem");
  var image = $("<img>").attr("id", "github-img-"+gitHubUsername).attr("src","").addClass("card-img-top");
  var cardBody = $("<div>").addClass("card-body");
  var cardTitle = $("<h5>").addClass("card-title");
  var cardText = $("<p>").addClass("card-text");
  var ul = $("<ul>").addClass("list-group list-group-flush");
  // var li = $("<li>").addClass("list-group-item");
  var footer = $("<div>").addClass("card-body");
  
  $(".cardContainer").append(card).addClass(".d-none");
 

  cardBody.append(cardTitle);
  cardBody.append(cardText);
  card.append(image);
  card.append(cardBody);
  
  var liNameContent = $("<li>").addClass("list-group-item");
  liNameContent.append("My name is " + nameContent);
  
  var liLocationContent = $("<li>").addClass("list-group-item");
  liLocationContent.append("I live in " + locationContent);

  var liThingsToDoContent = $("<li>").addClass("list-group-item");
  liThingsToDoContent.append("I like to " + thingsToDo);

  var liFunFact = $("<li>").addClass("list-group-item");
  liFunFact.append("A fun fact about me is " + funFact);
    
  ul.append(liNameContent);
  ul.append(liLocationContent);
  ul.append(liThingsToDoContent);
  ul.append(liFunFact);
  card.append(cardBody)
  card.append(ul)
  card.append(footer);
  
  
  callGithub2(gitHubUsername);
  
  
}



$('#form').submit(function(e){
  e.preventDefault();
  $(".container").addClass("d-none");
  $(".cardContainer").removeClass("d-none");
  $.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/u/0/d/e/1FAIpQLScC3qPLfNkJvxhWkrJDsTiaRgpATq9puTLT_5AU0RtvVVywYw/formResponse",
      data: $(this).serialize(),
      type: "POST",
      dataType: "html",

      success: function(data) {
          console.log('Submission successful');
          $(".cardContainer").empty();
          getGoogleSheetData();
      },
      error: function(xhr, status, error) {
          console.log('Submission failed: ' + error);
      }
  });
  
})



