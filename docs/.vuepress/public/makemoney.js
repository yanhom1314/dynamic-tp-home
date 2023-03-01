function _AdBlockInit(){}function _IsTrustedClick(e){"isTrusted"in e&&(e.isTrusted||(e.currentTarget.href="https://wwads.cn"+"/click/bait"))}!function(){const e="2.4";let t;const a=import("https://cdn.wwads.cn/js/fp-3.3.6.min.js").then(e=>(t=e,e.load()));var o=null;let n=document.location.hostname+document.location.pathname;var r,i=3,s=1,l=[["云计算","服务器","物联网","运维","网关","分布式","网站托管","vps","云硬盘","数据库","linux","server","centos","ubuntu","fedora","rhel","aws","阿里云","腾讯云","ucloud","digitalocean","docker","kubernetes","k8s","mysql","sql","redis","nginx","cdn","serverless","cloudflare","apache","ubuntu","devops","scrum","agile"],["编程","软件开发","算法","程序","c语言","c#","erlang","golang","go语言","haskell","java","kotlin","objective-c","perl","ruby","scala","swift","css","typescript","rust","lisp","lua","javascript","js","typescript","php","python","android开发","安卓开发","ios开发","git","github","vscode","vim","jetbrains"],["前端开发","后端架构","django","rails","angular","angularjs","laravel","react","reactjs","react-native","wsgi","flask","vuejs","vue","antd","sso","oauth","swoole","api","elasticsearch"],["机器学习","深度学习","神经网络","人工智能","自然语言处理","计算机视觉","自动驾驶","图像处理","数据挖掘","大数据","协同过滤","推荐系统","集群计算","分布式文件系统","物联网","流处理","machine learning","tensor","tensorflow","cuda","keras","jupyter","nlp","pytorch","pydata","kaggle","automl","hadoop","spark","mapreduce"],["产品经理","项目经理","用户体验","增长黑客","产品设计","产品创新","产品运营","产品策划","创业","营销","文案","需求","市场经理","运营经理","品牌宣传","数字化"],["设计师","平面设计","界面设计","室内设计","设计图","设计素材","figma","photoshop","axure","adobe","交互设计","工业设计","设计心理学","字体","design"],["金融","投资","股票","理财","期货","债券","债务","商业","经济","企业战略","企业史","基金","虚拟货币","比特币"],["数码","手机","电脑","pad","平板","相机","macbook","iphone","智能手表","智能电视","智能家电","外设","耳机","主机","显卡","游戏机","鼠标","键盘","音箱","音响","显示器","无人机","大疆","手柄","英特尔","AMD","高通"],["工程","机械工程","建筑工程","土木工程","车辆工程","材料","工艺","电子","通信","光电","控制","自动化","能源","航空","航天","工业","水利","发电","地质工程","勘探","物流工程","电气","化工","交通运输","船舶","飞行器","农业"],["小说","文学","艺术","美术","音乐","歌曲","电影","日记","哲学","随笔","诗歌","诗词","戏剧","名著","散文","杂文","童话","科幻","科普","人文","创作","导演","编剧","主演"],["办公","oa","excel","word","ppt","office","wps","powerpoint","pdf","压缩","打包","文档","图表","思维导图","笔记","问卷","表单","幻灯片","打印","档案","文件","传真","投影","耗材","票据","凭证","账本","书写","财务","发票","分账","支付"]],d=!1;if("true"==localStorage.getItem("wwads-debug"))d=!0;function c(){var e=!1;try{e=window.self!==window.top}catch(t){e=!0}if(!e)var n=[],r=setInterval(function(){var e=document.getElementsByClassName("wwads-cn");if(e.length>0){clearInterval(r);for(var i=0;i<e.length;i++){var s=e[i],l=s.getAttribute("data-id");if(n.push(l),null!=s.getAttribute("topic-id")){var d=s.getAttribute("topic-id");isNaN(d)&&(console.error("Error: wwads's topic-id is not a number, please check."),d=null)}else d=null}if(n=Array.from(n).filter(function(e,t){return n.indexOf(e)==t}),function(){var e,t=/iPhone/i,a=/iPod/i,o=/iPad/i,n=/\biOS-universal(?:.+)Mac\b/i,r=/\bAndroid(?:.+)Mobile\b/i,i=/Android/i,s=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,l=/Silk/i,d=/Windows Phone/i,c=/\bWindows(?:.+)ARM\b/i,w=/BlackBerry/i,p=/BB10/i,h=/Opera Mini/i,u=/\b(CriOS|Chrome)(?:.+)Mobile/i,f=/Mobile(?:.+)Firefox\b/i,g=function(e){return void 0!==e&&"MacIntel"===e.platform&&"number"==typeof e.maxTouchPoints&&e.maxTouchPoints>1&&"undefined"==typeof MSStream};e=function(e){var m={userAgent:"",platform:"",maxTouchPoints:0};e||"undefined"==typeof navigator?"string"==typeof e?m.userAgent=e:e&&e.userAgent&&(m={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0}):m={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0};var v=m.userAgent,b=v.split("[FBAN");void 0!==b[1]&&(v=b[0]),void 0!==(b=v.split("Twitter"))[1]&&(v=b[0]);var x=function(e){return function(t){return t.test(e)}}(v),y={apple:{phone:x(t)&&!x(d),ipod:x(a),tablet:!x(t)&&(x(o)||g(m))&&!x(d),universal:x(n),device:(x(t)||x(a)||x(o)||x(n)||g(m))&&!x(d)},amazon:{phone:x(s),tablet:!x(s)&&x(l),device:x(s)||x(l)},android:{phone:!x(d)&&x(s)||!x(d)&&x(r),tablet:!x(d)&&!x(s)&&!x(r)&&(x(l)||x(i)),device:!x(d)&&(x(s)||x(l)||x(r)||x(i))||x(/\bokhttp\b/i)},windows:{phone:x(d),tablet:x(c),device:x(d)||x(c)},other:{blackberry:x(w),blackberry10:x(p),opera:x(h),firefox:x(f),chrome:x(u),device:x(w)||x(p)||x(h)||x(f)||x(u)},any:!1,phone:!1,tablet:!1};return y.any=y.apple.device||y.android.device||y.windows.device||y.other.device,y.phone=y.apple.phone||y.android.phone||y.windows.phone,y.tablet=y.apple.tablet||y.android.tablet||y.windows.tablet,y}(),"object"==typeof exports&&"undefined"!=typeof module?module.exports=e:"function"==typeof define&&define.amd?define(function(){return e}):this.isMobile=e}(),isMobile.phone)var c=1;else c=0;a.then(e=>e.get()).then(e=>{const{cookiesEnabled:a,plugins:n,screenFrame:r,vendorFlavors:i,hdr:s,...l}=e.components;o=t.hashComponents({...l})}).then(function(){!function(e,t,a,o){"IntersectionObserver"in window||w(e,t,a);for(var n=new IntersectionObserver(function(o){o.forEach(function(o){o.isIntersecting&&(w(e,t,a),n.disconnect())})},{root:null,rootMargin:"20px",threshold:.01}),r=0;r<o.length;r++)n.observe(o[r])}(n,d,c,e)}).catch(e=>console.error(e))}},1)}function w(t,a,n){if(null!=a)var r=a;else r=function(){if("/"==document.location.pathname)return 0;var e={};const t=document.body.innerText.toLowerCase();for(let r=0;r<l.length;r++){var a=r+1;for(let i of l[r]){var o=new RegExp(i,"g"),n=(t.match(o)||[]).length;n>0&&(e[a]=(e[a]||0)+n)}}return Object.entries(e).filter(e=>e[1]>=i).sort((e,t)=>e[1]>t[1]?-1:e[1]<t[1]?1:0).slice(0,s).map(e=>e[0])}();/(bot|spider|crawl|slurp|curl|wget|mediapartners)/i.test(window.navigator.userAgent)||fetch("https://wwads.cn"+"/code/banners?b="+t+"&t="+r+"&m="+n+"&f="+o+"&v="+e,{referrerPolicy:"no-referrer-when-downgrade"}).then(e=>e.json()).then(e=>{var a=document.createElement("style");a.innerHTML=".wwads-horizontal,.wwads-vertical{background-color:#f4f8fa;padding:5px;min-height:120px;margin-top:20px;box-sizing:border-box;border-radius:3px;font-family:sans-serif;display:flex;min-width:150px;position:relative;overflow:hidden}.wwads-horizontal{flex-wrap:wrap;justify-content:center}.wwads-vertical{flex-direction:column;align-items:center;padding-bottom:32px}.wwads-horizontal a,.wwads-vertical a{text-decoration:none}.wwads-horizontal .wwads-content,.wwads-horizontal .wwads-img,.wwads-vertical .wwads-content,.wwads-vertical .wwads-img{margin:5px}.wwads-horizontal .wwads-content{flex:130px;text-align:left}.wwads-vertical .wwads-content{margin-top:10px;text-align:left}.wwads-content .wwads-text,.wwads-horizontal .wwads-text{font-size:14px;line-height:1.4;color:#0e1011;-webkit-font-smoothing:antialiased;word-break:break-word}.wwads-horizontal .wwads-poweredby,.wwads-vertical .wwads-poweredby{display:flex;align-items:center;margin-top:1em}.wwads-vertical .wwads-poweredby{position:absolute;left:10px;bottom:10px;display:flex;align-items:center}.wwads-horizontal .wwads-poweredby .wwads-logo,.wwads-vertical .wwads-poweredby .wwads-logo{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 210' fill='%23a6b7bf'%3E%3Cpath d='M24.25 211.46L0 197.46l57-98.73a74.004 74.004 0 11128.18 74l-7 12.12-24.25-14 7-12.12a46.002 46.002 0 00-79.68-46z'/%3E%3Cpath d='M121.21 209.73a74.07 74.07 0 01-64.21-37l-7-12.12 24.25-14 7 12.12a46.002 46.002 0 1079.68-46l-57-98.73 24.25-14 57 98.73a74 74 0 01-64 111z'/%3E%3Cpath d='M235.09 209.73h-114a74 74 0 010-148h14v28h-14a46 46 0 000 92h114z'/%3E%3C/svg%3E\") no-repeat;padding:0 1px 11px 11px}.wwads-horizontal .wwads-poweredby .wwads-logo-text,.wwads-vertical .wwads-poweredby .wwads-logo-text{font-size:11px;margin-left:3px;color:#a6b7bf}.wwads-horizontal .wwads-hide,.wwads-vertical .wwads-hide{position:absolute;right:-23px;bottom:-23px;width:46px;height:46px;border-radius:23px;transition:all .3s ease-in-out;cursor:pointer}.wwads-horizontal .wwads-hide .hide-svg,.wwads-vertical .wwads-hide .hide-svg{position:absolute;left:10px;top:10px;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='7' fill='%23a6b7bf'%3E%3Cpath d='M.879.672L3 2.793 5.121.672a.5.5 0 11.707.707L3.708 3.5l2.12 2.121a.5.5 0 11-.707.707l-2.12-2.12-2.122 2.12a.5.5 0 11-.707-.707l2.121-2.12L.172 1.378A.5.5 0 01.879.672z'/%3E%3C/svg%3E\") no-repeat}.wwads-horizontal .wwads-hide:hover,.wwads-vertical .wwads-hide:hover{background:rgb(0 0 0/.05)}";var o=document.querySelector(".wwads-cn.wwads-sticky");null!=o&&(a.innerHTML+=function(e){var t="1300",a="right",o=e.getAttribute("data-sticky-width"),n=e.getAttribute("data-sticky-position");return null!==o&&Number(o)>=0&&(t=o),"left"==n&&(a="left"),`@media (min-width:${t}px){.wwads-horizontal.wwads-sticky:first-child,.wwads-vertical.wwads-sticky:first-child{position:fixed;z-index:10}.wwads-horizontal.wwads-sticky:first-child,.wwads-vertical.wwads-sticky:first-child{${a}:10px;bottom:10px;}}`}(o)),document.head.appendChild(a);var n=0,r=setInterval(function(){var a=document.getElementsByClassName("wwads-cn");if(n++,a.length>0&&(""==a[0].innerHTML||100==n)){clearInterval(r);for(var o=0;o<a.length;o++){var i=1;if(document.getElementsByClassName("wwads-sticky").length>0&&(i=0),o>i)break;var s=e.blocks[0].code;if("Success"==s)var l=e.blocks[0].click_link,c=e.blocks[0].img_src,w=e.blocks[0].creative_title,p=e.blocks[0].property_id;else if("Placeholder"==s){l=e.blocks[0].property_link,c="https://cdn.wwads.cn/images/placeholder/130x100.png",w="万维广告是一个高品质的垂直广告网络联盟，一键购买 "+e.blocks[0].property_title+" 等流量资源的广告位",p=e.blocks[0].property_id;console.warn("提示：万维广告代码已成功安装，如需开启正式的广告投放，请联系客服")}else if("ForTesting"==s){l="https://wwads.cn",c="https://cdn.wwads.cn/images/placeholder/130x100.png",w="万维广告是一个高品质的垂直广告网络联盟，一键购买此流量资源的广告位",p="0";console.warn("提示：万维广告代码已成功安装，但该网站域名未加入万维广告（或为测试域名）-> https://sourl.cn/QKmr8g")}var h='<a href="https://wwads.cn/click/bait" target="_blank" rel="sponsored noopener" referrerpolicy="no-referrer-when-downgrade" style="display:none !important;"></a><a href="'+l+'" onclick="_IsTrustedClick(event)" class="wwads-img" target="_blank" rel="sponsored noopener" referrerpolicy="no-referrer-when-downgrade"><img src="'+c+'" width="130" alt="万维广告联盟"></a><div class="wwads-content"><a href="'+l+'" onclick="_IsTrustedClick(event)" class="wwads-text" target="_blank" rel="sponsored noopener" referrerpolicy="no-referrer-when-downgrade">'+w+'</a><a href="https://wwads.cn/?utm_source=property-'+p+'&utm_medium=footer" class="wwads-poweredby" title="点击了解万维广告联盟" target="_blank"><img class="wwads-logo"></img><span class="wwads-logo-text">广告</span></a></div><a class="wwads-hide" onclick="parentNode.remove()" title="隐藏广告"><svg class="hide-svg"></svg></a>';if("BackfillAds"==s)h=e.blocks[0].backfill;a[o].getAttribute("data-id")==t&&(a[o].innerHTML=h,1==d&&console.log("div"+o+" ads filled at "+Date.now()+", block id: "+t))}}},1)}).catch(e=>console.error("广告请求失败，请稍后再试:",e))}r=function(){if(document.querySelectorAll("script[src*='makemoney.js']").length>1)throw new Error("Please keep only one makemoney.js script!");1==d&&console.log("Doc Ready at "+Date.now()),c()},"complete"===document.readyState||"interactive"===document.readyState?setTimeout(r,1):document.addEventListener("DOMContentLoaded",r);new MutationObserver(function(e){var t=document.location.hostname+document.location.pathname;t!==n&&(1==d&&console.log("MutationObserver URL changed "+Date.now()),n=t,c())}).observe(document,{subtree:!0,childList:!0})}();