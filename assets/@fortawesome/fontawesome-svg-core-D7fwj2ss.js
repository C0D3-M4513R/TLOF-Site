function e(e,t,n){return(t=i(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function n(n){for(var r=1;r<arguments.length;r++){var i=arguments[r]==null?{}:arguments[r];r%2?t(Object(i),!0).forEach(function(t){e(n,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))})}return n}function r(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function i(e){var t=r(e,`string`);return typeof t==`symbol`?t:t+``}var a=()=>{},o={},s={},c=null,l={mark:a,measure:a};try{typeof window<`u`&&(o=window),typeof document<`u`&&(s=document),typeof MutationObserver<`u`&&(c=MutationObserver),typeof performance<`u`&&(l=performance)}catch{}var{userAgent:u=``}=o.navigator||{},d=o,f=s,p=c,m=l;d.document;var h=!!f.documentElement&&!!f.head&&typeof f.addEventListener==`function`&&typeof f.createElement==`function`,g=~u.indexOf(`MSIE`)||~u.indexOf(`Trident/`),_=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,v=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,y={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`}},ee={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},te=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`],b=`classic`,x=`duotone`,ne=[b,x,`sharp`,`sharp-duotone`],re={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`}},ie={"Font Awesome 6 Free":{900:`fas`,400:`far`},"Font Awesome 6 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 6 Brands":{400:`fab`,normal:`fab`},"Font Awesome 6 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 6 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 6 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`}},ae=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}]]),oe={classic:{solid:`fas`,regular:`far`,light:`fal`,thin:`fat`,brands:`fab`},duotone:{solid:`fad`,regular:`fadr`,light:`fadl`,thin:`fadt`},sharp:{solid:`fass`,regular:`fasr`,light:`fasl`,thin:`fast`},"sharp-duotone":{solid:`fasds`,regular:`fasdr`,light:`fasdl`,thin:`fasdt`}},se=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],ce={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},le=[`kit`],ue={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},de=[`fak`,`fakd`],fe={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},pe={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},S={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},me=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`],he=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],ge={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},_e={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`}},ve={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`]},ye={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`}},be=[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`],xe=[`fa`,`fas`,`far`,`fal`,`fat`,`fad`,`fadr`,`fadl`,`fadt`,`fab`,`fass`,`fasr`,`fasl`,`fast`,`fasds`,`fasdr`,`fasdl`,`fasdt`,...me,...be],Se=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`],Ce=[1,2,3,4,5,6,7,8,9,10],we=Ce.concat([11,12,13,14,15,16,17,18,19,20]),Te=[...Object.keys(ve),...Se,`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`fw`,`inverse`,`layers-counter`,`layers-text`,`layers`,`li`,`pull-left`,`pull-right`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,S.GROUP,S.SWAP_OPACITY,S.PRIMARY,S.SECONDARY].concat(Ce.map(e=>`${e}x`),we.map(e=>`w-${e}`)),Ee={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},C=`___FONT_AWESOME___`,De=16,Oe=`fa`,ke=`svg-inline--fa`,w=`data-fa-i2svg`,Ae=`data-fa-pseudo-element`,je=`data-fa-pseudo-element-pending`,Me=`data-prefix`,Ne=`data-icon`,Pe=`fontawesome-i2svg`,Fe=`async`,Ie=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Le=(()=>{try{return!0}catch{return!1}})();function T(e){return new Proxy(e,{get(e,t){return t in e?e[t]:e[b]}})}var Re=n({},y);Re[b]=n(n(n(n({},{"fa-duotone":`duotone`}),y[b]),ce.kit),ce[`kit-duotone`]);var ze=T(Re),Be=n({},oe);Be[b]=n(n(n(n({},{duotone:`fad`}),Be[b]),pe.kit),pe[`kit-duotone`]);var Ve=T(Be),He=n({},ye);He[b]=n(n({},He[b]),fe.kit);var Ue=T(He),We=n({},_e);We[b]=n(n({},We[b]),ue.kit),T(We);var Ge=_,Ke=`fa-layers-text`,qe=v;T(n({},re));var Je=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Ye=ee,Xe=[...le,...Te],E=d.FontAwesomeConfig||{};function Ze(e){var t=f.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Qe(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}f&&typeof f.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-auto-a11y`,`autoA11y`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(e=>{let[t,n]=e,r=Qe(Ze(t));r!=null&&(E[n]=r)});var $e={styleDefault:`solid`,familyDefault:b,cssPrefix:Oe,replacementClass:ke,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};E.familyPrefix&&(E.cssPrefix=E.familyPrefix);var D=n(n({},$e),E);D.autoReplaceSvg||(D.observeMutations=!1);var O={};Object.keys($e).forEach(e=>{Object.defineProperty(O,e,{enumerable:!0,set:function(t){D[e]=t,k.forEach(e=>e(O))},get:function(){return D[e]}})}),Object.defineProperty(O,"familyPrefix",{enumerable:!0,set:function(e){D.cssPrefix=e,k.forEach(e=>e(O))},get:function(){return D.cssPrefix}}),d.FontAwesomeConfig=O;var k=[];function et(e){return k.push(e),()=>{k.splice(k.indexOf(e),1)}}var A=De,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function tt(e){if(!e||!h)return;let t=f.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;let n=f.head.childNodes,r=null;for(let e=n.length-1;e>-1;e--){let t=n[e],i=(t.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(i)>-1&&(r=t)}return f.head.insertBefore(t,r),e}var nt=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function M(){let e=12,t=``;for(;e-- >0;)t+=nt[Math.random()*62|0];return t}function N(e){let t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function rt(e){return e.classList?N(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(e=>e)}function it(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function at(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}="${it(e[n])}" `,``).trim()}function P(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}: ${e[n].trim()};`,``)}function ot(e){return e.size!==j.size||e.x!==j.x||e.y!==j.y||e.rotate!==j.rotate||e.flipX||e.flipY}function st(e){let{transform:t,containerWidth:n,iconWidth:r}=e;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function ct(e){let{transform:t,width:n=De,height:r=De,startCentered:i=!1}=e,a=``;return i&&g?a+=`translate(${t.x/A-n/2}em, ${t.y/A-r/2}em) `:i?a+=`translate(calc(-50% + ${t.x/A}em), calc(-50% + ${t.y/A}em)) `:a+=`translate(${t.x/A}em, ${t.y/A}em) `,a+=`scale(${t.size/A*(t.flipX?-1:1)}, ${t.size/A*(t.flipY?-1:1)}) `,a+=`rotate(${t.rotate}deg) `,a}var lt=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function ut(){let e=Oe,t=ke,n=O.cssPrefix,r=O.replacementClass,i=lt;if(n!==e||r!==t){let a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var dt=!1;function ft(){O.autoAddCss&&!dt&&(tt(ut()),dt=!0)}var pt={mixout(){return{dom:{css:ut,insertCss:ft}}},hooks(){return{beforeDOMElementCreation(){ft()},beforeI2svg(){ft()}}}},F=d||{};F[C]||(F[C]={}),F[C].styles||(F[C].styles={}),F[C].hooks||(F[C].hooks={}),F[C].shims||(F[C].shims=[]);var I=F[C],mt=[],ht=function(){f.removeEventListener(`DOMContentLoaded`,ht),L=1,mt.map(e=>e())},L=!1;h&&(L=(f.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(f.readyState),L||f.addEventListener(`DOMContentLoaded`,ht));function gt(e){h&&(L?setTimeout(e,0):mt.push(e))}function R(e){let{tag:t,attributes:n={},children:r=[]}=e;return typeof e==`string`?it(e):`<${t} ${at(n)}>${r.map(R).join(``)}</${t}>`}function _t(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var vt=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},yt=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:vt(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function bt(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function xt(e){let t=bt(e);return t.length===1?t[0].toString(16):null}function St(e,t){let n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ct(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function wt(e,t){let{skipHooks:r=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=Ct(t);typeof I.hooks.addPack==`function`&&!r?I.hooks.addPack(e,Ct(t)):I.styles[e]=n(n({},I.styles[e]||{}),i),e===`fas`&&wt(`fa`,t)}var{styles:z,shims:Tt}=I,Et=Object.keys(Ue),Dt=Et.reduce((e,t)=>(e[t]=Object.keys(Ue[t]),e),{}),Ot=null,kt={},At={},jt={},Mt={},Nt={};function Pt(e){return~Xe.indexOf(e)}function Ft(e,t){let n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Pt(i)?i:null}var It=()=>{let e=e=>yt(z,(t,n,r)=>(t[r]=yt(n,e,{}),t),{});kt=e((e,t,n)=>(t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(e=>typeof e==`number`).forEach(t=>{e[t.toString(16)]=n}),e)),At=e((e,t,n)=>(e[n]=n,t[2]&&t[2].filter(e=>typeof e==`string`).forEach(t=>{e[t]=n}),e)),Nt=e((e,t,n)=>{let r=t[2];return e[n]=n,r.forEach(t=>{e[t]=n}),e});let t=`far`in z||O.autoFetchSvg,n=yt(Tt,(e,n)=>{let r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});jt=n.names,Mt=n.unicodes,Ot=H(O.styleDefault,{family:O.familyDefault})};et(e=>{Ot=H(e.styleDefault,{family:O.familyDefault})}),It();function Lt(e,t){return(kt[e]||{})[t]}function Rt(e,t){return(At[e]||{})[t]}function B(e,t){return(Nt[e]||{})[t]}function zt(e){return jt[e]||{prefix:null,iconName:null}}function Bt(e){let t=Mt[e],n=Lt(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function V(){return Ot}var Vt=()=>({prefix:null,iconName:null,rest:[]});function Ht(e){let t=b,n=Et.reduce((e,t)=>(e[t]=`${O.cssPrefix}-${t}`,e),{});return ne.forEach(r=>{(e.includes(n[r])||e.some(e=>Dt[r].includes(e)))&&(t=r)}),t}function H(e){let{family:t=b}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=ze[t][e];if(t===x&&!e)return`fad`;let r=Ve[t][e]||Ve[t][n],i=e in I.styles?e:null;return r||i||null}function Ut(e){let t=[],n=null;return e.forEach(e=>{let r=Ft(O.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Wt(e){return e.sort().filter((e,t,n)=>n.indexOf(e)===t)}function U(e){let{skipLookups:t=!1}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=null,i=xe.concat(he),a=Wt(e.filter(e=>i.includes(e))),o=Wt(e.filter(e=>!xe.includes(e))),[s=null]=a.filter(e=>(r=e,!te.includes(e))),c=Ht(a),l=n(n({},Ut(o)),{},{prefix:H(s,{family:c})});return n(n(n({},l),Jt({values:e,family:c,styles:z,config:O,canonical:l,givenPrefix:r})),Gt(t,r,l))}function Gt(e,t,n){let{prefix:r,iconName:i}=n;if(e||!r||!i)return{prefix:r,iconName:i};let a=t===`fa`?zt(i):{},o=B(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!z.far&&z.fas&&!O.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var Kt=ne.filter(e=>e!==b||e!==x),qt=Object.keys(ye).filter(e=>e!==b).map(e=>Object.keys(ye[e])).flat();function Jt(e){let{values:t,family:n,canonical:r,givenPrefix:i=``,styles:a={},config:o={}}=e,s=n===x,c=t.includes(`fa-duotone`)||t.includes(`fad`),l=o.familyDefault===`duotone`,u=r.prefix===`fad`||r.prefix===`fa-duotone`;return!s&&(c||l||u)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Kt.includes(n)&&(Object.keys(a).find(e=>qt.includes(e))||o.autoFetchSvg)&&(r.prefix=ae.get(n).defaultShortPrefixId,r.iconName=B(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||i===`fa`)&&(r.prefix=V()||`fas`),r}var Yt=class{constructor(){this.definitions={}}add(){let e=[...arguments].reduce(this._pullDefinitions,{});Object.keys(e).forEach(t=>{this.definitions[t]=n(n({},this.definitions[t]||{}),e[t]),wt(t,e[t]);let r=Ue[b][t];r&&wt(r,e[t]),It()})}reset(){this.definitions={}}_pullDefinitions(e,t){let n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(t=>{let{prefix:r,iconName:i,icon:a}=n[t],o=a[2];e[r]||(e[r]={}),o.length>0&&o.forEach(t=>{typeof t==`string`&&(e[r][t]=a)}),e[r][i]=a}),e}},Xt=[],W={},G={},Zt=Object.keys(G);function Qt(e,t){let{mixoutsTo:n}=t;return Xt=e,W={},Object.keys(G).forEach(e=>{Zt.indexOf(e)===-1&&delete G[e]}),Xt.forEach(e=>{let t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(e=>{typeof t[e]==`function`&&(n[e]=t[e]),typeof t[e]==`object`&&Object.keys(t[e]).forEach(r=>{n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){let t=e.hooks();Object.keys(t).forEach(e=>{W[e]||(W[e]=[]),W[e].push(t[e])})}e.provides&&e.provides(G)}),n}function $t(e,t){var n=[...arguments].slice(2);return(W[e]||[]).forEach(e=>{t=e.apply(null,[t,...n])}),t}function K(e){var t=[...arguments].slice(1);(W[e]||[]).forEach(e=>{e.apply(null,t)})}function q(){let e=arguments[0],t=Array.prototype.slice.call(arguments,1);return G[e]?G[e].apply(null,t):void 0}function en(e){e.prefix===`fa`&&(e.prefix=`fas`);let{iconName:t}=e,n=e.prefix||V();if(t)return t=B(n,t)||t,_t(tn.definitions,n,t)||_t(I.styles,n,t)}var tn=new Yt,J={noAuto:()=>{O.autoReplaceSvg=!1,O.observeMutations=!1,K(`noAuto`)},config:O,dom:{i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return h?(K(`beforeI2svg`,e),q(`pseudoElements2svg`,e),q(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t}=e;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,gt(()=>{nn({autoReplaceSvgRoot:t}),K(`watch`,e)})}},parse:{icon:e=>{if(e===null)return null;if(typeof e==`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:B(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=H(e[0]);return{prefix:n,iconName:B(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${O.cssPrefix}-`)>-1||e.match(Ge))){let t=U(e.split(` `),{skipLookups:!0});return{prefix:t.prefix||V(),iconName:B(t.prefix,t.iconName)||t.iconName}}if(typeof e==`string`){let t=V();return{prefix:t,iconName:B(t,e)||e}}}},library:tn,findIconDefinition:en,toHtml:R},nn=function(){let{autoReplaceSvgRoot:e=f}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(Object.keys(I.styles).length>0||O.autoFetchSvg)&&h&&O.autoReplaceSvg&&J.dom.i2svg({node:e})};function Y(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(e=>R(e))}}),Object.defineProperty(e,"node",{get:function(){if(!h)return;let t=f.createElement(`div`);return t.innerHTML=e.html,t.children}}),e}function rn(e){let{children:t,main:r,mask:i,attributes:a,styles:o,transform:s}=e;if(ot(s)&&r.found&&!i.found){let{width:e,height:t}=r,i={x:e/t/2,y:.5};a.style=P(n(n({},o),{},{"transform-origin":`${i.x+s.x/16}em ${i.y+s.y/16}em`}))}return[{tag:`svg`,attributes:a,children:t}]}function an(e){let{prefix:t,iconName:r,children:i,attributes:a,symbol:o}=e,s=o===!0?`${t}-${O.cssPrefix}-${r}`:o;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:n(n({},a),{},{id:s}),children:i}]}]}function on(e){let{icons:{main:t,mask:r},prefix:i,iconName:a,transform:o,symbol:s,title:c,maskId:l,titleId:u,extra:d,watchable:f=!1}=e,{width:p,height:m}=r.found?r:t,h=de.includes(i),g=[O.replacementClass,a?`${O.cssPrefix}-${a}`:``].filter(e=>d.classes.indexOf(e)===-1).filter(e=>e!==``||!!e).concat(d.classes).join(` `),_={children:[],attributes:n(n({},d.attributes),{},{"data-prefix":i,"data-icon":a,class:g,role:d.attributes.role||`img`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 ${p} ${m}`})},v=h&&!~d.classes.indexOf(`fa-fw`)?{width:`${p/m*16*.0625}em`}:{};f&&(_.attributes[w]=``),c&&(_.children.push({tag:`title`,attributes:{id:_.attributes[`aria-labelledby`]||`title-${u||M()}`},children:[c]}),delete _.attributes.title);let y=n(n({},_),{},{prefix:i,iconName:a,main:t,mask:r,maskId:l,transform:o,symbol:s,styles:n(n({},v),d.styles)}),{children:ee,attributes:te}=r.found&&t.found?q(`generateAbstractMask`,y)||{children:[],attributes:{}}:q(`generateAbstractIcon`,y)||{children:[],attributes:{}};return y.children=ee,y.attributes=te,s?an(y):rn(y)}function sn(e){let{content:t,width:r,height:i,transform:a,title:o,extra:s,watchable:c=!1}=e,l=n(n(n({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(` `)});c&&(l[w]=``);let u=n({},s.styles);ot(a)&&(u.transform=ct({transform:a,startCentered:!0,width:r,height:i}),u[`-webkit-transform`]=u.transform);let d=P(u);d.length>0&&(l.style=d);let f=[];return f.push({tag:`span`,attributes:l,children:[t]}),o&&f.push({tag:`span`,attributes:{class:`sr-only`},children:[o]}),f}function cn(e){let{content:t,title:r,extra:i}=e,a=n(n(n({},i.attributes),r?{title:r}:{}),{},{class:i.classes.join(` `)}),o=P(i.styles);o.length>0&&(a.style=o);let s=[];return s.push({tag:`span`,attributes:a,children:[t]}),r&&s.push({tag:`span`,attributes:{class:`sr-only`},children:[r]}),s}var{styles:ln}=I;function un(e){let t=e[0],n=e[1],[r]=e.slice(4),i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${O.cssPrefix}-${Ye.GROUP}`},children:[{tag:`path`,attributes:{class:`${O.cssPrefix}-${Ye.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${O.cssPrefix}-${Ye.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var dn={found:!1,width:512,height:512};function fn(e,t){!Le&&!O.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function pn(e,t){let r=t;return t===`fa`&&O.styleDefault!==null&&(t=V()),new Promise((i,a)=>{if(r===`fa`){let n=zt(e)||{};e=n.iconName||e,t=n.prefix||t}if(e&&t&&ln[t]&&ln[t][e]){let n=ln[t][e];return i(un(n))}fn(e,t),i(n(n({},dn),{},{icon:O.showMissingIcons&&e&&q(`missingIconAbstract`)||{}}))})}var mn=()=>{},hn=O.measurePerformance&&m&&m.mark&&m.measure?m:{mark:mn,measure:mn},X=`FA "6.7.2"`,gn=e=>(hn.mark(`${X} ${e} begins`),()=>_n(e)),_n=e=>{hn.mark(`${X} ${e} ends`),hn.measure(`${X} ${e}`,`${X} ${e} begins`,`${X} ${e} ends`)},vn={begin:gn,end:_n},Z=()=>{};function yn(e){return typeof(e.getAttribute?e.getAttribute(w):null)==`string`}function bn(e){let t=e.getAttribute?e.getAttribute(Me):null,n=e.getAttribute?e.getAttribute(Ne):null;return t&&n}function xn(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(O.replacementClass)}function Sn(){return O.autoReplaceSvg===!0?Q.replace:Q[O.autoReplaceSvg]||Q.replace}function Cn(e){return f.createElementNS(`http://www.w3.org/2000/svg`,e)}function wn(e){return f.createElement(e)}function Tn(e){let{ceFn:t=e.tag===`svg`?Cn:wn}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof e==`string`)return f.createTextNode(e);let n=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){n.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){n.appendChild(Tn(e,{ceFn:t}))}),n}function En(e){let t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Q={replace:function(e){let t=e[0];if(t.parentNode)if(e[1].forEach(e=>{t.parentNode.insertBefore(Tn(e),t)}),t.getAttribute(w)===null&&O.keepOriginalSource){let e=f.createComment(En(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(e){let t=e[0],n=e[1];if(~rt(t).indexOf(O.replacementClass))return Q.replace(e);let r=RegExp(`${O.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){let e=n[0].attributes.class.split(` `).reduce((e,t)=>(t===O.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e),{toNode:[],toSvg:[]});n[0].attributes.class=e.toSvg.join(` `),e.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,e.toNode.join(` `))}let i=n.map(e=>R(e)).join(`
`);t.setAttribute(w,``),t.innerHTML=i}};function Dn(e){e()}function On(e,t){let n=typeof t==`function`?t:Z;if(e.length===0)n();else{let t=Dn;O.mutateApproach===Fe&&(t=d.requestAnimationFrame||Dn),t(()=>{let t=Sn(),r=vn.begin(`mutate`);e.map(t),r(),n()})}}var kn=!1;function An(){kn=!0}function jn(){kn=!1}var $=null;function Mn(e){if(!p||!O.observeMutations)return;let{treeCallback:t=Z,nodeCallback:n=Z,pseudoElementsCallback:r=Z,observeMutationsRoot:i=f}=e;$=new p(e=>{if(kn)return;let i=V();N(e).forEach(e=>{if(e.type===`childList`&&e.addedNodes.length>0&&!yn(e.addedNodes[0])&&(O.searchPseudoElements&&r(e.target),t(e.target)),e.type===`attributes`&&e.target.parentNode&&O.searchPseudoElements&&r(e.target.parentNode),e.type===`attributes`&&yn(e.target)&&~Je.indexOf(e.attributeName))if(e.attributeName===`class`&&bn(e.target)){let{prefix:t,iconName:n}=U(rt(e.target));e.target.setAttribute(Me,t||i),n&&e.target.setAttribute(Ne,n)}else xn(e.target)&&n(e.target)})}),h&&$.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Nn(){$&&$.disconnect()}function Pn(e){let t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce((e,t)=>{let n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Fn(e){let t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=U(rt(e));return i.prefix||=V(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Rt(i.prefix,e.innerText)||Lt(i.prefix,xt(e.innerText))),!i.iconName&&O.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function In(e){let t=N(e.attributes).reduce((e,t)=>(e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e),{}),n=e.getAttribute(`title`),r=e.getAttribute(`data-fa-title-id`);return O.autoA11y&&(n?t[`aria-labelledby`]=`${O.replacementClass}-title-${r||M()}`:(t[`aria-hidden`]=`true`,t.focusable=`false`)),t}function Ln(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Rn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:r,prefix:i,rest:a}=Fn(e),o=In(e),s=$t(`parseNodeAttributes`,{},e),c=t.styleParser?Pn(e):[];return n({iconName:r,title:e.getAttribute(`title`),titleId:e.getAttribute(`data-fa-title-id`),prefix:i,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:c,attributes:o}},s)}var{styles:zn}=I;function Bn(e){let t=O.autoReplaceSvg===`nest`?Rn(e,{styleParser:!1}):Rn(e);return~t.extra.classes.indexOf(Ke)?q(`generateLayersText`,e,t):q(`generateSvgReplacementMutation`,e,t)}function Vn(){return[...se,...xe]}function Hn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!h)return Promise.resolve();let n=f.documentElement.classList,r=e=>n.add(`${Pe}-${e}`),i=e=>n.remove(`${Pe}-${e}`),a=O.autoFetchSvg?Vn():te.concat(Object.keys(zn));a.includes(`fa`)||a.push(`fa`);let o=[`.${Ke}:not([${w}])`].concat(a.map(e=>`.${e}:not([${w}])`)).join(`, `);if(o.length===0)return Promise.resolve();let s=[];try{s=N(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();let c=vn.begin(`onTree`),l=s.reduce((e,t)=>{try{let n=Bn(t);n&&e.push(n)}catch(e){Le||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise((e,n)=>{Promise.all(l).then(n=>{On(n,()=>{r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(e=>{c(),n(e)})})}function Un(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Bn(e).then(e=>{e&&On([e],t)})}function Wn(e){return function(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(t||{}).icon?t:en(t||{}),{mask:a}=r;return a&&=(a||{}).icon?a:en(a||{}),e(i,n(n({},r),{},{mask:a}))}}var Gn=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:r=j,symbol:i=!1,mask:a=null,maskId:o=null,title:s=null,titleId:c=null,classes:l=[],attributes:u={},styles:d={}}=t;if(!e)return;let{prefix:f,iconName:p,icon:m}=e;return Y(n({type:`icon`},e),()=>(K(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),O.autoA11y&&(s?u[`aria-labelledby`]=`${O.replacementClass}-title-${c||M()}`:(u[`aria-hidden`]=`true`,u.focusable=`false`)),on({icons:{main:un(m),mask:a?un(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:p,transform:n(n({},j),r),symbol:i,title:s,maskId:o,titleId:c,extra:{attributes:u,styles:d,classes:l}})))},Kn={mixout(){return{icon:Wn(Gn)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Hn,e.nodeCallback=Un,e}}},provides(e){e.i2svg=function(e){let{node:t=f,callback:n=()=>{}}=e;return Hn(t,n)},e.generateSvgReplacementMutation=function(e,t){let{iconName:n,title:r,titleId:i,prefix:a,transform:o,symbol:s,mask:c,maskId:l,extra:u}=t;return new Promise((t,d)=>{Promise.all([pn(n,a),c.iconName?pn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(c=>{let[d,f]=c;t([e,on({icons:{main:d,mask:f},prefix:a,iconName:n,transform:o,symbol:s,maskId:l,title:r,titleId:i,extra:u,watchable:!0})])}).catch(d)})},e.generateAbstractIcon=function(e){let{children:t,attributes:n,main:r,transform:i,styles:a}=e,o=P(a);o.length>0&&(n.style=o);let s;return ot(i)&&(s=q(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},qn={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=t;return Y({type:`layer`},()=>{K(`beforeDOMElementCreation`,{assembler:e,params:t});let r=[];return e(e=>{Array.isArray(e)?e.map(e=>{r=r.concat(e.abstract)}):r=r.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${O.cssPrefix}-layers`,...n].join(` `)},children:r}]})}}}},Jn={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:r=[],attributes:i={},styles:a={}}=t;return Y({type:`counter`,content:e},()=>(K(`beforeDOMElementCreation`,{content:e,params:t}),cn({content:e.toString(),title:n,extra:{attributes:i,styles:a,classes:[`${O.cssPrefix}-layers-counter`,...r]}})))}}}},Yn={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:r=j,title:i=null,classes:a=[],attributes:o={},styles:s={}}=t;return Y({type:`text`,content:e},()=>(K(`beforeDOMElementCreation`,{content:e,params:t}),sn({content:e,transform:n(n({},j),r),title:i,extra:{attributes:o,styles:s,classes:[`${O.cssPrefix}-layers-text`,...a]}})))}}},provides(e){e.generateLayersText=function(e,t){let{title:n,transform:r,extra:i}=t,a=null,o=null;if(g){let t=parseInt(getComputedStyle(e).fontSize,10),n=e.getBoundingClientRect();a=n.width/t,o=n.height/t}return O.autoA11y&&!n&&(i.attributes[`aria-hidden`]=`true`),Promise.resolve([e,sn({content:e.innerHTML,width:a,height:o,transform:r,title:n,extra:i,watchable:!0})])}}},Xn=RegExp(`"`,`ug`),Zn=[1105920,1112319],Qn=n(n(n(n({},{FontAwesome:{normal:`fas`,400:`fas`}}),ie),Ee),ge),$n=Object.keys(Qn).reduce((e,t)=>(e[t.toLowerCase()]=Qn[t],e),{}),er=Object.keys($n).reduce((e,t)=>{let n=$n[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function tr(e){let t=e.replace(Xn,``),n=St(t,0),r=n>=Zn[0]&&n<=Zn[1],i=t.length===2?t[0]===t[1]:!1;return{value:xt(i?t[0]:t),isSecondary:r||i}}function nr(e,t){let n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return($n[n]||{})[i]||er[n]}function rr(e,t){let r=`${je}${t.replace(`:`,`-`)}`;return new Promise((i,a)=>{if(e.getAttribute(r)!==null)return i();let o=N(e.children).filter(e=>e.getAttribute(Ae)===t)[0],s=d.getComputedStyle(e,t),c=s.getPropertyValue(`font-family`),l=c.match(qe),u=s.getPropertyValue(`font-weight`),p=s.getPropertyValue(`content`);if(o&&!l)return e.removeChild(o),i();if(l&&p!==`none`&&p!==``){let d=s.getPropertyValue(`content`),p=nr(c,u),{value:m,isSecondary:h}=tr(d),g=l[0].startsWith(`FontAwesome`),_=Lt(p,m),v=_;if(g){let e=Bt(m);e.iconName&&e.prefix&&(_=e.iconName,p=e.prefix)}if(_&&!h&&(!o||o.getAttribute(Me)!==p||o.getAttribute(Ne)!==v)){e.setAttribute(r,v),o&&e.removeChild(o);let s=Ln(),{extra:c}=s;c.attributes[Ae]=t,pn(_,p).then(a=>{let o=on(n(n({},s),{},{icons:{main:a,mask:Vt()},prefix:p,iconName:v,extra:c,watchable:!0})),l=f.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(l,e.firstChild):e.appendChild(l),l.outerHTML=o.map(e=>R(e)).join(`
`),e.removeAttribute(r),i()}).catch(a)}else i()}else i()})}function ir(e){return Promise.all([rr(e,`::before`),rr(e,`::after`)])}function ar(e){return e.parentNode!==document.head&&!~Ie.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ae)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}function or(e){if(h)return new Promise((t,n)=>{let r=N(e.querySelectorAll(`*`)).filter(ar).map(ir),i=vn.begin(`searchPseudoElements`);An(),Promise.all(r).then(()=>{i(),jn(),t()}).catch(()=>{i(),jn(),n()})})}var sr={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=or,e}}},provides(e){e.pseudoElements2svg=function(e){let{node:t=f}=e;O.searchPseudoElements&&or(t)}}},cr=!1,lr={mixout(){return{dom:{unwatch(){An(),cr=!0}}}},hooks(){return{bootstrap(){Mn($t(`mutationObserverCallbacks`,{}))},noAuto(){Nn()},watch(e){let{observeMutationsRoot:t}=e;cr?jn():Mn($t(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},ur=e=>e.toLowerCase().split(` `).reduce((e,t)=>{let n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0}),dr={mixout(){return{parse:{transform:e=>ur(e)}}},hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=ur(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(e){let{main:t,transform:r,containerWidth:i,iconWidth:a}=e,o={outer:{transform:`translate(${i/2} 256)`},inner:{transform:`${`translate(${r.x*32}, ${r.y*32}) `} ${`scale(${r.size/16*(r.flipX?-1:1)}, ${r.size/16*(r.flipY?-1:1)}) `} ${`rotate(${r.rotate} 0 0)`}`},path:{transform:`translate(${a/2*-1} -256)`}};return{tag:`g`,attributes:n({},o.outer),children:[{tag:`g`,attributes:n({},o.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:n(n({},t.icon.attributes),o.path)}]}]}}}},fr={x:0,y:0,width:`100%`,height:`100%`};function pr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function mr(e){return e.tag===`g`?e.children:[e]}Qt([pt,Kn,qn,Jn,Yn,sr,lr,dr,{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-mask`),r=n?U(n.split(` `).map(e=>e.trim())):Vt();return r.prefix||=V(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides(e){e.generateAbstractMask=function(e){let{children:t,attributes:r,main:i,mask:a,maskId:o,transform:s}=e,{width:c,icon:l}=i,{width:u,icon:d}=a,f=st({transform:s,containerWidth:u,iconWidth:c}),p={tag:`rect`,attributes:n(n({},fr),{},{fill:`white`})},m=l.children?{children:l.children.map(pr)}:{},h={tag:`g`,attributes:n({},f.inner),children:[pr(n({tag:l.tag,attributes:n(n({},l.attributes),f.path)},m))]},g={tag:`g`,attributes:n({},f.outer),children:[h]},_=`mask-${o||M()}`,v=`clip-${o||M()}`,y={tag:`mask`,attributes:n(n({},fr),{},{id:_,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[p,g]},ee={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:v},children:mr(d)},y]};return t.push(ee,{tag:`rect`,attributes:n({fill:`currentColor`,"clip-path":`url(#${v})`,mask:`url(#${_})`},fr)}),{children:t,attributes:r}}}},{provides(e){let t=!1;d.matchMedia&&(t=d.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){let e=[],r={fill:`currentColor`},i={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:n(n({},r),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});let a=n(n({},i),{},{attributeName:`opacity`}),o={tag:`circle`,attributes:n(n({},r),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||o.children.push({tag:`animate`,attributes:n(n({},i),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:n(n({},a),{},{values:`1;0;1;1;0;1;`})}),e.push(o),e.push({tag:`path`,attributes:n(n({},r),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:n(n({},a),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:n(n({},r),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:n(n({},a),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:J}),J.noAuto;var hr=J.config,gr=J.library;J.dom;var _r=J.parse;J.findIconDefinition,J.toHtml;var vr=J.icon;J.layer;var yr=J.text;J.counter;export{yr as a,_r as i,vr as n,gr as r,hr as t};
//# sourceMappingURL=fontawesome-svg-core-D7fwj2ss.js.map