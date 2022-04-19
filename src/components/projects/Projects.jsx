import React from 'react';
import styled from  "styled-components";
import {myprojects} from '../../allprojects.js';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function Projects() {
  return (
    <div>
      <h2>Archived Projects</h2>
      <TABLE>
        <THEAD>
          <TR>
            <TH>#</TH>
            <TH>Project</TH>
            <TH>Link</TH>
          </TR>
        </THEAD>
        <TBODY>
          {
            myprojects.slice(3).map((project, index) => (
              <TR>
                <TH>{index}</TH>
                <TH><a href={project.github} target="_blank" rel="noreferrer">{project.name}</a></TH>
                <TH><a href={project.link} target="_blank" rel="noreferrer"><OpenInNewIcon /></a></TH>
              </TR>
            ))
          }
          
        </TBODY>
      </TABLE>
    </div>
  )
}

export default Projects;

const TABLE = styled.table`
  width: 100%;
  max-width: 500px;
  margin: auto;
  border-top: 2px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-collapse: collapse;
  border-radius: 20px !important;
`;

const THEAD = styled.thead``;

const TR = styled.tr`
  border-bottom: 1px solid #ccc;
`;

const TH = styled.th`
border-bottom: 1px solid #ccc;
  padding: 10px;  
`;

const TBODY = styled.tbody``;

const TD = styled.td``;
