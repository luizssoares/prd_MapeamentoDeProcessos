/***********ESCOLHA DO SUPERIOR******************/

function unidade() {
    var ds_mat = DatasetFactory.getDataset("colleague", null, null, null);
    var ds_und = DatasetFactory.getDataset("dsc_Unidades", null, null, null);

    var mat = document.getElementById("cmb_NomeSolicitante").value;


    for (var i = 0; i < ds_mat.values.length; i++) {
        if (mat == ds_mat.values[i]['colleaguePK.colleagueId']) {
            var und = ds_mat.values[i]['groupId'];

          

            for (var j = 0; j < ds_und.values.length; j++) {
                if (und == ds_und.values[j]['AntigaSigla']) {
                    // console.log(ds_und.values[j]['Sigla'])
                    document.getElementById("cmb_GerenteSolicitante").value = ds_und.values[j]['NomeGerente']
                    // console.log(document.getElementById("cmb_GerenteSolicitante").value)
                    document.getElementById("cmb_UnidadeSolicitante").value = ds_und.values[j]['NomeUnidade']
                    document.getElementById("numSuperior").value = ds_und.values[j]['Matricula']
                    if (mat == document.getElementById("numSuperior").value) {
                        document.getElementById("cmb_GerenteSolicitante").value = ds_und.values[j]['NomeSuperior']
                        document.getElementById("numSuperior").value = ds_und.values[j]['MatSuperior']
                    }

                    dir = ds_und.values[j]["MatSuperior"]
                    console.log("diretoria: "+ dir)
                    if (dir == "00000428") {
                        document.getElementById("hdn_diretoria").value = 'Pool:Role:DISUP'
                    } else if (dir == "80000318") {
                        document.getElementById("hdn_diretoria").value = 'Pool:Role:DIRAF'
                    } else if (dir == "00000656") { document.getElementById("hdn_diretoria").value = 'Pool:Role:DITEC' }
                }
            }
        }
    }
}
window.addEventListener("load", unidade);


/************** Controle do tipo de Solicitação no painel Dados da Solicitação *********************/


function tipoDeProcesso() {
    var escolhaPainel = document.getElementById("escolhaPainel");
    var novoProcesso = document.getElementById("painelNovoProcesso");
    var conjuntoAtividades = document.getElementById("conjAtv");

    painelNovoProcesso.style.display = "none";
    conjAtv.style.display = "none";

    escolhaPainel.addEventListener("change", function() {
        var escolha = escolhaPainel.value;
       var escolhaField = document.getElementById("escolhaField");
       escolhaField.value = escolha;

       painelNovoProcesso.style.display = "none";
       conjAtv.style.display = "none";

       if (escolha === "novoProcesso") {
        novoProcesso.style.display = "block";
        conjuntoAtividades.style.display = "block";
       }
    });
}

function mostraPainel (){
    escolhaPainelVariavel = document.getElementById("escolhaPainel").value;
    conjuntoAtividades = document.getElementById("conjAtv").value;
	//var Now_State = window.parent.ECM.workflowView.sequence
	
	if(escolhaPainelVariavel === "novoProcesso") {
		document.getElementById("painelNovoProcesso").style.display = "block";
		document.getElementById("conjAtv").style.display = "block";
	}else if(escolhaPainelVariavel ==="existenteProcesso") {
        document.getElementById("painelNovoProcesso").style.display = "none";
        document.getElementById("conjAtv").style.display = "none";
    }
	
	/* if(Now_State == 16 || Now_State == 36 || Now_State == 42 || Now_State == 44 || Now_State == 24 || Now_State == 23 || Now_State == 54) {
		document.getElementById("painelViagem").style.display = "none";
		document.getElementById("painelViagem2").style.display = "none";
	} */
}

//window.addEventListener("load", tipoDeProcesso);
window.addEventListener("load", function() {
    tipoDeProcesso();
    mostraPainel();
});


function calculaRab () {
    const rapidezValor = document.getElementById("rapidez").value;
    const autonomiaValor = document.getElementById("autonomia").value;
    const beneficioValor = document.getElementById("beneficio").value;	

    const resultado = ((rapidezValor) * (autonomiaValor) * (beneficioValor))
    document.getElementById("pontuacao").value = resultado;
}


function trocaCor() {
    const selectElement = document.getElementById("impacto");
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const color = selectedOption.getAttribute("data-color");

    selectElement.style.backgroundColor = color;
    selectElement.style.fontWeight = "bold";
}

function calculaRating(){
    const objValor = document.getElementById("pesoObj").value;
    const impactoValor = document.getElementById("impacto").value;

    const resultadoRating = ((objValor) * (impactoValor))
    document.getElementById("rating").value = resultadoRating;
}



/* function somaGapRab(){
    const pontuacaoGap = parseInt(document.getElementById("rating").value);
    const pontuacaoRab = parseInt(document.getElementById("pontuacao").value);
    const somaPontuacaoGapRab = (pontuacaoGap + pontuacaoRab);
    document.getElementById("pontuacaoTotal").value = somaPontuacaoGapRab;
}
window.addEventListener("load", somaGapRab); */

/* 
formatar os campos do zoom das unidades.

function sanitizeString(value) {
    // Substitui caracteres de controle por um espaço
    return value.replace(/[\x00-\x1F\x7F]/g, ' ');
}
var input = document.getElementById('usuario_coop').value;
var inputformatado = sanitizeString(input) */