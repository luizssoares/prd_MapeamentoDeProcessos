function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();
	
	
	dataset.addColumn("Unidade");

    dataset.addRow(new Array("TODAS UNIDADES"));
    dataset.addRow(new Array("USO"));
    dataset.addRow(new Array("UGP"));
    dataset.addRow(new Array("UEI"));
    dataset.addRow(new Array("USA"));
    dataset.addRow(new Array("UMP"));
    dataset.addRow(new Array("UAR"));
    dataset.addRow(new Array("UGE"));
    dataset.addRow(new Array("UAS"));
    dataset.addRow(new Array("NTIC"));
    dataset.addRow(new Array("DIRAF"));
    dataset.addRow(new Array("DITEC"));
    dataset.addRow(new Array("ERTA"));
    dataset.addRow(new Array("ERPA"));
    dataset.addRow(new Array("UGCE"));
    dataset.addRow(new Array("UAJUR"));
    dataset.addRow(new Array("ERTE"));
    dataset.addRow(new Array("ERIT"));
    dataset.addRow(new Array("UCOF"));
    dataset.addRow(new Array("ERCO"));
    dataset.addRow(new Array("ERMA"));
    dataset.addRow(new Array("DISUP"));

    return dataset;
}



