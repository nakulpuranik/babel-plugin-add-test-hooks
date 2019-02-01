/* eslint no-unused-vars:0 */
module.exports = function(babel) {
  const t = babel.types;
  return {
    visitor: {
      DebuggerStatement: function(path){
        path.remove();
      }
    }
  };
}
