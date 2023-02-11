import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useGetPostByIdQuery} from "../../Services/NewsApi";
import {ICategory} from "../News/News";
import {Button, Dropdown} from "react-bootstrap";
import DropdownElement from "../../Components/UI/DropdownElement";
import {useGetAllCategoryQuery} from "../../redux/categorySlice";

const PostOne = () => {
    const {id} = useParams()
    const {data: getPostById} = useGetPostByIdQuery(id)
    const {data: getCategory = []} = useGetAllCategoryQuery()
    const history = useNavigate()

    return (
        <div>
            {getPostById && getPostById.map((postID: ICategory) => {
                console.log(postID)
                return <div key={postID.id} className={"posts"}>
                    <div style={{marginLeft: "50px"}} className="container__newsHeader d-flex">
                        <DropdownElement nameButton={"Category"} variant={"success"} idButton={"dropdown-basic"}>

                            {getCategory && getCategory.map((categoryOne: ICategory) => {
                                return <Dropdown.Item key={categoryOne.id}
                                                      href={categoryOne.category_uid}>{categoryOne.name}</Dropdown.Item>
                            })}
                        </DropdownElement>

                        <Button style={{marginLeft: "50px", marginTop: "20px"}} variant={"dark"} onClick={() => history(-1)}>Back</Button>
                        <h2 className="mt-auto" style={{marginLeft: "50px"}}>{postID.name}</h2>

                    </div>

                    <div className="text_container" style={{width: "63%", margin: "auto", marginTop: "50px", marginBottom: "25%"}}>
                        {postID.description}
                    </div>
                </div>
            })}
        </div>
    );
};

export default PostOne;