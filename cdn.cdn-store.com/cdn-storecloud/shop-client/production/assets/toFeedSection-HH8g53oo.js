import{d as E}from"./ReducedImageFragment-CkTGK3vJ.js";import{d as te}from"./MoneyV2Fragment-XdlHnX2E.js";import{d as Te,f as T,a as ze}from"./MoneyUtils-CzooDnh_.js";import{d as m}from"./FilterUtils-8PUBFIQ_.js";import{i as l}from"./i18nConfig-CLr-UH7w.js";import{o as je}from"./omit-VCSIUI82.js";var O=(e=>(e.BOLD="BOLD",e.ITALIC="ITALIC",e.STRIKETHROUGH="STRIKETHROUGH",e.UNDERLINE="UNDERLINE",e))(O||{}),_=(e=>(e.HORIZONTAL="HORIZONTAL",e.LAST_PURCHASED="LAST_PURCHASED",e.PRICE="PRICE",e.REVIEWS="REVIEWS",e.SHOP_NAME="SHOP_NAME",e.TITLE="TITLE",e))(_||{}),F=(e=>(e.BOTTOM_LEFT="BOTTOM_LEFT",e.BOTTOM_RIGHT="BOTTOM_RIGHT",e.CORNER_RIGHT="CORNER_RIGHT",e.TOP_LEFT="TOP_LEFT",e.TOP_RIGHT="TOP_RIGHT",e))(F||{}),S=(e=>(e.ADD_TO_CART="ADD_TO_CART",e.ADD_TO_PRODUCT_LIST="ADD_TO_PRODUCT_LIST",e.AUTOMATIC_DISCOUNT="AUTOMATIC_DISCOUNT",e.DISCOUNT="DISCOUNT",e.FAVOURITE="FAVOURITE",e.LABEL="LABEL",e.OFFER="OFFER",e.PRICE="PRICE",e.QUANTITY="QUANTITY",e.REMOVE="REMOVE",e.SHOP_CASH="SHOP_CASH",e.SHOP_CASH_BACK="SHOP_CASH_BACK",e))(S||{}),_e=(e=>(e.PANCAKE_STACK_VERTICAL="PANCAKE_STACK_VERTICAL",e))(_e||{}),u=(e=>(e.ADD_TO_CART="ADD_TO_CART",e.BULLET_LIST="BULLET_LIST",e.CATEGORIES="CATEGORIES",e.DEALS="DEALS",e.DOWN_ARROW="DOWN_ARROW",e.FOLLOWING="FOLLOWING",e.GOOGLE_COLORED="GOOGLE_COLORED",e.INFO="INFO",e.MUTE="MUTE",e.NOT_INTERESTED="NOT_INTERESTED",e.NOTIFICATIONS="NOTIFICATIONS",e.OUTLOOK="OUTLOOK",e.PROFILE="PROFILE",e.PROMOTIONS="PROMOTIONS",e.REMOVE="REMOVE",e.SAVED="SAVED",e.SEARCH="SEARCH",e.THREAD="THREAD",e))(u||{}),De=(e=>(e.AMOUNTS_HIDDEN="AMOUNTS_HIDDEN",e.AMOUNTS_VISIBLE="AMOUNTS_VISIBLE",e))(De||{}),N={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BrandSettings"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"BrandSettings"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"colors"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"primary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"secondary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"secondaryText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"statusBarStyle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoAverage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoDominant"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coverDominant"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"logos"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbhash"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"headerTheme"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coverImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbhash"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"thumbnailImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbhash"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"wordmark"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]},{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"videoUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startingScrimColor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endingScrimColor"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:612}};N.loc.source={body:`#import "./ReducedImageFragment.graphql"

fragment BrandSettings on BrandSettings {
  id
  colors {
    id
    primary
    secondary
    secondaryText
    statusBarStyle
    logoAverage
    logoDominant
    coverDominant
  }
  logos {
    id
    logoImage {
      ...ReducedImage
      thumbhash
    }
  }
  headerTheme {
    id
    coverImage {
      ...ReducedImage
      thumbhash
      __typename
    }
    thumbnailImage {
      ...ReducedImage
      thumbhash
      __typename
    }
    wordmark {
      ...ReducedImage
      __typename
    }
    videoUrl
    startingScrimColor
    endingScrimColor
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var oe={};function Ke(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return oe[i]?!1:(oe[i]=!0,!0)})}N.definitions=N.definitions.concat(Ke(E.definitions));function D(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){D(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){D(a,n)}),e.definitions&&e.definitions.forEach(function(a){D(a,n)})}var z={};(function(){N.definitions.forEach(function(n){if(n.name){var i=new Set;D(n,i),z[n.name.value]=i}})})();function ce(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function Ye(e,n){var i={kind:e.kind,definitions:[ce(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=z[n]||new Set,d=new Set,r=new Set;for(a.forEach(function(t){r.add(t)});r.size>0;){var o=r;r=new Set,o.forEach(function(t){if(!d.has(t)){d.add(t);var s=z[t]||new Set;s.forEach(function(c){r.add(c)})}})}return d.forEach(function(t){var s=ce(e,t);s&&i.definitions.push(s)}),i}Ye(N,"BrandSettings");var C={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"VisualThemeLogoImage"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"VisualTheme"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}}]}}],loc:{start:0,end:162}};C.loc.source={body:`#import "./ReducedImageFragment.graphql"

fragment VisualThemeLogoImage on VisualTheme {
  __typename
  id
  logoImage {
    __typename
    ...ReducedImage
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ue={};function Xe(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return ue[i]?!1:(ue[i]=!0,!0)})}C.definitions=C.definitions.concat(Xe(E.definitions));function A(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){A(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){A(a,n)}),e.definitions&&e.definitions.forEach(function(a){A(a,n)})}var j={};(function(){C.definitions.forEach(function(n){if(n.name){var i=new Set;A(n,i),j[n.name.value]=i}})})();function le(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function Ze(e,n){var i={kind:e.kind,definitions:[le(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=j[n]||new Set,d=new Set,r=new Set;for(a.forEach(function(t){r.add(t)});r.size>0;){var o=r;r=new Set,o.forEach(function(t){if(!d.has(t)){d.add(t);var s=j[t]||new Set;s.forEach(function(c){r.add(c)})}})}return d.forEach(function(t){var s=le(e,t);s&&i.definitions.push(s)}),i}Ze(C,"VisualThemeLogoImage");var k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"VisualTheme"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"VisualTheme"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"VisualThemeLogoImage"},directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"brandSettings"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BrandSettings"},directives:[]}]}}]}}],loc:{start:0,end:299}};k.loc.source={body:`#import "./ReducedImageFragment.graphql"
#import "./BrandSettingsFragment.graphql"
#import "./VisualThemeLogoImageFragment.graphql"

fragment VisualTheme on VisualTheme {
  id
  heroImage {
    ...ReducedImage
  }
  ...VisualThemeLogoImage
  description
  brandSettings {
    ...BrandSettings
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var me={};function re(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return me[i]?!1:(me[i]=!0,!0)})}k.definitions=k.definitions.concat(re(E.definitions));k.definitions=k.definitions.concat(re(N.definitions));k.definitions=k.definitions.concat(re(C.definitions));function b(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){b(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){b(a,n)}),e.definitions&&e.definitions.forEach(function(a){b(a,n)})}var K={};(function(){k.definitions.forEach(function(n){if(n.name){var i=new Set;b(n,i),K[n.name.value]=i}})})();function fe(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function Je(e,n){var i={kind:e.kind,definitions:[fe(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=K[n]||new Set,d=new Set,r=new Set;for(a.forEach(function(t){r.add(t)});r.size>0;){var o=r;r=new Set,o.forEach(function(t){if(!d.has(t)){d.add(t);var s=K[t]||new Set;s.forEach(function(c){r.add(c)})}})}return d.forEach(function(t){var s=fe(e,t);s&&i.definitions.push(s)}),i}Je(k,"VisualTheme");var p={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AutomaticDiscount"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AutomaticDiscount"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"constraints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shortDescription"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"discountAmount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"discountClass"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"discountPercentage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"discountType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"minimumRequirementAmount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"minimumRequirementQuantity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"minimumRequirementType"},arguments:[],directives:[]}]}}],loc:{start:0,end:373}};p.loc.source={body:`#import "./MoneyV2Fragment.graphql"

fragment AutomaticDiscount on AutomaticDiscount {
  id
  constraints {
    text
    type
  }
  description
  shortDescription
  discountAmount {
    ...MoneyV2Fragment
  }
  discountClass
  discountPercentage
  discountType
  minimumRequirementAmount {
    ...MoneyV2Fragment
  }
  minimumRequirementQuantity
  minimumRequirementType
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ve={};function en(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return ve[i]?!1:(ve[i]=!0,!0)})}p.definitions=p.definitions.concat(en(te.definitions));function w(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){w(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){w(a,n)}),e.definitions&&e.definitions.forEach(function(a){w(a,n)})}var Y={};(function(){p.definitions.forEach(function(n){if(n.name){var i=new Set;w(n,i),Y[n.name.value]=i}})})();function ke(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function nn(e,n){var i={kind:e.kind,definitions:[ke(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=Y[n]||new Set,d=new Set,r=new Set;for(a.forEach(function(t){r.add(t)});r.size>0;){var o=r;r=new Set,o.forEach(function(t){if(!d.has(t)){d.add(t);var s=Y[t]||new Set;s.forEach(function(c){r.add(c)})}})}return d.forEach(function(t){var s=ke(e,t);s&&i.definitions.push(s)}),i}nn(p,"AutomaticDiscount");var h={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ProductCardWithoutShopCash"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"DiscoveryProduct"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"numberOfVariants"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"inDefaultProductList"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isProductDiscoveryEligible"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isPublishedToOnlineStoreChannel"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isRestricted"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"referral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"defaultVariantId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shareUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"offers"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AutomaticDiscount"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AutomaticDiscount"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"currencyCode"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"originalPrice"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"currencyCode"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"images"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"reviewAnalytics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"averageRating"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"shop"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"defaultHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nativeProductPagesEnabled"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"MedusaJSId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"followedByMe"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"visualTheme"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"productReviewAnalytics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalProductReviews"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalProductRatings"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"averageRating"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:898}};h.loc.source={body:`#import "./AutomaticDiscountFragment.graphql"
#import "./ReducedImageFragment.graphql"

fragment ProductCardWithoutShopCash on DiscoveryProduct {
  id
  title
  slug
  numberOfVariants
  inDefaultProductList
  isProductDiscoveryEligible
  isPublishedToOnlineStoreChannel
  isRestricted
  referral
  defaultVariantId
  shareUrl
  offers {
    id
    ... on AutomaticDiscount {
      ...AutomaticDiscount
    }
  }
  price {
    amount
    currencyCode
  }
  originalPrice {
    amount
    currencyCode
  }
  url
  images {
    ...ReducedImage
  }
  reviewAnalytics {
    averageRating
    count
  }
  shop {
    id
    name
    defaultHandle
    nativeProductPagesEnabled
    MedusaJSId
    followedByMe
    visualTheme {
      id
      logoImage {
        ...ReducedImage
      }
    }
    productReviewAnalytics {
      totalProductReviews
      totalProductRatings
      averageRating
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ge={};function Ae(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return ge[i]?!1:(ge[i]=!0,!0)})}h.definitions=h.definitions.concat(Ae(p.definitions));h.definitions=h.definitions.concat(Ae(E.definitions));function I(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){I(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){I(a,n)}),e.definitions&&e.definitions.forEach(function(a){I(a,n)})}var X={};(function(){h.definitions.forEach(function(n){if(n.name){var i=new Set;I(n,i),X[n.name.value]=i}})})();function Se(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function an(e,n){var i={kind:e.kind,definitions:[Se(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=X[n]||new Set,d=new Set,r=new Set;for(a.forEach(function(t){r.add(t)});r.size>0;){var o=r;r=new Set,o.forEach(function(t){if(!d.has(t)){d.add(t);var s=X[t]||new Set;s.forEach(function(c){r.add(c)})}})}return d.forEach(function(t){var s=Se(e,t);s&&i.definitions.push(s)}),i}an(h,"ProductCardWithoutShopCash");var H={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AdMetadata"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopAdMetadata"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"adResponseId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"adType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"campaignCountryCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"campaignHandle"},arguments:[],directives:[]}]}}],loc:{start:0,end:105}};H.loc.source={body:`fragment AdMetadata on ShopAdMetadata {
  adResponseId
  adType
  campaignCountryCode
  campaignHandle
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function P(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){P(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){P(a,n)}),e.definitions&&e.definitions.forEach(function(a){P(a,n)})}var Z={};(function(){H.definitions.forEach(function(n){if(n.name){var i=new Set;P(n,i),Z[n.name.value]=i}})})();function he(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function tn(e,n){var i={kind:e.kind,definitions:[he(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=Z[n]||new Set,d=new Set,r=new Set;for(a.forEach(function(t){r.add(t)});r.size>0;){var o=r;r=new Set,o.forEach(function(t){if(!d.has(t)){d.add(t);var s=Z[t]||new Set;s.forEach(function(c){r.add(c)})}})}return d.forEach(function(t){var s=he(e,t);s&&i.definitions.push(s)}),i}tn(H,"AdMetadata");var g={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ShopCashIncentiveFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopCashIncentive"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopCashOffer"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"minimumOrderValue"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"totalCashDestinationAmount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"adMetadata"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AdMetadata"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"adDisplayType"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopCashCashbackIncentive"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"maxApplicableOrderAmount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"ratePercentage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"adMetadata"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AdMetadata"},directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FlatAmountCashbackOffer"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"adMetadata"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AdMetadata"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"cashbackAmount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"minimumOrderValue"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"adDisplayType"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:909}};g.loc.source={body:`#import "../fragments/MoneyV2Fragment.graphql"
#import "../fragments/AdMetadataFragment.graphql"

fragment ShopCashIncentiveFragment on ShopCashIncentive {
  ... on ShopCashOffer {
    # Note: do not include \`id\` field here, or the apollo InMemoryCache will not recognize the full objects as unique on a per-shop basis, breaking unique ad reporting
    minimumOrderValue {
      ...MoneyV2Fragment
    }
    totalCashDestinationAmount {
      ...MoneyV2Fragment
    }
    adMetadata {
      ...AdMetadata
    }
    adDisplayType
  }

  ... on ShopCashCashbackIncentive {
    maxApplicableOrderAmount {
      ...MoneyV2Fragment
    }
    ratePercentage
    adMetadata {
      ...AdMetadata
    }
  }

  ... on FlatAmountCashbackOffer {
    adMetadata {
      ...AdMetadata
    }
    cashbackAmount {
      ...MoneyV2Fragment
    }
    minimumOrderValue {
      ...MoneyV2Fragment
    }
    adDisplayType
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var pe={};function be(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return pe[i]?!1:(pe[i]=!0,!0)})}g.definitions=g.definitions.concat(be(te.definitions));g.definitions=g.definitions.concat(be(H.definitions));function L(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){L(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){L(a,n)}),e.definitions&&e.definitions.forEach(function(a){L(a,n)})}var J={};(function(){g.definitions.forEach(function(n){if(n.name){var i=new Set;L(n,i),J[n.name.value]=i}})})();function Fe(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function rn(e,n){var i={kind:e.kind,definitions:[Fe(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=J[n]||new Set,d=new Set,r=new Set;for(a.forEach(function(t){r.add(t)});r.size>0;){var o=r;r=new Set,o.forEach(function(t){if(!d.has(t)){d.add(t);var s=J[t]||new Set;s.forEach(function(c){r.add(c)})}})}return d.forEach(function(t){var s=Fe(e,t);s&&i.definitions.push(s)}),i}rn(g,"ShopCashIncentiveFragment");var f={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ProductCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"DiscoveryProduct"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ProductCardWithoutShopCash"},directives:[]},{kind:"Field",name:{kind:"Name",value:"shopCashIncentive"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ShopCashIncentiveFragment"},directives:[]}]}}]}}],loc:{start:0,end:325}};f.loc.source={body:`#import "./AutomaticDiscountFragment.graphql"
#import "./ReducedImageFragment.graphql"
#import "./ProductCardWithoutShopCashFragment.graphql"
#import "./ShopCashIncentiveFragment.graphql"

fragment ProductCard on DiscoveryProduct {
  ...ProductCardWithoutShopCash
  shopCashIncentive {
    ...ShopCashIncentiveFragment
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Ne={};function x(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Ne[i]?!1:(Ne[i]=!0,!0)})}f.definitions=f.definitions.concat(x(p.definitions));f.definitions=f.definitions.concat(x(E.definitions));f.definitions=f.definitions.concat(x(h.definitions));f.definitions=f.definitions.concat(x(g.definitions));function V(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){V(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){V(a,n)}),e.definitions&&e.definitions.forEach(function(a){V(a,n)})}var ee={};(function(){f.definitions.forEach(function(n){if(n.name){var i=new Set;V(n,i),ee[n.name.value]=i}})})();function Ce(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function dn(e,n){var i={kind:e.kind,definitions:[Ce(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=ee[n]||new Set,d=new Set,r=new Set;for(a.forEach(function(t){r.add(t)});r.size>0;){var o=r;r=new Set,o.forEach(function(t){if(!d.has(t)){d.add(t);var s=ee[t]||new Set;s.forEach(function(c){r.add(c)})}})}return d.forEach(function(t){var s=Ce(e,t);s&&i.definitions.push(s)}),i}dn(f,"ProductCard");var U={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"DiscountOffer"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"DiscountOffer"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"discount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shortDescription"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"conditions"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:227}};U.loc.source={body:`fragment DiscountOffer on DiscountOffer {
  id
  __typename
  text
  image {
    width
    height
    url
  }
  discount {
    id
    code
    description
    shortDescription
    conditions {
      text
      type
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function M(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){M(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){M(a,n)}),e.definitions&&e.definitions.forEach(function(a){M(a,n)})}var ne={};(function(){U.definitions.forEach(function(n){if(n.name){var i=new Set;M(n,i),ne[n.name.value]=i}})})();function Re(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function sn(e,n){var i={kind:e.kind,definitions:[Re(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=ne[n]||new Set,d=new Set,r=new Set;for(a.forEach(function(t){r.add(t)});r.size>0;){var o=r;r=new Set,o.forEach(function(t){if(!d.has(t)){d.add(t);var s=ne[t]||new Set;s.forEach(function(c){r.add(c)})}})}return d.forEach(function(t){var s=Re(e,t);s&&i.definitions.push(s)}),i}sn(U,"DiscountOffer");var v={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"DiscoveryProductFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"DiscoveryProduct"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isPublishedToOnlineStoreChannel"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"originalPrice"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"referral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"images"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sensitive"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"offers"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"DiscountOffer"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"DiscountOffer"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"shopCashIncentive"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ShopCashIncentiveFragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"defaultVariantId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"inDefaultProductList"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isRestricted"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shop"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"defaultHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"MedusaJSId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nativeProductPagesEnabled"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"followedByMe"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"productReviewAnalytics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalProductReviews"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalProductRatings"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"averageRating"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"contacts"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"method"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"methodTarget"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"businessAddress"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"formatted"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"orderCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"visualTheme"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"reviewAnalytics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"averageRating"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:1181}};v.loc.source={body:`#import "../../../../data/fragments/MoneyV2Fragment.graphql"
#import "../../../../data/fragments/ShopCashIncentiveFragment.graphql"
#import "../../../../data/fragments/ReducedImageFragment.graphql"
#import "./DiscountOfferFragment.graphql"

fragment DiscoveryProductFragment on DiscoveryProduct {
  id
  isPublishedToOnlineStoreChannel
  price {
    ...MoneyV2Fragment
  }
  originalPrice {
    ...MoneyV2Fragment
  }
  title
  slug
  referral
  images {
    url
    altText
    sensitive
    width
    height
  }
  offers {
    id
    ... on DiscountOffer {
      ...DiscountOffer
    }
  }
  shopCashIncentive {
    ...ShopCashIncentiveFragment
  }
  defaultVariantId
  inDefaultProductList
  isRestricted
  shop {
    id
    name
    defaultHandle
    MedusaJSId
    nativeProductPagesEnabled
    followedByMe
    productReviewAnalytics {
      totalProductReviews
      totalProductRatings
      averageRating
    }
    contacts {
      id
      method
      methodTarget
    }
    businessAddress {
      formatted
    }
    orderCount
    visualTheme {
      id
      logoImage {
        ...ReducedImage
      }
    }
  }
  reviewAnalytics {
    averageRating
    count
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Ee={};function q(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Ee[i]?!1:(Ee[i]=!0,!0)})}v.definitions=v.definitions.concat(q(te.definitions));v.definitions=v.definitions.concat(q(g.definitions));v.definitions=v.definitions.concat(q(E.definitions));v.definitions=v.definitions.concat(q(U.definitions));function B(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){B(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){B(a,n)}),e.definitions&&e.definitions.forEach(function(a){B(a,n)})}var ie={};(function(){v.definitions.forEach(function(n){if(n.name){var i=new Set;B(n,i),ie[n.name.value]=i}})})();function Oe(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function on(e,n){var i={kind:e.kind,definitions:[Oe(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=ie[n]||new Set,d=new Set,r=new Set;for(a.forEach(function(t){r.add(t)});r.size>0;){var o=r;r=new Set,o.forEach(function(t){if(!d.has(t)){d.add(t);var s=ie[t]||new Set;s.forEach(function(c){r.add(c)})}})}return d.forEach(function(t){var s=Oe(e,t);s&&i.definitions.push(s)}),i}on(v,"DiscoveryProductFragment");const cn=2;var R=(e=>(e[e.ImmediateDiscount=0]="ImmediateDiscount",e[e.EarnShopCash=1]="EarnShopCash",e))(R||{});function we({cashType:e,formattedBoostedCash:n}){switch(e){case R.ImmediateDiscount:return{offerText:l.t("ShopCash.ExclusiveOffers.XOff",{amount:n}),accessibilityLabel:l.t("ShopCash.Worth",{formattedBoostedCash:n})};case R.EarnShopCash:return{offerText:l.t("ShopCash.ExclusiveOffers.EarnFlat",{formattedBoostedCash:n}),accessibilityLabel:l.t("ShopCash.ExclusiveOffers.EarnFlatA11y",{formattedBoostedCash:n})};default:return{offerText:n,accessibilityLabel:n}}}function Ie(e){switch(e==null?void 0:e.__typename){case"ShopCashOffer":case"FlatAmountCashbackOffer":return e.adDisplayType===De.AMOUNTS_HIDDEN;case"ShopCashCashbackIncentive":case"SponsoredAd":case"":case void 0:return!1}}function un({totalCashDestinationAmount:e}){const n=ln(e),i=m(n)?{formattedTotalCashDestinationAmount:n}:null;return{badgeText:m(i)?l.t("ShopCash.ExclusiveOffers.XOff",{amount:i.formattedTotalCashDestinationAmount}):l.t("ProductCard.Badges.Offer"),badgeTextAccessibilityLabel:m(i)?l.t("ShopCash.Worth",{formattedBoostedCash:i.formattedTotalCashDestinationAmount}):l.t("ProductCard.Badges.Offer")}}function ln(e){return m(e)?Te(e):null}function mn({showHiddenValueIncentives:e,shopCashIncentive:n,price:i}){if(Ie(n))return e?{badgeVariant:"cashBack",badgeText:l.t("ShopCash.ExclusiveOffers.OfferAvailable")}:null;switch(n.__typename){case"ShopCashCashbackIncentive":return{badgeVariant:"cashBack",badgeText:l.t("ShopCash.CashBack.ProductFocusedMerchantCardText",{percent:n.ratePercentage}),badgeTextAccessibilityLabel:l.t("ShopCash.CashBack.Title",{percent:n.ratePercentage})};case"ShopCashOffer":{const{totalCashDestinationAmount:a}=n,r=un({totalCashDestinationAmount:a});return m(r)?{badgeVariant:"multiplierFilled",...r}:null}case"FlatAmountCashbackOffer":{const a=Te(n.cashbackAmount),{offerText:d,accessibilityLabel:r}=we({cashType:R.EarnShopCash,formattedBoostedCash:a});return{badgeVariant:"multiplierFilled",badgeText:d,badgeTextAccessibilityLabel:r}}case"":return null}}function Hn(e,n){return e.options.includes(n)}function W(e,n){return e==null?void 0:e.options.includes(n)}const y=(e,n,i)=>e==null?void 0:e.some(a=>a.kind===n&&a.position===i),xn=e=>{let n="",i="caption";return e.includes(O.BOLD)&&(i=fn(i)),e.includes(O.ITALIC)&&(n="italic"),e.includes(O.STRIKETHROUGH)&&(n="line-through"),e.includes(O.UNDERLINE)&&(n="underline"),{className:n,variant:i}},fn=e=>{switch(e){case"caption":return"captionBold";case"bodySmall":return"bodySmallBold";case"bodyLarge":return"bodyLargeBold";default:return e}},Un=e=>e?/\[[^\]]+\]\([^)]*\)/.test(e):!1,qn=e=>e?/\*\*[^`]*\*\*/.test(e):!1,Gn=e=>e?/^[\s]*[-*]\s+.+$/m.test(e):!1;function vn({node:e}){const{product:n}=e,{overlayItems:i}=e;if(!(i!=null&&i.length))return;if(y(i,S.PRICE,F.TOP_LEFT)){const o=T(n.price);return{badgeVariant:"priceFilled",badgeText:o,badgeIconAccessibilityLabel:o}}if(y(i,S.DISCOUNT,F.TOP_LEFT)){const o=ze({price:n.price,originalPrice:n.originalPrice,formatAsPositive:!0});if(o)return{badgeVariant:"saleFilled",badgeText:l.t("ProductCard.Badges.percentOff",{percentageDiscount:o})}}const r=i.some(o=>o.kind===S.OFFER||o.kind===S.SHOP_CASH_BACK);if(n.shopCashIncentive&&r){const o=mn({shopCashIncentive:n.shopCashIncentive,price:n.price,showHiddenValueIncentives:!0});if(o)return o}}function Pe(e){const{node:n}=e;return{badge:vn(e),showShopName:W(n.displayHints,_.SHOP_NAME),showPrice:W(n.displayHints,_.PRICE),showReviews:W(n.displayHints,_.REVIEWS),hasFavoriteAction:y(n.overlayItems,S.FAVOURITE,F.BOTTOM_RIGHT),paddingBottomOverride:"pb-space-8 md:pb-space-16"}}function kn(e){return Pe(e)}const ye={minimumFractionDigits:0},gn=["minimumOrderValue","remainingAmountToMeetMinimumOrderValue"];function ae(e){if(e===null)return null;const{boostedCash:n,minimumOrderValue:i,remainingAmountToMeetMinimumOrderValue:a}=e,d=m(i)?{minimumOrderValue:i,formattedMinimumOrderValue:T(i,ye)}:{},r=m(a)?{remainingAmountToMeetMinimumOrderValue:a,formattedRemainingAmountToMeetMinimumOrderValue:T(a)}:{};return{...je(e,gn),formattedBoostedCash:T(n,ye),...d,...r}}var $=(e=>(e[e.Supported=0]="Supported",e[e.Skip=1]="Skip",e))($||{});function Qn(e,n=1){switch(e==null?void 0:e.__typename){case"ShopCashOffer":{const i=e.totalCashDestinationAmount;if(!m(i)&&n!==0)return null;const a=ae({...e,boostedCash:i??{amount:"",currencyCode:""}});return m(a)?{boosted:a}:null}case"ShopCashCashbackIncentive":return{cashback:e};default:return null}}function Sn(e,n=$.Skip){switch(e==null?void 0:e.__typename){case"ShopCashOffer":{const i=e.totalCashDestinationAmount;if(!m(i)&&n!==$.Supported)return null;const a=ae({...e,boostedCash:i??{amount:"",currencyCode:""}});return m(a)?{boosted:{...a,cashType:R.ImmediateDiscount}}:null}case"ShopCashCashbackIncentive":return{cashback:e};case"FlatAmountCashbackOffer":{const i=e.cashbackAmount,a=ae({...e,boostedCash:i??{amount:"",currencyCode:""}});return m(a)?{boosted:{...a,cashType:R.EarnShopCash}}:null}default:return null}}const hn=({node:e,options:n})=>{var s;const{overlayItems:i,shop:a}=e;if(!(i!=null&&i.length))return;const d=Sn(a==null?void 0:a.shopCashIncentive,$.Supported),r=y(i,S.OFFER,F.TOP_LEFT),o=y(i,S.SHOP_CASH_BACK,F.TOP_LEFT);if(Ie(d==null?void 0:d.boosted)||o&&!(n!=null&&n.isLoggedIn))return{badgeVariant:"unauthOffer",badgeText:l.t("ShopCash.ExclusiveOffers.OfferAvailable")};if(r&&((s=d==null?void 0:d.boosted)!=null&&s.boostedCash)){const{offerText:c,accessibilityLabel:G}=we(d.boosted);return{badgeVariant:"multiplierFilled",badgeText:c,textAccessibilityLabel:G}}if(o&&(d!=null&&d.cashback))return{badgeVariant:"cashBack",badgeText:l.t("ShopCash.CashBack.ProductFocusedMerchantCardText",{percent:d.cashback.ratePercentage})}};function pn(e){return{badge:hn(e)}}var Le=(e=>(e.ProductCard="ProductCard",e.MerchantCard="MerchantCard",e.ProductFocusedMerchantCard="ProductFocusedMerchantCard",e.ActionCard="ActionCard",e.ViewAllCard="ViewAllCard",e.ShopCashBalanceContentNode="ShopCashBalanceContentNode",e.ProductVariantCard="ProductVariantCard",e.ShoppingEventCard="ShoppingEventCard",e.ThreadCard="ThreadCard",e.ProductDetailsCard="ProductDetailsCard",e.RichText="RichText",e.OrderDeliveryCard="OrderDeliveryCard",e))(Le||{});const Wn={[u.GOOGLE_COLORED]:"google-logo-colored",[u.OUTLOOK]:"outlook-logo",[u.NOT_INTERESTED]:"thumbs-down",[u.REMOVE]:"delete",[u.ADD_TO_CART]:"add-to-cart-compact",[u.DOWN_ARROW]:"down-chevron",[u.SEARCH]:"search",[u.THREAD]:"navigation-threads",[u.FOLLOWING]:"checkmark-verify-filled",[u.DEALS]:"tag-filled",[u.CATEGORIES]:"navigation-categories-filled",[u.SAVED]:"favorites-filled",[u.BULLET_LIST]:"bullet-list",[u.INFO]:"info"};function Fn(e){var n,i,a;return En(e)?!!((n=e.shoppingEvent)!=null&&n.endDate):Rn(e)?!!((i=e.action)!=null&&i.url)&&!!((a=e.action)!=null&&a.label):e.__typename in Le}function Nn(e){return e.__typename==="ProductCard"}function Cn(e){return e.__typename==="ProductFocusedMerchantCard"}function zn(e){return e.__typename==="ProductVariantCard"}function jn(e){return e.__typename==="MerchantCard"}function Kn(e){return e.__typename==="ProductFocusedMerchantCard"}function Rn(e){return e.__typename==="ActionCard"}function Yn(e){return e.__typename==="ViewAllCard"}function Xn(e){return e.__typename==="ShopCashBalanceContentNode"}function En(e){return e.__typename==="ShoppingEventCard"}function On(e){return e.__typename==="ProductDetailsCard"}function Zn(e){return e.__typename==="OrderDeliveryCard"}function yn(e){return e.__typename==="RichText"}function Jn(e){return e.__typename==="ThreadCard"}function Tn(e){return(e==null?void 0:e.__typename)==="Delivery"}function _n(e){return(e==null?void 0:e.__typename)==="Order"}function ei(e){return Tn(e.trackedItem)}function ni(e){return _n(e.trackedItem)}var Ve=(e=>(e.ListSection="ListSection",e.ShelfSection="ShelfSection",e.SingleSection="SingleSection",e))(Ve||{}),Me=(e=>(e.ShopCashIncentiveUnderlay="ShopCashIncentiveUnderlay",e))(Me||{}),Be=(e=>(e.ShopSubject="ShopSubject",e))(Be||{});function Dn(e){return e.__typename in Ve}function ii(e){return e.__typename==="ShelfSection"}function ai(e){return e.__typename==="ListSection"}function ti(e){return e.__typename==="SingleSection"}function $e(e){return e.__typename==="SingleSection"}function ri(e){return e.__typename in Be}function di(e){return e.__typename==="ShopSubject"}function si(e){return e.__typename===Me.ShopCashIncentiveUnderlay}function An({node:e,options:n}){if(Nn(e))return Pe({node:e});if(Cn(e))return pn({node:e,options:n});if(On(e))return kn({node:e})}function bn(e,n){var a;return($e(e)?[e.item]:(a=e.items)==null?void 0:a.nodes).reduce((d,r,o)=>{if(!Fn(r))return d;const t={...r,...An({node:r,options:n})};return[...d,yn(r)?t:{...t,xPos:o}]},[])}var He=(e=>(e.FeedSingleActionFooter="FeedSingleActionFooter",e.PaginationSectionFooter="PaginationSectionFooter",e.SectionGeneralFooter="SectionGeneralFooter",e))(He||{});function wn(e){return e.__typename in He}function oi(e){return e.__typename==="FeedSingleActionFooter"}function ci(e){return e.__typename==="PaginationSectionFooter"}function ui(e){return e.__typename==="SectionGeneralFooter"}var xe=(e=>(e.SectionGeneralHeader="SectionGeneralHeader",e))(xe||{}),Ue=(e=>(e.Label="Label",e.ShopProductReviewAnalytics="ShopProductReviewAnalytics",e.ShopCashOffer="ShopCashOffer",e.ShopCashCashbackIncentive="ShopCashCashbackIncentive",e.FlatAmountCashbackOffer="FlatAmountCashbackOffer",e.ShopCashSubtitle="ShopCashSubtitle",e))(Ue||{}),qe=(e=>(e.ShopFollowAction="ShopFollowAction",e.ResourceAction="ResourceAction",e.OverflowAction="OverflowAction",e))(qe||{}),Ge=(e=>(e.ResourceAction="ResourceAction",e))(Ge||{}),Qe=(e=>(e.CategoryFeedHeader="CategoryFeedHeader",e.TextFeedHeader="TextFeedHeader",e.ShoppingEventFeedHeader="ShoppingEventFeedHeader",e))(Qe||{});function In(e){return e.__typename in xe}function li(e){return e.__typename==="SectionGeneralHeader"}function mi(e){return e.__typename in Ue}function fi(e){return e.__typename==="Label"}function vi(e){return e.__typename==="ShopProductReviewAnalytics"}function ki(e){return e.__typename==="ShopCashSubtitle"}function gi(e){return e.__typename==="ShopCashOffer"||e.__typename==="ShopCashCashbackIncentive"||e.__typename==="FlatAmountCashbackOffer"}function Si(e){return e.__typename==="ResourceAction"}function hi(e){return e.__typename==="ShopFollowAction"}function pi(e){return e.__typename==="OverflowAction"}function Fi(e){return e.__typename in qe}function Ni(e){return e.__typename in Ge}function Ci(e){return e.__typename in Qe}function Ri(e){return e.__typename==="CategoryFeedHeader"}function Ei(e){return e.__typename==="TextFeedHeader"}function Oi(e){return e.__typename==="ShoppingEventFeedHeader"}function yi(e,n){return e?e.filter(Dn).map((d,r)=>{var de,se;const o=bn(d,n),t=d.header&&In(d.header)?d.header:void 0,s=d.footer&&wn(d.footer)?d.footer:void 0,c=(se=(de=d.displayHints)==null?void 0:de.experimentalOptions)==null?void 0:se.includes(_e.PANCAKE_STACK_VERTICAL),G=Q=>c?Q%cn:0;return $e(d)?{...d,header:t,footer:s,yPos:r,item:o==null?void 0:o[0]}:{...d,header:t,footer:s,yPos:r,items:{...d.items,nodes:[...o.map((Q,We)=>({...Q,yPos:G(We)}))]}}}):[]}export{xn as $,N as A,di as B,R as C,$e as D,oi as E,ci as F,ui as G,$ as H,Ve as I,mi as J,vi as K,ki as L,gi as M,Ni as N,Fi as O,hi as P,pi as Q,li as R,Wn as S,_e as T,cn as U,si as V,C as W,Le as X,_ as Y,ni as Z,ei as _,k as a,Un as a0,qn as a1,Gn as a2,S as a3,F as a4,Hn as a5,y as a6,Nn as a7,zn as a8,jn as a9,Kn as aa,Rn as ab,Yn as ac,En as ad,On as ae,Zn as af,yn as ag,Jn as ah,U as ai,g as b,Sn as c,v as d,ti as e,In as f,we as g,Ie as h,Dn as i,Xn as j,f as k,p as l,ai as m,Qn as n,ii as o,ri as p,H as q,fi as r,Si as s,yi as t,Ri as u,Ei as v,Oi as w,Ci as x,mn as y,h as z};
//# sourceMappingURL=toFeedSection-HH8g53oo.js.map
