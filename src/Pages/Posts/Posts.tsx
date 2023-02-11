import React from 'react';
import {useParams} from "react-router-dom";
import {useGetPostByCategoryQuery} from "../../Services/NewsApi";
import {ICategory, INews} from "../News/News";
import Cards from "../../Components/Card/Cards";
import DropdownElement from "../../Components/UI/DropdownElement";
import {Dropdown} from "react-bootstrap";
import {useGetAllCategoryQuery} from "../../redux/categorySlice";

const Posts = () => {
    const {id} = useParams()
    const {data: postId = []} = useGetPostByCategoryQuery(id)
    const {data: getCategory = []} = useGetAllCategoryQuery()

    return (
        <div>
            <div className="container__newsHeader d-flex">
                <DropdownElement nameButton={"Category"} variant={"success"} idButton={"dropdown-basic"}>

                    {getCategory && getCategory.map((categoryOne: ICategory) => {
                        return <Dropdown.Item key={categoryOne.id} href={categoryOne.category_uid}>{categoryOne.name}</Dropdown.Item>
                    })}
                </DropdownElement>
                <h2 className="mt-auto" style={{marginLeft: "150px"}}>{getCategory.map((cate: ICategory) => cate.category_uid === id ? cate.name : null)}</h2>
            </div>

            {postId && postId.map((posts: INews) => {
                return <Cards key={posts.id} {...posts}/>
            })}
        </div>
    );
};

export default Posts;