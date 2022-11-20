/* eslint-disable no-undef */
const tlist = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const mcp = (index) => {
    all[index].completed = true;
  };

  let tdy = new Date().toLocaleDateString("en-CA");
  // let tdy = new Date().toISOString().split("T")[0];

  const od = () => {
    return all.filter((todo) => {
      return todo.dueDate < tdy;
    });
  };

  const dt = () => {
    return all.filter((todo) => {
      return todo.dueDate === tdy;
    });
  };

  const dl = () => {
    return all.filter((todo) => {
      return todo.dueDate > tdy;
    });
  };

  const tdl= (list) => {
    return list
      .map((todo) => {
        display_status = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == tdy ? "" : todo.dueDate;

        return `${display_status} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    mcp,
    od,
    dt,
    dl,
    tdl,
  };
};

module.exports = tlist;

