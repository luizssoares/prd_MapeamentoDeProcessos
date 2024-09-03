function validateForm(form) {
    var Now_State = parseInt(getValue("WKNumState"));
    var msg = ""
    var escolhaDoUsuario = form.getValue("escolhaPainel");
    var escolhaDoUsuario = form.getValue("conjAtv");
    //var campo1 = window.getComputedStyle(campo);
    //var display = campo1.display;
    //var display = campo.style.display

  //  <div class="col-md-4" id="conjAtv" style="display: block;">
         
   if(Now_State == 0 || Now_State == 5 || Now_State == 4) {
       if(form.getValue("escolhaPainel") == "") {
            msg += "\nPreencha o tipo de Solicitação";
            }
        if(form.getValue("nomenclatura") == "") {
            msg += "\nPreencha a Nomenclatura do Proceso";
            }    
        if(form.getValue("usuario_coop") == ""){
            msg += "\nPreencha as Partes Interessadas";
        }
        if(form.getValue("justificativa") == ""){
            msg += "\nPreencha a Justificativa";
        }
        if(form.getValue("problema") == ""){
            msg += "\nPreencha o campo Problema";
        }
        if(form.getValue("sintomaDescricao") == ""){
            msg += "\nPreencha o campo Sintoma/Descrição";
        }
        if(form.getValue("principaisConsequencias") == ""){
            msg += "\nPreencha o campo Principais Consequências";
        }
        if(form.getValue("objetivoEstrategico") == ""){
            msg += "\nPreencha o campo Objetivo Estratégico";
        }
        if(form.getValue("pesoObj") == "0"){
            msg += "\nPreencha o campo Peso do Objetivo";
        }
        if(form.getValue("impacto") == "0"){
            msg += "\nPreencha o campo Impacto";
        }
        if(form.getValue("rating") == "" || form.getValue("rating") == "0"){
            msg += "\nClique no botão para calcular o Rating";
        }
    }

    if(Now_State == 5 && escolhaDoUsuario == "novoProcesso" && campo == "block" ){
        if(form.getValue("donoProcesso") == ""){
            msg += "\nPreencha quem será o Dono do Processo"
        }
        if(form.getValue("objDoProcesso") == ""){
            msg += "\nPreencha o Objetivo do Processo"
        }
        if(form.getValue("indicadoresDoProcesso") == ""){
            msg += "\nPreencha o Indicador do Processo"
        }
        if(form.getValue("requisitosLegais") == ""){
            msg += "\nPreencha o Requisito Legal"
        }
    }

    if(Now_State == 43){
        if(form.getValue("dataAgendamento") == "") {
            msg += "\nPreencha a Data do Mapeamento";
           }
    }
    
    if(Now_State == 19) {
        if(form.getValue("textValidacaoProcesso") == "") {
            msg += "\nPreencha informações sobre Validação ou Ajustes do Mapeamento";
           }
    }

    if(Now_State == 20) {
        if(form.getValue("dataFinalizacaoFluxo") == "") {
            msg += "\nPreencha a Data de Finalização do Fluxo";
           }
        if(form.getValue("textFinalizacaoProcesso") == "") {
            msg += "\nPreencha informações sobre a Finalização do Fluxo";
           }
    }

    if(Now_State == 22) {
        if(form.getValue("selectNtic") == "") {
            msg += "\nPreencha se Haverá Equipe de Desenvolvimento";
           }
    }

    if(Now_State == 24) {
        if(form.getValue("rapidez") == "0") {
            msg += "\nPreencha o campo 'tempo estimado NTIC";
           }
        if(form.getValue("autonomia") == "0") {
            msg += "\nPreencha o campo 'NTIC Poderá resolver sozinha ou precsa de apoio?";
           }
        if(form.getValue("beneficio") == "0") {
            msg += "\nPreencha o campo 'O problema trará beneficios para quem?";
           }
        if(form.getValue("pontuacao") == "" || form.getValue("pontuacao") == "0") {
            msg += "\nClique no botão para calcular o RAB";
           }
    }

    if(Now_State == 16) {
        if(form.getValue("dataAgendamento") == "") {
            msg += "\nPreencha a Data de Agendamento";
           }
    }

    if(msg != ""){
        throw msg;
    }
}
 