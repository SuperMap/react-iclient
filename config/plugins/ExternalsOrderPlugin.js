const webpack = require('webpack');

class ExternalsOrderPlugin {
  compareModulesById(chunkGraph) {
    return (a, b) => webpack.util.comparators.compareIds(chunkGraph.getModuleId(a), chunkGraph.getModuleId(b));
  }

  apply(compiler) {
    compiler.hooks.thisCompilation.tap('ExternalsOrderPlugin', (compilation) => {
      compilation.hooks.renderManifest.tap(
        'ExternalsOrderPlugin',
        (result, { chunk }) => {
          const { chunkGraph } = compilation;
          chunkGraph.getOrderedChunkModulesIterable(chunk, this.compareModulesById(chunkGraph));
          // TODO 按 external 的顺序排序
        }
      );
    });
  }
}

module.exports = ExternalsOrderPlugin;
