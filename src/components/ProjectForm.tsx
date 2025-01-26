import Input from './Input';
import React from 'react';

const ProjectForm: React.FC = () => {
    function handleSave() {}
    return (
    <div className="w-[35rem] mt-16">
    <menu className="flex items-center justify-end gap-4 my-4">
      <li>
        <button className="text-stone-800 hover:text-stone-950">
          Cancel
        </button>
      </li>
      <li>
        <button
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          onClick={handleSave}
        >
          Save
        </button>
      </li>
    </menu>
    <div>
      <Input type="text" label="Title" />
      <Input label="Description" textarea />
      <Input type="date" label="Due Date" />
    </div>
  </div>
  );
}

export default ProjectForm;