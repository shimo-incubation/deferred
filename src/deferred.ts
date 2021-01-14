export default class Deferred<T> {
  public promise: Promise<T>;
  public resolve: (data: T) => void;
  public reject: (error: unknown) => void;

  constructor() {
    this.reject = this.resolve = () => {
      throw new Error(
        "Promise constructor should be called synchronously. Please check the `Promise` implementation in your environment"
      );
    };

    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
