import{r as A}from"./chunk-DQRVZFIR-mrH3D8v7.js";import{u as N}from"./use-hydrated-Cnw4OuED.js";import{u as w,a as P,U as E}from"./AuthenticationProvider-9RtBMSxF.js";var m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PayAddressFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PayAddress"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uuid"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"address"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"city"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"phone"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"company"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"address1"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"address2"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"zoneCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lastName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"firstName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"formatted"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"postalCode"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"userPreferred"},arguments:[],directives:[]}]}}],loc:{start:0,end:228}};m.loc.source={body:`fragment PayAddressFragment on PayAddress {
  id
  uuid
  address {
    city
    phone
    company
    country
    address1
    address2
    zoneCode
    lastName
    firstName
    formatted
    postalCode
  }
  userPreferred
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function f(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){f(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){f(a,n)}),e.definitions&&e.definitions.forEach(function(a){f(a,n)})}var v={};(function(){m.definitions.forEach(function(n){if(n.name){var i=new Set;f(n,i),v[n.name.value]=i}})})();function y(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function D(e,n){var i={kind:e.kind,definitions:[y(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=v[n]||new Set,d=new Set,r=new Set;for(a.forEach(function(t){r.add(t)});r.size>0;){var u=r;r=new Set,u.forEach(function(t){if(!d.has(t)){d.add(t);var s=v[t]||new Set;s.forEach(function(c){r.add(c)})}})}return d.forEach(function(t){var s=y(e,t);s&&i.definitions.push(s)}),i}D(m,"PayAddressFragment");var o={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PayAddressesQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"payAddresses"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PayAddressFragment"},directives:[]}]}}]}}]}}],loc:{start:0,end:157}};o.loc.source={body:`#import "../../../data/fragments/PayAddressFragment.graphql"

query PayAddressesQuery {
  payAddresses {
    nodes {
      ...PayAddressFragment
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var h={};function R(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return h[i]?!1:(h[i]=!0,!0)})}o.definitions=o.definitions.concat(R(m.definitions));function l(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){l(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){l(a,n)}),e.definitions&&e.definitions.forEach(function(a){l(a,n)})}var k={};(function(){o.definitions.forEach(function(n){if(n.name){var i=new Set;l(n,i),k[n.name.value]=i}})})();function g(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function b(e,n){var i={kind:e.kind,definitions:[g(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=k[n]||new Set,d=new Set,r=new Set;for(a.forEach(function(t){r.add(t)});r.size>0;){var u=r;r=new Set,u.forEach(function(t){if(!d.has(t)){d.add(t);var s=k[t]||new Set;s.forEach(function(c){r.add(c)})}})}return d.forEach(function(t){var s=g(e,t);s&&i.definitions.push(s)}),i}b(o,"PayAddressesQuery");function C({fetchPolicy:e,ssr:n}={}){const i=N(),{userAuthState:a}=w(),d=!n&&!i,{data:r,loading:u,refetch:t}=P(o,{skip:d||a===E.Anonymous,fetchPolicy:e||"cache-and-network"}),{addresses:s,preferredAddress:c}=A.useMemo(()=>{if(!r)return{addresses:[],preferredAddress:void 0};const p=r.payAddresses.nodes??[],S=p.find(F=>F.userPreferred);return{addresses:p,preferredAddress:S}},[r]);return{loading:d||u,refetch:t,addresses:s,preferredAddress:c}}export{m as d,C as u};
//# sourceMappingURL=usePayAddresses-BJssbwmF.js.map
