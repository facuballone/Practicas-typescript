(()=>{

    const error = (message:string):never =>{

        throw new error (message)

        
    }

    error('Auxilio')
    console.log('Buenas')
})()