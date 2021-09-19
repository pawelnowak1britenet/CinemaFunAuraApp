({
    doInit : function(component, event) {
//        CALLBACK do funkcji
        var callback = function(apexResponse, component){
          let state = apexResponse.getState();
          let result = apexResponse.getReturnValue();
          if(state == 'SUCCESS') {
//              console.log(JSON.stringify(apexResponse.getReturnValue()));
              component.set("v.ApiResult", result);
              console.log('To jest pojedynczy result w DetailMovie' + result);

    // MIEJSCE NE EVENT
//             var cmpEvent = component.getEvent("cmpEvent");
//                 cmpEvent.fire();
          }
      };
        addMovieToSpecialList.setCallback(this, callback);
         $A.enqueueAction(addMovieToSpecialList);
    },


    addToFavorites : function(component, event){
        var addMovieToSpecialList = component.get("c.addMovieToSpecialList");
        var recordId = component.get("v.recordId");

    addMovieToSpecialList.setParams({
        "movieId" : recordId,
    });

    }
})
