# =====================================
# Problem: 258. Add Digits
# Date: 2025-11-20
# Language: Python
# =====================================

"""
==============================
        DESCRIPTION
==============================


"""


def addDigits(num: int):
    if num == 0:
        return 0
    return 1 + (num - 1) % 9


def main():
    print(addDigits(11))
    print("Solving: 258. Add Digits")


if __name__ == "__main__":
    main()
