export default function helpers() {
  const SHIP_INFO = {
    Carrier: { type: "Carrier", size: 5 },
    Battleship: { type: "Battleship", size: 4 },
    Cruiser: { type: "Cruiser", size: 3 },
    Submarine: { type: "Submarine", size: 3 },
    Destroyer: { type: "Destroyer", size: 2 },
  };

  return { SHIP_INFO };
}
