// 1. Given a string with the value of a day of the week, return the number that that day is in the week. A second argument will be provided to determine if should start week on Monday if true, else Sunday if false. If the string is not a day of the week but is bad input, then return the string 'That's not a day of the week'.
// Example: 
// input: 'Sunday', false
// output: 1
//Example:
// input: 'Sunday', true
// output: 7

let output;
function daysPosition(day, offset) {
    if (!offset) {
        switch (day) {
            case "sunday":
                output = 1;
                break;
            case "monday":
                output = 2;
                break;
            case "tuesday":
                output = 3;
                break;
            case "wednesday":
                output = 4;
                break;
            case "thursday":
                output = 5;
                break;
            case "friday":
                output = 6;
                break;
            case "saturday":
                output = 7;
                break;
            default:
                output = `That\'s not a day of the week`;
        }
    } else if (offset == true && day == "sunday") {
        output = 7;
    } else if (offset == true) {
        output = output - 1;
    }
    return output;
}





// --------------------------------------------


/** 2. Given a both a score and a score for par, return the corresponding term:
 *           difference |   term
 *    -----------------------------------
 *  (score == 1) || -3  |   "Ace"
 *            -2        |   "Eagle"
 *            -1        |   "Birdie"
 *             0        |   "Par"
 *            +1        |   "Bogie"
 *            +2        |   "Double Bogie"
 *            >= +3     |   "Ouch"
 */

function golfScore(score, par) {
    let diff = score - par;
    if (score !== 1 || diff !== -3) {
        switch (diff) {
            case -2:
                output = "Eagle";
                break;
            case -1:
                output = "Birdie";
                break;
            case 0:
                output = "Par";
                break;
            case 1:
                output = "Bogie";
                break;
            case 2:
                output = "Double Bogie";
                break;
            default:
                output = "Ouch";
        }
    }
    else {
        output = "Ace"
    }
    return output

}

// --------------------------------------------


// 3. Counting Cards. In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. 
// This is called card counting.  
// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high.
// When the count is zero or negative, the player should bet low.
/**
 *      Value   |   Cards
 *   --------------------------------
 *       +1     |   '2', '3', '4', '5', '6'
 *        0     |	'7', '8', '9'
 *       -1	    |   '10', 'J', 'Q', 'K','A'
 */
// Write a card counting function that will receive a card. The function will increment or decrement the global count variable according to the card's value (see table above). The function will then return the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative.
// Example:
// output: '-5 Hold'
// Example:
// output: '2 Bet'

let count = 0;
let output;
function cardCounter(card) {
    switch (card) {
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
            count++;
            break;
        case '10':
        case 'J':
        case 'Q':
        case 'K':
            count--;
            break;
        default:
            break;
    }
    if (count > 0) {
        output = `${count} + Bet`;
    }
    else {
        output = `${count} + Hold`;
    }
    return output;
}
