Blockly.Blocks['test_block'] = {
  init: function() {
    this.appendValueInput("E")
        .setCheck("Boolean")
        .appendField("print E");
    this.setPreviousStatement(true, "");
    this.setNextStatement(true, "");
    this.setColour(230);
 this.setTooltip("e");
 this.setHelpUrl("e");
  }
};
