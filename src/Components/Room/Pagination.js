import React, { useState } from 'react';

import Pagination from 'react-responsive-pagination';
const Paginations = ({propsData}) => {

    const totalPages = propsData?.length;
  
    return (
      <Pagination
        current={propsData.page}
        total={totalPages}
        onPageChange={propsData.setPage}
      />
    );
}

export default Paginations