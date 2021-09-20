public with sharing class CF_Actor_DTO {

    //todo dodać zdjęcie w bazie danych
    public CF_Actor_DTO(Actor__c actor){
        this.adult = actor.Adult__c;
        this.gender = Integer.valueOf(actor.Gender__c);
        this.known_for_department = actor.Known_for_department__c;
//        this.known_for = new List<CF_Movie_DTO>()[new CF_Movie_DTO(actor.Movie__c)];
        this.name = actor.Name;
        this.popularity = actor.Popularity__c;
    }

    @AuraEnabled public boolean adult{ get; set; }
    @AuraEnabled public Integer gender{ get; set; }    //2
    @AuraEnabled public Integer id{ get; set; }    //2963
    @AuraEnabled public CF_Actor_KnownFor_DTOcrew[] known_for{ get; set; }
    @AuraEnabled public String known_for_department{ get; set; }    //Acting
    @AuraEnabled public String name{ get; set; }    //Nicolas Cage
    @AuraEnabled public Double popularity{ get; set; }    //24.027
    @AuraEnabled public String profile_path{ get; set; }    ///ar33qcWbEgREn07ZpXv5Pbj8hbM.jpg


}
