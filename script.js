{/* <span id="temp" class="fa"></span> */}


const tempLoad = () =>{
    let varTemp = document.getElementById('temp');
    varTemp.innerHTML = "&#xf2cb";


    // using setTimeout and calling function again
    setTimeout( ()=>{
        varTemp.innerHTML = "&#xf2ca";
        varTemp.style.color = "#f8b627"
    },1000);

    setTimeout( ()=>{
        varTemp.innerHTML = "&#xf2c9";
    },2000);

    setTimeout( ()=>{
        varTemp.innerHTML = "&#xf2c8";
    },3000);

    setTimeout( ()=>{
        varTemp.innerHTML = "&#xf2c7";
        varTemp.style.color = "#d63031";
    },4000);

}
tempLoad();



// run till infinity
// setInterval((which function you want to call),(at what inetrval of time))
setInterval(tempLoad,5000)