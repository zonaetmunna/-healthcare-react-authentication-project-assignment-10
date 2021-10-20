import React from 'react';
import { Row } from 'react-bootstrap';
import useMember from '../../../../Hooks/useMember';

import Team from '../Team/Team';



const Teams = () => {
     const [member] = useMember();

     const styles = {
          fontFamily: 'Roboto Mono'
     }
     return (

          <div style={styles} className="mt-5 p-4">
               <div className="text-center">
                    <h3>Meet Our Team</h3>
                    <p className="ps-3 pe-3">Thanks to decades of experience and research, we know what works for chronically homeless people: robust services that begin with a “Housing First” approach: providing housing as a first step and then surrounding tenants with voluntary treatment and health services. </p>
               </div>

               <Row xs={1} md={4} className="g-4">
                    {
                         member.map(team => <Team
                              key={team.id}
                              team={team}
                         ></Team>)
                    }
               </Row>

          </div>
     );
};

export default Teams;