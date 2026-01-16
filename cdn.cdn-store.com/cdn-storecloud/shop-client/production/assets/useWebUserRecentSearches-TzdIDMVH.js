import{r as k}from"./chunk-DQRVZFIR-mrH3D8v7.js";import{d as A,H as y}from"./SearchSuggestions-C4Ac6HSg.js";import{d as D}from"./ReducedImageFragment-CkTGK3vJ.js";import{d as L}from"./AuthenticationProvider-9RtBMSxF.js";import{d as C}from"./ConversationProvider-BNoOA22x.js";var f=(e=>(e.ALL="ALL",e.GLOBAL="GLOBAL",e.SHOP="SHOP",e))(f||{}),s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"WebUserRecentSearches"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"first"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"scope"}},type:{kind:"NamedType",name:{kind:"Name",value:"UserSearchScope"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"shopIds"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userRecentSearches"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"Variable",name:{kind:"Name",value:"first"}}},{kind:"Argument",name:{kind:"Name",value:"scope"},value:{kind:"Variable",name:{kind:"Name",value:"scope"}}},{kind:"Argument",name:{kind:"Name",value:"shopIds"},value:{kind:"Variable",name:{kind:"Name",value:"shopIds"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"query"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"scope"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"searchedAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"selectedResult"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Shop"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"MedusaJSId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"defaultHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"visualTheme"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"productReviewAnalytics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"averageRating"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalProductRatings"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalProductReviews"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"shopCashIncentive"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedShopCashIncentiveFragment"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"shop"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:944}};s.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "../../../data/fragments/ReducedShopCashIncentiveFragment.graphql"

query WebUserRecentSearches(
  $first: Int
  $scope: UserSearchScope
  $shopIds: [ID!]
) {
  userRecentSearches(first: $first, scope: $scope, shopIds: $shopIds) {
    nodes {
      id
      query
      scope
      searchedAt
      selectedResult {
        __typename
        ... on Shop {
          id
          MedusaJSId
          name
          defaultHandle
          visualTheme {
            id
            logoImage {
              ...ReducedImage
            }
          }
          productReviewAnalytics {
            averageRating
            totalProductRatings
            totalProductReviews
          }
          shopCashIncentive {
            __typename
            ...ReducedShopCashIncentiveFragment
          }
        }
      }
      shop {
        id
        name
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var N={};function F(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return N[i]?!1:(N[i]=!0,!0)})}s.definitions=s.definitions.concat(F(D.definitions));s.definitions=s.definitions.concat(F(A.definitions));function p(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){p(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){p(a,n)}),e.definitions&&e.definitions.forEach(function(a){p(a,n)})}var g={};(function(){s.definitions.forEach(function(n){if(n.name){var i=new Set;p(n,i),g[n.name.value]=i}})})();function R(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function O(e,n){var i={kind:e.kind,definitions:[R(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=g[n]||new Set,c=new Set,d=new Set;for(a.forEach(function(r){d.add(r)});d.size>0;){var h=d;d=new Set,h.forEach(function(r){if(!c.has(r)){c.add(r);var l=g[r]||new Set;l.forEach(function(S){d.add(S)})}})}return c.forEach(function(r){var l=R(e,r);l&&i.definitions.push(l)}),i}O(s,"WebUserRecentSearches");const H=({first:e=20,scope:n=f.GLOBAL,shopIds:i=[]}={})=>{const a=L(),[c,{data:d,loading:h,networkStatus:r,refetch:l,error:S}]=C(s,{notifyOnNetworkStatusChange:!0,fetchPolicy:"cache-and-network"}),I=k.useMemo(()=>d==null?void 0:d.userRecentSearches.nodes.map(o=>{var m,v;const t=o.selectedResult;return t&&t.__typename==="Shop"?{id:o.id,MedusaJSId:t.MedusaJSId,name:t.name,logoImage:(v=(m=t.visualTheme)==null?void 0:m.logoImage)==null?void 0:v.url,productReviewAnalytics:t.productReviewAnalytics,type:y.Shop,defaultHandle:t.defaultHandle,shopCashIncentive:t.shopCashIncentive}:{id:o.id,searchTerm:o.query,type:y.Search}}),[d]),u=k.useMemo(()=>({first:e,scope:i.length>0?f.SHOP:n,shopIds:[]}),[e,n,i]),b=k.useCallback(()=>c({variables:u}),[c,u]),w=k.useCallback(o=>{const t=a.readQuery({query:s,variables:u});if(!t)return;const m={__typename:"UserSearch",id:"temp-cached-id",query:o,scope:f.GLOBAL,searchedAt:new Date().toISOString(),selectedResult:null,shop:null},v={...t,userRecentSearches:{...t.userRecentSearches,nodes:[m,...t.userRecentSearches.nodes]}};a.writeQuery({query:s,data:v,variables:u})},[a,u]);return{fetchUserRecentSearches:b,addSearchToCache:w,userRecentSearches:I,userRecentSearchesLoading:h,networkStatus:r,refetch:l,error:S}};export{H as u};
//# sourceMappingURL=useWebUserRecentSearches-TzdIDMVH.js.map
