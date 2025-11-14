# =====================================
# Problem: 168. Excel Sheet Column Title
# Date: 2025-11-14
# Language: Python
# =====================================


def convertToTitle(columnNumber):
    res = []
    while columnNumber > 0:
        columnNumber -= 1  # shift to 0-indexed
        remainder = columnNumber % 26
        res.append(chr(ord("A") + remainder))
        columnNumber //= 26
    return "".join(reversed(res))


def main():
    print(convertToTitle(1))
    print("Solving: 168. Excel Sheet Column Title")


if __name__ == "__main__":
    main()
