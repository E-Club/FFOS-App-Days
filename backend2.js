var keys = document.querySelectorAll('#calculator span');
var operators = ['+','-','*','/'];


for(var i =0; i <keys.length; i++)
{
	keys[i].onclick = function(e)
	{
		input.innerHTML = ' ';
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		if(btnVal == 'C')
		{
			input.innerHTML = ' ';
			decimalAdded = false;
		}
		else if(btnVal == '=')
		{
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			input.innerHTML = eval(equation);
		}
	}
}	
	