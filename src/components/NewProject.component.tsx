import { FC } from "react";

export const NewProject: FC = () => {
  return (
    <div>
      <menu>
        <button>Cancel</button>
        <button>Save</button>
      </menu>
      <div>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" placeholder="Add title"/>
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <textarea id="description" placeholder="Add description"></textarea>
        </p>
        <p>
          <label htmlFor="duedate">Due Date</label>
          <input type="text" id="duedate" placeholder="Add due date" />
        </p>
      </div>
    </div>
  );
};
