
import React from 'react';
import { Table } from 'reactstrap';

export function MySchedule() {
  return (
    <div style={{textAlign: 'center', maxWidth: `100%`, paddingLeft: '200px', paddingRight: '200px'}}>
           <h1>Schedule</h1>
    <Table responsive>

      <thead>
        <tr>
          <th></th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">This week:</th>
          <td>Plant</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">Next Week:</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default MySchedule;