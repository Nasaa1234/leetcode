# =====================================
# Problem: 118. Pascal's Triangle
# Date: 2025-11-16
# Language: Python
# =====================================

"""
==============================
        DESCRIPTION
==============================


"""


def generate(numRows):
    triangle = []
    for i in range(numRows):
        row = [1] * (i + 1)
        for j in range(1, i):
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
        triangle.append(row)
    return triangle


def main():
    print(generate(5))
    print("Solving: 118. Pascal's Triangle")


if __name__ == "__main__":
    main()
