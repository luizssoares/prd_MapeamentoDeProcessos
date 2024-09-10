function beforeSendData(customField,customFact){
    customField[0] = hAPI.getCardValue("escolhaPainel");
    customField[1] = hAPI.getCardValue("nomenclatura");
    customField[2] = hAPI.getCardValue("processo");
    
    customField[3] = hAPI.getCardValue("pesoObj");
    customField[4] = hAPI.getCardValue("impacto");
    customField[5] = hAPI.getCardValue("rating");
    customField[6] = hAPI.getCardValue("rapidez");
    customField[7] = hAPI.getCardValue("autonomia");
    customField[8] = hAPI.getCardValue("beneficio");
    customField[9] = hAPI.getCardValue("pontuacao");

    customField[10] = hAPI.getCardValue("dataAgendamento");
    customField[11] = hAPI.getCardValue("dataFinalizacaoFluxo");
    customField[12] = hAPI.getCardValue("selectNtic");
    customField[13] = hAPI.getCardValue("macroSelect");
    customField[14] = hAPI.getCardValue("dimensao");
    customField[15] = hAPI.getCardValue("donoProcesso");

    customField[16] = hAPI.getCardValue("indicadoresDoProcesso");
    customField[17] = hAPI.getCardValue("objDoProcesso");
    customField[18] = hAPI.getCardValue("requisitosLegais");
    customField[19] = hAPI.getCardValue("problema");
    customField[20] = hAPI.getCardValue("sintomaDescricao");
    customField[21] = hAPI.getCardValue("principaisConsequencias");
    customField[22] = hAPI.getCardValue("objetivoEstrategico");
    customField[23] = hAPI.getCardValue("textValidacaoProcesso");
    customField[24] = hAPI.getCardValue("textFinalizacaoProcesso");
    customField[25] = hAPI.getCardValue("usuario_coop");
}
