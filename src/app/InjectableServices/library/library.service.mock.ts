export class LibraryServiceMock {
  constructor() {
    console.log('library service mock instantiated');

  }

  public read(): string {
    return 'library service mock read method';
  }
}
