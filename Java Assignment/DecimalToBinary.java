import java.util.*;


class DecimalToBinary
{
	public static void main(String[] args) {
		int num1 = Integer.parseInt(args[0]);
		int dig;
		String binary ="";
		while(num1>0)
		{
			dig=num1%2;
			num1=num1/2;
			System.out.println(dig);

			binary =Integer.toString(dig) + binary;  
		}
		System.out.println(binary);

		// int length = binary.length();
		// System.out.println(length);

		

					
	}
}