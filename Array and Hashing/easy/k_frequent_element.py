# Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

# Example 1:
# Input: nums = [1,1,1,2,2,3], k = 2
# Output: [1,2]

# Example 2:
# Input: nums = [1], k = 1
# Output: [1]
 
# Constraints:
# 1 <= nums.length <= 105
# -104 <= nums[i] <= 104
# k is in the range [1, the number of unique elements in the array].
# It is guaranteed that the answer is unique.
 
# Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

class Solution:
    def topKFrequent(self, nums, k):
        frequency_count = {}
        top_k = []
        for i in nums:
            if i in frequency_count:
                frequency_count[i] += 1
            else:
                frequency_count[i] = 1
        print(frequency_count)

        for i in range(len(frequency_count)):
            if len(top_k) == k:
                return top_k
            else:
                dict_max = max(frequency_count, key=frequency_count.get)
                print(dict_max)
                top_k.append(dict_max)
                del frequency_count[dict_max]
            return top_k

obj = Solution()
print(obj.topKFrequent([1],1))
        