module.exports = function(babel){
  const t = babel.types;
  return {
    visitor: {
      JSXOpeningElement: function(path){
        const name = path.node;
        const jsxElementNameOpenNode = path.node.name;
          if(jsxElementNameOpenNode.type === "JSXIdentifier"){
            const changedTag = jsxElementNameOpenNode.name.split("").reverse().join("");
            jsxElementNameOpenNode.name = changedTag;
          }
      },
      JSXClosingElement: function(path) {
        const name = path.node;
          const jsxElementNameCloseNode = path.node.name;
          if(jsxElementNameCloseNode.type === "JSXIdentifier"){
            const changedTag = jsxElementNameCloseNode.name.split("").reverse().join("");
            jsxElementNameCloseNode.name = changedTag;
          }
      },
      
    }
  }
}