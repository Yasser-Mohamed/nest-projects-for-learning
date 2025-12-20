import { Faker } from '@faker-js/faker';
import { User } from '../entities/property/user.entity';
import { setSeederFactory } from 'typeorm-extension';

export const UserFactory = setSeederFactory(User, (faker: Faker) => {
  const user = new User();
  user.firstName = faker.person.firstName();
  user.lastName = faker.person.lastName();
  user.email = faker.internet.email({
    firstName: user.firstName,
    lastName: user.lastName,
  });
  user.password = faker.internet.password({ length: 10 });
  user.avatarUrl = faker.image.avatar();
  return user;
});
