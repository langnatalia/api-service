// parser.js
const { parse } = require('path');

class Parser {
  constructor(options = {}) {
    this.options = {
      strictMode: false,
      ...options
    };
  }

  parseFile(filePath) {
    if (!filePath) {
      throw new Error('File path is required');
    }

    const { ext, name } = parse(filePath);

    if (this.options.strictMode && !ext) {
      throw new Error('File must have an extension in strict mode');
    }

    return {
      fileName: name,
      extension: ext || null,
      fullPath: filePath
    };
  }

  parseJSON(data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      if (this.options.strictMode) {
        throw new Error('Invalid JSON data');
      }
      return null;
    }
  }
}

module.exports = Parser;