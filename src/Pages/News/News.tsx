import React, {FC, useEffect, useState} from 'react';
import Cards from "../../Components/Card/Cards";
import {useGetAllNewsQuery} from "../../Services/NewsApi";
import DropdownElement from "../../Components/UI/DropdownElement";
import {Dropdown, Spinner} from 'react-bootstrap';
import {useGetAllCategoryQuery} from "../../redux/categorySlice";
import Paginate from "../../Components/Pagination/Paginate";

export interface INews {
    category: string
    created_date: string
    description: string
    id: number
    images: string
    name: string
    user_id: string
    views: string
}

export interface ICategory {
    id: number,
    name: string,
    category_uid: string,
    description: string,
    images: string
}

export interface IPaginate {
    perPage: number,
    totalPosts: number,
    paginate: any,
    nextPage: any,
    prevPage: any,
    lastPage: any,
    firstPage: any
}

const News = () => {
    const {data: getCategory = []} = useGetAllCategoryQuery()
    const {data: getPosts = [], isLoading, isSuccess} = useGetAllNewsQuery()

    const [post, setPost] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage] = useState(5)

    const lastCountryIndex = currentPage * perPage
    const firstCountryIndex = lastCountryIndex - perPage
    const currentPosts = post.slice(firstCountryIndex, lastCountryIndex)

    useEffect(() => {
        setPost(getPosts)
    }, [post])


    const paginate = (pageNumber: any): void => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev - 1)
    const lastPage = () => setCurrentPage(lastCountryIndex)
    const firstPage = () => setCurrentPage(1)

    return (
        <div style={{width: '100%'}}>
            <div className="container__newsHeader d-flex">
                <DropdownElement nameButton={"Category"} variant={"success"} idButton={"dropdown-basic"}>

                    {getCategory && getCategory.map((categoryOne: ICategory) => {
                        // console.log(categoryOne)
                        return <Dropdown.Item key={categoryOne.id}
                                              href={"post/category/" + categoryOne.category_uid}>{categoryOne.name}</Dropdown.Item>
                    })}
                </DropdownElement>
                <h2 className="mt-auto" style={{marginLeft: "150px"}}>All Post</h2>
            </div>

            {isLoading &&
                <div className={"d-flex justify-content-center align-items-xl-center"}>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }


            {currentPosts.map((news: INews) => {
                return <Cards key={news.id} {...news}/>
            })}

            <Paginate perPage={perPage} totalPosts={post.length} paginate={paginate} nextPage={nextPage}
                      prevPage={prevPage} firstPage={firstPage} lastPage={lastPage}/>
        </div>
    );
};

export default News;