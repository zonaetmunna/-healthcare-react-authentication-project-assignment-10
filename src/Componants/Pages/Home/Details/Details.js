import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
     const { id } = useParams();
     return (
          <div>
               <h1>{id}</h1>
          </div>
     );
};

export default Details;