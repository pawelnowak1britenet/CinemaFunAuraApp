({
     onSearchClick : function(component, event, helper){
         var cmpEvent = component.getEvent("c:toggleSpinner");
         cmpEvent.fire();
         var queryStringFromInput = component.get("v.queryString");
         var searchMovies = component.get("v.searchMovies") == "true";
         var newEvent = $A.get("e.c:auraEvent");
         newEvent.setParams(
             {
                 "inputQuery" : queryStringFromInput,
                 "searchMovies" : searchMovies
             }
         );
         newEvent.fire();
         //WYWYOŁANIE SYNCHRONICZNE NIE DZIAŁA
//           showToast(component, event, helper);
         //WYWYOŁANIE ASYNC DZIAŁA
//wykonuje się przed szybciej niż API - Promise, żeby zaczekało na odpowiedź z API
         var showSuccessToast = component.get('c.showToast');
         $A.enqueueAction(showSuccessToast);
         helper.nazwa
     },

     showToast : function(component, event, helper) {
         var toastEvent = $A.get("e.force:showToast");
         toastEvent.setParams({
             "title": "Success!",
             "type": "success",
             "message": "The record has been updated successfully."
         });
         toastEvent.fire();
     }

//  OPIS    f-cja pomocnicza do pokazania v.queryString
//          pokaValue : function(component, event, helper){
//               var zmienna = component.get("v.queryString");
//        }

})