// O(n^2) time | O(n^2) space - where n is the number of interns
function stableInternships(interns, teams) {
  let chosenInterns = {};
  let freeInterns = [...Array(interns.length).keys()];
  let currentInternChoices = new Array(interns.length).fill(0);

  let teamRankings = [];

  for (const team of teams) {
    const rank = {};
    team.forEach((internNum, i) => {
      rank[internNum] = i;
    });
    teamRankings.push(rank);
  }

  while (freeInterns.length > 0) {
    const internNum = freeInterns.pop();

    const intern = interns[internNum];
    const teamPreference = intern[currentInternChoices[internNum]];
    currentInternChoices[internNum] += 1;

    if (!(teamPreference in chosenInterns)) {
      chosenInterns[teamPreference] = internNum;
      continue;
    }

    const previousIntern = chosenInterns[teamPreference];
    const previousInternRank = teamRankings[teamPreference][previousIntern];
    const currentInternRank = teamRankings[teamPreference][internNum];

    if (currentInternRank < previousInternRank) {
      freeInterns.push(previousIntern);
      chosenInterns[teamPreference] = internNum;
    } else {
      freeInterns.push(internNum);
    }
  }

  const matches = Object.entries(chosenInterns).map(([teamNum, internNum]) => [
    internNum,
    Number(teamNum),
  ]);

  return matches;
}

// Do not edit the line below.
exports.stableInternships = stableInternships;
