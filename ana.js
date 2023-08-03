//const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
const strs=[  "al", "la", "ed", "de", "lba", "abl", "icb", "bci", "qya", "ayq",   "dcf", "cfd", "cbh", "bhc", "ydz", "zyd", "bfa", "fab", "lbc", "bcl",   "ied", "dei", "agb", "bga", "kdj", "jdk", "bfi", "fib", "ldf", "fdl",   "eag", "gae", "bha", "ahb", "kfd", "dfk", "iba", "bai", "egd", "dge",   "mhb", "bhm", "jkd", "dkj", "ida", "adi", "jba", "abj", "ylg", "gly"]

const anagrama=[]
const m=strs.map((e)=>(
  e.split('').sort().join(''))
)

//explanation https://delacruz.dev/blog/funcion-reduce-javascript

console.log(strs, m)

let temp=null


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