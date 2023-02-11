import React from 'react';
import {IPaginate} from "../../Pages/News/News";
import {Pagination} from "react-bootstrap";

const Paginate = ({perPage, totalPosts, paginate, nextPage, prevPage, firstPage, lastPage}: IPaginate): JSX.Element => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div style={{marginLeft: "25%", marginTop: "20px", marginBottom: "30px"}}>
            <Pagination>
                <Pagination.First onClick={firstPage} />
                <Pagination.Prev onClick={prevPage} />
                {pageNumbers.map(number => (
                    <Pagination.Item key={number}><div onClick={() => paginate(number)}>{number}</div></Pagination.Item>
                    ))}
                <Pagination.Next onClick={nextPage} />
                <Pagination.Last onClick={lastPage} />
            </Pagination>
        </div>
    );
};

export default Paginate;