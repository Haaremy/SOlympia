// lib/calculatePoints.ts

export interface PointsInput {
  game: number;
  field: number;
  userPoints: number;
  multiplier: number;
}

export interface PointsResult {
  result: number;
}

/**
 * Beispiel: Summiert alle Punkte und gibt die Differenz zwischen User1 und User2 zurück.
 */
export function calculatePoints({ game, userPoints}: PointsInput): number {
  let result = 0;


////////////////////////////
  if (game==2){
      result=10;
    
  }
  ////////////////////////////
  ////////////////////////////
  if (game==3){
    result=userPoints;
  }
  ////////////////////////////

  ////////////////////////////    [1, 1, 1, 1]
  if (game==5){
      result=10;
    
  }
  ////////////////////////////
  ////////////////////////////
  if (game==6){
    result=userPoints*2;
  }
  //////////////////////////// Spiel auf Zeit in Sekunden
////////////////////////////[72, 3534, 99, 115]
  if (game==8){
    
  }
////////////////////////////
  ////////////////////////////[15, 26, 37, 49]
    if (game==10){
      result=10;
    
  }
  ////////////////////////////
  
  return result;
}
