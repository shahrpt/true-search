(function(){"use strict";function e(e){return e=String(e),e.charAt(0).toUpperCase()+e.slice(1)}function t(e,t,i){var r={6.4:"10",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&i&&/^Win/i.test(e)&&(r=r[/[\d.]+$/.exec(e)])&&(e="Windows "+r),e=String(e),t&&i&&(e=e.replace(RegExp(t,"i"),i)),e=n(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").split(" on ")[0])}function i(e,t){var i=-1,n=e?e.length:0;if("number"==typeof n&&n>-1&&h>=n)for(;++i<n;)t(e[i],i,e);else r(e,t)}function n(t){return t=s(t),/^(?:webOS|i(?:OS|P))/.test(t)?t:e(t)}function r(e,t){for(var i in e)O.call(e,i)&&t(e[i],i,e)}function o(t){return null==t?e(t):M.call(t).slice(8,-1)}function a(e,t){var i=null!=e?typeof e[t]:"number";return!/^(?:boolean|number|string|undefined)$/.test(i)&&("object"==i?!!e[t]:!0)}function l(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function b(e,t){var n=null;return i(e,function(i,r){n=t(n,i,r,e)}),n}function s(e){return String(e).replace(/^ +| +$/g,"")}function c(e){function i(t){return b(t,function(t,i){return t||RegExp("\\b"+(i.pattern||l(i))+"\\b","i").exec(e)&&(i.label||i)})}function p(t){return b(t,function(t,i,n){return t||(i[q]||i[/^[a-z]+(?: +[a-z]+\b)*/i.exec(q)]||RegExp("\\b"+l(n)+"(?:\\b|\\w*\\d)","i").exec(e))&&n})}function f(t){return b(t,function(t,i){return t||RegExp("\\b"+(i.pattern||l(i))+"\\b","i").exec(e)&&(i.label||i)})}function S(i){return b(i,function(i,n){var r=n.pattern||l(n);return!i&&(i=RegExp("\\b"+r+"(?:/[\\d.]+|[ \\w.]*)","i").exec(e))&&(i=t(i,r,n.label||n)),i})}function x(t){return b(t,function(t,i){var r=i.pattern||l(i);return!t&&(t=RegExp("\\b"+r+" *\\d+[.\\w_]*","i").exec(e)||RegExp("\\b"+r+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(e))&&((t=String(i.label&&!RegExp(r,"i").test(i.label)?i.label:t).split("/"))[1]&&!/[\d.]+/.test(t[0])&&(t[0]+=" "+t[1]),i=i.label||i,t=n(t[0].replace(RegExp(r,"i"),i).replace(RegExp("; *(?:"+i+"[_-])?","i")," ").replace(RegExp("("+i+")[-_.]?(\\w)","i"),"$1 $2"))),t})}function h(t){return b(t,function(t,i){return t||(RegExp(i+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(e)||0)[1]||null})}function y(){return this.description||""}var O=u,P=e&&"object"==typeof e&&"String"!=o(e);P&&(O=e,e=null);var v=O.navigator||{},w=v.userAgent||"";e||(e=w);var E,k,W=P||g==d,B=P?!!v.likeChrome:/\bChrome\b/.test(e)&&!/internal|\n/i.test(M.toString()),I="Object",A=P?I:"ScriptBridgingProxyObject",C=P?I:"Environment",R=P&&O.java?"JavaPackage":o(O.java),T=P?I:"RuntimeObject",$=/\bJava/.test(R)&&O.java,F=$&&o(O.environment)==C,G=$?"a":"α",X=$?"b":"β",j=O.document||{},K=O.operamini||O.opera,N=m.test(N=P&&K?K["[[Class]]"]:o(K))?N:K=null,_=e,z=[],V=null,L=e==w,D=L&&K&&"function"==typeof K.version&&K.version(),H=i(["Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"]),U=f(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel",{label:"SRWare Iron",pattern:"Iron"},"K-Meleon","Konqueror","Lunascape","Maxthon","Midori","Nook Browser","PhantomJS","Raven","Rekonq","RockMelt","SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser","Sunrise","Swiftfox","WebPositive","Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),q=x([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nook","PlayBook","PlayStation 4","PlayStation 3","PlayStation Vita","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),J=p({Apple:{iPad:1,iPhone:1,iPod:1},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1},HP:{TouchPad:1},HTC:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{"PlayStation 4":1,"PlayStation 3":1,"PlayStation Vita":1}}),Z=S(["Windows Phone ","Android","CentOS","Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);if(H&&(H=[H]),J&&!q&&(q=x([J])),(E=/\bGoogle TV\b/.exec(q))&&(q=E[0]),/\bSimulator\b/i.test(e)&&(q=(q?q+" ":"")+"Simulator"),"Opera Mini"==U&&/\bOPiOS\b/.test(e)&&z.push("running in Turbo/Uncompressed mode"),/^iP/.test(q)?(U||(U="Safari"),Z="iOS"+((E=/ OS ([\d_]+)/i.exec(e))?" "+E[1].replace(/_/g,"."):"")):"Konqueror"!=U||/buntu/i.test(Z)?J&&"Google"!=J&&(/Chrome/.test(U)&&!/\bMobile Safari\b/i.test(e)||/\bVita\b/.test(q))?(U="Android Browser",Z=/\bAndroid\b/.test(Z)?Z:"Android"):(!U||(E=!/\bMinefield\b|\(Android;/i.test(e)&&/\b(?:Firefox|Safari)\b/.exec(U)))&&(U&&!q&&/[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(E+"/")+8))&&(U=null),(E=q||J||Z)&&(q||J||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(Z))&&(U=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(Z)?Z:E)+" Browser")):Z="Kubuntu",(E=/\((Mobile|Tablet).*?Firefox\b/i.exec(e))&&E[1]&&(Z="Firefox OS",q||(q=E[1])),D||(D=h(["(?:Cloud9|CriOS|CrMo|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))","Version",l(U),"(?:Firefox|Minefield|NetFront)"])),"iCab"==H&&parseFloat(D)>3?H=["WebKit"]:"Trident"!=H&&(E=/\bOpera\b/.test(U)&&(/\bOPR\b/.test(e)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(e)&&"WebKit"||!H&&/\bMSIE\b/i.test(e)&&("Mac OS"==Z?"Tasman":"Trident"))?H=[E]:/\bPlayStation\b(?! Vita\b)/i.test(U)&&"WebKit"==H&&(H=["NetFront"]),"IE"==U&&(E=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e)||0)[1])?(U+=" Mobile",Z="Windows Phone "+(/\+$/.test(E)?E:E+".x"),z.unshift("desktop mode")):/\bWPDesktop\b/i.test(e)?(U="IE Mobile",Z="Windows Phone 8+",z.unshift("desktop mode"),D||(D=(/\brv:([\d.]+)/.exec(e)||0)[1])):"IE"!=U&&"Trident"==H&&(E=/\brv:([\d.]+)/.exec(e))?(/\bWPDesktop\b/i.test(e)||(U&&z.push("identifying as "+U+(D?" "+D:"")),U="IE"),D=E[1]):"Chrome"!=U&&"IE"==U||!(E=/\bEdge\/([\d.]+)/.exec(e))||(U="IE",D=E[1],H=["Trident"],z.unshift("platform preview")),L){if(a(O,"global"))if($&&(E=$.lang.System,_=E.getProperty("os.arch"),Z=Z||E.getProperty("os.name")+" "+E.getProperty("os.version")),W&&a(O,"system")&&(E=[O.system])[0]){Z||(Z=E[0].os||null);try{E[1]=O.require("ringo/engine").version,D=E[1].join("."),U="RingoJS"}catch(Q){E[0].global.system==O.system&&(U="Narwhal")}}else"object"==typeof O.process&&(E=O.process)?(U="Node.js",_=E.arch,Z=E.platform,D=/[\d.]+/.exec(E.version)[0]):F&&(U="Rhino");else o(E=O.runtime)==A?(U="Adobe AIR",Z=E.flash.system.Capabilities.os):o(E=O.phantom)==T?(U="PhantomJS",D=(E=E.version||null)&&E.major+"."+E.minor+"."+E.patch):"number"==typeof j.documentMode&&(E=/\bTrident\/(\d+)/i.exec(e))&&(D=[D,j.documentMode],(E=+E[1]+4)!=D[1]&&(z.push("IE "+D[1]+" mode"),H&&(H[1]=""),D[1]=E),D="IE"==U?String(D[1].toFixed(1)):D[0]);Z=Z&&n(Z)}D&&(E=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(D)||/(?:alpha|beta)(?: ?\d)?/i.exec(e+";"+(L&&v.appMinorVersion))||/\bMinefield\b/i.test(e)&&"a")&&(V=/b/i.test(E)?"beta":"alpha",D=D.replace(RegExp(E+"\\+?$"),"")+("beta"==V?X:G)+(/\d+\+?/.exec(E)||"")),"Fennec"==U||"Firefox"==U&&/\b(?:Android|Firefox OS)\b/.test(Z)?U="Firefox Mobile":"Maxthon"==U&&D?D=D.replace(/\.[\d.]+/,".x"):"Silk"==U?(/\bMobi/i.test(e)||(Z="Android",z.unshift("desktop mode")),/Accelerated *= *true/i.test(e)&&z.unshift("accelerated")):/\bXbox\b/i.test(q)?(Z=null,"Xbox 360"==q&&/\bIEMobile\b/.test(e)&&z.unshift("mobile mode")):!/^(?:Chrome|IE|Opera)$/.test(U)&&(!U||q||/Browser|Mobi/.test(U))||"Windows CE"!=Z&&!/Mobi/i.test(e)?"IE"==U&&L&&null===O.external?z.unshift("platform preview"):(/\bBlackBerry\b/.test(q)||/\bBB10\b/.test(e))&&(E=(RegExp(q.replace(/ +/g," *")+"/([.\\d]+)","i").exec(e)||0)[1]||D)?(E=[E,/BB10/.test(e)],Z=(E[1]?(q=null,J="BlackBerry"):"Device Software")+" "+E[0],D=null):this!=r&&"Wii"!=q&&(L&&K||/Opera/.test(U)&&/\b(?:MSIE|Firefox)\b/i.test(e)||"Firefox"==U&&/\bOS X (?:\d+\.){2,}/.test(Z)||"IE"==U&&(Z&&!/^Win/.test(Z)&&D>5.5||/\bWindows XP\b/.test(Z)&&D>8||8==D&&!/\bTrident\b/.test(e)))&&!m.test(E=c.call(r,e.replace(m,"")+";"))&&E.name&&(E="ing as "+E.name+((E=E.version)?" "+E:""),m.test(U)?(/\bIE\b/.test(E)&&"Mac OS"==Z&&(Z=null),E="identify"+E):(E="mask"+E,U=N?n(N.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(E)&&(Z=null),L||(D=null)),H=["Presto"],z.push(E)):U+=" Mobile",(E=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(e)||0)[1])&&(E=[parseFloat(E.replace(/\.(\d)$/,".0$1")),E],"Safari"==U&&"+"==E[1].slice(-1)?(U="WebKit Nightly",V="alpha",D=E[1].slice(0,-1)):(D==E[1]||D==(E[2]=(/\bSafari\/([\d.]+\+?)/i.exec(e)||0)[1]))&&(D=null),E[1]=(/\bChrome\/([\d.]+)/i.exec(e)||0)[1],537.36==E[0]&&537.36==E[2]&&parseFloat(E[1])>=28&&"IE"!=U&&(H=["Blink"]),L&&(B||E[1])?(H&&(H[1]="like Chrome"),E=E[1]||(E=E[0],530>E?1:532>E?2:532.05>E?3:533>E?4:534.03>E?5:534.07>E?6:534.1>E?7:534.13>E?8:534.16>E?9:534.24>E?10:534.3>E?11:535.01>E?12:535.02>E?"13+":535.07>E?15:535.11>E?16:535.19>E?17:536.05>E?18:536.1>E?19:537.01>E?20:537.11>E?"21+":537.13>E?23:537.18>E?24:537.24>E?25:537.36>E?26:"Blink"!=H?"27":"28")):(H&&(H[1]="like Safari"),E=E[0],E=400>E?1:500>E?2:526>E?3:533>E?4:534>E?"4+":535>E?5:537>E?6:538>E?7:601>E?8:"8"),H&&(H[1]+=" "+(E+="number"==typeof E?".x":/[.+]/.test(E)?"":"+")),"Safari"==U&&(!D||parseInt(D)>45)&&(D=E)),"Opera"==U&&(E=/\bzbov|zvav$/.exec(Z))?(U+=" ",z.unshift("desktop mode"),"zvav"==E?(U+="Mini",D=null):U+="Mobile",Z=Z.replace(RegExp(" *"+E+"$"),"")):"Safari"==U&&/\bChrome\b/.exec(H&&H[1])&&(z.unshift("desktop mode"),U="Chrome Mobile",D=null,/\bOS X\b/.test(Z)?(J="Apple",Z="iOS 4.3+"):Z=null),D&&0==D.indexOf(E=/[\d.]+$/.exec(Z))&&e.indexOf("/"+E+"-")>-1&&(Z=s(Z.replace(E,""))),H&&!/\b(?:Avant|Nook)\b/.test(U)&&(/Browser|Lunascape|Maxthon/.test(U)||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(U)&&H[1])&&(E=H[H.length-1])&&z.push(E),z.length&&(z=["("+z.join("; ")+")"]),J&&q&&q.indexOf(J)<0&&z.push("on "+J),q&&z.push((/^on /.test(z[z.length-1])?"":"on ")+q),Z&&(E=/ ([\d.+]+)$/.exec(Z),k=E&&"/"==Z.charAt(Z.length-E[0].length-1),Z={architecture:32,family:E&&!k?Z.replace(E[0],""):Z,version:E?E[1]:null,toString:function(){var e=this.version;return this.family+(e&&!k?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(E=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(_))&&!/\bi686\b/i.test(_)&&(Z&&(Z.architecture=64,Z.family=Z.family.replace(RegExp(" *"+E),"")),U&&(/\bWOW64\b/i.test(e)||L&&/\w(?:86|32)$/.test(v.cpuClass||v.platform)&&!/\bWin64; x64\b/i.test(e))&&z.unshift("32-bit")),e||(e=null);var Y={};return Y.description=e,Y.layout=H&&H[0],Y.manufacturer=J,Y.name=U,Y.prerelease=V,Y.product=q,Y.ua=e,Y.version=U&&D,Y.os=Z||{architecture:null,family:null,version:null,toString:function(){return"null"}},Y.parse=c,Y.toString=y,Y.version&&z.unshift(D),Y.name&&z.unshift(U),Z&&U&&(Z!=String(Z).split(" ")[0]||Z!=U.split(" ")[0]&&!q)&&z.push(q?"("+Z+")":"on "+Z),z.length&&(Y.description=z.join(" ")),Y}var p={"function":!0,object:!0},u=p[typeof window]&&window||this,d=u,f=p[typeof exports]&&exports,S=p[typeof module]&&module&&!module.nodeType&&module,x=f&&S&&"object"==typeof global&&global;!x||x.global!==x&&x.window!==x&&x.self!==x||(u=x);var h=Math.pow(2,53)-1,m=/\bOpera/,g=this,y=Object.prototype,O=y.hasOwnProperty,M=y.toString;"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return c()}):f&&S?r(c(),function(e,t){f[t]=e}):u.platform=c()}).call(this);