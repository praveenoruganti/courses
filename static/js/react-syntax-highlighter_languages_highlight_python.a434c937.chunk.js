(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[416],{1971:function(e,n){function a(e){return function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return n.map((e=>function(e){return e?"string"===typeof e?e:e.source:null}(e))).join("")}("(?=",e,")")}e.exports=function(e){const n={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},i={className:"meta",begin:/^(>>>|\.\.\.) /},t={className:"subst",begin:/\{/,end:/\}/,keywords:n,illegal:/#/},s={begin:/\{\{/,relevance:0},r={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,i],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,i],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,i,s,t]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,i,s,t]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,s,t]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,s,t]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},o="[0-9](_?[0-9])*",l="(\\b(".concat(o,"))?\\.(").concat(o,")|\\b(").concat(o,")\\."),c={className:"number",relevance:0,variants:[{begin:"(\\b(".concat(o,")|(").concat(l,"))[eE][+-]?(").concat(o,")[jJ]?\\b")},{begin:"(".concat(l,")[jJ]?")},{begin:"\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b"},{begin:"\\b0[bB](_?[01])+[lL]?\\b"},{begin:"\\b0[oO](_?[0-7])+[lL]?\\b"},{begin:"\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b"},{begin:"\\b(".concat(o,")[jJ]\\b")}]},b={className:"comment",begin:a(/# type:/),end:/$/,keywords:n,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},d={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,contains:["self",i,c,r,e.HASH_COMMENT_MODE]}]};return t.contains=[r,c,i],{name:"Python",aliases:["py","gyp","ipython"],keywords:n,illegal:/(<\/|->|\?)|=>/,contains:[i,c,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},r,b,e.HASH_COMMENT_MODE,{variants:[{className:"function",beginKeywords:"def"},{className:"class",beginKeywords:"class"}],end:/:/,illegal:/[${=;\n,]/,contains:[e.UNDERSCORE_TITLE_MODE,d,{begin:/->/,endsWithParent:!0,keywords:n}]},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[c,d,r]}]}}}}]);