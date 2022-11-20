/* eslint-disable no-undef */
const tlist = require("../todo");
let tdy = new Date().toLocaleDateString("en-CA");

const { all, mcp, add, od, dt, dl } = tlist();

describe("Test the Tlist", () => {
  beforeAll(() => {
    add({
      title: "complete problems",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Adding a new todo in the tlist", () => {
    // expect(all.length).toBe(0);
    let length = all.length;

    add({
      title: "it will be completed",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("Marking the todos in tlist completed", () => {
    expect(all[0].completed).toBe(false);
    mcp(0);
    expect(all[0].completed).toBe(true);
  });

  test("getting all todos that are overdue.", () => {
    let lot = od();

    expect(
      lot.every((todo) => {
        return todo.dueDate < tdy;
      })
    ).toBe(true);
  });

  test("getting all todos that are overdue today", () => {
    let lot = dt();

    expect(
      lot.every((todo) => {
        return todo.dueDate === tdy;
      })
    ).toBe(true);
  });

  test("getting all todos that are overdue later", () => {
    let lot = dl();

    expect(
      lot.every((todo) => {
        return todo.dueDate > tdy;
      })
    ).toBe(true);
  });
});
