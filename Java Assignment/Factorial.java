class Factorial
{
	public static void main(String[] args) {
		int num = Integer.parseInt(args[0]);
		int fact= 1;

		if(num==0 || num==1)
			System.out.println("The Factorial is 1");

		else
		{
			while(num>1)
			{
				fact=fact*num;
				num--;
			}
			System.out.println("The Factorial is " +fact);

		}

	}
}