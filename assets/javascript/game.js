function randomNumber() {
    return Math.floor(Math.random() * (12 - 1) + 1)
}

var sum = 0

function gettargetNumber() {

    return Math.floor(Math.random() * (120 - 19) + 19)

}

var crystal1 = randomNumber()

var crystal2 = randomNumber()

var crystal3 = randomNumber()

var crystal4 = randomNumber()

var targetNumber = gettargetNumber()

var winCounter = 0

var lossCounter = 0

$("#target").text(targetNumber)
$("#total").text(sum)
$("#win").text(winCounter)
$("#loss").text(lossCounter)
$("#crystal1").append("<img src = '../images/170px-Geschliffener_blauer_Saphir.jpg' />")

// $("#crystal1").val(randomNumber)

$("#crystal1").on("click", function (event) {

    $("#crystal1").val(crystal1)

    sum += Number($("#crystal1").val())

    $("#total").text(sum)

    checker()

    console.log($("#crystal1").val())
    console.log(sum)

})
$("#crystal2").on("click", function (event) {

    $("#crystal2").val(crystal2)

    sum += Number($("#crystal2").val())

    $("#total").text(sum)

    checker()

    console.log($("#crystal2").val())
    console.log(sum)

})
$("#crystal3").on("click", function (event) {

    $("#crystal3").val(crystal3)

    sum += Number($("#crystal3").val())

    $("#total").text(sum)

    checker()

    console.log($("#crystal3").val())
    console.log(sum)

})
$("#crystal4").on("click", function (event) {

    $("#crystal4").val(crystal4)

    sum += Number($("#crystal4").val())

    $("#total").text(sum)
    checker()
    console.log($("#crystal4").val())
    console.log(sum)

})

function checker() {
    if (sum === targetNumber) {
        winCounter++


        targetNumber = gettargetNumber()
        crystal1 = randomNumber()
        crystal2 = randomNumber()
        crystal3 = randomNumber()
        crystal4 = randomNumber()
        sum = 0

        $("#target").text(targetNumber)
        $("#total").text(sum)
        $("#win").text(winCounter)


        alert("You win")
    } else if (sum > targetNumber) {

        lossCounter++

        targetNumber = gettargetNumber()
        crystal1 = randomNumber()
        crystal2 = randomNumber()
        crystal3 = randomNumber()
        crystal4 = randomNumber()
        sum = 0

        $("#target").text(targetNumber)
        $("#total").text(sum)
        $("#loss").text(lossCounter)

        alert("You Lose")


    }
}