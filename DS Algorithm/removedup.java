import java.util.Set;
import java.util.TreeSet;

 class removedup {
   
    public  static int removeDuplicates(int[] nums) {
        Set<Integer> set = new TreeSet<>();
        for(int i=0;i<nums.length;i++){
             set.add(nums[i]);
        }
        int num =0;
        for(int ch : set){
          nums[num++]=ch;
        }
        return set.size();
    }
 

    public static void main(String[] args) {
        int[] arr = {1, 1, 1, 2, 2, 3, 3, 3, 4, 5};
        System.out.println(removeDuplicates(arr));
    }
}


Output : 5
