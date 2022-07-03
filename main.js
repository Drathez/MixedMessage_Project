// Mixed Message is a message generator program where 
// every time a user runs a program, they should get a new, randomized messages as output.

// This project is an astrology message generator

let astrology = ['Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer',
                 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];

let sentiment = ['bad', 'very bad', 'good', 'very good'];

let status = ['chance to win in lottery.', 'fortune incoming.', 'day ahead.', 'future.', 'way of life ahead.'];

function randomSelection(arr) {
    return Math.floor(Math.random() * arr.length);
}

function astrologyMessage(astrology, sentiment, status) {
    let astrologyPart = randomSelection(astrology);
    let sentimentPart = randomSelection(sentiment);
    let statusPart = randomSelection(status);

    let message = `${astrologyPart} will have a ${sentimentPart} ${statusPart}`;
    return message;
}