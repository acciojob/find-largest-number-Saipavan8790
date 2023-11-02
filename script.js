function findLargest(a, b, c) {
  //your code here
	if (a>b) {
		if(a>c)return a;
		else return c;
	}
	if(b>a)
	{
		if(b>c)return b;
		else return c;
	}
	if(c>a)
	{
		if(c>b)return c;
		else return b;
	}
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
