export interface Problem {
  id: number;
  isCompleted: boolean;
  question: string;
  difficulty: string;
  leetCode: string;
}

export interface GrindList {
  [key: string]: Problem[];
}

const grind75List: GrindList = {
  Array: [
    {
      id: 1,
      isCompleted: false,
      question: "Two Sum",
      difficulty: "Easy",
      leetCode: "https://leetcode.com/problems/two-sum/",
    },
    {
      id: 2,
      isCompleted: false,
      question: "Best Time to Buy and Sell Stock",
      difficulty: "Easy",
      leetCode:
        "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    },
    {
      id: 3,
      isCompleted: false,
      question: "Insert Interval",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/insert-interval",
    },
    {
      id: 4,
      isCompleted: false,
      question: "3Sum",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/3sum/",
    },
    {
      id: 5,
      isCompleted: false,
      question: "Product of Array Except Self",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/product-of-array-except-self/",
    },
    {
      id: 6,
      isCompleted: false,
      question: "Combination Sum",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/combination-sum/",
    },
    {
      id: 7,
      isCompleted: false,
      question: "Merge Intervals",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/merge-intervals/",
    },
    {
      id: 8,
      isCompleted: false,
      question: "Majority Element",
      difficulty: "Easy",
      leetCode: "https://leetcode.com/problems/majority-element/",
    },
    {
      id: 9,
      isCompleted: false,
      question: "Sort Colors",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/sort-colors/",
    },
    {
      id: 10,
      isCompleted: false,
      question: "Contains Duplicate",
      difficulty: "Easy",
      leetCode: "https://leetcode.com/problems/contains-duplicate/",
    },
    {
      id: 11,
      isCompleted: false,
      question: "Container With Most Water",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/container-with-most-water/",
    },
  ],
  String: [
    {
      id: 12,
      isCompleted: false,
      question: "Valid Anagram",
      difficulty: "Easy",
      leetCode: "https://leetcode.com/problems/valid-anagram/",
    },
    {
      id: 13,
      isCompleted: false,
      question: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      leetCode:
        "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    },
    {
      id: 14,
      isCompleted: false,
      question: "Longest Palindrome",
      difficulty: "Easy",
      leetCode: "https://leetcode.com/problems/longest-palindrome/",
    },
    {
      id: 15,
      isCompleted: false,
      question: "Minimum Window Substring",
      difficulty: "Hard",
      leetCode: "https://leetcode.com/problems/minimum-window-substring/",
    },

    {
      id: 16,
      isCompleted: false,
      question: "String to Integer (atoi)",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/string-to-integer-atoi/",
    },
    {
      id: 17,
      isCompleted: false,
      question: "Longest Palindromic Substring",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/longest-palindromic-substring/",
    },
    {
      id: 18,
      isCompleted: false,
      question: "Find All Anagrams in a String",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
    },
  ],
  Matrix: [
    {
      id: 19,
      isCompleted: false,
      question: "Spiral Matrix",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/spiral-matrix/",
    },
  ],
  "Binary Search": [
    {
      id: 20,
      isCompleted: false,
      question: "Binary Search",
      difficulty: "Easy",
      leetCode: "https://leetcode.com/problems/binary-search/",
    },
    {
      id: 21,
      isCompleted: false,
      question: "First Bad Version",
      difficulty: "Easy",
      leetCode: "https://leetcode.com/problems/first-bad-version/",
    },
    {
      id: 22,
      isCompleted: false,
      question: "Search in Rotated Sorted Array",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    },
    {
      id: 23,
      isCompleted: false,
      question: "Time Based Key-Value Store",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/time-based-key-value-store/",
    },
    {
      id: 24,
      isCompleted: false,
      question: "Maximum Profit in Job Scheduling",
      difficulty: "Hard",
      leetCode:
        "https://leetcode.com/problems/maximum-profit-in-job-scheduling/",
    },
  ],
  Graph: [
    {
      id: 25,
      isCompleted: false,
      question: "Flood Fill",
      difficulty: "Easy",
      leetCode: "https://leetcode.com/problems/flood-fill/",
    },
    {
      id: 26,
      isCompleted: false,
      question: "01 Matrix",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/01-matrix/",
    },
    {
      id: 27,
      isCompleted: false,
      question: "Clone Graph",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/clone-graph/",
    },
    {
      id: 28,
      isCompleted: false,
      question: "Course Schedule",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/course-schedule/",
    },
    {
      id: 29,
      isCompleted: false,
      question: "Number of Islands",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/number-of-islands/",
    },
    {
      id: 30,
      isCompleted: false,
      question: "Rotting Oranges",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/rotting-oranges/",
    },
    {
      id: 31,
      isCompleted: false,
      question: "Accounts Merge",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/accounts-merge/",
    },
    {
      id: 32,
      isCompleted: false,
      question: "Word Ladder",
      difficulty: "Hard",
      leetCode: "https://leetcode.com/problems/word-ladder/",
    },
    {
      id: 33,
      isCompleted: false,
      question: "Word Search",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/word-search/",
    },
    {
      id: 34,
      isCompleted: false,
      question: "Minimum Height Trees",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/minimum-height-trees/",
    },
  ],
  "Binary search tree": [
    {
      id: 35,
      isCompleted: false,
      question: "Lowest Common Ancestor of a Binary Search Tree",
      difficulty: "Easy",
      leetCode:
        "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    },
    {
      id: 36,
      isCompleted: false,
      question: "Validate Binary Search Tree",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/validate-binary-search-tree/",
    },
    {
      id: 37,
      isCompleted: false,
      question: "Kth Smallest Element in a BST",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    },
  ],
  "Binary tree": [
    {
      id: 38,
      isCompleted: false,
      question: "Invert Binary Tree",
      difficulty: "Easy",
      leetCode: "https://leetcode.com/problems/invert-binary-tree/",
    },
    {
      id: 39,
      isCompleted: false,
      question: "Balanced Binary Tree",
      difficulty: "Easy",
      leetCode: "https://leetcode.com/problems/balanced-binary-tree/",
    },
    {
      id: 40,
      isCompleted: false,
      question: "Binary Tree Level Order Traversal",
      difficulty: "Medium",
      leetCode:
        "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    },
    {
      id: 41,
      isCompleted: false,
      question: "Lowest Common Ancestor of a Binary Tree",
      difficulty: "Medium",
      leetCode:
        "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree",
    },
    {
      id: 42,
      isCompleted: false,
      question: "Serialize and Deserialize Binary Tree",
      difficulty: "Hard",
      leetCode:
        "https://leetcode.com/problems/serialize-and-deserialize-binary-tree",
    },
    {
      id: 43,
      isCompleted: false,
      question: "Diameter of Binary Tree",
      difficulty: "Easy",
      leetCode: "https://leetcode.com/problems/diameter-of-binary-tree",
    },
    {
      id: 44,
      isCompleted: false,
      question: "Binary Tree Right Side View",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/binary-tree-right-side-view",
    },
    {
      id: 45,
      isCompleted: false,
      question: "Maximum Depth of Binary Tree",
      difficulty: "Easy",
      leetCode: "https://leetcode.com/problems/maximum-depth-of-binary-tree",
    },
    {
      id: 46,
      isCompleted: false,
      question: "Construct Binary Tree from Preorder and Inorder Traversal",
      difficulty: "Medium",
      leetCode:
        "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal",
    },
  ],
  "Hash Table": [
    {
      id: 47,
      isCompleted: false,
      question: "Ransom Note",
      difficulty: "Easy",
      leetCode: "https://leetcode.com/problems/ransom-note",
    },
  ],
  Recursion: [
    {
      id: 48,
      isCompleted: false,
      question: "Permutations",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/permutations",
    },
    {
      id: 49,
      isCompleted: false,
      question: "Subsets",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/subsets",
    },
    {
      id: 50,
      isCompleted: false,
      question: "Letter Combinations of a Phone Number",
      difficulty: "Medium",
      leetCode:
        "https://leetcode.com/problems/letter-combinations-of-a-phone-number",
    },
  ],
  "Linked List": [
    {
      id: 51,
      isCompleted: false,
      question: "Merge Two Sorted Lists",
      difficulty: "Easy",
      leetCode: "https://leetcode.com/problems/merge-two-sorted-lists",
    },
    {
      id: 52,
      isCompleted: false,
      question: "Linked List Cycle",
      difficulty: "Easy",
      leetCode: "https://leetcode.com/problems/linked-list-cycle",
    },
    {
      id: 53,
      isCompleted: false,
      question: "Reverse Linked List",
      difficulty: "Easy",
      leetCode: "https://leetcode.com/problems/reverse-linked-list",
    },
    {
      id: 54,
      isCompleted: false,
      question: "Middle of the Linked List",
      difficulty: "Easy",
      leetCode: "https://leetcode.com/problems/middle-of-the-linked-list",
    },
    {
      id: 55,
      isCompleted: false,
      question: "LRU Cache",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/lru-cache",
    },
  ],
  Stack: [
    {
      id: 56,
      isCompleted: false,
      question: "Valid Parentheses",
      difficulty: "Easy",
      leetCode: "https://leetcode.com/problems/valid-parentheses",
    },
    {
      id: 57,
      isCompleted: false,
      question: "Implement Queue using Stacks",
      difficulty: "Easy",
      leetCode: "https://leetcode.com/problems/implement-queue-using-stacks",
    },

    {
      id: 58,
      isCompleted: false,
      question: "Evaluate Reverse Polish Notation",
      difficulty: "Medium",
      leetCode:
        "https://leetcode.com/problems/evaluate-reverse-polish-notation",
    },

    {
      id: 59,
      isCompleted: false,
      question: "Min Stack",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/min-stack",
    },

    {
      id: 60,
      isCompleted: false,
      question: "Trapping Rain Water",
      difficulty: "Hard",
      leetCode: "https://leetcode.com/problems/trapping-rain-water",
    },

    {
      id: 61,
      isCompleted: false,
      question: "Basic Calculator",
      difficulty: "Hard",
      leetCode: "https://leetcode.com/problems/basic-calculator",
    },
    {
      id: 62,
      isCompleted: false,
      question: "Largest Rectangle in Histogram",
      difficulty: "Hard",
      leetCode: "https://leetcode.com/problems/largest-rectangle-in-histogram",
    },
  ],
  Heap: [
    {
      id: 63,
      isCompleted: false,
      question: "K Closest Points to Origin",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/k-closest-points-to-origin",
    },
    {
      id: 64,
      isCompleted: false,
      question: "Find Median from Data Stream",
      difficulty: "Hard",
      leetCode: "https://leetcode.com/problems/find-median-from-data-stream",
    },
    {
      id: 65,
      isCompleted: false,
      question: "Merge k Sorted Lists",
      difficulty: "Hard",
      leetCode: "https://leetcode.com/problems/merge-k-sorted-lists",
    },
    {
      id: 66,
      isCompleted: false,
      question: "Task Scheduler",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/task-scheduler",
    },
  ],
  Trie: [
    {
      id: 67,
      isCompleted: false,
      question: "Implement Trie (Prefix Tree)",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/implement-trie-prefix-tree",
    },
    {
      id: 68,
      isCompleted: false,
      question: "Word Break",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/word-break",
    },
  ],
  "Dynamic Programming": [
    {
      id: 69,
      isCompleted: false,
      question: "Maximum Subarray",
      difficulty: "Easy",
      leetCode: "https://leetcode.com/problems/maximum-subarray",
    },
    {
      id: 70,
      isCompleted: false,
      question: "Coin Change",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/coin-change",
    },
    {
      id: 71,
      isCompleted: false,
      question: "Climbing Stairs",
      difficulty: "Easy",
      leetCode: "https://leetcode.com/problems/climbing-stairs/",
    },
    {
      id: 72,
      isCompleted: false,
      question: "Partition Equal Subset Sum",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/partition-equal-subset-sum",
    },
    {
      id: 73,
      isCompleted: false,
      question: "Unique Paths",
      difficulty: "Medium",
      leetCode: "https://leetcode.com/problems/unique-paths",
    },
  ],
};

export default grind75List;
