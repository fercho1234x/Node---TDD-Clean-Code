import { URL } from 'url'
import { InvalidArgument } from '../errors/invalid-arg'

export class UrlLogin {
  public static parseUrl (url: string): URL {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!url) {
      throw new InvalidArgument(url)
    }
    return new URL(url)
  }
}
