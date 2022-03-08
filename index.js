JS: İnput Olarak Fonksiyon Alan Fonksiyon

function add(num1, num2){
	return num1 + num2;
}

function multiply(num1, num2){
	return num * num2;
}

function calculator(num1, num2, operator){
	return operator(num1,num2)
}

*** calculator fonksiyonu operator inputunu fonksiyon olarak bekliyor çünkü gövdede fonksiyon olarak tanımlandı. Bu foksiyon çağıran fonksiyon(Higher Order Functions) js de çok kullanılır
Tool: chrome developer tool- debugger; || shift + enter || sonra fonksiyonu yaz
