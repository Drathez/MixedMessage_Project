// Mixed Message is a message generator program where 
// every time a user runs a program, they should get a new, randomized messages as output.

// This project is an astrology message generator

let astrology = ['Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer',
                 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];

let sentiment = ['bad', 'very bad', 'good', 'very good'];

let scenario = ['chance to win in lottery.', 'fortune incoming.', 'day ahead.', 'future.', 'way of life ahead.'];

function randomSelection(arr) {
    return Math.floor(Math.random() * arr.length);
}

function astrologyMessage(astrology, sentiment, scenario) {
    let astrologyPart = astrology[randomSelection(astrology)];
    let sentimentPart = sentiment[randomSelection(sentiment)];
    let scenarioPart = scenario[randomSelection(scenario)];

    let message = `${astrologyPart} will have a ${sentimentPart} ${scenarioPart}`;
    return message;
}

// Display the message in console
console.log(astrologyMessage(astrology, sentiment, scenario));