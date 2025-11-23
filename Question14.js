function evaluateEmployees(employees) {
  // Step 1: Filter employees with more than 5 tasks completed
  const filtered = employees.filter(emp => emp.tasksCompleted > 5);

  // Step 2: Map employees to include only name and performance level
  const mapped = filtered.map(emp => {
    let performance = "";
    if (emp.rating > 4.5) {
      performance = "Excellent";
    } else if (emp.rating >= 3 && emp.rating <= 4.5) {
      performance = "Good";
    } else {
      performance = "Needs Improvement";
    }
    return { name: emp.name, performance };
  });

  // Step 3: Sort by performance (Excellent > Good > Needs Improvement)
  const sorted = mapped.sort((a, b) => {
    const performanceOrder = {
      "Excellent": 1,
      "Good": 2,
      "Needs Improvement": 3
    };
    return performanceOrder[a.performance] - performanceOrder[b.performance];
  });

  // Step 4: Return the sorted array
  return sorted;
}
