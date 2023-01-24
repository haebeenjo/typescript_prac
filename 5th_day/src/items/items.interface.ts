// 메모리에 저장하는 배열의 타입을 지정
import { Item } from "./item.interface";

export interface Items {
  [key: number]: Item;
}