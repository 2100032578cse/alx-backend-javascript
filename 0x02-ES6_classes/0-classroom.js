/**
 * Represents a default class room.
 */
export default class ClassRoom {
  /**
     * Creates a new @see {@link ClassRoom}.
     * @param {Number} maxStudentsSize - The maximum number of
     * students in the class.
     */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
