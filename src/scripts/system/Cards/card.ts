export interface Card{
    value: number; // The numeric value of the card: 2, 3, 4, 5, 6, 7, 8, 9, 10 (Image card) or 11 (Joker, can be used as 1)
    type: number;  // 0 (Number), 1 (Jack), 2 (Queen), 3 (King), 4 (Joker)
    suits: number; // 0 (Spades), 1 (Hearths), 2 (Diamonds) or 3 (Clubs)
    color: number; // 0 (Red) or 1 (Black) (Not boolean to possibly add more colors)
    path: string;  // Path the the img of the card in the templates/images/cards folder
}