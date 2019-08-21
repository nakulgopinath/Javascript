import java.util.Scanner;

class BubbleSort
{
	public static void main(String[] args) {
		

		Scanner sc =new Scanner(System.in);


		System.out.println("Enter the limit");
		int limit = sc.nextInt();
		int temp = 0;

		int []arr = new int[limit];

		System.out.println("Enter the Array");
		for(int i =0;i<arr.length;i++)
			arr[i] = sc.nextInt();



		for(int i =0;i<arr.length;i++)
			for(int j =0;j<arr.length-i-1;j++)
			{
				if(arr[j]>arr[j+1])
				{
					temp=arr[j];
					arr[j]=arr[j+1];
					arr[j+1]=temp;
				}
			}


			for(int i =0;i<arr.length;i++)
			System.out.print(arr[i]+" ");


	}
}