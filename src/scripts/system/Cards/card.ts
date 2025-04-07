export class Card{
    value: number; // The value of the card: 2 to 14, 1 to 10 number cards and image cards Jack (11), Queen (12), King (13) worth 10 and the Joker (14) worth 1 or 11 
    suit: number; //  0 (Hearths), 1 (Diamonds), 2 (Spades), or 3 (Clubs), 0 and 1 are red and 2 and 3 are black
    path: string;  // Path the the img of the card in the templates/images/cards folder
    
    constructor(value: number, type: number, suit: number, color: number, path: string) {
        this.value = value;
        this.suit = suit;
        this.path = path;
    }
}