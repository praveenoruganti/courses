(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[365],{1917:function(n,e){n.exports=function(n){const e={literal:"true false null"},i=[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],a=[n.QUOTE_STRING_MODE,n.C_NUMBER_MODE],s={end:",",endsWithParent:!0,excludeEnd:!0,contains:a,keywords:e},t={begin:/\{/,end:/\}/,contains:[{className:"attr",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE],illegal:"\\n"},n.inherit(s,{begin:/:/})].concat(i),illegal:"\\S"},o={begin:"\\[",end:"\\]",contains:[n.inherit(s)],illegal:"\\S"};return a.push(t,o),i.forEach((function(n){a.push(n)})),{name:"JSON",contains:a,keywords:e,illegal:"\\S"}}}}]);