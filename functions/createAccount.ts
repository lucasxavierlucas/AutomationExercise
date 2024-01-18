export const generateRandomEmail = () => {
    const randomNumber = Math.floor(Math.random() * 10000);
    return `lucas.coutinho${randomNumber}@test.com`;
  };