import { UserEntity, UserProps } from '../../user.entity';
import { UserDataBilder } from '@/users/domain/testing/helpers/user-data-bilder';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions, prettier/prettier
    props = UserDataBilder( {} );
    sut = new UserEntity(props);
  });
  it('construtor metod', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });

  it('getter of name field', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(sut.props.name).toBeDefined;
    expect(sut.props.name).toEqual(props.name);
    expect(typeof sut.props.name).toBe('string');
  });
  it('getter of email field', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(sut.props.email).toBeDefined;
    expect(sut.props.email).toEqual(props.email);
    expect(typeof sut.props.email).toBe('string');
  });
  it('getter of password field', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(sut.props.password).toBeDefined;
    expect(sut.props.password).toEqual(props.password);
    expect(typeof sut.props.password).toBe('string');
  });
  it('getter of createdAt field', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(sut.props.createdAt).toBeDefined;
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });
});
