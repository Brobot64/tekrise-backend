/**
 * TekRise Academy - Problem Solving Solutions
 * This file contains independent solutions to the technical assessment questions.
 */

// --- Question 1: Array Pair Sum ---
/**
 * Approach: Optimized Hash Map (O(n) time complexity)
 * We iterate through the array once. For each number, we calculate its "complement" 
 * (target - currentNumber). If the complement exists in our map, we've found the pair.
 */
function solveArrayPairSum(nums: number[], target: number): number[] {
  console.log(`\n--- Problem 1: Array Pair Sum ---`);
  console.log(`Input: nums = [${nums}], target = ${target}`);
  
  const map = new Map<number, number>(); // Stores { value: index }

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i] as number;
    const complement = target - currentNum;
    console.log(`Step ${i + 1}: Checking ${currentNum}. Looking for complement ${complement}...`);

    if (map.has(complement)) {
      const prevIndex = map.get(complement)!;
      const result = [prevIndex, i];
      console.log(`✅ Match found! Indices: ${result} (${nums[prevIndex]} + ${nums[i]} = ${target})`);
      return result;
    }

    map.set(currentNum, i);
    console.log(`   Storing ${currentNum} at index ${i}`);
  }

  return [];
}

// --- Question 2: String Compression ---
/**
 * Approach: Two-pointer/Iterative counting (O(n) time complexity)
 * We traverse the string and maintain a counter for consecutive identical characters.
 * We append the character and its count to a result string. Finally, we return 
 * the shorter of the two strings.
 */
function solveStringCompression(s: string): string {
  console.log(`\n--- Problem 2: String Compression ---`);
  console.log(`Input: "${s}"`);

  let compressed = "";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    count++;

    // If next character is different or we reached the end
    if (i + 1 >= s.length || s[i] !== s[i + 1]) {
      compressed += (s[i] as string) + count;
      console.log(`   Detected ${count} instances of '${s[i]}'. Current: "${compressed}"`);
      count = 0;
    }
  }

  const result = compressed.length < s.length ? compressed : s;
  console.log(`Final Result: "${result}" ${result === s ? '(Original returned as it is shorter)' : ''}`);
  return result;
}

// --- Question 4: Flatten Nested Array ---
/**
 * Approach: Recursive Flattening
 * We iterate through each element. If the element is an array, we recursively 
 * call the function to flatten it. If it's a primitive, we push it to the result.
 */
function solveFlattenArray(arr: any[]): any[] {
  let result: any[] = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(solveFlattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

function runFlattenTest(input: any[]) {
  console.log(`\n--- Problem 4: Flatten Nested Array ---`);
  console.log(`Input: ${JSON.stringify(input)}`);
  const result = solveFlattenArray(input);
  console.log(`Output: ${JSON.stringify(result)}`);
  return result;
}

// --- Execution ---
console.log("==================================================");
console.log("TEKRISE TECHNICAL ASSESSMENT - PROBLEM SOLVING");
console.log("==================================================");

solveArrayPairSum([2, 7, 11, 15], 9);
solveStringCompression("aaabbc");
solveStringCompression("abcde"); // Edge case where original is shorter
runFlattenTest([1, [2, [3, 4], 5]]);

console.log("\n==================================================");
console.log("TESTING COMPLETE");
console.log("==================================================");
