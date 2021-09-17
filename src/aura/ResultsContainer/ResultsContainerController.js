({
    funkcjaDoZlapaniaEventu : function (component, event, helper){
        var inputQueryFromSearchComponent = event.getParam("inputQuery");
        console.log('Wywołane z ResultContainerController: \n funkcjaDoZlapaniaEventu \n i przekazane query : ' + inputQueryFromSearchComponent);
        var searchMovies = event.getParam("searchMovies");
        component.set("v.searchMovies", searchMovies);

        var callback = function(apexResponse, component){
          let state = apexResponse.getState();
          let result = apexResponse.getReturnValue();
          if(state == 'SUCCESS') {
//              console.log(JSON.stringify(apexResponse.getReturnValue()));
              component.set("v.ApiResults", result);

            if (result.length){
                component.set("v.showSBCWindow", true);
            }
            //EVvent co robi ? Wyłącza spinner ?
             var cmpEvent = component.getEvent("cmpEvent");
                 cmpEvent.fire();
              // jeśli pusta lista to ustaw flagę -> wyświetl komunikat o braku danych i np przycisk dodaj aktora
              // result.length - i wtedy SEARCH BEFORE CREATE
          }
      };
       helper.getSearchResultsToFront(component, inputQueryFromSearchComponent, callback, searchMovies);
    }
})