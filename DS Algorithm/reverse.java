 class reverse {
    public static void rotate(int[] nums, int k) {
        int n = nums.length;
        k = k % n;
        reverse(nums, 0, n - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, n - 1);
      }
      
      private static void reverse(int[] nums, int lo, int hi) {
        int n = hi - lo + 1;
        for (int i = 0; i < n / 2; ++i) {
          swap(nums, lo + i, hi - i);
        }
      }
      
      private static void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }

      public static void main(String[] args) {
        int[] nums = {3, 8, 9, 2, 5};
        int k = 2;

        rotate(nums, k);

        System.out.println(java.util.Arrays.toString(nums));
      }
}
