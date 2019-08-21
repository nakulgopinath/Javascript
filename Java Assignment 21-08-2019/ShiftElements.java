import java.util.Scanner;



class ShiftElements
{
	public static void main(String[] args) {
		Scanner sc =new Scanner(System.in);

		System.out.println("Enter the limit");
		int limit = sc.nextInt();

		int []arr = new int[limit];
		int temp=0;

		System.out.println("Enter the Array");

		for(int i =0;i<arr.length;i++)
			arr[i] = sc.nextInt();


		// for(int i =0;i<arr.length;i++)
		// {
		// 	if(i+1<arr.length)
		// 	{
		// 	temp=arr[i];
		// 	arr[i+1]=temp;
	
		// 	}
			
		// }



		for(int i =arr.length-1;i>=0;i--)
		{
			if(i-1>=0)
			{
			temp=arr[i];
			arr[i]=arr[i-1];
			arr[i-1]=temp;
	
			}
			
		}

		for(int i =0;i<arr.length;i++)
			System.out.print(arr[i]+" ");
	
		




	}
}