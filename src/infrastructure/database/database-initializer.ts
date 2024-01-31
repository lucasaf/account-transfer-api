import 'reflect-metadata';
import { DataSource } from 'typeorm';
import config from './orm-config';

export const AppDataSource = new DataSource(config);

export const databaseInitializer = async () => {
  try {
    await AppDataSource.initialize();
    console.log('The database initialization has completed successfully.');
  } catch (error) {
    console.error('Error to connect to the database.', error);
  }
};
