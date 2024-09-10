import { fa, faker } from "@faker-js/faker";

export function generateGame(amount) {
  let games = [];
  for (let i = 0; i < amount; i++) {
    games.push({
      name: faker.commerce.productName(),
      company: faker.company.companyName(),
      website: faker.internet.url(),
      launchYear: faker.date.past(),
      genre: faker.commerce.department(),
    });
  }
  return games;
}
