// =====================================
// Problem: Maximum Number of Operations to Move Ones to the End
// Date: 2025-11-13
// Language: Java
// =====================================

public class Maximum_Number_of_Operations_to_Move_Ones_to_the_End {
    public int maxOperations(String s) {
        int res = 0, o = 0, n = s.length();
        for (int i = 0; i < n; ++i) {
            o += s.charAt(i) - '0';
            if (i > 0 && s.charAt(i) < s.charAt(i - 1)) {
                res += o;
            }
        }
        return res;
    }
    public static void main(String[] args) {
        System.out.println("Solving: Maximum Number of Operations to Move Ones to the End");
    }
}
