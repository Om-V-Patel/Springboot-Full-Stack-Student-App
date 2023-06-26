import React from 'react';
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';
import CodeIcon from '@rsuite/icons/Code';

import DetailIcon from '@rsuite/icons/Detail';

import FileUploadIcon from '@rsuite/icons/FileUpload';
  
function Appbar() {
    return (
        <div>
            <h1 style={{ color: 'green' }}>OM Patel</h1>
            <h3>React  Dropdown </h3>
            <Dropdown title="Om" icon={<CodeIcon  />}>
                <Dropdown.Item icon={<FileUploadIcon style={{ color: 'orange' }}/>}>
                Add Student Details
                </Dropdown.Item>
                <Dropdown.Item icon={<FileUploadIcon style={{ color: 'blue  ' }} />}>
                All Details
                </Dropdown.Item>
                <Dropdown.Item icon={<FileUploadIcon style={{ color: 'red' }} />}>
                Find Student By Id
                </Dropdown.Item>
                <Dropdown.Item icon={<DetailIcon style={{ color: 'black' }} />}>
                    Exit
                </Dropdown.Item>
            </Dropdown>
        </div>
    )
}
  
export default Appbar;