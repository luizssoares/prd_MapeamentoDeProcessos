function enableFields(form){ 
    var Now_State = parseInt(getValue("WKNumState"));
    form.setEnabled("cmb_NomeSolicitante", false);
    var fields = []

    if(Now_State == 6 || Now_State == 17 || Now_State == 21 || Now_State == 11){
        disableAllFields(form)
    }

    //novo processo

    if(Now_State == 13 ){
        disableAllFields(form)
        fields = ["dataAgendamento"]
        enableFieldsFromList(form,fields)
    }
    if(Now_State == 16 ){
        disableAllFields(form)
        fields = ["dataAgendamento"]
        enableFieldsFromList(form,fields)
    }
    if(Now_State == 19 ){
        disableAllFields(form)
        fields = ["textValidacaoProcesso"]
        enableFieldsFromList(form,fields)
    }
    if(Now_State == 20 ){
        disableAllFields(form)
        fields = ["textFinalizacaoProcesso", "dataFinalizacaoFluxo"]
        enableFieldsFromList(form,fields)
    }
    if(Now_State == 22) {
        disableAllFields(form)
        fields = ["selectNtic"]
        enableFieldsFromList(form,fields)
    }

    if(Now_State == 15) {
        disableAllFields(form)
        fields = ["dataAgendamento"]
        enableFieldsFromList(form,fields)
    }
    

    if(Now_State == 18 ){
        disableAllFields(form)
    }
    if(Now_State == 24 ){
        disableAllFields(form)
        fields = ["rapidez", "autonomia", "beneficio", "btnCalcula", "pontuacao"]
        enableFieldsFromList(form,fields)
    }

}

function disableAllFields(form) {         //desabilita todos os campos do formulario, não se poderá modificar nenhum;
    var fields = form.getCardData();
    var iterare = fields.keySet().iterator();
    while (iterare.hasNext()) {
        var key = iterare.next();
        form.setEnabled(key, false, false);
    }
}

function enableFieldsFromList(form, fields) {       // primeiro chama o disableallfields p bloquear todos e em seguida chama o fields; após
    for (var i = 0; i < fields.length; i++) {			// chama o enablefieldsfromlist
        form.setEnabled(fields[i], true);
    }
}

function disableFieldsFromList(form,fields){   // habilita todos os campos e bloqueia aquele dentro do field.
    for(var i = 0; i<fields.length; i++){
        form.setEnabled(fields[i], false);
    }
} 
