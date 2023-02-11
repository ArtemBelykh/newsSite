import React from 'react';
import {Button, Card} from 'react-bootstrap';
import {ICategory, INews} from "../../Pages/News/News";
import {URL_API} from "../../index";
import {useGetAllCategoryQuery} from "../../redux/categorySlice";

const Cards = ({id, category, images, name, user_id, views, description, created_date}: INews): JSX.Element => {
    const {data: getCategory = []} = useGetAllCategoryQuery()
    return (
        <Card style={{width: "50%", margin: "auto", marginTop: "50px"}}>
            <Card.Img variant="top" style={{ width: '100%', height: '350px' }} src={URL_API + images} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Subtitle>
                    {getCategory.map((cate: ICategory) => cate.category_uid === category ? cate.name : null) + ' - ' + views + ' - ' + created_date}
                </Card.Subtitle>
                <Button href={"/post/" + id} variant="primary">More</Button>
            </Card.Body>
        </Card>
    );
};

export default Cards;