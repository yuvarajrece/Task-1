 class missingnum {
    public static int missing(int[] arr, int n)
    {
       int sum = 0;
       int N = n+1;
        for(int i=0;i<n;i++){
            sum = sum + arr[i];
        }
        return ((N * (N+1))/2 - sum);
    }

    
    public static void main(String[] args)
    {
        int[] arr = { 1, 3, 4, 5, 6, 7, 8, 9, 10 };
        int N = arr.length;
        System.out.println(missing(arr, N));
    }
}

Output : 2
