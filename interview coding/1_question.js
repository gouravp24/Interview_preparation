function abc() {
  console.log(abc.xyz);
}

abc() // undefined  beacuse xyz is not defined yet and its called 
abc.xyz = 400;
abc.xyz = 200;
abc() // 200 beacuse xyz is defined now and its called
