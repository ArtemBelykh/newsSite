import React from 'react';

interface ICategory {
    name: string,
    category_uid?: string
}

const Category = ({name}: ICategory) => {
    return (
        <div>
            {name}
        </div>
    );
};

export default Category;