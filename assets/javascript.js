<<<<<<< HEAD
// var url = "https://api.github.com/users/";
// var settings = {
//     "method": "GET",
//     "timeout": 0,
//     "headers": {
//       "Authorization": "Bearer cd0be9b8784ec0c3cc9202784dfccd8a72fbf953"
//     },
//   };
// $("#submit").click(function(){
//         callGithub();
// });
=======
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
>>>>>>> 2fca031a2926584669bbf77a71d0469a9dfb9833


// function callGithub(){
  
<<<<<<< HEAD
//   var username = $("#github").val();
//   settings.url = url+username ; 
//     $.ajax(settings).done(function (response) {
//         console.log(response);
//         $("#github").attr("src",response.avatar_url);
//         $("body").append(image);
//       });
// }
$('#form').submit(function(e) {
  e.preventDefault();
  $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScC3qPLfNkJvxhWkrJDsTiaRgpATq9puTLT_5AU0RtvVVywYw/formResponse",
      data: $(this).serialize(),
      type: "POST",
      dataType: "xml",
=======
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
>>>>>>> 2fca031a2926584669bbf77a71d0469a9dfb9833
      success: function(data) {
          console.log('Submission successful');
      },
      error: function(xhr, status, error) {
          console.log('Submission failed: ' + error);
      }
  });
<<<<<<< HEAD
});

//google sheet API test

        function makeApiCall() {
          var params = {
            // The ID of the spreadsheet to retrieve data from.
            spreadsheetId: '10KzkFG-9gv5m5-PrkunguT3BvJwU8kA01Vi0WOovg_8',  // TODO: Update placeholder value.
    
            // The A1 notation of the values to retrieve.
            range: "'Form Responses 1'!A1:F99",  // TODO: Update placeholder value.
    
            // How values should be represented in the output.
            // The default render option is ValueRenderOption.FORMATTED_VALUE.
            //valueRenderOption: '',  // TODO: Update placeholder value.
    
            // How dates, times, and durations should be represented in the output.
            // This is ignored if value_render_option is
            // FORMATTED_VALUE.
            // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
            //dateTimeRenderOption: '',  // TODO: Update placeholder value.
          };
    
          var request = gapi.client.sheets.spreadsheets.values.get(params);
          request.then(function(response) {
            // TODO: Change code below to process the `response` object:
            console.log(response.result);
          }, function(reason) {
            console.error('error: ' + reason.result.error.message);
          });
        }
    
        function initClient() {
          var API_KEY = 'AIzaSyApv65R0IQPMp1P1L-Z2DKX4GddI6k0SAc';  // TODO: Update placeholder with desired API key.
    
          var CLIENT_ID = '42473456040-0n9r09hvnhs2893jldvloufje5mkilmv.apps.googleusercontent.com';  // TODO: Update placeholder with desired client ID.
    
          // TODO: Authorize using one of the following scopes:
          //   'https://www.googleapis.com/auth/drive'
          //   'https://www.googleapis.com/auth/drive.file'
          //   'https://www.googleapis.com/auth/drive.readonly'
          //   'https://www.googleapis.com/auth/spreadsheets'
          //   'https://www.googleapis.com/auth/spreadsheets.readonly'
          var SCOPE = 'https://www.googleapis.com/auth/spreadsheets.readonly';
    
          gapi.client.init({
            'apiKey': API_KEY,
            'clientId': CLIENT_ID,
            'scope': SCOPE,
            'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
          }).then(function() {
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
            updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          });
        }
    
        function handleClientLoad() {
          gapi.load('client:auth2', initClient);
        }
    
        function updateSignInStatus(isSignedIn) {
          if (isSignedIn) {
            makeApiCall();
          }
        }
    
        function handleSignInClick(event) {
          gapi.auth2.getAuthInstance().signIn();
        }
    
        function handleSignOutClick(event) {
          gapi.auth2.getAuthInstance().signOut();
        }
        
        
=======
});
>>>>>>> 2fca031a2926584669bbf77a71d0469a9dfb9833
