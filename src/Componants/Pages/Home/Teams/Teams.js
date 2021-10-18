import React from 'react';
import { Row } from 'react-bootstrap';
import useMember from '../../../../Hooks/useMember';
import useService from '../../../../Hooks/useService';
import Team from '../Team/Team';



const Teams = () => {
     const [member] = useMember();
     return (

          <div className="mt-5 p-4">
               <div className="text-center">
                    <h3>Meet Our Team</h3>
                    <p className="">Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo non habent claritatem insitamconsequat duis autem  </p>
               </div>

               <Row xs={1} md={4} className="g-4">
                    {
                         member.map(team => <Team
                              team={team}
                         ></Team>)
                    }
               </Row>

          </div>
     );
};

export default Teams;