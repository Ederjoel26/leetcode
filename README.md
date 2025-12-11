# LeetCode Solutions

A collection of LeetCode problems solved with detailed complexity analysis, multiple approaches, and comprehensive explanations.

## 🎯 Philosophy

This repository isn't just about getting the right answer—it's about understanding **WHY** certain approaches work and **HOW** they perform. Each solution includes:

- **Multiple implementations** (showing evolution from naive to optimal)
- **Detailed time/space complexity analysis** with mathematical breakdown
- **Runtime and memory benchmarks** from actual LeetCode submissions
- **Step-by-step reasoning** behind algorithmic choices

## 📁 Structure

```
leetcode/
├── easy/                    # Easy difficulty problems
│   ├── two-sum.ts          # Two Sum with hash map approach
│   └── valid-parentheses.ts # Valid Parentheses with stack implementation
└── README.md               # This file
```

## 🔥 Featured Solutions

### Two Sum (`easy/two-sum.ts`)

- **Approach**: Hash map for O(n) time complexity
- **Runtime**: 2ms, Memory: 57.73MB
- **Key Insight**: Leverages hash table for O(1) lookups instead of O(n²) brute force

### Valid Parentheses (`easy/valid-parentheses.ts`)

- **Two implementations included**:
  1. **Naive approach** (262ms, 62.86MB) - O(n²) time complexity
  2. **Optimized stack approach** (3ms, 58.83MB) - O(n) time complexity
- **Custom Stack implementation** with full documentation
- **ASCII character comparison** for performance optimization

## 📊 Analysis Methodology

Each solution follows a rigorous analysis framework:

```typescript
// Time complexity = O(n)
// Space complexity = O(n)
//
// explanation:
// T(n) = n * (C(operation1) + C(operation2) + C(operation3))
//
// where:
// n = input size
// C(operation) = cost of individual operation
//
// substitution:
// T(n) = n * (O(1) + O(1) + O(1))
// T(n) = n * O(1)
//
// Big O:
// T(n) = O(n)
```

## 🛠️ Tech Stack

- **TypeScript** for type safety and modern JavaScript features
- **ES6+** features (Map, Set, arrow functions, etc.)
- **Custom data structures** when beneficial for learning
- **Performance-focused implementations** with real benchmarking

## 📈 Learning Path

This repository is organized to help you understand algorithmic thinking:

1. **Start with the naive solutions** to understand the problem
2. **Analyze the bottlenecks** in the first approach
3. **Study the optimized solutions** and their complexity analysis
4. **Understand the trade-offs** between different approaches

## 🤝 Contributing

While this is a personal learning repository, the approach demonstrates:

- **Thorough problem analysis** before coding
- **Multiple solution strategies** with performance comparison
- **Clear documentation** of complexity and reasoning
- **Real-world benchmarking** from LeetCode's platform

## 📚 Resources

- [LeetCode](https://leetcode.com/) - Practice problems
- [Big O Cheat Sheet](https://www.bigocheatsheet.com/) - Complexity reference
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Language reference

---

**Remember**: Understanding the "why" is more valuable than memorizing the "how." Each problem is an opportunity to sharpen your analytical thinking and problem-solving skills.
