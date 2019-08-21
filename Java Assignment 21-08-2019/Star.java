import java.util.Scanner;

class Star
{
	public static void main(String[] args) {
	

	System.out.println("Enter the limit: ");
	Scanner sc =new Scanner(System.in);
	int limit = sc.nextInt();


	for(int i = 0 ;i<limit;i++)
	{
		for(int j = 0 ;j<=i;j++)
		{
			System.out.print("* ");
		}

		System.out.print("\n");
	}

	}
	
}