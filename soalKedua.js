function findMaxSubarraySum(arr, k) {
    if (k > arr.length) {
      return null; // Panjang angka lebih besar dari panjang array, return null
    }
  
    let maxSum = 0;
    let currentSum = 0;
  
    // Menjumlahkan k angka pertama
    for (let i = 0; i < k; i++) {
      maxSum += arr[i];
    }
  
    currentSum = maxSum;
  
    // Melakukan sliding window untuk menemukan jumlah maksimum subarray
    for (let i = k; i < arr.length; i++) {
      currentSum = currentSum + arr[i] - arr[i - k];
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }
  
  console.log(findMaxSubarraySum([100, 200, 300, 400], 2)); // Output: 700
  console.log(findMaxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // Output: 39
  console.log(findMaxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // Output: 5
  