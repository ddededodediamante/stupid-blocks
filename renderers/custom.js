import * as Blockly from 'blockly/core';

class CustomRenderer extends Blockly.blockRendering.Renderer {
  constructor() {
    super();
  }
}

Blockly.blockRendering.register('custom_renderer', CustomRenderer);
