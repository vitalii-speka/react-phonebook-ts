import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { getContacts, addContact, removeContact } from "./operations";
import { IContactState, IContact } from "../../interface-ts/interface";

const initialState = {
  items: [],
  filter: "",
  isLoading: false,
  error: null,
} as IContactState;

const handlePending = (state: IContactState, action: PayloadAction<any>) => {
  state.isLoading = true;
};

const handleRejected = (
  state: IContactState,
  { payload }: PayloadAction<any>
) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    changeFilter(state, { payload }: PayloadAction<string>) {
      state.filter = payload;
    },
    clearFilterInput(state, _) {
      state.filter = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getContacts.fulfilled,
        (state: IContactState, { payload }: PayloadAction<IContact[]>) => {
          state.items = payload;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(
        getContacts.rejected,
        (state: IContactState, action: PayloadAction<any>) => {
          state.error = action.payload;
        }
      )
      .addCase(
        addContact.fulfilled,
        (state: IContactState, { payload }: PayloadAction<IContact>) => {
          state.items.push(payload);
          state.error = null;
          state.isLoading = false;
        }
      )
      .addCase(
        removeContact.fulfilled,
        (state: IContactState, { payload }: PayloadAction<IContact>) => {
          state.items = state.items.filter((el) => el._id !== payload._id);
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(getContacts.rejected, addContact.rejected),
        handleRejected
      )
      .addMatcher(
        isAnyOf(getContacts.pending, addContact.pending),
        handlePending
      );
  },
});

export const { changeFilter, clearFilterInput } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
