var u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CreateCheckoutWithLineItems"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"brokerId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"lineItems"}},type:{kind:"NonNullType",type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"LineItemInput"}}}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"mailingAddress"}},type:{kind:"NamedType",name:{kind:"Name",value:"MailingAddressInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"checkoutWithLineItemsCreate"},arguments:[{kind:"Argument",name:{kind:"Name",value:"brokerId"},value:{kind:"Variable",name:{kind:"Name",value:"brokerId"}}},{kind:"Argument",name:{kind:"Name",value:"lineItems"},value:{kind:"Variable",name:{kind:"Name",value:"lineItems"}}},{kind:"Argument",name:{kind:"Name",value:"mailingAddress"},value:{kind:"Variable",name:{kind:"Name",value:"mailingAddress"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"checkout"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cartId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isShopPay"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"token"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"errorCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"webFallbackUrl"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"userErrors"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:438}};u.loc.source={body:`mutation CreateCheckoutWithLineItems(
  $brokerId: ID!
  $lineItems: [LineItemInput!]!
  $mailingAddress: MailingAddressInput
) {
  checkoutWithLineItemsCreate(
    brokerId: $brokerId
    lineItems: $lineItems
    mailingAddress: $mailingAddress
  ) {
    checkout {
      id
      cartId
      isShopPay
      status
      token
      url
      errorCode
      webFallbackUrl
    }
    userErrors {
      message
      code
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function l(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){l(a,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){l(a,i)}),e.definitions&&e.definitions.forEach(function(a){l(a,i)})}var m={};(function(){u.definitions.forEach(function(i){if(i.name){var n=new Set;l(i,n),m[i.name.value]=n}})})();function o(e,i){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==i)return a}}function v(e,i){var n={kind:e.kind,definitions:[o(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=m[i]||new Set,s=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var k=d;d=new Set,k.forEach(function(t){if(!s.has(t)){s.add(t);var r=m[t]||new Set;r.forEach(function(c){d.add(c)})}})}return s.forEach(function(t){var r=o(e,t);r&&n.definitions.push(r)}),n}v(u,"CreateCheckoutWithLineItems");export{u as d};
//# sourceMappingURL=CreateCheckoutWithLineItems-LNvsaANZ.js.map
