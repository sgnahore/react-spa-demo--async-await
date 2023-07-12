function greet(): void {
  console.log("hello world"!);
}

async function promiseToGreet(): Promise<number> {
  console.log("hello world"!);
  return 24
}

//greet();
//promiseToGreet()
//greet().then(() => console.log("CANNOT do this"));
promiseToGreet().then(() => console.log("CAN do this"));
