describe("Pruebas en <DemoComponent/>", () => {
  test("Esta prueba no debe fallar", () => {
    // Iiciliazacion
    const message1 = "Hola Mundo";

    //estimulo
    const message2 = message1.trim();
    // observar el comportamiento
    expect(message1).toBe(message2);
  });
});
