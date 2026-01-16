import{r as N}from"./chunk-DQRVZFIR-mrH3D8v7.js";import{u as Re}from"./useActions-CMwTuc_r.js";import{u as He}from"./updatePaginatedQuery-sQa1HKQl.js";import{a as qe,u as Te}from"./AuthenticationProvider-9RtBMSxF.js";import{b as Oe,c as xe,e as Ce,f as Ie,g as Ve,h as Qe,i as Ae,j as Pe,a as Le,d as Me,k as Ge}from"./ShelfSectionFragment-junY_xzu.js";import{t as je,x as ze,v as Ue,u as _e}from"./toFeedSection-HH8g53oo.js";import{N as V}from"./UserQuery-BcvHLWZm.js";var be=(e=>(e.INVALID_ARGUMENTS="INVALID_ARGUMENTS",e.SESSION_EXPIRED="SESSION_EXPIRED",e))(be||{}),s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SingleSection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SingleSection"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"displayHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionDisplayHints"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"header"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionHeader"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"footer"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionFooter"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"underlay"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionUnderlay"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"metadata"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionMetadata"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"subject"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subjectId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subjectKind"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ShopSubject"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ResourceAction"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"item"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedContent"},directives:[]}]}}]}}],loc:{start:0,end:727}};s.loc.source={body:`#import "./SectionHeaderFragment.graphql"
#import "./SectionFooterFragment.graphql"
#import "./FeedContentFragment.graphql"
#import "./SectionMetadataFragment.graphql"
#import "./ShopSubjectFragment.graphql"
#import "./SectionDisplayHintsFragment.graphql"
#import "./ResourceActionFragment.graphql"
#import "./SectionUnderlayFragment.graphql"

fragment SingleSection on SingleSection {
  id
  displayHints {
    ...SectionDisplayHints
  }
  header {
    ...SectionHeader
  }
  footer {
    ...SectionFooter
  }
  underlay {
    ...SectionUnderlay
  }
  metadata {
    ...SectionMetadata
  }
  subject {
    subjectId
    subjectKind
    ...ShopSubject
  }
  action {
    ...ResourceAction
  }
  item {
    ...FeedContent
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var fe={};function k(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return fe[i]?!1:(fe[i]=!0,!0)})}s.definitions=s.definitions.concat(k(Oe.definitions));s.definitions=s.definitions.concat(k(xe.definitions));s.definitions=s.definitions.concat(k(Ce.definitions));s.definitions=s.definitions.concat(k(Ie.definitions));s.definitions=s.definitions.concat(k(Ve.definitions));s.definitions=s.definitions.concat(k(Qe.definitions));s.definitions=s.definitions.concat(k(Ae.definitions));s.definitions=s.definitions.concat(k(Pe.definitions));function y(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){y(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){y(t,n)}),e.definitions&&e.definitions.forEach(function(t){y(t,n)})}var Q={};(function(){s.definitions.forEach(function(n){if(n.name){var i=new Set;y(n,i),Q[n.name.value]=i}})})();function le(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Xe(e,n){var i={kind:e.kind,definitions:[le(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=Q[n]||new Set,c=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var o=r;r=new Set,o.forEach(function(a){if(!c.has(a)){c.add(a);var d=Q[a]||new Set;d.forEach(function(f){r.add(f)})}})}return c.forEach(function(a){var d=le(e,a);d&&i.definitions.push(d)}),i}Xe(s,"SingleSection");var u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedSection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FeedSection"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ListSection"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ShelfSection"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"SingleSection"},directives:[]}]}}],loc:{start:0,end:218}};u.loc.source={body:`#import "./ListSectionFragment.graphql"
#import "./ShelfSectionFragment.graphql"
#import "./SingleSectionFragment.graphql"

fragment FeedSection on FeedSection {
  ...ListSection
  ...ShelfSection
  ...SingleSection
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ue={};function U(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return ue[i]?!1:(ue[i]=!0,!0)})}u.definitions=u.definitions.concat(U(Le.definitions));u.definitions=u.definitions.concat(U(Me.definitions));u.definitions=u.definitions.concat(U(s.definitions));function E(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){E(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){E(t,n)}),e.definitions&&e.definitions.forEach(function(t){E(t,n)})}var A={};(function(){u.definitions.forEach(function(n){if(n.name){var i=new Set;E(n,i),A[n.name.value]=i}})})();function me(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Be(e,n){var i={kind:e.kind,definitions:[me(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=A[n]||new Set,c=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var o=r;r=new Set,o.forEach(function(a){if(!c.has(a)){c.add(a);var d=A[a]||new Set;d.forEach(function(f){r.add(f)})}})}return c.forEach(function(a){var d=me(e,a);d&&i.definitions.push(d)}),i}Be(u,"FeedSection");var q={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CategoryFeedHeader"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CategoryFeedHeader"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"breadcrumbs"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Label"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ResourceAction"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"category"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"categoryGid"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasChildren"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"canonicalUrl"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:249}};q.loc.source={body:`fragment CategoryFeedHeader on CategoryFeedHeader {
  breadcrumbs {
    ... on Label {
      text
    }
    ... on ResourceAction {
      label
      url
    }
  }
  title
  category {
    name
    categoryGid
    hasChildren
    canonicalUrl
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function w(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){w(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){w(t,n)}),e.definitions&&e.definitions.forEach(function(t){w(t,n)})}var P={};(function(){q.definitions.forEach(function(n){if(n.name){var i=new Set;w(n,i),P[n.name.value]=i}})})();function ve(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Ke(e,n){var i={kind:e.kind,definitions:[ve(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=P[n]||new Set,c=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var o=r;r=new Set,o.forEach(function(a){if(!c.has(a)){c.add(a);var d=P[a]||new Set;d.forEach(function(f){r.add(f)})}})}return c.forEach(function(a){var d=ve(e,a);d&&i.definitions.push(d)}),i}Ke(q,"CategoryFeedHeader");var T={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"TextFeedHeader"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"TextFeedHeader"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}],loc:{start:0,end:54}};T.loc.source={body:`fragment TextFeedHeader on TextFeedHeader {
  title
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function b(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){b(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){b(t,n)}),e.definitions&&e.definitions.forEach(function(t){b(t,n)})}var L={};(function(){T.definitions.forEach(function(n){if(n.name){var i=new Set;b(n,i),L[n.name.value]=i}})})();function ke(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Je(e,n){var i={kind:e.kind,definitions:[ke(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=L[n]||new Set,c=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var o=r;r=new Set,o.forEach(function(a){if(!c.has(a)){c.add(a);var d=L[a]||new Set;d.forEach(function(f){r.add(f)})}})}return c.forEach(function(a){var d=ke(e,a);d&&i.definitions.push(d)}),i}Je(T,"TextFeedHeader");var g={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ShoppingEventFeedHeader"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShoppingEventFeedHeader"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shoppingEvent"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ShoppingEvent"},directives:[]}]}}]}}],loc:{start:0,end:150}};g.loc.source={body:`#import "./ShoppingEventFragment.graphql"

fragment ShoppingEventFeedHeader on ShoppingEventFeedHeader {
  shoppingEvent {
    ...ShoppingEvent
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Se={};function We(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Se[i]?!1:(Se[i]=!0,!0)})}g.definitions=g.definitions.concat(We(Ge.definitions));function D(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){D(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){D(t,n)}),e.definitions&&e.definitions.forEach(function(t){D(t,n)})}var M={};(function(){g.definitions.forEach(function(n){if(n.name){var i=new Set;D(n,i),M[n.name.value]=i}})})();function ge(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Ye(e,n){var i={kind:e.kind,definitions:[ge(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=M[n]||new Set,c=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var o=r;r=new Set,o.forEach(function(a){if(!c.has(a)){c.add(a);var d=M[a]||new Set;d.forEach(function(f){r.add(f)})}})}return c.forEach(function(a){var d=ge(e,a);d&&i.definitions.push(d)}),i}Ye(g,"ShoppingEventFeedHeader");var m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedHeader"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FeedHeader"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CategoryFeedHeader"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"TextFeedHeader"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ShoppingEventFeedHeader"},directives:[]}]}}],loc:{start:0,end:254}};m.loc.source={body:`#import "./CategoryFeedHeaderFragment.graphql"
#import "./TextFeedHeaderFragment.graphql"
#import "./ShoppingEventFeedHeaderFragment.graphql"

fragment FeedHeader on FeedHeader {
  ...CategoryFeedHeader
  ...TextFeedHeader
  ...ShoppingEventFeedHeader
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var pe={};function _(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return pe[i]?!1:(pe[i]=!0,!0)})}m.definitions=m.definitions.concat(_(q.definitions));m.definitions=m.definitions.concat(_(T.definitions));m.definitions=m.definitions.concat(_(g.definitions));function $(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){$(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){$(t,n)}),e.definitions&&e.definitions.forEach(function(t){$(t,n)})}var G={};(function(){m.definitions.forEach(function(n){if(n.name){var i=new Set;$(n,i),G[n.name.value]=i}})})();function he(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Ze(e,n){var i={kind:e.kind,definitions:[he(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=G[n]||new Set,c=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var o=r;r=new Set,o.forEach(function(a){if(!c.has(a)){c.add(a);var d=G[a]||new Set;d.forEach(function(f){r.add(f)})}})}return c.forEach(function(a){var d=he(e,a);d&&i.definitions.push(d)}),i}Ze(m,"FeedHeader");var v={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Feed"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Feed"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"header"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedHeader"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"sections"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"Variable",name:{kind:"Name",value:"first"}}},{kind:"Argument",name:{kind:"Name",value:"after"},value:{kind:"Variable",name:{kind:"Name",value:"after"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedSection"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"endCursor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"errors"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:321}};v.loc.source={body:`#import "./FeedSectionFragment.graphql"
#import "./FeedHeaderFragment.graphql"

fragment Feed on Feed {
  id
  header {
    ...FeedHeader
  }
  sections(first: $first, after: $after) {
    nodes {
      ...FeedSection
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  errors {
    code
    message
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Fe={};function De(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Fe[i]?!1:(Fe[i]=!0,!0)})}v.definitions=v.definitions.concat(De(u.definitions));v.definitions=v.definitions.concat(De(m.definitions));function R(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){R(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){R(t,n)}),e.definitions&&e.definitions.forEach(function(t){R(t,n)})}var j={};(function(){v.definitions.forEach(function(n){if(n.name){var i=new Set;R(n,i),j[n.name.value]=i}})})();function Ne(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function en(e,n){var i={kind:e.kind,definitions:[Ne(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=j[n]||new Set,c=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var o=r;r=new Set,o.forEach(function(a){if(!c.has(a)){c.add(a);var d=j[a]||new Set;d.forEach(function(f){r.add(f)})}})}return c.forEach(function(a){var d=Ne(e,a);d&&i.definitions.push(d)}),i}en(v,"Feed");var p={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"FeedQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"args"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"first"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"after"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"itemsAfter"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"feed"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"Argument",name:{kind:"Name",value:"args"},value:{kind:"Variable",name:{kind:"Name",value:"args"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"Feed"},directives:[]}]}}]}}],loc:{start:0,end:192}};p.loc.source={body:`#import "./FeedFragment.graphql"

query FeedQuery(
  $id: ID!
  $args: String
  $first: Int!
  $after: String
  $itemsAfter: String
) {
  feed(id: $id, args: $args) {
    id
    ...Feed
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ye={};function nn(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return ye[i]?!1:(ye[i]=!0,!0)})}p.definitions=p.definitions.concat(nn(v.definitions));function H(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){H(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){H(t,n)}),e.definitions&&e.definitions.forEach(function(t){H(t,n)})}var z={};(function(){p.definitions.forEach(function(n){if(n.name){var i=new Set;H(n,i),z[n.name.value]=i}})})();function Ee(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function tn(e,n){var i={kind:e.kind,definitions:[Ee(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=z[n]||new Set,c=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var o=r;r=new Set,o.forEach(function(a){if(!c.has(a)){c.add(a);var d=z[a]||new Set;d.forEach(function(f){r.add(f)})}})}return c.forEach(function(a){var d=Ee(e,a);d&&i.definitions.push(d)}),i}tn(p,"FeedQuery");function we(e){return e==null?void 0:e.some(n=>n.code===be.SESSION_EXPIRED)}function ln({id:e,pageSize:n=10,moreSize:i=6,queryOptions:t,args:c,fetchPolicy:r="cache-first"}){var Y,Z,ee,ne,ie,te,ae;const{data:o,loading:a,networkStatus:d,refetch:f,fetchMore:$e,error:X}=qe(p,{fetchPolicy:r,variables:{id:e,args:c,first:n},notifyOnNetworkStatusChange:!0,...t}),{isLoggedIn:B}=Te(),h=N.useMemo(()=>{var l,F;return je((F=(l=o==null?void 0:o.feed)==null?void 0:l.sections)==null?void 0:F.nodes,{isLoggedIn:B})},[(Z=(Y=o==null?void 0:o.feed)==null?void 0:Y.sections)==null?void 0:Z.nodes,B]),O=d===V.refetch,K=!!(a&&d!==V.fetchMore&&!O&&!(h!=null&&h.length)),x=N.useRef(!1),J=!!((ie=(ne=(ee=o==null?void 0:o.feed)==null?void 0:ee.sections)==null?void 0:ne.pageInfo)!=null&&ie.hasNextPage),{send:C}=Re(()=>({async fetchMore(){var re,oe,de,ce,se;if(!((de=(oe=(re=o==null?void 0:o.feed)==null?void 0:re.sections)==null?void 0:oe.pageInfo)!=null&&de.endCursor)||d===V.fetchMore||x.current)return;const{hasNextPage:l,endCursor:F}=(ce=o==null?void 0:o.feed)==null?void 0:ce.sections.pageInfo;if(l&&F){x.current=!0;const{data:I}=await $e({variables:{id:e,first:i,after:F},updateQuery:He("feed.sections")}).finally(()=>{x.current=!1});we((se=I==null?void 0:I.feed)==null?void 0:se.errors)&&f()}},refetch(){f()}}));N.useEffect(()=>{var l;we((l=o==null?void 0:o.feed)==null?void 0:l.errors)&&C.refetch()});const S=(te=o==null?void 0:o.feed)!=null&&te.header&&ze(o.feed.header)?o.feed.header:void 0,W=S&&(Ue(S)||_e(S))?S.title:void 0;return N.useMemo(()=>{var l;return{loading:K,error:X,hasNextPage:J,sections:h,feedId:((l=o==null?void 0:o.feed)==null?void 0:l.id)||void 0,refetching:O,networkStatus:d,queryActions:C,header:S,title:W}},[K,X,J,h,(ae=o==null?void 0:o.feed)==null?void 0:ae.id,O,d,C,S,W])}export{ln as u};
//# sourceMappingURL=useFeedQuery-7eKv811Z.js.map
