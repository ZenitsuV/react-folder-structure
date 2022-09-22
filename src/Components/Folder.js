import React, { useState } from 'react';

const Folder = ({ data }) => {
  const [expand, setExpand] = useState(false);

  if (data.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)}>
          {data.name}
          <br />
        </span>

        <div
          style={{ display: expand ? 'block' : 'none', paddingLeft: '20px' }}
        >
          {data.items.map((exp) => {
            return <Folder data={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span>{data.name}</span>;
  }
};

export default Folder;
