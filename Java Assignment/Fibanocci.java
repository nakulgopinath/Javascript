class Fibanocci
{
	public static void main(String[] args) {
		int num1 = 0;
		int num2 = 1;
		int num3 = num1+num2;

		System.out.println(num1);
		System.out.println(num2);

		while(num3<=89)
		{
			System.out.println(num3);
			num1 = num2;
			num2 = num3;

			num3 =num1+num2;



		}
	}
}