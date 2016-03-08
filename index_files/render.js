define("render",["lodash","utils","core","reactDOM","experiment"],function(a,b,c,d,e){"use strict";function g(a){var c=a.fullFunctionality.getConfig(),d=b.urlUtils.parseUrlParams(window.location.search.replace(/^\??/,""));return c.origin=d.dsOrigin,c}function h(c,d){var e=a(d).keys().pull("masterPage").value();return a.mapValues(d,function(a,d){return window.pagesData&&window.pagesData[d]?a:b.dataFixer.fix(a,e.slice(),c.requestModel,c.currentUrl,c.urlFormatModel)})}function i(b,e,g,h){c.renderer.renderSite(e,g,function(c){if(window.rendered)window.rendered.forceUpdate();else{var e=document.getElementById("SITE_CONTAINER").children[0];window.rendered=d.render(c,document.getElementById("SITE_CONTAINER"));var g=document.getElementById("SITE_CONTAINER").children[0];window.sssr&&(window.sssr.success=e===g,window.sssr.clientSideRender={sinceInitialTimestamp:Date.now()-window.wixBiSession.initialTimestamp,performanceNow:f()}),window.onpopstate=window.rendered.onPopState,window.parent&&window.rendered.registerAspectToEvent("siteReady",function(){window.documentServices&&h&&h(window.rendered),window.parent.postMessage("documentServicesLoaded","*")}),b.qaAutomation&&(a.set(window,"testApi.domSelectors",b.qaAutomation.getDomSelectors(b.react)),window.testApi.domSelectors.setSearchRoot(window.rendered),a.set(window,"testApi.isReady",!0))}})}function j(b,d,e,f,j){var k=b.documentServices,l=c.SiteDataAPI.createSiteDataAPIAndDal(f,d),m=l.siteData,n=l.siteDataAPI,o={pointers:l.pointers,displayedDAL:l.displayedDal,siteDataAPI:n};k?(l.dataLoadedRegistrar=n.registerDataLoadedCallback.bind(n),window.documentServices=new k.Site(g(k.configs),l,a.partial(h,e),a.partial(i,b,m,o)),a.set(window,"testApi.documentServices",window.documentServices)):(f.pagesData=f.pagesData&&h(e,f.pagesData),i(b,m,o,j))}function k(b,c,d){var e=b.documentServices;window.documentServices=new e.Site(g(e.configs),{jsonData:c,dataLoadedRegistrar:c.store.registerDataLoadedCallback.bind(c.store)},a.partial(h,d),a.partial(i,b,c,null)),a.set(window,"testApi.documentServices",window.documentServices)}function l(a,c,d,f){var g=a.documentServices,l=new b.SiteData(d,c);e.isOpen("displayedJson")?j(a,c,d,l,f):g?k(a,l,d):(l.pagesData=l.pagesData&&h(d,l.pagesData),i(a,l,null,f))}var f=window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now.bind(Date);return{clientSide:l}});