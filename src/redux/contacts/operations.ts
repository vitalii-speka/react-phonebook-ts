import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/operations";
import { IContact } from "../../interface-ts/IContact";

/* getContacts  before
export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/contacts", credentials);
      return data.contacts;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error);
      } else {
        console.log("Unexpected error", error);
      }
      // return thunkAPI.rejectWithValue(error.message);
    }
  }
);
*/

export const getContacts = createAsyncThunk<
  IContact[],
  undefined,
  { rejectValue: string }
>("contacts/getContacts", async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.get("/contacts");
    return data.contacts;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      console.log("Unexpected error", error);
    }
  }
});

export const addContact = createAsyncThunk<
  IContact,
  IContact,
  { rejectValue: string }
>("contacts/addContact", async ({ name, number }, { rejectWithValue }) => {
  const contacts = {
    name,
    number,
    // completed: false,
  };
  try {
    const { data } = await instance.post("/contacts", contacts);
    return data.contact;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      console.log("Unexpected error", error);
    }
  }
});

export const removeContact = createAsyncThunk<
  IContact,
  IContact["id"],
  { rejectValue: string }
>("contacts/removeContact", async (id, { rejectWithValue }) => {
  try {
    // await instance.delete(`/contacts/${id}`);
    const res = await instance.delete(`/contacts/${id}`);
    return res.data.data.contact;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      console.log("Unexpected error", error);
    }
  }
});

export const editContact = createAsyncThunk<
  IContact,
  IContact,
  { rejectValue: string }
>("contacts/editContact", async ({ id, ...values }, { rejectWithValue }) => {
  try {
    const res = await instance.patch(`/contacts/${id}`, values);
    return res.data;
  } catch (err) {
    if (err instanceof Error) {
      return rejectWithValue(err.message);
    } else {
      console.log("Unexpected error", err);
    }
  }
});
