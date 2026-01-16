var u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ReducedImage"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Image"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sensitive"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbhash"},arguments:[],directives:[]}]}}],loc:{start:0,end:105}};u.loc.source={body:`fragment ReducedImage on Image {
  __typename
  url
  altText
  height
  width
  sensitive
  thumbhash
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function s(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){s(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){s(a,n)}),e.definitions&&e.definitions.forEach(function(a){s(a,n)})}var o={};(function(){u.definitions.forEach(function(n){if(n.name){var i=new Set;s(n,i),o[n.name.value]=i}})})();function f(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function v(e,n){var i={kind:e.kind,definitions:[f(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=o[n]||new Set,c=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var l=d;d=new Set,l.forEach(function(t){if(!c.has(t)){c.add(t);var r=o[t]||new Set;r.forEach(function(m){d.add(m)})}})}return c.forEach(function(t){var r=f(e,t);r&&i.definitions.push(r)}),i}v(u,"ReducedImage");export{u as d};
//# sourceMappingURL=ReducedImageFragment-CkTGK3vJ.js.map
