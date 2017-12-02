async function f() {
  if (untrackedChoice === 0) /* Cancel */ {
    return null;
  } else if (untrackedChoice === 1) /* Add */ {
    await repository.addAll(Array.from(untrackedChanges.keys()));
    shouldAmend = true;
  } else if (untrackedChoice === 2) /* Allow Untracked */ {
    allowUntracked = true;
  }
}

async function f() {
  if (untrackedChoice === 0) /* Cancel */
    null;
  else if (untrackedChoice === 1) /* Add */
    shouldAmend = true;
  else if (untrackedChoice === 2) /* Allow Untracked */
    allowUntracked = true;
}

async function f() {
  if (untrackedChoice === 0) /* Cancel */ // Cancel
    null;
  else if (untrackedChoice === 1) /* Add */ // Add
    shouldAmend = true;
  else if (untrackedChoice === 2) /* Allow Untracked */ // Allow Untracked
    allowUntracked = true;
}

async function f() {
  if (untrackedChoice === 0)
    /* Cancel */ {
      return null;
    }
  else if (untrackedChoice === 1)
    /* Add */ {
      await repository.addAll(Array.from(untrackedChanges.keys()));
      shouldAmend = true;
    }
  else if (untrackedChoice === 2)
    /* Allow Untracked */ {
      allowUntracked = true;
    }
}

async function f() {
  if (untrackedChoice === 0) {
    /* Cancel */ return null;
  } else if (untrackedChoice === 1) {
    /* Add */ await repository.addAll(Array.from(untrackedChanges.keys()));
    shouldAmend = true;
  } else if (untrackedChoice === 2) {
    /* Allow Untracked */ allowUntracked = true;
  }
}

async function f() {
  // Cancel
  if (untrackedChoice === 0)
    return null;
  // Add
  else if (untrackedChoice === 1)
    shouldAmend = true;
  // Allow Untracked
  else if (untrackedChoice === 2)
    allowUntracked = true;
}

async function f() {
  // Cancel
  if (untrackedChoice === 0) {
    return null;
  }
  // Add
  else if (untrackedChoice === 1) {
    await repository.addAll(Array.from(untrackedChanges.keys()));
    shouldAmend = true;
  }
  // Allow Untracked
  else if (untrackedChoice === 2) {
    allowUntracked = true;
  }
}

async function f() {
  // Cancel
  // Further Explanation
  if (untrackedChoice === 0) {
    return null;
  }
  // Add
  // Further Explanation
  else if (untrackedChoice === 1) {
    await repository.addAll(Array.from(untrackedChanges.keys()));
    shouldAmend = true;
  }
  // Allow Untracked
  // Further Explanation
  else if (untrackedChoice === 2) {
    allowUntracked = true;
  }
}
