public with sharing class CF_PageResults_ActorCredits {

    @AuraEnabled public Integer id { get; set; }    //597
    @AuraEnabled public List<CF_Actor_KnownFor_DTO> movieCast { get; set; }
    @AuraEnabled public List<CF_Actor_KnownFor_DTOcrew> crew { get; set; }

}