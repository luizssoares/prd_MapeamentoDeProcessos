function displayFields(form){ 
	var Now_State = parseInt(getValue("WKNumState"));
	var numProcesso = getValue("WKNumProces");
	var data = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
	var usuario = getValue("WKUser");
	
	form.setValue("processo", numProcesso);
	form.setHidePrintLink(true);
	form.setValue("dataSolic", data.format(new Date()));
	form.setValue("cmb_NomeSolicitante", usuario);
	form.setValue("cmb_UnidadeSolicitante", usuario);

	if(Now_State == 0 || Now_State == 4 || Now_State == 6 || Now_State == 13 || Now_State == 8 ){
		form.setVisibleById("painelNtic", false);	
		form.setVisibleById("painelRab", false);	
	}
	
	if(Now_State == 19 || Now_State == 21){
		form.setVisibleById("divTextFinalizacao", false);
		form.setVisibleById("divDataFinalizacao", false);
		form.setVisibleById("divEquipeDev", false);
		form.setVisibleById("painelRab", false);
	}
	
	switch(Now_State) {
		case 17:
			form.setVisibleById("divTextValidacao", false);
			form.setVisibleById("divTextFinalizacao", false);
			form.setVisibleById("divDataFinalizacao", false);
			form.setVisibleById("divEquipeDev", false);
			form.setVisibleById("painelRab", false);
		break;

		case 16:
			form.setVisibleById("divTextValidacao", false);
			form.setVisibleById("divTextFinalizacao", false);
			form.setVisibleById("divDataFinalizacao", false);
			form.setVisibleById("divEquipeDev", false);
			form.setVisibleById("painelRab", false);
		break;
		case 15:
			form.setVisibleById("divTextValidacao", false);
			form.setVisibleById("divTextFinalizacao", false);
			form.setVisibleById("divDataFinalizacao", false);
			form.setVisibleById("divEquipeDev", false);
			form.setVisibleById("painelRab", false);
		break;
		
		case 11:
			form.setVisibleById("painelNtic", false);
			form.setVisibleById("painelRab", false);
		break;

		case 43:
			form.setVisibleById("divTextValidacao", false);
			form.setVisibleById("divTextFinalizacao", false);
			form.setVisibleById("divDataFinalizacao", false);
			form.setVisibleById("divEquipeDev", false);
			
		break;

		case 22:
			//form.setVisibleById("divEquipeDev", false);
			form.setVisibleById("painelRab", false);
		break;

		case 20:
			//form.setVisibleById("divEquipeDev", false);
			form.setVisibleById("painelRab", false);
			form.setVisibleById("divEquipeDev", false);
		break;
		case 18:
			form.setVisibleById("divTextValidacao", false);
			form.setVisibleById("divTextFinalizacao", false);
			form.setVisibleById("divDataFinalizacao", false);
			form.setVisibleById("divEquipeDev", false);
			form.setVisibleById("painelRab", false);
		break;
	} 
	
}