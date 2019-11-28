function load() {
  var requestURL = 'settings.json';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function () {
    var myJson = request.response;
    var parseJson = myJson.map(item => item.settings);
    var parseJsonCode = myJson.map(item => item.promoCodes);
    var plansItems = parseJson[0]

    var pOneName = parseJson[0].planOne.name
    var pOneTwoDay = parseJson[0].planOne.priceTwoDay
    var pOneFiveDay = parseJson[0].planOne.priceFiveDay
    var pOneSevenDay = parseJson[0].planOne.priceSevenDay

    var pTwoName = parseJson[0].planTwo.name
    var pTwoTwoDay = parseJson[0].planTwo.priceTwoDay
    var pTwoFiveDay = parseJson[0].planTwo.priceFiveDay
    var pTwoSevenDay = parseJson[0].planTwo.priceSevenDay

    var pThreeName = parseJson[0].planThree.name
    var pThreeTwoDay = parseJson[0].planThree.priceTwoDay
    var pThreeFiveDay = parseJson[0].planThree.priceFiveDay
    var pThreeSevenDay = parseJson[0].planThree.priceSevenDay

    var pFourName = parseJson[0].planFour.name
    var pFourTwoDay = parseJson[0].planFour.priceTwoDay
    var pFourFiveDay = parseJson[0].planFour.priceFiveDay
    var pFourSevenDay = parseJson[0].planFour.priceSevenDay

    var pFiveName = parseJson[0].planFive.name
    var pFiveTwoDay = parseJson[0].planFive.priceTwoDay
    var pFiveFiveDay = parseJson[0].planFive.priceFiveDay
    var pFiveSevenDay = parseJson[0].planFive.priceSevenDay

    $('.planOneName').replaceWith(`${pOneName}`)
    $('.pOneTD').replaceWith(`${pOneTwoDay}`)
    $('.pOneFD').replaceWith(`${pOneFiveDay}`)
    $('.pOneSD').replaceWith(`${pOneSevenDay}`)
    $('.pOneTDpd').replaceWith(`${pOneTwoDay / 2}`)
    $('.pOneFDpd').replaceWith(`${pOneFiveDay / 4}`)
    $('.pOneSDpd').replaceWith(`${pOneSevenDay / 6}`)
    $('.pOneAverage').replaceWith(`${pOneTwoDay / 2}`)

    $('.planTwoName').replaceWith(`${pTwoName}`)
    $('.pTwoTD').replaceWith(`${pTwoTwoDay}`)
    $('.pTwoFD').replaceWith(`${pTwoFiveDay}`)
    $('.pTwoSD').replaceWith(`${pTwoSevenDay}`)
    $('.pTwoTDpd').replaceWith(`${pTwoTwoDay / 2}`)
    $('.pTwoFDpd').replaceWith(`${pTwoFiveDay / 4}`)
    $('.pTwoSDpd').replaceWith(`${pTwoSevenDay / 6}`)
    $('.pTwoAverage').replaceWith(`${pTwoTwoDay / 2}`)

    $('.planThreeName').replaceWith(`${pThreeName}`)
    $('.pThreeTD').replaceWith(`${pThreeTwoDay}`)
    $('.pThreeFD').replaceWith(`${pThreeFiveDay}`)
    $('.pThreeSD').replaceWith(`${pThreeSevenDay}`)
    $('.pThreeTDpd').replaceWith(`${pThreeTwoDay / 2}`)
    $('.pThreeFDpd').replaceWith(`${pThreeFiveDay / 4}`)
    $('.pThreeSDpd').replaceWith(`${pThreeSevenDay / 6}`)
    $('.pThreeAverage').replaceWith(`${pThreeTwoDay / 2}`)

    $('.planFourName').replaceWith(`${pFourName}`)
    $('.pFourTD').replaceWith(`${pFourTwoDay}`)
    $('.pFourFD').replaceWith(`${pFourFiveDay}`)
    $('.pFourSD').replaceWith(`${pFourSevenDay}`)
    $('.pFourTDpd').replaceWith(`${pFourTwoDay / 2}`)
    $('.pFourFDpd').replaceWith(`${pFourFiveDay / 4}`)
    $('.pFourSDpd').replaceWith(`${pFourSevenDay / 6}`)
    $('.pFourAverage').replaceWith(`${pFourTwoDay / 2}`)

    $('.planFiveName').replaceWith(`${pFiveName}`)
    $('.pFiveTD').replaceWith(`${pFiveTwoDay}`)
    $('.pFiveFD').replaceWith(`${pFiveFiveDay}`)
    $('.pFiveSD').replaceWith(`${pFiveSevenDay}`)
    $('.pFiveAverage').replaceWith(`${pFiveTwoDay / 2}`)
  }
}