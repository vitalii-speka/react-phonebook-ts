import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getisLoadingContacts = (state: RootState) =>
  state.contacts.isLoading;

export const selectGetContacts = (state: RootState) => state.contacts.items;

export const getFilter = (state: RootState) => state.contacts.filter;

export const getContactsError = (state: RootState) => state.contacts.error;

export const getVisibleContacts = createSelector(
  [selectGetContacts, getFilter],
  (contacts, filter) => {
    const normalazideFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalazideFilter)
    );
  }
);
