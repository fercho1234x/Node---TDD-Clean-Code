import { UrlLogin } from '../protocols/protocols-http'
import { InvalidArgument } from '../errors/invalid-arg'
describe('Protocols http and querys', () => {
  test('Url login', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login')
    expect(parsedUrl.href).toBe('http://localhost:3000/login')
    expect(parsedUrl.port).toBe('3000')
  })

  test('Response Query', () => {
    const expectAuth = {
      user: 'user',
      password: 'password'
    }
    const parsedUrl = UrlLogin.parseUrl(`http://localhost:3000/login?user=${expectAuth.user}&password=${expectAuth.password}`)
    expect(parsedUrl.searchParams.get('user')).toEqual(expectAuth.user)
    expect(parsedUrl.searchParams.get('password')).toEqual(expectAuth.password)
  })

  test('Url user', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/user')
    expect(parsedUrl.href).toBe('http://localhost:3000/user')
    expect(parsedUrl.port).toBe('3000')
  })

  test('Response Query User', () => {
    const expectAuth = {
      user: 'user',
      password: 'password',
      name: 'name',
      lastname: 'lastname'
    }
    const parsedUrl = UrlLogin.parseUrl(`http://localhost:3000/user?user=${expectAuth.user}&password=${expectAuth.password}&name=${expectAuth.name}&lastname=${expectAuth.lastname}`)
    expect(parsedUrl.searchParams.get('user')).toEqual(expectAuth.user)
    expect(parsedUrl.searchParams.get('password')).toEqual(expectAuth.password)
    expect(parsedUrl.searchParams.get('name')).toEqual(expectAuth.name)
    expect(parsedUrl.searchParams.get('lastname')).toEqual(expectAuth.lastname)
  })

  test('Invalid Url', () => {
    function expectError (): void {
      UrlLogin.parseUrl('')
    }
    // expect(expectError).toThrowError('Invalid URL') La forma sencilla
    expect(expectError).toThrowError(new InvalidArgument(''))
  })
})
