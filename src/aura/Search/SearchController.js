({
         doInit: function(component, event, helper) {
                // Create the action
                let action = component.get("c.getMovies");
                // Add callback behavior for when response is received
                action.setCallback(this, function(response) {
                    console.log('response' + response);
                    let state = response.getState();
                    if (state === "SUCCESS") {
                        console.log('callback response == SUCCESS');
                        component.set("v.expenses", response.getReturnValue());
                    }
                    else {
                        console.log("Failed with state: " + state);
                    }
                });
                $A.enqueueAction(action);
            },

         onSearchClick : function(component, event, helper){
             var queryStringFromInput = component.get("v.queryString")
             var searchMovies = component.get("v.searchMovies") == "true";
             var newEvent = $A.get("e.c:auraEvent");
             newEvent.setParams(
                 {
                     "inputQuery" : queryStringFromInput,
                     "searchMovies" : searchMovies
                 }
             );
             newEvent.fire();
         }

//  OPIS    f-cja pomocnicza do pokazania v.queryString
//          pokaValue : function(component, event, helper){
//               var zmienna = component.get("v.queryString");
//        }

})