import { IMessage } from "./IMessage";
import { IContact } from "./IContact";
import { IdT } from "./IdT";

export interface IChat {
  id: IdT;
  contact: IContact;
  messages: IMessage[];
}
