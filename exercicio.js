function esperar(tempo) {
    return new Promise(resolve => setTimeout(resolve, tempo));
  }
  
  
  async function esquentarAgua() {
    console.log("1. Esquentando a água...");
    await esperar(2000);
    console.log("Água quente!");
  }
  
  async function colocarMacarrao() {
    console.log("2. Colocando o macarrão na água...");
    await esperar(1000);
    console.log("Macarrão na panela!");
  }
  
  async function cozinharMacarrao() {
    console.log("3. Cozinhando o macarrão...");
    await esperar(3000);
    console.log("Macarrão cozido!");
  }
  
  async function escorrerMacarrao() {
    console.log("4. Escorrendo o macarrão...");
    await esperar(1000);
    console.log("Macarrão escorrido!");
  }
  
  async function servirMacarrao() {
    console.log("5. Servindo o macarrão...");
    await esperar(500);
    console.log("Macarrão servido! 🍝");
  }
  
  async function prepararMacarrao() {
    await esquentarAgua();
    await colocarMacarrao();
    await cozinharMacarrao();
    await escorrerMacarrao();
    await servirMacarrao();
  }
  
  prepararMacarrao();
  