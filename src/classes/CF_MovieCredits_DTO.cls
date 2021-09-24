public with sharing class CF_MovieCredits_DTO {

    //potrzebny gdy przerabiamy aktorów na wrapery, nie ma takiego miejsca
//    public CF_MovieCredits_DTO(Actor__c actor){
//        this.id = actor.id;
//        this.name = actor.Name;
//        this.profile_path = actor.
//        this.cast_id = actor.
//        this.character = actor.
//    }

    @AuraEnabled public Integer id { get; set; }    //12073
    @AuraEnabled public String name { get; set; }    //Mike Myers
    @AuraEnabled public String profile_path { get; set; }    ///gjfDl52Kk02MPgUYFjs9bOy33OY.jpg
    @AuraEnabled public Integer cast_id { get; set; }    //24
    @AuraEnabled public String character { get; set; }    //Shrek (voice)

    @AuraEnabled public boolean adult{ get; set; }
    @AuraEnabled public Integer gender{ get; set; }    //2
    @AuraEnabled public Double popularity{ get; set; }    //24.027
    @AuraEnabled public String place_of_birth{ get; set; }    ///ar33qcWbEgREn07ZpXv5Pbj8hbM.jpg
    @AuraEnabled public String birthday{ get; set; }    ///ar33qcWbEgREn07ZpXv5Pbj8hbM.jpg
    @AuraEnabled public String deathday{ get; set; }    ///ar33qcWbEgREn07ZpXv5Pbj8hbM.jpg
    @AuraEnabled public String biography{ get; set; }    ///ar33qcWbEgREn07ZpXv5Pbj8hbM.jpg

//        class cls_crew {
//            public boolean adult;
//            public Integer gender;    //2
//            public Integer id;    //1705
//            public String known_for_department;    //Writing
//            public String name;    //Ted Elliott
//            public String original_name;    //Ted Elliott
//            public Double popularity;    //1.527
//            public cls_profile_path profile_path;
//            public String credit_id;    //5aa7bdc90e0a263dc701cd81
//            public String department;    //Writing
//            public String job;    //Writer
//        }
}