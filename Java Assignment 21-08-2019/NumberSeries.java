class NumberSeries
{
	public static void main(String[] args) {
		int num1=35;
		int num2=46;

		for(int i = num1 ;i<=num2;i++)
		{
			if(i==38)
				System.out.println("THIRTY EIGHT");
			else if(i==45)
				System.out.println("FORTY FIVE");
			else if(i==40||i==43)
				continue;
			else
				System.out.println(i);
			
		}
	}
}