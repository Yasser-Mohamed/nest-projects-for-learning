import { Faker } from '@faker-js/faker';
import { Property } from '../entities/property/property.entity';
import { User } from '../entities/property/user.entity';
import { setSeederFactory } from 'typeorm-extension';

export const PropertyFactory = setSeederFactory(Property, (faker: Faker) => {
  const property = new Property();
  property.name = faker.lorem.words(3);
  property.description = faker.lorem.paragraph();
  property.price = faker.number.int({ min: 10000, max: 100000 });
  return property;
});
