function launchBrowser(){
    let browserName='Edge'
    if (browserName=='Chrome')
    {
        console.log("Given browser is Chrome");
    }else if(browserName=='Edge'){
        console.log("Given browser is Edge");
    }else{
        console.log("Given browser is Safari")
    }

}
launchBrowser();

function runTests(testingType){
   // let testingType='Sanity'
    switch(testingType)
    {
        case "Smoke":
            console.log("Smoke Testing");
            break;
        case "Sanity":
            console.log("Sanity Testing")    
            break;
        case "Regression":
            console.log("Regression Testing")
            break;
        default:
            console.log("Smoke Testing")        
    }
}
runTests("Sanity");


