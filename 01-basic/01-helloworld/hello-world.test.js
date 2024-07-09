const helloworld = require('./hello-world');

Test("Returning 'Hello, World!' as string", () => {
    const result = helloworld();
    expect(result).toBe('Hello World!');
});