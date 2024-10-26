import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import styles from "./Filter.module.css";
import { getFilter, selectGetContacts } from "../../redux/contacts/selectors";
import { changeFilter, clearFilterInput } from "../../redux/contacts/slice";
import { AppDispatch } from "redux/store";
import { IconDeleteLeft } from "componets/IconDeleteLeft/IconDeleteLeft";

export default function Filter() {
  const dispatch = useDispatch<AppDispatch>();

  const value = useSelector(getFilter);
  const contacts = useSelector(selectGetContacts);

  const clearInput = useCallback(() => {
    dispatch(clearFilterInput(""));
  }, [dispatch]);

  return (
    <>
      <CSSTransition
        in={contacts.length > 0}
        timeout={250}
        classNames="fade"
        unmountOnExit
      >
        <label className={styles.TaskList_item}>
          <p>Find contacts by name</p>
          <input
            className={styles.TaskEditor_input}
            type="text"
            value={value}
            onChange={(e) => {
              dispatch(changeFilter(e.target.value));
            }}
            name="filter"
          />
          {value && (
            <button className={styles.button} onClick={clearInput}>
              <IconDeleteLeft />
            </button>
          )}
        </label>
      </CSSTransition>
    </>
  );
}
