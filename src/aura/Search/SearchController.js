({
     onSearchClick : function(component, event, helper){
         var cmpEvent = component.getEvent("toggleSpinner");
         cmpEvent.fire();
         var newEvent = $A.get("e.c:eventPassQueryStringAndSearchType");
         newEvent.setParams(
             {
                 "inputQuery" : component.get("v.queryString"),
                 "searchMovies" : component.get("v.searchMovies")
             }
         );
         newEvent.fire();
         //WYWYOŁANIE ASYNC DZIAŁA
//         var showSuccessToast = component.get('c.showToast');
//         $A.enqueueAction(showSuccessToast);
//       TODO helper.nazwa
     }

//     showToast : function(component, event, helper) {
//         var toastEvent = $A.get("e.force:showToast");
//         toastEvent.setParams({
//             "title": "Success!",
//             "type": "success",
//             "message": "The record has been updated successfully."
//         });
//         toastEvent.fire();
//     }

//  OPIS    f-cja pomocnicza do pokazania v.queryString
//          pokaValue : function(component, event, helper){
//               var zmienna = component.get("v.queryString");
//        }

})