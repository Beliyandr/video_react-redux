// type AddAction = { type: "goods/ADD"; payload: string };
// type TakeAction = { type: "goods/TAKE"; payload: string };
// type ClearAction = { type: "goods/CLEAR" };

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type Action = AddAction | TakeAction | ClearAction;

// const add = (good: string): AddAction => ({
//   type: "goods/ADD",
//   payload: good,
// });
// const take = (good: string): TakeAction => ({
//   type: "goods/TAKE",
//   payload: good,
// });
// const clear = (): ClearAction => ({ type: "goods/CLEAR" });

// export const actions = { add, take, clear };
// const goodsReducer = (goods: string[] = [], action: Action) => {
//   switch (action.type) {
//     case "goods/ADD":
//       return [...goods, action.payload];
//     case "goods/TAKE":
//       return goods.filter((good) => good !== action.payload);
//     case "goods/CLEAR":
//       return [];

//     default:
//       return goods;
//   }
// };

// export default goodsReducer;

const initialState: string[] = [];

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    add: (goods, action: PayloadAction<string>) => {
      goods.push(action.payload);
    },
    take: (goods, action: PayloadAction<string>) => {
      return goods.filter((good) => good !== action.payload);
    },
    clear: () => [],
  },
});
export default goodsSlice.reducer;
export const { actions } = goodsSlice;
пше і
