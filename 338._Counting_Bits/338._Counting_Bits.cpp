// =====================================
// Problem: 338. Counting Bits
// Date: 2025-11-16
// Language: C++
// =====================================

/*
==============================
        DESCRIPTION
==============================

*/

#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    vector<int> countBits(int n)
    {
        vector<int> ans(n + 1, 0);

        for (int i = 1; i <= n; i++)
        {
            ans[i] = ans[i >> 1] + (i & 1);
        }

        return ans;
    }
};

int main()
{
    Solution solution;
    int n = 5;

    vector<int> result = solution.countBits(n);

    cout << "Solving: 338. Counting Bits" << endl;
    cout << "Input: n = " << n << endl;
    cout << "Output: ";

    for (int x : result)
    {
        cout << x << " ";
    }

    cout << endl;
    return 0;
}
