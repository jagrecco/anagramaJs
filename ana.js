//const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
//const strs=[  "al", "la", "ed", "de", "lba", "abl", "icb", "bci", "qya", "ayq", "dcf", "cfd", "cbh", "bhc", "ydz", "zyd", "bfa", "fab", "lbc", "bcl",   "ied", "dei", "agb", "bga", "kdj", "jdk", "bfi", "fib", "ldf", "fdl",   "eag", "gae", "bha", "ahb", "kfd", "dfk", "iba", "bai", "egd", "dge",   "mhb", "bhm", "jkd", "dkj", "ida", "adi", "jba", "abj", "ylg", "gly"]

//const strs=["hjfbeyclda", "ljayfhcdeb", "cbjyfaheld", "edcfajblyh", "fbjhdaylec", "dbceayfhjl", "yjcbhedlfa", "dbyjfecahl", "fyjldabech", "eabjycfdlh", "bhjylfdeac", "afyjedlbch", "aefcdlbjhy", "hfbdeycjal", "jdeflybcha", "lbyjchfade", "ajdhblycef", "lyjceahbdf", "yjbaldfhec", "hdefbcajyl",   "jfheyabdlc", "byjcdalfhe", "fjdabcyhle", "hjcydabfle", "fjdeahyblc",   "fbdecjlyha", "hejylcbfad", "byjcahldfe", "fyhdjebalc", "lyjdbahfec",   "jafldceyhb", "hejdcabfyl", "jyfhldbcea", "cdebhlyfja", "dlyjhebafc",   "ljcyhdefba", "cjheybdalf", "jlfabcyhed", "bjcyfdehla", "jydebfhlca",   "cfjldhbeay", "jhedfbaylc", "fhejydablc", "fbcdjlyeah", "bflyjachde",   "abfcjyedhl", "hcfdbjeyla", "dfyjchleba", "jyadfhelcb", "hejcflydba", "djcyaflebh", "jlydhefbac", "hjblcfeday", "djfcheyabl"]

const strs=[  "abccdedeff", "fefdcbdeca", "ddafbceefc", "ecffeddcab", "efadcffcbe",   "cbefedfadc", "feefcadcbd", "dcbfedfcea", "cdfeeabdfc", "ccfbdeffea",   "edfbdcfaec", "eacffedbdc", "decffebcda", "acfdecdbef", "fedfbcaecf",   "bfcadceefd", "fedfceacbd", "fbeecfadcd", "eddcfecfab", "afdefcbced",   "ebfdecfdca", "eefdcbcfad", "fcaefdcdbe", "ebfdcaeffd", "ebfcadecdf",   "ccfdefeabd", "fdecbaefcd", "cdfafbeced", "bcfeedfdac", "abcfdecfed",   "aefddccfbe", "aecbfdcedf", "debcdceaff", "effbdcdeac", "efbedcfadc",   "eedefccfab", "bceddfecaf", "dcbdefaefc", "bdcfecdafe", "decfcadfeb",   "cedfcbadfe", "defaecbfcd", "ccfeedfbad", "ebcacfdfed", "bedfcdeafc",   "dffcecbade", "fecdbdface", "ffdeedabcc", "eefcaddfcb", "fcefbadced"]

const m=strs.map((e)=>(
  e.split('').sort().join(''))
)


console.log(strs, m)

let anti=null
let salida=[]
let ana=[]
let i=0
let estaba=false
m.forEach((e, index)=>{

     if (e != anti) {
        
        if (i>0) {

            salida.forEach((s, index2)=>{
                
                if (s.includes(e)) {
                    s.push(e)
                    ana[index2].push(strs[index])
                    //console.log("strs",strs[index], index);
                    estaba=true
                }
            })
            if (estaba==false) {
                
                salida.push([])
                ana.push([])
                i=salida.length-1
                salida[i].push(e)
                ana[i].push(strs[index])
                /* console.log("strs",strs[index], index); */
            }

        } else {
            salida.push([])
            ana.push([])
            i=salida.length-1
            salida[i].push(e)
            ana[i].push(strs[index])
            /* console.log("strs",strs[index], index); */

        }
        
    } else {
        salida[i].push(e)
        ana[i].push(strs[index])
        /* console.log("strs",strs[index], index); */

    }
    
    //console.log(`index ${index}`, i, e, anti, salida, ana);
    anti=e
    estaba=false
})
console.log(ana);