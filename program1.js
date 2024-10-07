const getTotalIsles = function (grid) {


  // write your code here
  // Base case: if grid is empty
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let numIslands = 0;

  // Helper function to perform DFS and mark visited landmasses
  const dfs = (grid, i, j) => {
      // If we're out of bounds or on water ('W'), return
      if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 'W') {
          return;
      }

      // Mark the current landmass as visited by setting it to 'W'
      grid[i][j] = 'W';

      // Explore all four directions (up, down, left, right)
      dfs(grid, i - 1, j); // up
      dfs(grid, i + 1, j); // down
      dfs(grid, i, j - 1); // left
      dfs(grid, i, j + 1); // right
  };

  // Loop through every cell in the grid
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          // If we find an unvisited landmass ('L'), start a DFS
          if (grid[i][j] === 'L') {
              numIslands++;
              dfs(grid, i, j);
          }
      }
  }
  

  return numIslands;

};

module.exports = getTotalIsles;