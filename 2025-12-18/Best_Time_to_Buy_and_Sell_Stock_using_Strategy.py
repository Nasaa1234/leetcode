# =====================================
# Problem: Best Time to Buy and Sell Stock using Strategy
# Date: 2025-12-18
# Language: Python
# =====================================

"""
==============================
        DESCRIPTION
==============================


"""


def maxProfit(self, prices, strategy, k):
    n = len(prices)

    base = sum(strategy[i] * prices[i] for i in range(n))

    orig = [strategy[i] * prices[i] for i in range(n)]
    pref_orig = [0] * (n + 1)
    pref_price = [0] * (n + 1)

    for i in range(n):
        pref_orig[i + 1] = pref_orig[i] + orig[i]
        pref_price[i + 1] = pref_price[i] + prices[i]

    max_gain = 0
    half = k // 2

    for i in range(n - k + 1):
        original = pref_orig[i + k] - pref_orig[i]

        modified = pref_price[i + k] - pref_price[i + half]

        gain = modified - original
        max_gain = max(max_gain, gain)

    return base + max_gain


def main():

    print("Solving: Best Time to Buy and Sell Stock using Strategy")


if __name__ == "__main__":
    main()
