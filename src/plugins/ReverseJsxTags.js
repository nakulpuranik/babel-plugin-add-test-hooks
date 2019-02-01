module.exports = function(babel){
  const t = babel.types;
  return {
    visitor: {
      JSXOpeningElement: function(path) {
        const name = path.node;
        //console.log("Identifies Name :", name);
        const jsxElementNameNode = path.node.name;
        if(jsxElementNameNode.type === 'JSXIdentifier'){
          console.log("Identifies JSX Tag Name is  :", [path.node.name]);
        }

        // reverse the name: JavaScript -> tpircSavaJ
        //  path.node.name = name
        //   .split("")
        //   .reverse()
        //   .join("");
      }
    }
  }
}