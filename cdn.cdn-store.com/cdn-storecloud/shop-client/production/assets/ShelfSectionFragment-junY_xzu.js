import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{f as gi}from"./MoneyUtils-CzooDnh_.js";import{D as Ti}from"./Dialog-C_RA0MsZ.js";import{T as I}from"./Text-BrMatKQv.js";import{a as Si}from"./useTriggerLogInWithShop-D9VKR_6P.js";import{f as kn,i as m}from"./i18nConfig-CLr-UH7w.js";import{r as S,g as Pi}from"./chunk-DQRVZFIR-mrH3D8v7.js";import{u as Oi}from"./updatePaginatedQuery-sQa1HKQl.js";import{u as Mi,U as qi,a as $i}from"./AuthenticationProvider-9RtBMSxF.js";import{d as gn}from"./MoneyV2Fragment-XdlHnX2E.js";import{d as w}from"./ReducedImageFragment-CkTGK3vJ.js";import{N as Vi}from"./UserQuery-BcvHLWZm.js";import{I as Hi,E as ji}from"./types-aSuMwFxz.js";import{L as Li}from"./LinkButton-C5FBo9E_.js";import{u as Ui}from"./useMonorail-J6WwGwSW.js";import{T as Gi}from"./TrackingPixel-D8humLZO.js";import{I as Bi}from"./Image-Cc02ywVl.js";import{M as Qi}from"./MerchantLogo-USLrWjfI.js";import{b as zi,d as pi,c as Yi,a as Ki,i as Zi,e as hn,s as Wi}from"./isYesterday-DbsnGQPv.js";import{i as Ji}from"./formatOrderStatus-SQ6Lrk43.js";import{i as Xi,n as _i,d as et,s as nt}from"./format-CLNxfakE.js";import{r as it}from"./capitalize-DWNWjCQs.js";import{W as tt,k as be,b as Ae,A as at,a as rt}from"./toFeedSection-HH8g53oo.js";import{d as dt}from"./ShopCashBackPromotionFragment-BCjriAuu.js";var hi=(e=>(e.BUYER_COMPENSATION_REWARD="BUYER_COMPENSATION_REWARD",e.CASHBACK_REWARD="CASHBACK_REWARD",e.EMPLOYEE_COMPENSATION_REWARD="EMPLOYEE_COMPENSATION_REWARD",e.MARKETING_GIFT_REWARD="MARKETING_GIFT_REWARD",e.OTHER="OTHER",e.OTHER_REWARD="OTHER_REWARD",e.REDEMPTION="REDEMPTION",e))(hi||{}),g=(e=>(e.BUYER_COMPENSATION="BUYER_COMPENSATION",e.CREDITED="CREDITED",e.EARNED="EARNED",e.EMPLOYEE_COMPENSATION="EMPLOYEE_COMPENSATION",e.EXPIRED="EXPIRED",e.GIFTED="GIFTED",e.OTHER="OTHER",e.PENDING="PENDING",e.REDEEMED="REDEEMED",e.REFUNDED="REFUNDED",e))(g||{});const Qa="https://shop.app/shop-cash-terms",za="https://help.shop.app/shop",ot="https://help.shop.app/shop/shop-cash",st=e=>{const{length:n}=e;if(n===0||e[0].event!==g.PENDING||e[n-1].event===g.PENDING)return e;const i=e.findIndex(r=>r.event===g.PENDING&&r.dateTime<e[n-1].dateTime),t=e.findIndex(r=>r.event!==g.PENDING),o=[...e];return i>-1&&o.splice(i,t-i),o.sort((r,s)=>s.dateTime.localeCompare(r.dateTime)),o},lt=(e,n=!1)=>{if(!e)return[];const i=new Date().getUTCFullYear();let t,o;return e.flatMap((s,a)=>{const d=new Date(s.dateTime),l=d.getUTCFullYear(),p=d.getUTCMonth(),h={activity:s};if(h.marginTop="space-12",l!==t||p!==o){const V=l===t||l===i?"MMMM":"MMMM, yyyy";return t=l,o=p,[{title:kn(d,V),variant:"bodySmall",marginTop:n&&a===0?"space-0":"space-32"},h]}return h.marginTop="space-16",h})};var x={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ShopCashActivityQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"first"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"after"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shopCashActivity"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"Variable",name:{kind:"Name",value:"first"}}},{kind:"Argument",name:{kind:"Name",value:"after"},value:{kind:"Variable",name:{kind:"Name",value:"after"}}},{kind:"Argument",name:{kind:"Name",value:"includePending"},value:{kind:"BooleanValue",value:!0}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"dateTime"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cashbackPercentage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"money"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"expiresAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"event"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"order"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shop"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"visualTheme"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"isSpent"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"resourceType"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endCursor"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:731}};x.loc.source={body:`#import "../../../../../data/fragments/MoneyV2Fragment.graphql"
#import "../../../../../data/fragments/ReducedImageFragment.graphql"

query ShopCashActivityQuery($first: Int!, $after: String) {
  shopCashActivity(first: $first, after: $after, includePending: true) {
    nodes {
      id
      date
      dateTime
      cashbackPercentage
      money {
        ...MoneyV2Fragment
      }
      expiresAt
      event
      url
      order {
        id
        shop {
          id
          name
          visualTheme {
            id
            logoImage {
              ...ReducedImage
            }
          }
        }
      }
      isSpent
      resourceType
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Fn={};function Fi(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Fn[i]?!1:(Fn[i]=!0,!0)})}x.definitions=x.definitions.concat(Fi(gn.definitions));x.definitions=x.definitions.concat(Fi(w.definitions));function ee(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){ee(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){ee(t,n)}),e.definitions&&e.definitions.forEach(function(t){ee(t,n)})}var je={};(function(){x.definitions.forEach(function(n){if(n.name){var i=new Set;ee(n,i),je[n.name.value]=i}})})();function Nn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ct(e,n){var i={kind:e.kind,definitions:[Nn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=je[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=je[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Nn(e,a);d&&i.definitions.push(d)}),i}ct(x,"ShopCashActivityQuery");const Ni=S.createContext(null),mt=()=>{const e=S.useContext(Ni);if(e===null)throw new Error("no Activity screen context exists. Did you forget to wrap your screen in the <ActivityScreenProvider />?");return e},ut=({children:e,skip:n})=>{const{userAuthState:i}=Mi(),t=i!==qi.Anonymous,o=Si(),r=o==null?void 0:o.availableShopCashBalance,[s,a]=S.useState({amount:"0",currencyCode:(r==null?void 0:r.currencyCode)||"USD"});S.useEffect(()=>{r&&a({amount:r.amount,currencyCode:r.currencyCode})},[r==null?void 0:r.amount,r==null?void 0:r.currencyCode]);const{data:d,loading:l,networkStatus:p,error:h,refetch:V,fetchMore:B}=$i(x,{fetchPolicy:"cache-and-network",variables:{first:10},skip:n||!t}),W=S.useMemo(()=>{var _;const D=(_=d==null?void 0:d.shopCashActivity)==null?void 0:_.nodes;if(!(D!=null&&D.length))return[];const X=st(D);return lt(X,!0)},[d]),H=S.useMemo(()=>{var D;return(D=d==null?void 0:d.shopCashActivity)==null?void 0:D.pageInfo},[d]),He=S.useCallback(()=>{const{hasNextPage:D,endCursor:X}=H??{},_=p===Vi.fetchMore;D&&X&&!_&&B({variables:{first:10,after:X},updateQuery:Oi("shopCashActivity")})},[H,p,B]),pn=S.useCallback(()=>{V()},[V]),xi=S.useMemo(()=>({Activity:{items:W,pageInfo:H,loading:l,error:h,networkStatus:p,refetch:pn,fetchMore:He,onEndReached:He},Cash:{balance:s}}),[W,H,l,h,p,pn,He,s]);return c.jsx(Ni.Provider,{value:xi,children:e})},vt=()=>{const{reportEvent:e}=Ui(),n=S.useCallback(()=>{e({schemaId:"shop_app_entity_interaction/4.4",payload:{entityType:ji.ShopCashActivityEmptyState,entityId:"shop_cash_activity_empty_state",interactionType:Hi.ShopCashLearnMorePressed}})},[e]);return c.jsxs("div",{className:"flex size-full flex-col items-center justify-center gap-space-16 pb-space-16",children:[c.jsx(I,{variant:"bodySmall",className:"text-center text-text-tertiary",children:m.t("ShopCashRelaunchM3.ActivityEmptyState.Description")}),c.jsx(Li,{variant:"tertiary",size:"s",to:ot,target:"_blank","data-testid":"shop-cash-help-centre-link",onClick:n,children:c.jsx(I,{variant:"buttonSmall",className:"px-space-8",children:m.t("ShopCashRelaunchM3.ActivityEmptyState.CtaButtonLabel")})})]})};function ft(e,n){return zi(e,pi(Yi(e),1),n)}const kt="yyyy-MM-dd",gt=(e,n)=>{if(!Xi(e))return"-";const i=new Date;if(Ki(e))return n.yesterday;if(Zi(e))return n.today;if(ft(e))return n.tomorrow;let t;if(Ji(e,i)){const o=hn(Wi(i,2)),r=hn(pi(i,6));e<=o?t="MMM d":e<=r?t="eeee":t="MMM d"}else t="PP";return kn(e,t)};function St(e,n,i){const[t,o]=_i(i==null?void 0:i.in,e,n),r=yn(t,o),s=Math.abs(et(t,o));t.setDate(t.getDate()-r*s);const a=+(yn(t,o)===-r),d=r*(s-a);return d===0?0:d}function yn(e,n){const i=e.getFullYear()-n.getFullYear()||e.getMonth()-n.getMonth()||e.getDate()-n.getDate()||e.getHours()-n.getHours()||e.getMinutes()-n.getMinutes()||e.getSeconds()-n.getSeconds()||e.getMilliseconds()-n.getMilliseconds();return i<0?-1:i>0?1:i}function pt(e){return nt(Date.now(),e)}var ht=it();const Ft=Pi(ht),Nt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAVFBMVEXDx9RHcEzIy9fLztrAw9HO0dzX2ePS1N7e4OjGydW5vMvo6u/4+fqwtMWkqbvY2uOVmrCHjaXc3ubT1N3k5uzt7vO6vs3v8PTt7vJ5f5XDxtRiZ3zuGmBAAAAAHHRSTlOyALKysrKysrKysrKysbEksrJbDpE6gXSZspayP+fYvgAAAAlwSFlzAAAhOAAAITgBRZYxYAAABrdJREFUeJyVmIt24joMRYUtPzN5QKBA5///8x7JjyRAu+541mo7kOwcHcm2HDr9Mtbb5X6/PjCu9/vltv52Lf0MuT/+DEPE8D7IiPFx/xn2A2i+D3/wbxCS90pyFsM/7vM/gG4PQfyRMZQhusAyydjwuP1PEDCxcfYDOB9sovQR9Qaar2LLnlNFDYUVLDG561uAr6CL2rvHqNnO+eC9CB18MMzkL7+C1jvuOnJ63gwltk5Y3hGzva8/g+aHZGjvTvG5Zc5xzuwlPojiY3h70E04IkduLy7VAlCQolIeMyrKW87s5s+gW6x6ID7GYUt8EQSTtJpoWhgfQR3b2yfQHEPwsWQmHkCbICE5m89TiDAqZzu/g+aHzAKpZuB8KYFY9FROA0HUcibUFEHT/ApaCwfDiFGH8cLBXEnTk72X6K7rC+iK67xEYsMR5P2eUxSBNJ5zId2PoMuBU+9EBptVcR9ZIf0FCbmj2x4Eg1wQR0zlBKtxdl3KqpGpJEPTX0aRd8ML6IpLJOVGHooJoVU3HJ2Kiqocawwtf9MuOAXdggiKQ3Kqnt3wbpHWauwgkPh5DltwVARhUsbBW+GkXAkHSAlYVqWmyKQMm3B5vjaQCsKNRZCddne+DKHrUmkEBJsIwY0qSUBXyEXOjHVCcuPySnHB9b9R0raR+LmEJgmg2QXr8Cwj8cttSz4wtrGRTJE0wm8LSbOCLlIaYbC2Xu3M2fUqrpbIaCxM/Ubi56SSLgJaTVCQsf3JeSmIDpK7GgukUDmJp7/G25zdCtCslYovbSeZZSy34JmMxSwTJWwgplwCkjM1tvwcpZbMDSBEhiuGtMl3Lj0NrsfSnKoX00QpdRTmRlFEfEZmNDY6fQNkXDR7kOXFMyf5f6k+yssEWYrC9yopCWh8amzXE63G2ZSiN7abKj8op8atdXweG0lyXE1qsfmVZoAoDWYD2QKaxDZntxlxhiaqmqItihQUYNJMN+vMOyjlCZPY9dgExc+RG8n32MQkLJUXgteJzaBSralFCz0ej/V7kknjk1UTPgweGHV7wswVt+lLQLaA2oC1Xqo0yryqIKPBdUlR9CA0gEzEqnQnJI0Yn+8G6oz05hCrQSLVNEklNltBI/YBSRtA6ArCHiRlE4pl3jc1dUZwzZy43UC8B0k6U79+4TYn2myoM+Kc9yD8XUCugjgXRUn9E4dsqqQ+GwpoaXmTktxCqyDUU/XOCCjxOFHqktzGSbR0t6NTTvfoIVmjjKylNgjPbSVsPdeAS653iqxykLXFFI8UlDpIvlMnVBE2+FQ5ZYoS7UCpgJyA7nSxAPEgvWEl8ZkbKJblI7X5sDDXioyqhxiTOUQtSEwR/B6qUlJQ5hqb7/bI4GmsK4uAiqB8xqajU2Qm2S5jqCCqoGqpLe4UrchmqSMpyHptPtvoGdstrWPNfwPxZqmV+tqSMGXVDBBa03rtuJgh6DJy0vzzYDZF084K1yLDx6PrXndBsGgoC9tJ3RaTOgjF2uZUqCTBjyFRj4xbZKZYJIs/i0mIrYGwWGXuwaGDNTITJiSlgVxsLiD5AyxysvgXk3gniRbEtq1hWEwMBU2T1oiAmiDspRrZqhukxhZ9OkrqxSTW2up5TSY3q89eI7uXLZud4RGSOkjt5lJMytpyJ6Bg94JkWytb9klnyYuksUhqNx84Ib8Iqk2E2G27pPIwFKySKB2HlnvuKUteBNnW1kgpQZKTxHEvgcwfUABtnGUqgh69Y5sJiRsPwWkxFRJ1GvwKrnBYAkNjb5nN1vqdvmTmjhxD6tHhgeNG6nI47zKGypBT0q6rRS1JcGlwUsOVhCLMO1HIfKBxxzHoAxGY37fHp5v4jZ5Zy7L5xHkce3xJaiRziwtLEwzCsc1ejkeIL6skt08dKwrtkfZI41gTqf7gqOWFQy9HiNOKuWRUk9scl1uEoaNHqRxpOmE0P14PNUpKLD4F0zVVVh094kn7Xns4ju4OfjBcNPGwn79vQ+SMONN5OdaGDwc/kHIhYf4E8xNF5EQ5lUp36XeH2v3heP1G60FiR/yIUsxkRY6lF87xuC4+2aRtLE4m5iVApHAascVKtyuO/XxclyogObIKSk5aYbPaBpzTcWrShl4+/vUFglpuxSlNOutZEHYkORUO2vFDsWDIv75neXvJsn6xoEhZcot03MEmq61hoZB5f4v04bXP/EV4cLkn9wqq27mYZa//57VPQbEpLDoWo+zoHzE/vxq7fJPpbV9ZimR7M/byL6/GZKxgcdk0SieBnfL7Mv/ry7oGu12+vr6+v/Hj8gtExn+uM2t0w/YSMAAAAABJRU5ErkJggg==",yt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAOVBMVEVHcEyjmfa3sumdl9rOzfCBc95zZ9DEu//Nyv/Jxf/Hwv/V0//Gv//g3/+6sv/x8f+xqPyLgetuaM6iusITAAAAB3RSTlMA+Jph2XJCswrrjAAAAAlwSFlzAAAhOAAAITgBRZYxYAAABfxJREFUeJyVmIt24yAMRIvzEAhBcP7/Y3ckAcbZpA96TpvG5Ho0EjLk6+ubcd+27XrNMefrFS/v3839PLZreTwKRs5AAYZX1+2vlAsoynk4SFkxpqTaLn8Rkx99GGwIAwqwnH8rC5hiel4HYDExc/wVCkHpeCGMN6ArCUm83n6Uo0GcOMUd0t8eZQSK4w+irqXPP6mxxCVhSVFNy1GI0vW7sEr+xDFZiWoVXC85EeL7mL/LImdGV06oyLVVragoldIHozab3m3peXOK/mSvS0QYgnQSv9V0mRzFFCOVs55elnUPESSuNb0hXWwVaP3FDhpjCjJF0UTtnJX0TpPdUGNJZviJMxU5KSVpT8ke3SvnqvOsShSjP0dUZY3MSdz2in+pUngxWueVoWd8cNV1RNZJT5BQD3yqzJuW7omTchmp7wuk5HyAInN4Us5S68mma1RQeaToWiiX8upTbwCGgaRE4clqU72ugSknPziaeoqPs8vdJ7w3IsNgeu4WnBzBZReUk87ielTO69BCHKDE9dlyRjXxKkiLh/124UjU9N16rSubHJaAIoiLpKtzTA/mtXBCLMNqdiHRM5gk6TUdF5DODvWc7DmSWZC7R5DU1G9q4onbdEZ+pDTn713brBobQxYc7qApyWMTu1V3yEbdTzqO4W+U2DmMEkg5YfFaZPpowGo+FMHv5jfHVPQymKCfOlAlOkdEE4fYrCg3u+eDF1DkXUsTXZA9PQ09qLM8Ogex0L7P2Ko9+QqvPsQagDF2z1Db24IqcYCaxxbxfGfVWXI3wSbij9Rx+1HHIImRTNOQ5LHV7BYBtBjay7blkfFBCqKoVZKblElXLixi4R7ZHIzYcjnqx9dW6yQYGFeTRE1SEL2CBJwYy9HI3KcneXSH3UJhj+52UFAqeqMBYzZOTGWo8bdlDzSCKwcolaS9BCAhJM2H0rTOZBTMUo7sksQl9YqktouD2gnkt2mhfz7nE4ieNCS5IkH+dyqWfwOhqJZBe+1RchkgFaoXJig6x0BRFwlAVN07GSndp12xzJ5hoDbs7iB5AQ3verUG4UHKc4EaKOiy4ZF/VyQKimo2Vc2auCJCIpqMNZorczpuAUUqyUMTHcgaz6yhWaoi4a52r30xQA8tOUDM0kFIuYGoBuwDDISCxJPX3leU6HQaFZxJFhDhil2yRe6CsKFAs7fKTvpsGjcQA9U+PZ2SiTDCTH92DkDYLkHJ9nUT3Z9YyIZxUJ8/2oU5qNnsF6KByJKWChat7t6a7uhyl4qLNCyFy1oWHq/5akoNhEesCTIQkpbvHQSTOgdXNQI61Z19CP3XJlhk5De1PZc3tmmSTZZeY2cSr5wB0ikApVLIW+2N1CRNQ+eQmdTT3DWhSFP0CK2u7Tp+oYkMizy2ZrFRH8ElGSnpE5EJTUf6UIvIFOktZ2QWG8Shzw0O1WcdJO+HuhRlCkplTGx7tsh8Z2OxmSQ6S/IF6k+kQw8n3a5TF4R+THOvZavkJAntuZNE5tLpHByO6iJIG3YeGz+K6UWS+000Pr7oSZODpZe1iI5tpEtC4g5JrZMGaglscgKWWaZDkEuiVkt+R1phiCu2wWl7sfW67mu1SDS4uNhU91bRYFYUMwQcnGxO03reulufbHImtXCIUhgwbb7TcIrQwCifThEb2WGMV8OxAFo7/rMT1hI5ecbSy1EyMMpXDU+rJkW1Wm2T5C9mXKQG4eV/B0nYpKS0RufLoI8lSHBs06mBvXK+7mY4NmePtTCHsvO/Ydfdqk57d2C7tWiaqFgjONl8wmDPpWcoWEjvj7W35tHV/FgL6lVdCEW3zgrPH47Ht+6Tivo/PvcrhKRyEn3U4z6xfjugTr1DobCabnVczkc9njvqoqqdtA4IllhDSm0TZ3F/+wWCGTVEGUuPe7i/HwOz9SYX+tNXGhoe6aZ21A82yRqLfp8h1rxt8K++RboApXtPctgogcOyRL/9BukWyBqsPrnkVI7A8a8xhtoa9W49e5E/P7e/fDWm437ZsNhl7GgEixpa/koZsNu2hRAazjRh+wHyD5eooRWQq7tDAAAAAElFTkSuQmCC",Et=e=>{const n={yesterday:m.t("ShopCash.DateFormats.Common.Yesterday"),today:m.t("ShopCash.DateFormats.Common.Today"),tomorrow:m.t("ShopCash.DateFormats.Common.Tomorrow")};return gt(e,n)};function wt(e){let n=e;return Number.isNaN(e)&&(n=0),n.toLocaleString(m.language,{maximumFractionDigits:2,style:"percent"})}const K={type:"local",source:yt,backgroundColor:"bg-bg-fill-brand-secondary",opacity:1},Ie={type:"local",source:Nt,backgroundColor:"bg-bg-overlay-fixed-dark-04",opacity:1},xe=e=>{var n,i;if((i=(n=e.order)==null?void 0:n.shop.visualTheme)!=null&&i.logoImage)return{type:"remote",source:e.order.shop.visualTheme.logoImage,shopName:e.order.shop.name,opacity:1}};class C{constructor(n){this.pending=!1,this.activity=n}get formattedAmount(){return gi(this.activity.money)}get isNegativeAmount(){const n=Number(this.activity.money.amount);return isNaN(n)||n<0}get amountColor(){return Number(this.activity.money.amount)<=0?"text":"text-text-brand"}get titleColor(){return"text"}get formattedExpiresAt(){}get formattedDate(){const n=Et(new Date(this.activity.dateTime));return Ft(n)}}class Ct extends C{constructor(){super(...arguments),this.decal=K,this.title=m.t("ShopCashRelaunchM3.ActivityList.Item.Title.Earned"),this.details=m.t("ShopCashRelaunchM3.ActivityList.Item.Detail.BuyerCompensation",{formattedDate:this.formattedDate})}}class Dt extends C{constructor(){var n;super(...arguments),this.title=m.t("ShopCashRelaunchM3.ActivityList.Item.Title.Earned"),this.details=m.t("ShopCashRelaunchM3.ActivityList.Item.Detail.Credited",{shopName:((n=this.activity.order)==null?void 0:n.shop.name)??"",formattedDate:this.formattedDate})}get decal(){return xe(this.activity)??K}}class yi extends C{constructor(){super(...arguments),this.DEFAULT_CASHBACK_PERCENTAGE=.01,this.title=m.t("ShopCashRelaunchM3.ActivityList.Item.Title.Earned")}get decal(){return xe(this.activity)??K}get details(){if(!this.activity.order)return m.t("ShopCashRelaunchM3.ActivityList.Item.Detail.Earned",{formattedDate:this.formattedDate});let n=Number(this.activity.cashbackPercentage);return isNaN(n)&&(n=this.DEFAULT_CASHBACK_PERCENTAGE),n>this.DEFAULT_CASHBACK_PERCENTAGE?m.t("ShopCashRelaunchM3.ActivityList.Item.Detail.EarnedMerchantCashbackPromotion",{shopName:this.activity.order.shop.name,formattedCashbackPercentage:wt(n),formattedDate:this.formattedDate}):m.t("ShopCashRelaunchM3.ActivityList.Item.Detail.EarnedMerchant",{shopName:this.activity.order.shop.name,formattedDate:this.formattedDate})}}class Rt extends C{constructor(){super(...arguments),this.decal=K,this.title=m.t("ShopCashRelaunchM3.ActivityList.Item.Title.Earned"),this.details=m.t("ShopCashRelaunchM3.ActivityList.Item.Detail.EmployeeCompensation",{formattedDate:this.formattedDate})}}class bt extends C{constructor(){super(...arguments),this.decal=Ie,this.title=m.t("ShopCashRelaunchM3.ActivityList.Item.Title.Expired")}get details(){return this.activity.resourceType===hi.MARKETING_GIFT_REWARD?m.t("ShopCashRelaunchM3.ActivityList.Item.Detail.ExpiredPromotion",{formattedDate:this.formattedDate}):this.formattedDate}get titleColor(){return"text-text-tertiary"}get amountColor(){return"text-text-tertiary"}}class At extends C{constructor(){super(...arguments),this.decal=K,this.title=m.t("ShopCashRelaunchM3.ActivityList.Item.Title.Earned"),this.details=m.t("ShopCashRelaunchM3.ActivityList.Item.Detail.Gifted",{formattedDate:this.formattedDate})}get formattedExpiresAt(){const n=this.activity.expiresAt,i=this.activity.isSpent;if(!n||i)return;const t=new Date(n),o=new Date(t.valueOf()-t.getTimezoneOffset()*60*1e3),r=kn(pt(),kt),s=St(o,r);if(!(s<0))return s===0?m.t("ShopCashRelaunchM3.ActivityList.Item.ExpiresAt.Today"):s===1?m.t("ShopCashRelaunchM3.ActivityList.Item.ExpiresAt.Single",{numOfDays:s}):m.t("ShopCashRelaunchM3.ActivityList.Item.ExpiresAt.Multiple",{numOfDays:s})}}class En extends C{constructor(){super(...arguments),this.details=this.formattedDate}get decal(){return this.isNegativeAmount?Ie:K}get title(){return this.isNegativeAmount?m.t("ShopCashRelaunchM3.ActivityList.Item.Title.Spent"):m.t("ShopCashRelaunchM3.ActivityList.Item.Title.Earned")}}class It extends C{get decal(){const n=this.proxiedModel.decal;return n.opacity=.3,n}get title(){return this.proxiedModel.title}get titleColor(){return"text-text-placeholder"}get amountColor(){return this.isNegativeAmount?"text-text-tertiary":"text-text-brand-secondary"}get details(){var n;return(n=this.activity.order)!=null&&n.shop?m.t("ShopCashRelaunchM3.ActivityList.Item.Detail.PendingMerchant",{shopName:this.activity.order.shop.name}):m.t("ShopCashRelaunchM3.ActivityList.Item.Detail.Pending")}constructor(n){super(n),this.proxiedModel=this.isNegativeAmount?new Ei(n):new yi(n)}}class Ei extends C{constructor(){super(...arguments),this.title=m.t("ShopCashRelaunchM3.ActivityList.Item.Title.Spent")}get decal(){return xe(this.activity)??Ie}get details(){var n;return(n=this.activity.order)!=null&&n.shop?m.t("ShopCashRelaunchM3.ActivityList.Item.Detail.Redeemed",{shopName:this.activity.order.shop.name,formattedDate:this.formattedDate}):this.formattedDate}}class xt extends C{constructor(){super(...arguments),this.title=m.t("ShopCashRelaunchM3.ActivityList.Item.Title.Reversed")}get decal(){return xe(this.activity)??Ie}get details(){return this.activity.order?m.t("ShopCashRelaunchM3.ActivityList.Item.Detail.Refunded",{shopName:this.activity.order.shop.name,formattedDate:this.formattedDate}):this.formattedDate}}const Tt=e=>{switch(e.event){case g.BUYER_COMPENSATION:return new Ct(e);case g.CREDITED:return new Dt(e);case g.EARNED:return new yi(e);case g.EMPLOYEE_COMPENSATION:return new Rt(e);case g.EXPIRED:return new bt(e);case g.GIFTED:return new At(e);case g.OTHER:return new En(e);case g.PENDING:return new It(e);case g.REDEEMED:return new Ei(e);case g.REFUNDED:return new xt(e);default:return new En(e)}},Pt=({activity:e})=>{const n=S.useMemo(()=>Tt(e),[e]),i=[n.title,n.formattedAmount,n.details].join(`
`);return c.jsxs("div",{className:"flex items-center gap-space-8","aria-label":i,children:[c.jsx(Ot,{decal:n.decal}),c.jsxs("div",{className:"flex flex-1",children:[c.jsx("div",{className:"flex-1",children:c.jsx(Mt,{title:n.title,detail:n.details,color:n.titleColor})}),c.jsxs("div",{className:"flex flex-col items-end",children:[c.jsx(qt,{formattedAmount:n.formattedAmount,color:n.amountColor}),n.formattedExpiresAt?c.jsx(I,{variant:"caption",className:n.amountColor,children:n.formattedExpiresAt}):null]})]})]})},Ot=({decal:e})=>e.type==="local"?c.jsx("div",{className:`flex size-space-44 items-center justify-center rounded-radius-12 border border-[#05294D]/10 ${e.backgroundColor}`,style:{opacity:e.opacity},children:c.jsx(Bi,{src:e.source,alt:"",className:"size-space-24 object-contain"})}):c.jsx("div",{className:"aspect-square w-space-44",style:{opacity:e.opacity},children:c.jsx(Qi,{shopName:e.shopName,size:"m",src:e.source.url,alt:e.source.altText||e.shopName})}),Mt=({title:e,detail:n,color:i="text"})=>c.jsx("div",{className:"flex flex-col gap-space-16",children:c.jsxs("div",{children:[c.jsx(I,{variant:"bodyTitleSmall",className:i,children:e}),c.jsx(I,{variant:"caption",className:"text-text-tertiary",children:n})]})}),qt=({formattedAmount:e,color:n="text"})=>c.jsx(I,{variant:"bodyTitleSmall",className:n,children:e}),wi=()=>c.jsxs("div",{className:"flex items-center gap-space-8",children:[c.jsx("div",{className:"size-space-44 animate-pulse rounded-radius-12 bg-bg-fill-placeholder"}),c.jsxs("div",{className:"flex flex-1",children:[c.jsx("div",{className:"flex-1",children:c.jsx("div",{className:"flex flex-col gap-space-16",children:c.jsxs("div",{children:[c.jsx("div",{className:"mb-space-2 h-space-16 w-1/2 animate-pulse rounded-radius-4 bg-bg-fill-placeholder"}),c.jsx("div",{className:"h-space-12 w-1/3 animate-pulse rounded-radius-4 bg-bg-fill-placeholder"})]})})}),c.jsxs("div",{className:"flex flex-col items-end",children:[c.jsx("div",{className:"mb-space-2 h-space-16 w-space-64 animate-pulse rounded-radius-4 bg-bg-fill-placeholder"}),c.jsx("div",{className:"h-space-12 w-space-48 animate-pulse rounded-radius-4 bg-bg-fill-placeholder"})]})]})]}),$t=e=>e.title!==void 0,Vt=({ctx:e})=>{const n=e.items,{onEndReached:i,pageInfo:t}=e,o=t==null?void 0:t.hasNextPage,r=S.useCallback((d,l)=>{const{title:p,variant:h,paddingTop:V,paddingBottom:B,marginTop:W,marginBottom:H}=d;return c.jsx("div",{className:"flex flex-col",style:{paddingTop:V?`var(--${V})`:void 0,paddingBottom:B?`var(--${B})`:void 0,marginTop:W?`var(--${W})`:void 0,marginBottom:H?`var(--${H})`:void 0},children:c.jsx(I,{variant:h,className:"pt-space-4 text-text-secondary",children:p})},`title-${l}`)},[]),s=S.useCallback((d,l)=>{const{activity:p,marginTop:h}=d;return c.jsx("div",{style:{marginTop:h?`var(--${h})`:void 0},children:c.jsx(Pt,{activity:p})},`activity-${p.id||l}`)},[]),a=S.useCallback((d,l)=>$t(d)?r(d,l):s(d,l),[r,s]);return c.jsx(c.Fragment,{children:c.jsx("div",{className:"flex h-full flex-col overflow-auto pb-space-16 pr-space-16",style:{scrollbarWidth:"thin"},children:c.jsxs("div",{className:"flex flex-col gap-space-16",children:[n.map((d,l)=>a(d,l)),o&&i&&c.jsx(Gi,{onImpression:i,children:c.jsx("div",{className:"flex flex-col gap-space-16",children:c.jsx(wi,{})})})]})})})},Ht=()=>c.jsx("span",{className:"inline-block h-space-16 w-space-64 animate-pulse rounded-radius-4 bg-bg-fill-placeholder"}),jt=()=>c.jsxs("div",{className:"flex flex-col gap-space-16 pb-space-16",children:[c.jsx("div",{className:"h-space-16 w-space-48 animate-pulse rounded-radius-4 bg-bg-fill-placeholder"}),Array.from({length:5}).map((e,n)=>c.jsx(wi,{},n))]}),Ya=e=>c.jsx(ut,{skip:!e.open,children:c.jsx(Lt,{...e})}),Lt=e=>{const{open:n,onOpenChange:i}=e,{availableShopCashBalance:t}=Si(),o=gi(t||{amount:"0",currencyCode:"USD"}),r=mt(),s=r.Activity.items.length>0,a=r.Activity.loading&&!r.Activity.error,d=a?c.jsx(jt,{}):s?c.jsx(Vt,{ctx:r.Activity}):c.jsx(vt,{}),l=a?c.jsx(Ht,{}):o;return c.jsx(Ti,{title:c.jsx(I,{variant:"sectionTitle",children:m.t("ShopCashRelaunchM3.Activity.Title")}),subtitle:l,content:d,open:n,onOpenChange:i,headerContentClassName:"pb-space-4",contentWrapperClassName:s&&!a?"pr-0":""})};var G={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ResourceAction"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ResourceAction"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]}]}}],loc:{start:0,end:67}};G.loc.source={body:`fragment ResourceAction on ResourceAction {
  label
  url
  icon
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function ne(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){ne(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){ne(t,n)}),e.definitions&&e.definitions.forEach(function(t){ne(t,n)})}var Le={};(function(){G.definitions.forEach(function(n){if(n.name){var i=new Set;ne(n,i),Le[n.name.value]=i}})})();function wn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Ut(e,n){var i={kind:e.kind,definitions:[wn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=Le[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=Le[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=wn(e,a);d&&i.definitions.push(d)}),i}Ut(G,"ResourceAction");var F={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SectionGeneralHeader"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SectionGeneralHeader"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subtitle"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Label"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopProductReviewAnalytics"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"averageRating"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalProductRatings"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalProductReviews"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopCashSubtitle"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopCashOffer"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"minimumOrderValue"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"totalCashDestinationAmount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopCashCashbackIncentive"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ratePercentage"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FlatAmountCashbackOffer"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"cashbackAmount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"minimumOrderValue"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"primaryAction"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ResourceAction"},directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotificationBadge"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"logo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"fallbackText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"wordmark"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"actions"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ResourceAction"},directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"OverflowAction"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopFollowAction"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"renderable"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shop"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"followedByMe"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"visualTheme"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"VisualThemeLogoImage"},directives:[]}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"displayHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"contentHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"alignment"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"horizontal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"vertical"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"subtitle"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"componentStyle"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:1641}};F.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "../../../data/fragments/MoneyV2Fragment.graphql"
#import "../../../data/fragments/VisualThemeLogoImageFragment.graphql"
#import "./ResourceActionFragment.graphql"

fragment SectionGeneralHeader on SectionGeneralHeader {
  title
  subtitle {
    ... on Label {
      text
      icon
    }
    ... on ShopProductReviewAnalytics {
      averageRating
      totalProductRatings
      totalProductReviews
    }
    ... on ShopCashSubtitle {
      summary
    }
    ... on ShopCashOffer {
      minimumOrderValue {
        ...MoneyV2Fragment
      }
      totalCashDestinationAmount {
        ...MoneyV2Fragment
      }
    }
    ... on ShopCashCashbackIncentive {
      ratePercentage
    }
    ... on FlatAmountCashbackOffer {
      cashbackAmount {
        ...MoneyV2Fragment
      }
      minimumOrderValue {
        ...MoneyV2Fragment
      }
    }
  }
  primaryAction {
    ...ResourceAction
    ... on NotificationBadge {
      label
      action {
        label
        url
      }
    }
  }
  logo {
    icon
    image {
      fallbackText
      image {
        ...ReducedImage
      }
    }
  }
  wordmark {
    ...ReducedImage
  }
  actions {
    ...ResourceAction
    ... on OverflowAction {
      label
    }
    ... on ShopFollowAction {
      label
      renderable
      shop {
        id
        name
        followedByMe
        visualTheme {
          ...VisualThemeLogoImage
        }
      }
    }
  }
  displayHints {
    contentHints {
      alignment {
        horizontal
        vertical
      }
    }
    subtitle {
      componentStyle
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Cn={};function Te(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Cn[i]?!1:(Cn[i]=!0,!0)})}F.definitions=F.definitions.concat(Te(w.definitions));F.definitions=F.definitions.concat(Te(gn.definitions));F.definitions=F.definitions.concat(Te(tt.definitions));F.definitions=F.definitions.concat(Te(G.definitions));function ie(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){ie(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){ie(t,n)}),e.definitions&&e.definitions.forEach(function(t){ie(t,n)})}var Ue={};(function(){F.definitions.forEach(function(n){if(n.name){var i=new Set;ie(n,i),Ue[n.name.value]=i}})})();function Dn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Gt(e,n){var i={kind:e.kind,definitions:[Dn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=Ue[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=Ue[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Dn(e,a);d&&i.definitions.push(d)}),i}Gt(F,"SectionGeneralHeader");var j={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SectionHeader"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SectionHeader"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionGeneralHeader"},directives:[]}]}}],loc:{start:0,end:120}};j.loc.source={body:`#import "./SectionGeneralHeaderFragment.graphql"

fragment SectionHeader on SectionHeader {
  ...SectionGeneralHeader
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Rn={};function Bt(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Rn[i]?!1:(Rn[i]=!0,!0)})}j.definitions=j.definitions.concat(Bt(F.definitions));function te(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){te(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){te(t,n)}),e.definitions&&e.definitions.forEach(function(t){te(t,n)})}var Ge={};(function(){j.definitions.forEach(function(n){if(n.name){var i=new Set;te(n,i),Ge[n.name.value]=i}})})();function bn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Qt(e,n){var i={kind:e.kind,definitions:[bn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=Ge[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=Ge[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=bn(e,a);d&&i.definitions.push(d)}),i}Qt(j,"SectionHeader");var Pe={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedSingleActionFooter"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FeedSingleActionFooter"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:95}};Pe.loc.source={body:`fragment FeedSingleActionFooter on FeedSingleActionFooter {
  action {
    label
    url
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function ae(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){ae(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){ae(t,n)}),e.definitions&&e.definitions.forEach(function(t){ae(t,n)})}var Be={};(function(){Pe.definitions.forEach(function(n){if(n.name){var i=new Set;ae(n,i),Be[n.name.value]=i}})})();function An(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function zt(e,n){var i={kind:e.kind,definitions:[An(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=Be[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=Be[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=An(e,a);d&&i.definitions.push(d)}),i}zt(Pe,"FeedSingleActionFooter");var Oe={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PaginationFooter"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PaginationSectionFooter"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nextLabel"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"prevLabel"},arguments:[],directives:[]}]}}],loc:{start:0,end:81}};Oe.loc.source={body:`fragment PaginationFooter on PaginationSectionFooter {
  nextLabel
  prevLabel
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function re(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){re(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){re(t,n)}),e.definitions&&e.definitions.forEach(function(t){re(t,n)})}var Qe={};(function(){Oe.definitions.forEach(function(n){if(n.name){var i=new Set;re(n,i),Qe[n.name.value]=i}})})();function In(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Yt(e,n){var i={kind:e.kind,definitions:[In(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=Qe[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=Qe[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=In(e,a);d&&i.definitions.push(d)}),i}Yt(Oe,"PaginationFooter");var R={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SectionFooter"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SectionFooter"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedSingleActionFooter"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"PaginationFooter"},directives:[]}]}}],loc:{start:0,end:187}};R.loc.source={body:`#import "./SingleActionFooterFragment.graphql"
#import "./PaginationFooterFragment.graphql"

fragment SectionFooter on SectionFooter {
  ...FeedSingleActionFooter
  ...PaginationFooter
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var xn={};function Ci(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return xn[i]?!1:(xn[i]=!0,!0)})}R.definitions=R.definitions.concat(Ci(Pe.definitions));R.definitions=R.definitions.concat(Ci(Oe.definitions));function de(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){de(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){de(t,n)}),e.definitions&&e.definitions.forEach(function(t){de(t,n)})}var ze={};(function(){R.definitions.forEach(function(n){if(n.name){var i=new Set;de(n,i),ze[n.name.value]=i}})})();function Tn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Kt(e,n){var i={kind:e.kind,definitions:[Tn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=ze[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=ze[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Tn(e,a);d&&i.definitions.push(d)}),i}Kt(R,"SectionFooter");var M={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedOverlayItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"OverlayItem"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"kind"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"position"},arguments:[],directives:[]}]}}],loc:{start:0,end:70}};M.loc.source={body:`fragment FeedOverlayItem on OverlayItem {
  kind
  label
  position
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function oe(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){oe(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){oe(t,n)}),e.definitions&&e.definitions.forEach(function(t){oe(t,n)})}var Ye={};(function(){M.definitions.forEach(function(n){if(n.name){var i=new Set;oe(n,i),Ye[n.name.value]=i}})})();function Pn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Zt(e,n){var i={kind:e.kind,definitions:[Pn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=Ye[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=Ye[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Pn(e,a);d&&i.definitions.push(d)}),i}Zt(M,"FeedOverlayItem");var T={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedProductCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ProductCard"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"displayHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ProductCard"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"overlayItems"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedOverlayItem"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"algorithm"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"score"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"version"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:315}};T.loc.source={body:`#import "../../../data/fragments/ProductCardFragment.graphql"
#import "./OverlayItemFragment.graphql"

fragment FeedProductCard on ProductCard {
  displayHints {
    options
  }
  product {
    id
    ...ProductCard
  }
  overlayItems {
    ...FeedOverlayItem
  }
  algorithm {
    name
    score
    version
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var On={};function Di(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return On[i]?!1:(On[i]=!0,!0)})}T.definitions=T.definitions.concat(Di(be.definitions));T.definitions=T.definitions.concat(Di(M.definitions));function se(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){se(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){se(t,n)}),e.definitions&&e.definitions.forEach(function(t){se(t,n)})}var Ke={};(function(){T.definitions.forEach(function(n){if(n.name){var i=new Set;se(n,i),Ke[n.name.value]=i}})})();function Mn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Wt(e,n){var i={kind:e.kind,definitions:[Mn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=Ke[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=Ke[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Mn(e,a);d&&i.definitions.push(d)}),i}Wt(T,"FeedProductCard");var N={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedMerchantCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MerchantCard"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"displayHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"overlayItems"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedOverlayItem"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"shop"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"defaultHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"followedByMe"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shopNetwork"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shareUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"websiteUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"MedusaJSId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nativeProductPagesEnabled"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"inAppVisibilityStatus"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"storeEligible"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"productReviewAnalytics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalProductReviews"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalProductRatings"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"averageRating"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"shopCashIncentive"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ShopCashIncentiveFragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"visualTheme"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"featuredImages"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"brandSettings"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BrandSettings"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"offers"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AutomaticDiscount"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:991}};N.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "../../../data/fragments/ShopCashIncentiveFragment.graphql"
#import "../../../data/fragments/BrandSettingsFragment.graphql"
#import "./OverlayItemFragment.graphql"

fragment FeedMerchantCard on MerchantCard {
  displayHints {
    options
  }
  overlayItems {
    ...FeedOverlayItem
  }
  shop {
    id
    name
    defaultHandle
    followedByMe
    shopNetwork
    shareUrl
    websiteUrl
    MedusaJSId
    nativeProductPagesEnabled
    inAppVisibilityStatus
    storeEligible
    productReviewAnalytics {
      totalProductReviews
      totalProductRatings
      averageRating
    }
    shopCashIncentive {
      ...ShopCashIncentiveFragment
    }
    visualTheme {
      id
      logoImage {
        ...ReducedImage
      }
      featuredImages {
        ...ReducedImage
      }
      brandSettings {
        ...BrandSettings
      }
    }
    offers {
      ... on AutomaticDiscount {
        id
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var qn={};function Me(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return qn[i]?!1:(qn[i]=!0,!0)})}N.definitions=N.definitions.concat(Me(w.definitions));N.definitions=N.definitions.concat(Me(Ae.definitions));N.definitions=N.definitions.concat(Me(at.definitions));N.definitions=N.definitions.concat(Me(M.definitions));function le(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){le(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){le(t,n)}),e.definitions&&e.definitions.forEach(function(t){le(t,n)})}var Ze={};(function(){N.definitions.forEach(function(n){if(n.name){var i=new Set;le(n,i),Ze[n.name.value]=i}})})();function $n(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Jt(e,n){var i={kind:e.kind,definitions:[$n(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=Ze[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=Ze[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=$n(e,a);d&&i.definitions.push(d)}),i}Jt(N,"FeedMerchantCard");var k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedProductFocusedMerchantCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ProductFocusedMerchantCard"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"productCards"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ProductCard"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"overlayItems"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedOverlayItem"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"displayHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"shop"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"defaultHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"followedByMe"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shopNetwork"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shareUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"websiteUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"MedusaJSId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nativeProductPagesEnabled"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"inAppVisibilityStatus"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"storeEligible"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"productReviewAnalytics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalProductReviews"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalProductRatings"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"averageRating"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"shopCashBackPromotion"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ShopCashBackPromotionFragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"shopCashIncentive"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ShopCashIncentiveFragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"visualTheme"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"VisualTheme"},directives:[]}]}}]}}]}}],loc:{start:0,end:1076}};k.loc.source={body:`#import "../../../data/fragments/ProductCardFragment.graphql"
#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "../../../data/fragments/VisualThemeFragment.graphql"
#import "../../../data/fragments/ShopCashIncentiveFragment.graphql"
#import "../../../data/fragments/ShopCashBackPromotionFragment.graphql"
#import "./OverlayItemFragment.graphql"

fragment FeedProductFocusedMerchantCard on ProductFocusedMerchantCard {
  productCards {
    product {
      id
      ...ProductCard
    }
  }
  overlayItems {
    ...FeedOverlayItem
  }
  displayHints {
    options
  }
  shop {
    id
    name
    defaultHandle
    followedByMe
    shopNetwork
    shareUrl
    websiteUrl
    MedusaJSId
    nativeProductPagesEnabled
    inAppVisibilityStatus
    storeEligible
    productReviewAnalytics {
      totalProductReviews
      totalProductRatings
      averageRating
    }
    shopCashBackPromotion {
      ...ShopCashBackPromotionFragment
    }
    shopCashIncentive {
      ...ShopCashIncentiveFragment
    }
    visualTheme {
      ...VisualTheme
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Vn={};function Z(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Vn[i]?!1:(Vn[i]=!0,!0)})}k.definitions=k.definitions.concat(Z(be.definitions));k.definitions=k.definitions.concat(Z(w.definitions));k.definitions=k.definitions.concat(Z(rt.definitions));k.definitions=k.definitions.concat(Z(Ae.definitions));k.definitions=k.definitions.concat(Z(dt.definitions));k.definitions=k.definitions.concat(Z(M.definitions));function ce(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){ce(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){ce(t,n)}),e.definitions&&e.definitions.forEach(function(t){ce(t,n)})}var We={};(function(){k.definitions.forEach(function(n){if(n.name){var i=new Set;ce(n,i),We[n.name.value]=i}})})();function Hn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Xt(e,n){var i={kind:e.kind,definitions:[Hn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=We[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=We[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Hn(e,a);d&&i.definitions.push(d)}),i}Xt(k,"FeedProductFocusedMerchantCard");var Q={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedActionCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ActionCard"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"displayHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fontVariant"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"backgroundImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}}]}}],loc:{start:0,end:232}};Q.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"

fragment FeedActionCard on ActionCard {
  displayHints {
    options
    fontVariant
  }
  action {
    label
    url
  }
  backgroundImage {
    ...ReducedImage
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var jn={};function _t(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return jn[i]?!1:(jn[i]=!0,!0)})}Q.definitions=Q.definitions.concat(_t(w.definitions));function me(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){me(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){me(t,n)}),e.definitions&&e.definitions.forEach(function(t){me(t,n)})}var Je={};(function(){Q.definitions.forEach(function(n){if(n.name){var i=new Set;me(n,i),Je[n.name.value]=i}})})();function Ln(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ea(e,n){var i={kind:e.kind,definitions:[Ln(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=Je[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=Je[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Ln(e,a);d&&i.definitions.push(d)}),i}ea(Q,"FeedActionCard");var qe={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedViewAllCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ViewAllCard"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:77}};qe.loc.source={body:`fragment FeedViewAllCard on ViewAllCard {
  action {
    url
    label
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function ue(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){ue(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){ue(t,n)}),e.definitions&&e.definitions.forEach(function(t){ue(t,n)})}var Xe={};(function(){qe.definitions.forEach(function(n){if(n.name){var i=new Set;ue(n,i),Xe[n.name.value]=i}})})();function Un(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function na(e,n){var i={kind:e.kind,definitions:[Un(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=Xe[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=Xe[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Un(e,a);d&&i.definitions.push(d)}),i}na(qe,"FeedViewAllCard");var $e={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedShopCashBalanceCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopCashBalanceContentNode"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"balance"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"currencyCode"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}],loc:{start:0,end:119}};$e.loc.source={body:`fragment FeedShopCashBalanceCard on ShopCashBalanceContentNode {
  balance {
    amount
    currencyCode
  }
  title
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function ve(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){ve(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){ve(t,n)}),e.definitions&&e.definitions.forEach(function(t){ve(t,n)})}var _e={};(function(){$e.definitions.forEach(function(n){if(n.name){var i=new Set;ve(n,i),_e[n.name.value]=i}})})();function Gn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ia(e,n){var i={kind:e.kind,definitions:[Gn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=_e[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=_e[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Gn(e,a);d&&i.definitions.push(d)}),i}ia($e,"FeedShopCashBalanceCard");var P={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedProductVariantCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ProductVariantCard"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"displayHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"productVariant"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"currencyCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"compareAtPrice"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"currencyCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"inDefaultProductList"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ProductCard"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"overlayItems"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedOverlayItem"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"algorithm"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"score"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"version"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:512}};P.loc.source={body:`#import "./OverlayItemFragment.graphql"
#import "../../../data/fragments/ProductCardFragment.graphql"

fragment FeedProductVariantCard on ProductVariantCard {
  displayHints {
    options
  }
  productVariant {
    id
    title
    price {
      currencyCode
      amount
    }
    compareAtPrice {
      currencyCode
      amount
    }
    inDefaultProductList

    product {
      id
      ...ProductCard
    }
  }
  overlayItems {
    ...FeedOverlayItem
  }
  algorithm {
    name
    score
    version
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Bn={};function Ri(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Bn[i]?!1:(Bn[i]=!0,!0)})}P.definitions=P.definitions.concat(Ri(M.definitions));P.definitions=P.definitions.concat(Ri(be.definitions));function fe(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){fe(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){fe(t,n)}),e.definitions&&e.definitions.forEach(function(t){fe(t,n)})}var en={};(function(){P.definitions.forEach(function(n){if(n.name){var i=new Set;fe(n,i),en[n.name.value]=i}})})();function Qn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ta(e,n){var i={kind:e.kind,definitions:[Qn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=en[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=en[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Qn(e,a);d&&i.definitions.push(d)}),i}ta(P,"FeedProductVariantCard");var Ve={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ShoppingEvent"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShoppingEvent"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"handle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"destinationUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"giveaway"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"handle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"eligibility"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isClaimable"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"knownVoucherAmount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"currencyCode"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"screenCustomizations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"screenName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"medium"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"discovery"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"topBannerEnabled"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"topBannerOnExploreAndCategoryPagesEnabled"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"media"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"handle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundColor"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"texts"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"bannerTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bannerSubtitles"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"expandedBannerTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"expandedBannerSubtitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"countdownText"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:546}};Ve.loc.source={body:`fragment ShoppingEvent on ShoppingEvent {
  handle
  endDate
  destinationUrl
  giveaway {
    handle
    eligibility
    isClaimable
    knownVoucherAmount {
      amount
      currencyCode
    }
    screenCustomizations {
      name
      screenName
      medium
      value
    }
  }
  discovery {
    topBannerEnabled
    topBannerOnExploreAndCategoryPagesEnabled
  }
  media {
    handle
    url
    backgroundColor
  }
  texts {
    bannerTitle
    bannerSubtitles
    expandedBannerTitle
    expandedBannerSubtitle
    countdownText
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function ke(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){ke(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){ke(t,n)}),e.definitions&&e.definitions.forEach(function(t){ke(t,n)})}var nn={};(function(){Ve.definitions.forEach(function(n){if(n.name){var i=new Set;ke(n,i),nn[n.name.value]=i}})})();function zn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function aa(e,n){var i={kind:e.kind,definitions:[zn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=nn[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=nn[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=zn(e,a);d&&i.definitions.push(d)}),i}aa(Ve,"ShoppingEvent");var z={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedShoppingEventCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShoppingEventCard"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shoppingEvent"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ShoppingEvent"},directives:[]}]}}]}}],loc:{start:0,end:142}};z.loc.source={body:`#import "./ShoppingEventFragment.graphql"

fragment FeedShoppingEventCard on ShoppingEventCard {
  shoppingEvent {
    ...ShoppingEvent
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Yn={};function ra(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Yn[i]?!1:(Yn[i]=!0,!0)})}z.definitions=z.definitions.concat(ra(Ve.definitions));function ge(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){ge(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){ge(t,n)}),e.definitions&&e.definitions.forEach(function(t){ge(t,n)})}var tn={};(function(){z.definitions.forEach(function(n){if(n.name){var i=new Set;ge(n,i),tn[n.name.value]=i}})})();function Kn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function da(e,n){var i={kind:e.kind,definitions:[Kn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=tn[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=tn[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Kn(e,a);d&&i.definitions.push(d)}),i}da(z,"FeedShoppingEventCard");var b={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedRichText"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"RichText"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"blockHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"alignment"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"horizontal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"vertical"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"backgroundColor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundStyle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"formatOptions"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lineSpacing"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"maxLines"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"textDirection"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"segments"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ResourceAction"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"fontVariant"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"traits"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:468}};b.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "./ResourceActionFragment.graphql"

fragment FeedRichText on RichText {
  blockHints {
    alignment {
      horizontal
      vertical
    }
    backgroundColor
    backgroundStyle
    formatOptions
    lineSpacing
    maxLines
    textDirection
  }
  segments {
    action {
      ...ResourceAction
    }
    fontVariant
    icon
    image {
      ...ReducedImage
    }
    text
    traits
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Zn={};function bi(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Zn[i]?!1:(Zn[i]=!0,!0)})}b.definitions=b.definitions.concat(bi(w.definitions));b.definitions=b.definitions.concat(bi(G.definitions));function Se(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){Se(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){Se(t,n)}),e.definitions&&e.definitions.forEach(function(t){Se(t,n)})}var an={};(function(){b.definitions.forEach(function(n){if(n.name){var i=new Set;Se(n,i),an[n.name.value]=i}})})();function Wn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function oa(e,n){var i={kind:e.kind,definitions:[Wn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=an[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=an[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Wn(e,a);d&&i.definitions.push(d)}),i}oa(b,"FeedRichText");var E={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedProductDetailsCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ProductDetailsCard"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"displayHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ProductCard"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"overlayItems"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedOverlayItem"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"descriptors"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedRichText"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"algorithm"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"score"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"version"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:406}};E.loc.source={body:`#import "../../../data/fragments/ProductCardFragment.graphql"
#import "./OverlayItemFragment.graphql"
#import "./RichTextFragment.graphql"

fragment FeedProductDetailsCard on ProductDetailsCard {
  displayHints {
    options
  }
  product {
    id
    ...ProductCard
  }
  overlayItems {
    ...FeedOverlayItem
  }
  descriptors {
    ...FeedRichText
  }
  algorithm {
    name
    score
    version
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Jn={};function Sn(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Jn[i]?!1:(Jn[i]=!0,!0)})}E.definitions=E.definitions.concat(Sn(be.definitions));E.definitions=E.definitions.concat(Sn(M.definitions));E.definitions=E.definitions.concat(Sn(b.definitions));function pe(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){pe(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){pe(t,n)}),e.definitions&&e.definitions.forEach(function(t){pe(t,n)})}var rn={};(function(){E.definitions.forEach(function(n){if(n.name){var i=new Set;pe(n,i),rn[n.name.value]=i}})})();function Xn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function sa(e,n){var i={kind:e.kind,definitions:[Xn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=rn[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=rn[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Xn(e,a);d&&i.definitions.push(d)}),i}sa(E,"FeedProductDetailsCard");var Y={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedThreadCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ThreadCard"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"conversation"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lastUpdatedAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"recentProductImages"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}}]}}]}}],loc:{start:0,end:216}};Y.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"

fragment FeedThreadCard on ThreadCard {
  conversation {
    id
    title
    lastUpdatedAt
    recentProductImages {
      ...ReducedImage
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var _n={};function la(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return _n[i]?!1:(_n[i]=!0,!0)})}Y.definitions=Y.definitions.concat(la(w.definitions));function he(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){he(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){he(t,n)}),e.definitions&&e.definitions.forEach(function(t){he(t,n)})}var dn={};(function(){Y.definitions.forEach(function(n){if(n.name){var i=new Set;he(n,i),dn[n.name.value]=i}})})();function ei(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ca(e,n){var i={kind:e.kind,definitions:[ei(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=dn[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=dn[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=ei(e,a);d&&i.definitions.push(d)}),i}ca(Y,"FeedThreadCard");var O={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedOrderDeliveryCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"OrderDeliveryCard"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"trackedItem"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Delivery"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sellerName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"deliveryFlags"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tracker"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"carrierInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"imageUrl"},arguments:[],directives:[]}]}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Order"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"loading"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shippingMethod"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"paymentStatus"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lineItems"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"productTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"deliveryStatus"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"displayStatus"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"markedAsDeliveredAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"markedAsDelivered"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"deliveryType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"etaInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"formattedEta"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"formattedEtaTime"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isFuture"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"effectiveTotalPrice"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"totalPriceAfterOfferApplied"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"totalPrice"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"totalItemCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"deliveries"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"deliveredAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tracker"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"carrierInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"imageUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"events"},arguments:[{kind:"Argument",name:{kind:"Name",value:"last"},value:{kind:"IntValue",value:"1"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"TrackerDeliveryEvent"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"happenedAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"shop"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"MedusaJSId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"visualTheme"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}}]}}]}}]}}]}}]}}],loc:{start:0,end:1688}};O.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "../../../data/fragments/MoneyV2Fragment.graphql"

fragment FeedOrderDeliveryCard on OrderDeliveryCard {
  trackedItem {
    id
    ... on Delivery {
      id
      sellerName
      customName
      status
      deliveryFlags
      tracker {
        carrierInfo {
          id
          name
          imageUrl
        }
      }
    }
    ... on Order {
      __typename
      id
      name
      loading
      shippingMethod
      paymentStatus
      lineItems {
        nodes {
          id
          productTitle
          image {
            ...ReducedImage
          }
        }
      }
      deliveryStatus
      displayStatus
      markedAsDeliveredAt
      markedAsDelivered
      createdAt
      deliveryType
      etaInfo {
        formattedEta
        formattedEtaTime
        isFuture
      }
      effectiveTotalPrice {
        ...MoneyV2Fragment
      }
      totalPriceAfterOfferApplied {
        ...MoneyV2Fragment
      }
      totalPrice {
        ...MoneyV2Fragment
      }
      totalItemCount
      deliveries {
        nodes {
          id
          status
          deliveredAt
          tracker {
            carrierInfo {
              id
              imageUrl
              name
            }
          }
          events(last: 1) {
            nodes {
              ... on TrackerDeliveryEvent {
                happenedAt
                message
              }
            }
          }
        }
      }
      shop {
        id
        name
        MedusaJSId
        visualTheme {
          id
          logoImage {
            ...ReducedImage
          }
        }
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ni={};function Ai(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return ni[i]?!1:(ni[i]=!0,!0)})}O.definitions=O.definitions.concat(Ai(w.definitions));O.definitions=O.definitions.concat(Ai(gn.definitions));function Fe(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){Fe(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){Fe(t,n)}),e.definitions&&e.definitions.forEach(function(t){Fe(t,n)})}var on={};(function(){O.definitions.forEach(function(n){if(n.name){var i=new Set;Fe(n,i),on[n.name.value]=i}})})();function ii(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ma(e,n){var i={kind:e.kind,definitions:[ii(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=on[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=on[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=ii(e,a);d&&i.definitions.push(d)}),i}ma(O,"FeedOrderDeliveryCard");var u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedContent"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ContentNode"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedProductCard"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedMerchantCard"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedProductFocusedMerchantCard"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedActionCard"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedViewAllCard"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedShopCashBalanceCard"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedProductVariantCard"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedShoppingEventCard"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedProductDetailsCard"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedRichText"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedThreadCard"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedOrderDeliveryCard"},directives:[]}]}}],loc:{start:0,end:863}};u.loc.source={body:`#import "./ProductCardFragment.graphql"
#import "./MerchantCardFragment.graphql"
#import "./ProductFocusedMerchantCardFragment.graphql"
#import "./ActionCardFragment.graphql"
#import "./ViewAllCardFragment.graphql"
#import "./ShopCashBalanceCardFragment.graphql"
#import "./ProductVariantCardFragment.graphql"
#import "./ShoppingEventCardFragment.graphql"
#import "./ProductDetailsCardFragment.graphql"
#import "./RichTextFragment.graphql"
#import "./ThreadCardFragment.graphql"
#import "./OrderDeliveryCardFragment.graphql"

fragment FeedContent on ContentNode {
  ...FeedProductCard
  ...FeedMerchantCard
  ...FeedProductFocusedMerchantCard
  ...FeedActionCard
  ...FeedViewAllCard
  ...FeedShopCashBalanceCard
  ...FeedProductVariantCard
  ...FeedShoppingEventCard
  ...FeedProductDetailsCard
  ...FeedRichText
  ...FeedThreadCard
  ...FeedOrderDeliveryCard
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ti={};function y(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return ti[i]?!1:(ti[i]=!0,!0)})}u.definitions=u.definitions.concat(y(T.definitions));u.definitions=u.definitions.concat(y(N.definitions));u.definitions=u.definitions.concat(y(k.definitions));u.definitions=u.definitions.concat(y(Q.definitions));u.definitions=u.definitions.concat(y(qe.definitions));u.definitions=u.definitions.concat(y($e.definitions));u.definitions=u.definitions.concat(y(P.definitions));u.definitions=u.definitions.concat(y(z.definitions));u.definitions=u.definitions.concat(y(E.definitions));u.definitions=u.definitions.concat(y(b.definitions));u.definitions=u.definitions.concat(y(Y.definitions));u.definitions=u.definitions.concat(y(O.definitions));function Ne(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){Ne(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){Ne(t,n)}),e.definitions&&e.definitions.forEach(function(t){Ne(t,n)})}var sn={};(function(){u.definitions.forEach(function(n){if(n.name){var i=new Set;Ne(n,i),sn[n.name.value]=i}})})();function ai(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ua(e,n){var i={kind:e.kind,definitions:[ai(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=sn[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=sn[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=ai(e,a);d&&i.definitions.push(d)}),i}ua(u,"FeedContent");var L={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SectionDisplayHints"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SectionDisplayHints"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"backgroundMedia"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"source"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Image"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Video"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"previewImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"dominantCoverColor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"overlayColor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundColorHsl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"wordmark"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sensitive"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"grouped"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contentHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"experimentalOptions"},arguments:[],directives:[]}]}}],loc:{start:0,end:499}};L.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"

fragment SectionDisplayHints on SectionDisplayHints {
  backgroundMedia {
    source {
      ... on Image {
        ...ReducedImage
      }
      ... on Video {
        url
        previewImage {
          ...ReducedImage
        }
      }
    }
  }
  dominantCoverColor
  overlayColor
  backgroundColorHsl
  wordmark {
    url
    altText
    sensitive
  }
  grouped
  options
  contentHints {
    options
  }
  experimentalOptions
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ri={};function va(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return ri[i]?!1:(ri[i]=!0,!0)})}L.definitions=L.definitions.concat(va(w.definitions));function ye(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){ye(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){ye(t,n)}),e.definitions&&e.definitions.forEach(function(t){ye(t,n)})}var ln={};(function(){L.definitions.forEach(function(n){if(n.name){var i=new Set;ye(n,i),ln[n.name.value]=i}})})();function di(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function fa(e,n){var i={kind:e.kind,definitions:[di(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=ln[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=ln[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=di(e,a);d&&i.definitions.push(d)}),i}fa(L,"SectionDisplayHints");var J={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SectionMetadata"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FeedSectionMetaData"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sectionId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subSectionId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"itemTypes"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"itemSize"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"recommendationContext"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"algorithm"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"score"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"version"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"sectionGid"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"attributes"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"domain"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"modelId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"modelName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"scope"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:256}};J.loc.source={body:`fragment SectionMetadata on FeedSectionMetaData {
  sectionId
  subSectionId
  itemTypes
  itemSize
  recommendationContext
  algorithm {
    name
    score
    version
  }
  sectionGid {
    attributes
    domain
    modelId
    modelName
    scope
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function Ee(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){Ee(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){Ee(t,n)}),e.definitions&&e.definitions.forEach(function(t){Ee(t,n)})}var cn={};(function(){J.definitions.forEach(function(n){if(n.name){var i=new Set;Ee(n,i),cn[n.name.value]=i}})})();function oi(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ka(e,n){var i={kind:e.kind,definitions:[oi(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=cn[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=cn[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=oi(e,a);d&&i.definitions.push(d)}),i}ka(J,"SectionMetadata");var A={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ShopSubject"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopSubject"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subjectId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subjectKind"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shop"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"MedusaJSId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"followedByMe"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"productReviewAnalytics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalProductReviews"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalProductRatings"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"averageRating"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"defaultHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"visualTheme"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"brandSettings"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"colors"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoDominant"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coverDominant"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"shopCashIncentive"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ShopCashIncentiveFragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"websiteUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"myMedusaJSDomain"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:694}};A.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "../../../data/fragments/ShopCashIncentiveFragment.graphql"

fragment ShopSubject on ShopSubject {
  subjectId
  subjectKind
  shop {
    id
    MedusaJSId
    followedByMe
    name
    productReviewAnalytics {
      totalProductReviews
      totalProductRatings
      averageRating
    }
    defaultHandle
    visualTheme {
      id
      logoImage {
        ...ReducedImage
      }
      brandSettings {
        id
        colors {
          id
          logoDominant
          coverDominant
        }
      }
    }
    shopCashIncentive {
      ...ShopCashIncentiveFragment
    }
    websiteUrl
    myMedusaJSDomain
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var si={};function Ii(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return si[i]?!1:(si[i]=!0,!0)})}A.definitions=A.definitions.concat(Ii(w.definitions));A.definitions=A.definitions.concat(Ii(Ae.definitions));function we(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){we(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){we(t,n)}),e.definitions&&e.definitions.forEach(function(t){we(t,n)})}var mn={};(function(){A.definitions.forEach(function(n){if(n.name){var i=new Set;we(n,i),mn[n.name.value]=i}})})();function li(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ga(e,n){var i={kind:e.kind,definitions:[li(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=mn[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=mn[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=li(e,a);d&&i.definitions.push(d)}),i}ga(A,"ShopSubject");var U={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SectionUnderlay"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SectionUnderlay"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopCashIncentiveUnderlay"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"incentive"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ShopCashIncentiveFragment"},directives:[]}]}}]}}]}}],loc:{start:0,end:244}};U.loc.source={body:`#import "../../../data/fragments/ShopCashIncentiveFragment.graphql"

fragment SectionUnderlay on SectionUnderlay {
  ... on ShopCashIncentiveUnderlay {
    action {
      url
    }
    incentive {
      ...ShopCashIncentiveFragment
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ci={};function Sa(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return ci[i]?!1:(ci[i]=!0,!0)})}U.definitions=U.definitions.concat(Sa(Ae.definitions));function Ce(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){Ce(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){Ce(t,n)}),e.definitions&&e.definitions.forEach(function(t){Ce(t,n)})}var un={};(function(){U.definitions.forEach(function(n){if(n.name){var i=new Set;Ce(n,i),un[n.name.value]=i}})})();function mi(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function pa(e,n){var i={kind:e.kind,definitions:[mi(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=un[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=un[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=mi(e,a);d&&i.definitions.push(d)}),i}pa(U,"SectionUnderlay");var v={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ListSection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ListSection"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"itemsPerRow"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"displayHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionDisplayHints"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"subject"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subjectId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subjectKind"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ShopSubject"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"header"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionHeader"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"footer"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionFooter"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"underlay"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionUnderlay"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"metadata"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionMetadata"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ResourceAction"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[{kind:"Argument",name:{kind:"Name",value:"after"},value:{kind:"Variable",name:{kind:"Name",value:"itemsAfter"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedContent"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endCursor"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:833}};v.loc.source={body:`#import "./SectionHeaderFragment.graphql"
#import "./SectionFooterFragment.graphql"
#import "./FeedContentFragment.graphql"
#import "./SectionDisplayHintsFragment.graphql"
#import "./SectionMetadataFragment.graphql"
#import "./ShopSubjectFragment.graphql"
#import "./SectionUnderlayFragment.graphql"
#import "./ResourceActionFragment.graphql"

fragment ListSection on ListSection {
  id
  itemsPerRow
  displayHints {
    ...SectionDisplayHints
  }
  subject {
    subjectId
    subjectKind
    ...ShopSubject
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
  action {
    ...ResourceAction
  }
  items(after: $itemsAfter) {
    nodes {
      ...FeedContent
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ui={};function q(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return ui[i]?!1:(ui[i]=!0,!0)})}v.definitions=v.definitions.concat(q(j.definitions));v.definitions=v.definitions.concat(q(R.definitions));v.definitions=v.definitions.concat(q(u.definitions));v.definitions=v.definitions.concat(q(L.definitions));v.definitions=v.definitions.concat(q(J.definitions));v.definitions=v.definitions.concat(q(A.definitions));v.definitions=v.definitions.concat(q(U.definitions));v.definitions=v.definitions.concat(q(G.definitions));function De(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){De(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){De(t,n)}),e.definitions&&e.definitions.forEach(function(t){De(t,n)})}var vn={};(function(){v.definitions.forEach(function(n){if(n.name){var i=new Set;De(n,i),vn[n.name.value]=i}})})();function vi(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ha(e,n){var i={kind:e.kind,definitions:[vi(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=vn[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=vn[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=vi(e,a);d&&i.definitions.push(d)}),i}ha(v,"ListSection");var f={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ShelfSection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShelfSection"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"displayHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionDisplayHints"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"header"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionHeader"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"footer"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionFooter"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"underlay"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionUnderlay"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"metadata"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionMetadata"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ResourceAction"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"itemsInView"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subject"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subjectId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subjectKind"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ShopSubject"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[{kind:"Argument",name:{kind:"Name",value:"after"},value:{kind:"Variable",name:{kind:"Name",value:"itemsAfter"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedContent"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endCursor"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:835}};f.loc.source={body:`#import "./SectionHeaderFragment.graphql"
#import "./SectionFooterFragment.graphql"
#import "./FeedContentFragment.graphql"
#import "./SectionDisplayHintsFragment.graphql"
#import "./SectionMetadataFragment.graphql"
#import "./ShopSubjectFragment.graphql"
#import "./SectionUnderlayFragment.graphql"
#import "./ResourceActionFragment.graphql"

fragment ShelfSection on ShelfSection {
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
  action {
    ...ResourceAction
  }
  itemsInView
  subject {
    subjectId
    subjectKind
    ...ShopSubject
  }
  items(after: $itemsAfter) {
    nodes {
      ...FeedContent
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var fi={};function $(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return fi[i]?!1:(fi[i]=!0,!0)})}f.definitions=f.definitions.concat($(j.definitions));f.definitions=f.definitions.concat($(R.definitions));f.definitions=f.definitions.concat($(u.definitions));f.definitions=f.definitions.concat($(L.definitions));f.definitions=f.definitions.concat($(J.definitions));f.definitions=f.definitions.concat($(A.definitions));f.definitions=f.definitions.concat($(U.definitions));f.definitions=f.definitions.concat($(G.definitions));function Re(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){Re(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){Re(t,n)}),e.definitions&&e.definitions.forEach(function(t){Re(t,n)})}var fn={};(function(){f.definitions.forEach(function(n){if(n.name){var i=new Set;Re(n,i),fn[n.name.value]=i}})})();function ki(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Fa(e,n){var i={kind:e.kind,definitions:[ki(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=fn[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=fn[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=ki(e,a);d&&i.definitions.push(d)}),i}Fa(f,"ShelfSection");export{Ya as A,ot as S,v as a,j as b,R as c,f as d,u as e,J as f,A as g,L as h,G as i,U as j,Ve as k,Qa as l,za as m,Ft as n};
//# sourceMappingURL=ShelfSectionFragment-junY_xzu.js.map
