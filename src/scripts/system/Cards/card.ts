export interface Card{
    value: number, // The numeric value of the card: 2, 3, 4, 5, 6, 7, 8, 9, 10 (Image card) or 11 (Joker, can be used as 1)
    type: number, // The type, can be 1 (Spades), 2 (Hearths), 3 (Diamonds) or 4 (Clubs)
    color: number, // The color, can be 1 (Red) or 2 (Black)
    path: string // Path the the img of the card in the templates/images/cards folder
}