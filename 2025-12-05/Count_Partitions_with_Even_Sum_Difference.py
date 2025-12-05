# =====================================
# Problem: Count Partitions with Even Sum Difference
# Date: 2025-12-05
# Language: Python
# =====================================

"""
==============================
        DESCRIPTION
==============================


"""


def countPartitions(nums):
    total = sum(nums)

    if total % 2 != 0:
        return 0

    return len(nums) - 1


def main():
    print(countPartitions([10, 10, 3, 7, 6]))
    print("Solving: Count Partitions with Even Sum Difference")


if __name__ == "__main__":
    main()
