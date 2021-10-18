import React from 'react';
import { Row } from 'react-bootstrap';
import useMedicine from '../../../Hooks/useMedicine';
import Medicines from '../Medicines/Medicines';

const Medicine = () => {
     const [medicine] = useMedicine();
     return (
          <div>
               <Row xs={1} md={2} className="g-4">
                    {
                         medicine.map(medicines => <Medicines
                              key={medicines.id}
                              medicines={medicines}

                         ></Medicines>)
                    }
               </Row>

          </div>
     );
};

export default Medicine;