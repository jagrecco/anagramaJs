const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
const ana=[]
const anagrama=[]
const m=strs.map((e)=>(
  e.split('').sort().join(''))
)

//explanation https://delacruz.dev/blog/funcion-reduce-javascript

console.log(strs, m)

let ant=null
let i=0

/* const tt=m.reduce((acu, curr)=>{
    return acu = [].push(curr)
    console.log(acu)
}, [])

console.log(tt) */

m.forEach((e,index)=>{

    /* if (e != ant) {
        ana.push(e)
        ant=e
    }
    console.log(e, index, ant) */

})
console.log(ana)

/* let prev=""
let grouped=[]
const red=m.reduce((grouped, a, index)=>{
    if (prev!=a) grouped[index]=[]
    prev!=a ? grouped=[] : grouped.push(a)
    grouped[index].push(a)
    
    console.log(` ${grouped} ${a}  ${index} `)
    prev=a
    
},[])
 */
/* m.forEach((e, index)=>{
    console.log(m.reduce((e,a,i)=>{
        e===a ?  e : ''
    }))
}) */
/* m.reduce((p,a,i)=>{
    
}) */
/* const t=m.reduce(m.filter((a,index)=>(
    a===m[0] ? ana.push(strs[index]) : ''
    ),m))

console.log(t) */

/* m.forEach((value,index)=>{
    m.filter((a,index2)=>(
        a===value ? ana.push(strs[index2]) : ''
    ))
    anagrama.push(ana)
    }
    )

console.log(anagrama) */
/* console.log(m.filter((a,index)=>(
  a===m[0] ? ana.push(strs[index]) : ''
  ), m))
 */
