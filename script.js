//your JS code here. If required.
const btn=document.querySelector("#btn");
const textInput=document.querySelector("#text");
const delayInput=document.querySelector("#delay");
const output=document.querySelector("#output");

btn.onclick=handleAsyncAwait;

 async function handleAsyncAwait() {
	let promise1=new Promise(resolve=>{
	setTimeout(()=>{
		resolve(textInput.value);
			},parseInt(delayInput.value));
		});
	let data=await promise1;
	output.textContent=data;
	textInput.value="";
	delayInput.value="";	
}