function colorMix(color1, color2) {
    
    if(color1 === color2){
        console.log("Same color");

    } else {
        if(color1 === "Yellow" && color2 === "Blue") {
            console.log("Green");
        } else if(color1 === "Yellow" && color2 === "Red") {
            console.log("Orange");
        } else if(color1 === "Blue" && color2 === "Red") {
            console.log("Violet");
        } else if(color1 === "Blue" && color2 === "Yellow"){
            console.log("Green");
        } else if(color1 === "Red" && color2 === "Yellow") {
            console.log("Orange");
        } else if(color1 === "Red" && color2 === "Blue") {
            console.log("Violtet");
        } else {
            console.log("O");
        }
    }

};

colorMix("Yellow", "Blue")
colorMix("Yellow", "Red")
colorMix("Blue", "Red")
colorMix("Blue", "Yellow")
colorMix("Red", "Yellow")
colorMix("Red", "Blue")
colorMix("Red", "Red")
colorMix("Yellow", "Yellow")
colorMix("Blue", "Blue")