import React from 'react';
import { Row } from 'react-bootstrap';
import useMedicine from '../../../Hooks/useMedicine';
import Medicines from '../Medicines/Medicines';

const Medicine = () => {
     const [medicine] = useMedicine();
     return (
          <div className="mt-5 p-5">
               <h3 className="text-center text-primary">Medicine store</h3>
               <Row xs={1} md={3} className="g-4">
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