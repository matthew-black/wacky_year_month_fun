**Friendly Reminder:**

There's certainly a more straightforward/sensible approach to this whole song and dance if we were to refactor the table to store `year` and `month` as an actual datetime:
  * https://stackoverflow.com/questions/9134497/mysql-datatype-to-store-month-and-year-only#:~:text=Just%20store%20it%20as%20a%20complete%20date

That said, it's fair to recognize that the overhead of refactoring the rest of your app (within such a short sprint) makes this approach better for now. 🙂
