function promise() {
return new Promise((resolve, reject) => {
    setTimeout(()=> {
console.log('ei sou a promessa')
resolve()
    },2000)
})
}

export default async function () {
    await promise()
    console.log('terminou')
}