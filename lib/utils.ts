export class Common {
  static stringToFloat(str?: string): number {
    return str ? parseFloat(str) : 0;
  }
}
