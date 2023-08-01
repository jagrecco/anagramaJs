const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
const ana=[]
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
let i=0

m.forEach((e,index)=>{

    
    if (e!=anti) {
        
        if (i>0) {

            salida.forEach((s)=>{
                
                if (s.includes(e)) {
                    s.push(e)                    
                } 
            })


        } else {
            salida.push([])
            i=salida.length-1
            salida[i].push(e)
        }
        
    } else {
        salida[i].push(e)
    }
    
    console.log(`index ${index}`, i, e, anti, salida);
    anti=e
    
})
