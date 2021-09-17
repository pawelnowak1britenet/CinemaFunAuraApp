public with sharing class CF_PageResults_MovieCredits {

   @AuraEnabled public Integer id { get; set; }    //808
   @AuraEnabled public List<CF_MovieCredits_DTO> movieCast { get; set; }
   @AuraEnabled public List<CF_MovieCredits_DTOcrew> crew { get; set; }

}