({
    //zrobić z tego skutecznyh strzał do API

//    var callback = function(apexResponse, component){
//              let state = apexResponse.getState();
//              let result = apexResponse.getReturnValue();
//              if(state == 'SUCCESS') {
//    //              console.log(JSON.stringify(apexResponse.getReturnValue()));
//                  component.set("v.ApiResults", result);
//                  console.log(result);
//
//                 var cmpEvent = component.getEvent("cmpEvent");
//                     cmpEvent.fire();

                  // jeśli pusta lista to ustaw flagę -> wyświetl komunikat o braku danych i np przycisk dodaj aktora
                  // result.length - i wtedy SEARCH BEFORE CREATE
//              }


    addToFavorites : function(component, event, helper){
        component.set("v.isFavorite", true);
        component.set("v.isBlackList", false);
        helper.addToFavorites(component, event, helper);
    },
    deleteFavorite : function(component, event, helper){
         component.set("v.isFavorite", false);
         component.set("v.isBlackList", false);
         },

    addToBlackList : function(component, event, helper){
          component.set("v.isFavorite", false);
          component.set("v.isBlackList", true);
     },
    deleteBlackListElement : function(component, event, helper){
          component.set("v.isFavorite", false);
          component.set("v.isBlackList", false);
     }

})