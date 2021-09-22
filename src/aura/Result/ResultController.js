({
        showModal: function(component, event, helper) {
            var modalBody;
            var searchMovies = component.get("v.searchMovies");
            var item = component.get("v.item");

            $A.createComponent("c:ResultDetails", {
                searchType : searchMovies,
                recordId : item.id,
                item : item
                },
                function(content, status) {
                    if (status === "SUCCESS") {
                        modalBody = content;
                        component.find('overlayLib').showCustomModal({
                            body: modalBody,
                            //showCloseButton: true,
                            cssClass: "",
                            closeCallback: function() {console.log('Zamknieto modal')}
                        })
                    }
                 }
            );
        },

        addToFavorites : function(component, event, helper){
            event.stopPropagation();
            component.set("v.item.isFavourite", true);
            component.set("v.item.isBanned", false);
            helper.addToFavorites(component, event);
        },
        deleteFavorite : function(component, event, helper){
            event.stopPropagation();
             component.set("v.item.isFavourite", false);
             component.set("v.item.isBanned", false);
             helper.removeFromFavorites(component, event);
             },

        addToBlackList : function(component, event, helper){
            event.stopPropagation();
              component.set("v.item.isFavourite", false);
              component.set("v.item.isBanned", true);
              helper.addToBlackList(component, event);
         },
        removeFromBlackList : function(component, event, helper){
            event.stopPropagation();
              component.set("v.item.isFavourite", false);
              component.set("v.item.isBanned", false);
              helper.removeFromBlackList(component, event);
         }
})
