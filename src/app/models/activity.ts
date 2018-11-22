import { Course } from "app/models/course";

export class Activity {
  iCodAct: number;
  sNamAct: String;
  sDesAct: String;
  idAluno: Number;
  corrigido: Boolean;
  sCodVidAct: String;
  sPatPDFAct: String;
  course: Course;
}
