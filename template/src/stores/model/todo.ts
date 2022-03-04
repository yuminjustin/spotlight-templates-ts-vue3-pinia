interface TodoType {
  id: number;
  edit: boolean;
  word: string;
  isSelected: boolean;
}
let increment: number = 0;

class Todo implements TodoType {
  public id: number;
  public edit: boolean;
  public word: string;
  public isSelected: boolean;
  constructor(word: string, id?: number, edit?: boolean, isSelected?: boolean) {
    this.id = id || increment;
    this.edit = edit || false;
    this.word = word;
    this.isSelected = isSelected || false;
    increment++;
  }
  toggleEdit(): void {
    this.edit = !this.edit;
  }
  changeWord(word: string): void {
    this.word = word;
    this.toggleEdit();
  }
  toggleSelected(forceFalse?: boolean): void {
    this.isSelected = forceFalse ? false : !this.isSelected;
  }
}

export default Todo;
