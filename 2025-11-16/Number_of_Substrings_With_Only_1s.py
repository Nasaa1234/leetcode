# =====================================
# Problem: Number of Substrings With Only 1s
# Date: 2025-11-16
# Language: Python
# =====================================

"""
==============================
        DESCRIPTION
==============================


"""


def numSub(s: str) -> int:
    MOD = 10**9 + 7
    count = 0
    curr = 0

    for ch in s:
        if ch == "1":
            curr += 1
            count += curr
        else:
            curr = 0

    return count % MOD


def main():
    numSub("1101")
    print("Solving: Number of Substrings With Only 1s")


if __name__ == "__main__":
    main()
