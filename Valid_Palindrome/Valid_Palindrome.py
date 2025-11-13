# =====================================
# Problem: Valid Palindrome
# Date: 2025-11-13
# Language: Python
# =====================================
def isPalindrome(self, s):
    left, right = 0, len(s) - 1
    while left < right:
        while left < right and not s[left].isalnum():
            left += 1

        while left < right and not s[right].isalnum():
            right -= 1

        if s[left].lower() != s[right].lower():
            return False

        left += 1
        right -= 1

    return True


def main():
    print(isPalindrome("A man, a plan, a canal: Panama"))
    print("Solving: Valid Palindrome")


if __name__ == "__main__":
    main()
