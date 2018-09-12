import { User } from "./user";
import { Category } from "./category";

export class Course {
  iCodCou: number;
  sNamCou: String;
  sDesCou: String;
  dDatCou: Date;
  dExpTimCou: Date;
  fPriCou: String;
  fHorCou: String;
  sDifCou: String;
  sStaCou: String;
  users: Array<User>;
  category: Category;

}
