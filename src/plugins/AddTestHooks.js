module.exports = function(babel){
  const t = babel.types;
  return {
    visitor: {
      JSXOpeningElement: function(path){
        const name = path.node;
        const jsxElementNameOpenNode = path.node.attributes;
        console.log("JSX OPEN ATTRIBUTE ", path.node);
          if(jsxElementNameOpenNode.type === "JSXAttribute"){
            console.log("IS Type Attribute", jsxElementNameOpenNode.name);
            const changedTag = jsxElementNameOpenNode.name.split("").reverse().join("");
            jsxElementNameOpenNode.name = changedTag;
          }
      }
    }
  }
}