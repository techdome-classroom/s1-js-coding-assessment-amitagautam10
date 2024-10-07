const decodeTheRing = function (s, p) {

    // write your code here
    const m = s.length;
    const n = p.length;
    
    // DP table initialization
    const dp = Array(m + 1).fill(false).map(() => Array(n + 1).fill(false));
    
    // Base case: empty pattern matches empty string
    dp[0][0] = true;
    
    // Initialize for patterns starting with '*'
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1]; // '*' can match an empty string
        } else {
            break;
        }
    }
    
    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '*') {
                // '*' can either match nothing or one or more characters
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            } else if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
                // '?' matches any character, or characters must match exactly
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }
    
    return dp[m][n];

  };
  
  module.exports = decodeTheRing;