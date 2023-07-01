console.log("client side js loaded");

fetch('https://puzzle.mead.io/puzzle').then(res=>{
    res.json().then((data)=>{
        console.log(data);
    })
})