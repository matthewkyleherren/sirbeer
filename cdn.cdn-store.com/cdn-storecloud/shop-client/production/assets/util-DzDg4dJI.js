import{k as V}from"./toFeedSection-HH8g53oo.js";import{j as ue}from"./jsx-runtime-D_zvdyIk.js";import{r as m,u as me}from"./chunk-DQRVZFIR-mrH3D8v7.js";import{u as fe}from"./useMonorail-J6WwGwSW.js";import{T as B,u as ve,c as ke}from"./StoreThemeProvider-jgugnGur.js";import{N as Se}from"./useNotAvailableUrlParam-CmeLeZLI.js";import{z as pe,B as he}from"./ConversationProvider-BNoOA22x.js";import{S as ge}from"./Radio-B0J5IwjT.js";var w=(e=>(e.ALL="ALL",e.CATEGORIES="CATEGORIES",e.CHECKBOX="CHECKBOX",e.COLOR="COLOR",e.PRICE="PRICE",e.RADIO="RADIO",e.RATINGS="RATINGS",e.SAFETY="SAFETY",e.SHIPS_TO="SHIPS_TO",e.TOGGLE="TOGGLE",e))(w||{}),ae=(e=>(e.ProductSearchModuleActionTrain="ProductSearchModuleActionTrain",e.ProductSearchModuleSearchTermList="ProductSearchModuleSearchTermList",e.ProductSearchModuleProductRail="ProductSearchModuleProductRail",e.ProductSearchModuleProductList="ProductSearchModuleProductList",e))(ae||{}),v={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ShoppingFeedProductCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShoppingFeedProductCard"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"secondaryAction"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ProductCard"},directives:[]},{kind:"Field",name:{kind:"Name",value:"shop"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shopCashCampaignValue"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"currencyCode"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:311}};v.loc.source={body:`#import "../../../../data/fragments/ProductCardFragment.graphql"

fragment ShoppingFeedProductCard on ShoppingFeedProductCard {
  id
  secondaryAction {
    icon
    label
  }
  product {
    id
    ...ProductCard
    shop {
      shopCashCampaignValue {
        amount
        currencyCode
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var j={};function ye(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return j[i]?!1:(j[i]=!0,!0)})}v.definitions=v.definitions.concat(ye(V.definitions));function N(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){N(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){N(t,n)}),e.definitions&&e.definitions.forEach(function(t){N(t,n)})}var L={};(function(){v.definitions.forEach(function(n){if(n.name){var i=new Set;N(n,i),L[n.name.value]=i}})})();function z(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Ne(e,n){var i={kind:e.kind,definitions:[z(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=L[n]||new Set,r=new Set,d=new Set;for(t.forEach(function(a){d.add(a)});d.size>0;){var c=d;d=new Set,c.forEach(function(a){if(!r.has(a)){r.add(a);var o=L[a]||new Set;o.forEach(function(s){d.add(s)})}})}return r.forEach(function(a){var o=z(e,a);o&&i.definitions.push(o)}),i}Ne(v,"ShoppingFeedProductCard");var k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ProductSearchModuleProductRail"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ProductSearchModuleProductRail"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"gid"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"modelId"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"products"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShoppingFeedContentItem"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ShoppingFeedProductCard"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:294}};k.loc.source={body:`#import "./ShoppingFeedProductCardFragment.graphql"

fragment ProductSearchModuleProductRail on ProductSearchModuleProductRail {
  gid {
    modelId
  }
  id
  title
  products {
    ... on ShoppingFeedContentItem {
      ...ShoppingFeedProductCard
    }
  }
  action {
    label
    url
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var H={};function Fe(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return H[i]?!1:(H[i]=!0,!0)})}k.definitions=k.definitions.concat(Fe(v.definitions));function F(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){F(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){F(t,n)}),e.definitions&&e.definitions.forEach(function(t){F(t,n)})}var D={};(function(){k.definitions.forEach(function(n){if(n.name){var i=new Set;F(n,i),D[n.name.value]=i}})})();function U(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Pe(e,n){var i={kind:e.kind,definitions:[U(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=D[n]||new Set,r=new Set,d=new Set;for(t.forEach(function(a){d.add(a)});d.size>0;){var c=d;d=new Set,c.forEach(function(a){if(!r.has(a)){r.add(a);var o=D[a]||new Set;o.forEach(function(s){d.add(s)})}})}return r.forEach(function(a){var o=U(e,a);o&&i.definitions.push(o)}),i}Pe(k,"ProductSearchModuleProductRail");var S={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ProductSearchModuleProductList"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ProductSearchModuleProductList"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"gid"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"modelId"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"products"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ProductCard"},directives:[]},{kind:"Field",name:{kind:"Name",value:"reviewAnalytics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"averageRating"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"productPreviewType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:326}};S.loc.source={body:`#import "../../../../data/fragments/ProductCardFragment.graphql"

fragment ProductSearchModuleProductList on ProductSearchModuleProductList {
  gid {
    modelId
  }
  products {
    ...ProductCard
    reviewAnalytics {
      averageRating
      count
    }
  }
  title
  productPreviewType
  action {
    url
    label
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var W={};function Te(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return W[i]?!1:(W[i]=!0,!0)})}S.definitions=S.definitions.concat(Te(V.definitions));function P(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){P(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){P(t,n)}),e.definitions&&e.definitions.forEach(function(t){P(t,n)})}var M={};(function(){S.definitions.forEach(function(n){if(n.name){var i=new Set;P(n,i),M[n.name.value]=i}})})();function J(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function be(e,n){var i={kind:e.kind,definitions:[J(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=M[n]||new Set,r=new Set,d=new Set;for(t.forEach(function(a){d.add(a)});d.size>0;){var c=d;d=new Set,c.forEach(function(a){if(!r.has(a)){r.add(a);var o=M[a]||new Set;o.forEach(function(s){d.add(s)})}})}return r.forEach(function(a){var o=J(e,a);o&&i.definitions.push(o)}),i}be(S,"ProductSearchModuleProductList");var p={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ProductSearchModuleSearchTermList"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ProductSearchModuleSearchTermList"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"gid"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"modelId"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"brokerId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"specialCase"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SearchTerm"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"term"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"TermListCollection"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"TermListProduct"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"MedusaJSId"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ProductCard"},directives:[]}]}}]}}]}}]}}],loc:{start:0,end:475}};p.loc.source={body:`#import "../../../../data/fragments/ProductCardFragment.graphql"

fragment ProductSearchModuleSearchTermList on ProductSearchModuleSearchTermList {
  gid {
    modelId
  }
  title
  brokerId
  specialCase
  items {
    ... on SearchTerm {
      id
      term
    }
    ... on TermListCollection {
      id
      title
      image {
        url
      }
    }
    ... on TermListProduct {
      product {
        id
        MedusaJSId
        ...ProductCard
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var X={};function Ee(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return X[i]?!1:(X[i]=!0,!0)})}p.definitions=p.definitions.concat(Ee(V.definitions));function T(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){T(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){T(t,n)}),e.definitions&&e.definitions.forEach(function(t){T(t,n)})}var A={};(function(){p.definitions.forEach(function(n){if(n.name){var i=new Set;T(n,i),A[n.name.value]=i}})})();function K(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function _e(e,n){var i={kind:e.kind,definitions:[K(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=A[n]||new Set,r=new Set,d=new Set;for(t.forEach(function(a){d.add(a)});d.size>0;){var c=d;d=new Set,c.forEach(function(a){if(!r.has(a)){r.add(a);var o=A[a]||new Set;o.forEach(function(s){d.add(s)})}})}return r.forEach(function(a){var o=K(e,a);o&&i.definitions.push(o)}),i}_e(p,"ProductSearchModuleSearchTermList");var R={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ProductFilter"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ProductFilter"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"key"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"defaultValue"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"configurations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ProductFilterSheetConfiguration"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"screenTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filterKind"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"position"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"refreshOnUpdate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"refreshOptionsOnUpdate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"accessibilityLabel"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"configuration"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ProductFilterPillConfiguration"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"screenTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filterKind"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"position"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"accessibilityLabel"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"configuration"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ProductFilterChipConfiguration"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"screenTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filterKind"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"position"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"accessibilityLabel"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"configuration"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:927}};R.loc.source={body:`fragment ProductFilter on ProductFilter {
  key
  defaultValue
  value
  configurations {
    __typename
    ... on ProductFilterSheetConfiguration {
      __typename
      title
      icon
      screenTitle
      filterKind
      position
      refreshOnUpdate
      refreshOptionsOnUpdate
      options {
        accessibilityLabel
        configuration
        icon
        label
        value
      }
    }

    ... on ProductFilterPillConfiguration {
      __typename
      title
      icon
      screenTitle
      filterKind
      position
      options {
        accessibilityLabel
        configuration
        icon
        label
        value
      }
    }

    ... on ProductFilterChipConfiguration {
      __typename
      title
      icon
      screenTitle
      filterKind
      position
      options {
        accessibilityLabel
        configuration
        icon
        label
        value
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function b(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){b(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){b(t,n)}),e.definitions&&e.definitions.forEach(function(t){b(t,n)})}var O={};(function(){R.definitions.forEach(function(n){if(n.name){var i=new Set;b(n,i),O[n.name.value]=i}})})();function Y(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Ce(e,n){var i={kind:e.kind,definitions:[Y(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=O[n]||new Set,r=new Set,d=new Set;for(t.forEach(function(a){d.add(a)});d.size>0;){var c=d;d=new Set,c.forEach(function(a){if(!r.has(a)){r.add(a);var o=O[a]||new Set;o.forEach(function(s){d.add(s)})}})}return r.forEach(function(a){var o=Y(e,a);o&&i.definitions.push(o)}),i}Ce(R,"ProductFilter");var h={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ProductSearchModuleActionTrain"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ProductSearchModuleActionTrain"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"gid"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"modelId"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ProductFilter"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ProductFilter"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ProductSearchModuleActionTrainButton"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:326}};h.loc.source={body:`#import "./ProductFilter.graphql"
fragment ProductSearchModuleActionTrain on ProductSearchModuleActionTrain {
  gid {
    modelId
  }

  id
  title
  items {
    ... on ProductFilter {
      ...ProductFilter
    }

    ... on ProductSearchModuleActionTrainButton {
      action {
        label
        url
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Z={};function Re(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Z[i]?!1:(Z[i]=!0,!0)})}h.definitions=h.definitions.concat(Re(R.definitions));function E(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){E(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){E(t,n)}),e.definitions&&e.definitions.forEach(function(t){E(t,n)})}var $={};(function(){h.definitions.forEach(function(n){if(n.name){var i=new Set;E(n,i),$[n.name.value]=i}})})();function ee(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Ie(e,n){var i={kind:e.kind,definitions:[ee(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=$[n]||new Set,r=new Set,d=new Set;for(t.forEach(function(a){d.add(a)});d.size>0;){var c=d;d=new Set,c.forEach(function(a){if(!r.has(a)){r.add(a);var o=$[a]||new Set;o.forEach(function(s){d.add(s)})}})}return r.forEach(function(a){var o=ee(e,a);o&&i.definitions.push(o)}),i}Ie(h,"ProductSearchModuleActionTrain");var l={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"WebShopTypeahead"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"first"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"after"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"query"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"brokerId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sessionId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"recentSearches"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shopTypeahead"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"Variable",name:{kind:"Name",value:"first"}}},{kind:"Argument",name:{kind:"Name",value:"after"},value:{kind:"Variable",name:{kind:"Name",value:"after"}}},{kind:"Argument",name:{kind:"Name",value:"query"},value:{kind:"Variable",name:{kind:"Name",value:"query"}}},{kind:"Argument",name:{kind:"Name",value:"brokerId"},value:{kind:"Variable",name:{kind:"Name",value:"brokerId"}}},{kind:"Argument",name:{kind:"Name",value:"sessionId"},value:{kind:"Variable",name:{kind:"Name",value:"sessionId"}}},{kind:"Argument",name:{kind:"Name",value:"recentSearches"},value:{kind:"Variable",name:{kind:"Name",value:"recentSearches"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopTypeaheadConnection"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ProductSearchModuleProductRail"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ProductSearchModuleProductList"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ProductSearchModuleSearchTermList"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ProductSearchModuleActionTrain"},directives:[]}]}}]}}]}}]}}],loc:{start:0,end:794}};l.loc.source={body:`#import "./fragments/ProductSearchModuleProductRail.graphql"
#import "./fragments/ProductSearchModuleProductList.graphql"
#import "./fragments/ProductSearchModuleSearchTermList.graphql"
#import "./fragments/ProductSearchModuleActionTrain.graphql"
query WebShopTypeahead(
  $first: Int!
  $after: String
  $query: String!
  $brokerId: ID!
  $sessionId: ID!
  $recentSearches: [String!]
) {
  shopTypeahead(
    first: $first
    after: $after
    query: $query
    brokerId: $brokerId
    sessionId: $sessionId
    recentSearches: $recentSearches
  ) {
    ... on ShopTypeaheadConnection {
      nodes {
        ...ProductSearchModuleProductRail
        ...ProductSearchModuleProductList
        ...ProductSearchModuleSearchTermList
        ...ProductSearchModuleActionTrain
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ne={};function I(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return ne[i]?!1:(ne[i]=!0,!0)})}l.definitions=l.definitions.concat(I(k.definitions));l.definitions=l.definitions.concat(I(S.definitions));l.definitions=l.definitions.concat(I(p.definitions));l.definitions=l.definitions.concat(I(h.definitions));function _(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){_(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){_(t,n)}),e.definitions&&e.definitions.forEach(function(t){_(t,n)})}var q={};(function(){l.definitions.forEach(function(n){if(n.name){var i=new Set;_(n,i),q[n.name.value]=i}})})();function ie(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function we(e,n){var i={kind:e.kind,definitions:[ie(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=q[n]||new Set,r=new Set,d=new Set;for(t.forEach(function(a){d.add(a)});d.size>0;){var c=d;d=new Set,c.forEach(function(a){if(!r.has(a)){r.add(a);var o=q[a]||new Set;o.forEach(function(s){d.add(s)})}})}return r.forEach(function(a){var o=ie(e,a);o&&i.definitions.push(o)}),i}we(l,"WebShopTypeahead");const te="web_shop_typeahead",Le=({searchInput:e,pageValue:n})=>{const{reportEvent:i}=fe(),t=m.useRef(new B),r=e==="";return{onTypeaheadSessionStart:()=>{t.current=new B,i({schemaId:"product_search_typeahead_session_start/3.0",payload:{typeaheadSessionId:t.current.id,typeaheadMicroSessionId:t.current.span.id,pageValue:n,queryString:e}})},onTypeaheadAction:({selectedQuery:s,selectedId:u,selectedType:f,selectedPosition:y})=>{const g={typeaheadSessionId:t.current.id,typeaheadMicroSessionId:t.current.span.id,pageValue:n,selectedQuery:s,selectedId:u,selectedType:f};i(r?{schemaId:"product_search_null_state_action/3.0",payload:{...g,selectedSource:te}}:{schemaId:"product_search_typeahead_action/4.0",payload:{...g,queryString:e,selectedPosition:y,selectedQuerySource:te}})},onTypeaheadResultsLoad:({results:s})=>{const u={typeaheadSessionId:t.current.id,typeaheadMicroSessionId:t.current.span.id,pageValue:n};i(r?{schemaId:"product_search_null_state_suggestions_load/3.0",payload:{...u,suggestions:s}}:{schemaId:"product_search_typeahead_results_load/4.0",payload:{...u,results:s}})},onTypeaheadQueryChange:()=>{i({schemaId:"product_search_typeahead_query_change/5.0",payload:{typeaheadSessionId:t.current.id,typeaheadMicroSessionId:t.current.span.id,pageValue:n}})}}},De="-1",Me=e=>{const n={};if(e.forEach((i,t)=>{t in n?n[t]=Array.isArray(n[t])?[...n[t],i]:[n[t],i]:n[t]=i}),n.maxPrice){const i=Number(n.maxPrice);delete n.maxPrice,Number.isNaN(i)||(n.maxPrice=i)}if(n.minPrice){const i=Number(n.minPrice);delete n.minPrice,Number.isNaN(i)||(n.minPrice=i)}return n},Xe=({selectedFilters:e,filtersResponse:n})=>{const i=[];return n==null||n.forEach(t=>{const r=t.configurations.find(c=>c.__typename==="ProductFilterSheetConfiguration"),d=t.configurations.find(c=>c.__typename==="ProductFilterPillConfiguration");if(r){const c=t;if(c){const a=(d==null?void 0:d.position)??r.position;let o=r.options.map(f=>({label:f.label,value:f.value}));c.key==="sortBy"&&(o=o.filter(f=>f.value!=="most_recent"));const s=(r==null?void 0:r.filterKind)===w.CHECKBOX||(c==null?void 0:c.isMulti),u=e[t.key]||t.value;s?i.push({key:t.key,title:r.title,options:o,isMulti:!0,selectedValue:u,isToggle:!1,defaultValue:t.defaultValue,barPosition:a,sheetPosition:r.position}):i.push({key:t.key,title:r.title,options:o,isMulti:!!s,selectedValue:u,isToggle:(r==null?void 0:r.filterKind)===w.TOGGLE,defaultValue:t.defaultValue,barPosition:a,sheetPosition:r.position})}}}),i},Ae=e=>{const n=new URLSearchParams;return Object.entries(e).forEach(([i,t])=>{if(Array.isArray(t)){if(t.length===0){n.append(i,"");return}t.forEach(r=>n.append(i,r));return}n.append(i,t??"")}),n},Oe=(e,n,i,t)=>e.q&&n.category?{...n,category:void 0,q:e.q}:e.category&&n.q!==void 0?(i(""),{...t,...e,q:void 0}):e.category&&!n.category?{...e,sortBy:void 0}:e,$e=(e,n)=>{const i=new URLSearchParams;return e.forEach((t,r)=>{n.has(r)||i.append(r,t)}),n.forEach((t,r)=>{if(pe(t)||t===""){i.delete(r);return}r===Se||r===ge||i.append(r,t)}),i},Ke=e=>{const{minPrice:n,maxPrice:i}=e,t=[];return(n||i)&&t.push({key:"price",value:{min:n||void 0,max:i||void 0}}),Object.entries(e).forEach(([r,d])=>{const c=he(d);t.push({key:r,value:c})}),t},Ye=e=>{const n=e.gid.modelId??De;return qe(e)?{id:n,type:"search_term_list",results:JSON.stringify(e.items)}:Ve(e)?{id:n,type:"product_rail",results:JSON.stringify(e.products)}:xe(e)?{id:n,type:"product_list",results:JSON.stringify(e.products)}:Qe(e)?{id:n,type:"action_train",results:JSON.stringify(e.items)}:null},C=-1,re=m.createContext({inputRef:{},searchInput:"",selectedFilters:{},setSelectedFilters:()=>{},setSearchInput:()=>{},selectedTypeaheadIndex:C,setSelectedTypeaheadIndex:()=>{},customBackgroundColor:void 0,eventLogger:{onTypeaheadSessionStart:()=>{},onTypeaheadQueryChange:()=>{},onTypeaheadAction:()=>{},onTypeaheadResultsLoad:()=>{}}}),Ze=()=>m.useContext(re),en=({children:e,shopId:n,customBackgroundVisible:i=!1})=>{const{backgroundColor:t}=ve(),[,r]=me(),{searchParams:d}=ke(),c=m.useMemo(()=>Me(d),[d]),a=m.useMemo(()=>({dynamicFilterVAvailability:'{"available":true}'}),[]),[o,s]=m.useState({...a,...c}),[u,f]=m.useState(o.q||""),[y,g]=m.useState(C),de=m.useRef(null),x=Le({searchInput:u,pageValue:n}),Q=m.useCallback(ce=>{const G=Oe(ce,o,f,a);s(G),g(C);const se=Ae(G);r(le=>$e(le,se),{preventScrollReset:!0,replace:!0})},[a,o,r]),oe=m.useMemo(()=>({inputRef:de,searchInput:u,selectedFilters:o,setSelectedFilters:Q,setSearchInput:f,selectedTypeaheadIndex:y,setSelectedTypeaheadIndex:g,customBackgroundColor:i?t:void 0,eventLogger:x}),[u,o,Q,y,i,t,x]);return ue.jsx(re.Provider,{value:oe,children:e})},qe=e=>e.__typename==="ProductSearchModuleSearchTermList",nn=e=>(e==null?void 0:e.__typename)==="ProductSearchModuleSearchTermList",tn=e=>e.__typename==="SearchTerm",an=e=>e.__typename==="TermListProduct",rn=e=>e.__typename==="TermListCollection",Ve=e=>e.__typename==="ProductSearchModuleProductRail",xe=e=>e.__typename==="ProductSearchModuleProductList",Qe=e=>e.__typename==="ProductSearchModuleActionTrain",dn=e=>e.__typename==="ProductSearchModuleActionTrainButton",on=e=>e.__typename in ae,cn=(e,n)=>{try{return new URL(e).searchParams.get(n)||""}catch{return""}},sn=(e,n,i="")=>({query:l,variables:{brokerId:e,first:20,sessionId:(n==null?void 0:n.id)??"",query:i}}),ln=({key:e,currentIndex:n,listLength:i})=>e==="ArrowUp"?n===C?i-1:n-1:e==="ArrowDown"?n===i-1?0:n+1:n;export{C as D,en as S,tn as a,sn as b,Ke as c,R as d,dn as e,an as f,rn as g,ln as h,nn as i,qe as j,Ve as k,xe as l,Qe as m,on as n,Ye as o,cn as p,Xe as q,Ze as u};
//# sourceMappingURL=util-DzDg4dJI.js.map
