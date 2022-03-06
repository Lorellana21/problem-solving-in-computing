# Sequence of coins

There are N coins, each showing either heads or tails. We would like all the coins to form a sequence of alternating heads and tails. What is the minimum number of coins that must be reversed to achieve this?

Write a function:
```
function solution (A);
```
that, given an array consisting of N integers representing the coins, returns the minimum number of coins that must be reversed. Consecutive elements of array A represent consecutive coins and contain either a 0 (heads) or a 1 (tails).

Examples:

- Given an array ``A = [1, 0, 1, 0, 1, 1]``, the function should return 1. After reversing the sixth coin, we achieve an alternating sequence of coins ``[1, 0, 1, 0, 1, 0]``.

- Given array ``B = [1, 1, 0, 1, 1]``, the function should return 2. After reversing the first and fifth coins, we achieve an alternatinf sequence ``[0, 1, 0, 1, 0]``.

- Given array ``C = [0, 1, 0]``, the function should return 0. The sequence of coins is already alternating.

- Given array ``D = [0, 1, 1, 0]``, the function sould return 2. We can reverse the first and second coins to get the sequence: ``[1, 0, 1, 0]``.

assume that:
- N is an integer within the range [1..100];
each element of array is an integer that can have one of the following values: 0, 1.