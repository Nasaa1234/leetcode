# =====================================
# Problem: String to Integer (atoi)
# Date: 2025-11-13
# Language: Python

# =====================================


def myAtoi(s: str) -> int:
    s = s.lstrip()
    if not s:
        return 0

    sign = 1
    if s[0] == "-":
        sign = -1
        s = s[1:]
    elif s[0] == "+":
        s = s[1:]

    num = 0
    for char in s:
        if char.isdigit():
            num = num * 10 + int(char)
        else:
            break

    num *= sign

    INT_MIN = -(2**31)
    INT_MAX = 2**31 - 1
    if num < INT_MIN:
        return INT_MIN
    if num > INT_MAX:
        return INT_MAX

    return num


def main():
    print("Solving: String to Integer (atoi)")


if __name__ == "__main__":
    main()
