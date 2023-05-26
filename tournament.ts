// Definimos un tipo que solo puede tomar los valores "win", "loss" o "draw"
type MatchResult = "win" | "loss" | "draw";
 
// Creamos una clase para representar un equipo de fútbol
class FootballTeam {
  name: string; // Nombre del equipo
  matchesPlayed: number; // Cantidad de partidos jugados
  matchesWon: number; // Cantidad de partidos ganados
  matchesDrawn: number; // Cantidad de partidos empatados
  matchesLost: number; // Cantidad de partidos perdidos
  points: number; // Puntos totales
 
  constructor(name: string) {
    this.name = name;
    this.matchesPlayed = 0;
    this.matchesWon = 0;
    this.matchesDrawn = 0;
    this.matchesLost = 0;
    this.points = 0;
  }
 
  // Registra el resultado de un partido y actualiza los atributos correspondientes
  recordMatch(result: MatchResult) {
    this.matchesPlayed++;
 
    switch (result) {
      case "win":
        this.matchesWon++;
        this.points += 3;
        break;
      case "loss":
        this.matchesLost++;
        break;
      case "draw":
        this.matchesDrawn++;
        this.points += 1;
        break;
    }
  }
}
 
// Convierte una cadena con el resultado de un partido en una tupla con el nombre de los equipos y el resultado
function parseMatchResult(matchResult: string): [string, string, MatchResult] {
  const [team1, team2, result] = matchResult.split(";");
  return [team1, team2, result as MatchResult];
}
 
// Procesa una lista de resultados de partidos y devuelve una tabla con la información de los equipos ordenada por puntaje
function tallyResults(matchResults: string[]): string {
  const teams: Record<string, FootballTeam> = {};
 
  for (const matchResult of matchResults) {
    const [team1Name, team2Name, result] = parseMatchResult(matchResult);
 
    // Si no existe un equipo con el nombre team1Name, lo creamos
    if (!teams[team1Name]) {
      teams[team1Name] = new FootballTeam(team1Name);
    }
 
    // Si no existe un equipo con el nombre team2Name, lo creamos
    if (!teams[team2Name]) {
      teams[team2Name] = new FootballTeam(team2Name);
    }
 
    // Registramos el resultado del partido para ambos equipos
    teams[team1Name].recordMatch(result);
    teams[team2Name].recordMatch(result === "win" ? "loss" : result === "loss" ? "win" : "draw");
  }
 
  // Ordenamos los equipos por puntaje (y en caso de empate, por orden alfabético)
  const sortedTeams = Object.values(teams).sort((a, b) =>
    a.points !== b.points ? b.points - a.points : a.name.localeCompare(b.name)
  );
 
  // Creamos una matriz con la información de cada equipo y sus partidos
  const table = [
    ["Team", "MP", "W", "D", "L", "P"],
    ...sortedTeams.map(team => [
      team.name,
      team.matchesPlayed,
      team.matchesWon,
      team.matchesDrawn,
      team.matchesLost,
      team.points,
    ]),
  ];
 
  const maxLengths = table[0].map((_, i) =>
    Math.max(...table.map(row => String(row[i]).length))
  );
 
  return table
    .map(row =>
      row
        .map((value, i) => String(value).padEnd(maxLengths[i]))
        .join(" | ")
    )
    .join("\n");
}
 
 
const matchResults = [
  "Allegoric Alaskans;Blithering Badgers;win",
  "Devastating Donkeys;Courageous Californians;draw",
  "Devastating Donkeys;Allegoric Alaskans;win",
  "Courageous Californians;Blithering Badgers;loss",
  "Blithering Badgers;Devastating Donkeys;loss",
  "Allegoric Alaskans;Courageous Californians;win",
];
 
console.log(tallyResults(matchResults));