// GREEDY Algorithnm ...........................

// O(nlog(n)) time | O(n) space - where n is the number of taks

function taskAssignment(k, tasks) {
  // Write your code here.
  const formattedTasks = tasks.map((value, index) => ({ value, index }));
  formattedTasks.sort((a, b) => a.value - b.value);

  let pairedTasks = [];
  let start = 0,
    end = formattedTasks.length - 1;

  while (start <= end) {
    pairedTasks.push([formattedTasks[start].index, formattedTasks[end].index]);
    start++;
    end--;
  }

  return pairedTasks;
}
// Do not edit the line below.
exports.taskAssignment = taskAssignment;
