import { pathsToModuleNameMapper } from 'ts-jest';
import tsconfig from '../tsconfig.json';

export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: '<rootdir>/',
  }),
  testRegex: '.*\\.*spec\\.ts-jest$',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};
