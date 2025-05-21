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
export function calculatePoints({ game, userPoints, multiplier, field }: PointsInput): number {
  let result = 0;


////////////////////////////
  if (game==2){
    if(field==1 && userPoints==14){
      result=10;
    }
  }
  ////////////////////////////
  ////////////////////////////
  if (game==3){
    result=userPoints;
  }
  ////////////////////////////

  ////////////////////////////    [1, 1, 1, 1]
  if (game==5){
    if(field==1 && userPoints==1){
      result=10;
    }
  }
  ////////////////////////////
  ////////////////////////////
  if (game==6){
    result=userPoints*2*multiplier;
  }
  //////////////////////////// Spiel auf Zeit in Sekunden
////////////////////////////[72, 3534, 99, 115]
  if (game==8){
    let check = 0;
    if(field=1){check = 72;}
  }
////////////////////////////
  ////////////////////////////[15, 26, 37, 49]
    if (game==10){
    if(field==1 && userPoints==15){
      result=10;
    }
  }
  ////////////////////////////
  
  return result;
}
