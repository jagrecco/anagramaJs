const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
const anagrama=[]
const m=strs.map((e)=>(
  e.split('').sort().join(''))
)

//explanation https://delacruz.dev/blog/funcion-reduce-javascript

console.log(strs, m)

/* const tt=m.reduce((acu, curr)=>{
    return acu = [].push(curr)
    console.log(acu)
}, [])

//act=[].push(curr)
/* console.log(m.shift())
console.log(m) */
let temp=null


let anti=null
let salida=[]
let ana=[]
let i=0
let estaba=false
m.forEach((e, index)=>{

     if (e != anti) {
        
        if (i>0) {

            salida.forEach((s)=>{
                
                if (s.includes(e)) {
                    s.push(e)
                    ana[i].push(strs[index])
                    console.log("strs",strs[index], index);
                    //s.push(strs[index])
                    estaba=true
                }
            })
            if (estaba==false) {
                console.log('cambio y no estaba');
                salida.push([])
                ana.push([])
                i=salida.length-1
                salida[i].push(e)
                ana[i].push(strs[index])
                console.log("strs",strs[index], index);
                //salida[i].push(strs[index])
            }

        } else {
            salida.push([])
            ana.push([])
            i=salida.length-1
            salida[i].push(e)
            ana[i].push(strs[index])
            console.log("strs",strs[index], index);
            //salida[i].push(strs[index])
        }
        
    } else {
        salida[i].push(e)
        ana[i].push(strs[index])
        console.log("strs",strs[index], index);
        //salida[i].push(strs[index])
    }
    
    console.log(`index ${index}`, i, e, anti, salida, ana);
    anti=e
    estaba=false
})
