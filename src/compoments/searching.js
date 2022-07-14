import React, { useState , useEffect} from "react";
import axios from "axios";
import './searching.css'
import img from './image.jpg'
import down from './download.jpg'
import { faker } from '@faker-js/faker';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




function Searching(){
    const productImage=faker.image.fashion();
    const productName=faker.commerce.product();
    const productPrice=faker.commerce.price(100,480,0);
    const Price=faker.commerce.price(450,500,0,'$');

    const arr=[ {
        productImage:faker.image.fashion(180, 280, true),
        productName:faker.commerce.product(),
        productPrice:faker.commerce.price(100,480,0),
        Price:faker.commerce.price(450,500,0,'$'),
   },{
    productImage:faker.image.fashion(180, 280, true),
    productName:faker.commerce.product(),
    productPrice:faker.commerce.price(100,480,0),
    Price:faker.commerce.price(450,500,0,'$'),
},{
    productImage:faker.image.fashion(180, 280, true),
    productName:faker.commerce.product(),
    productPrice:faker.commerce.price(1000,2800,0),
    Price:faker.commerce.price(2000,3000,0,'$'),
},{
    productImage:faker.image.fashion(180, 280, true),
    productName:faker.commerce.product(),
    productPrice:faker.commerce.price(1000,2800,0),
    Price:faker.commerce.price(2000,3000,0,'$'),
},{
    productImage:faker.image.fashion(180, 280, true),
    productName:faker.commerce.product(),
    productPrice:faker.commerce.price(1000,2800,0),
    Price:faker.commerce.price(2000,3000,0,'$'),
},{
    productImage:faker.image.fashion(180, 280, true),
    productName:faker.commerce.product(),
    productPrice:faker.commerce.price(1000,2800,0),
    Price:faker.commerce.price(2000,3000,0,'$'),
}
    ];
    const [arr1,setarr1]=useState(arr);
    const [arr2,setarr2]=useState(arr);
    const [filter,setfilter]=useState({
        zeroTo500:false,
        thousandTo3000: false
    });

    

    const inputHandler=(e)=>{
        console.log("check",e.target.checked,e.target.name)
        setfilter({
            zeroTo500:false,
        thousandTo3000: false,
            [e.target.name]:e.target.checked
        })
    }


    useEffect(() => {
        let arr=arr2.slice()
        if(filter.zeroTo500){
            setarr1(arr.filter((x)=>x.productPrice<500))
        }
        else if(filter.thousandTo3000){
            setarr1(arr.filter((x)=>x.productPrice>999 && x.productPrice<3001))
        }else{
            setarr1(arr)
        }
    }, [filter])
    
    




    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-11 col-10 text-center">
                    <input className="searchinginput" placeholder="Search" />
                    


                    <div className="row " style={{width: "70%", margin: "0 auto" , boxShadow: "5px 10px" }} >

                    <h6>Latest Trends</h6>
                    
                        <div className="col-lg-3 col-3">
                            
                            <div > 
                                <img src={down} />
                                <p>Shirt with puffed sleeves</p>
                            </div>

                        </div>

                        <div className="col-lg-3 col-3">
                            <div > 
                                <img src={down} />
                                <p>Shirt with puffed sleeves</p>
                            </div>

                        </div>

                        <div className="col-lg-3 col-3">
                            <div > 
                                <img src={down} />
                                <p>Shirt with puffed sleeves</p>
                            </div>

                        </div>

                        <div className="col-lg-3 col-3">
                            <div > 
                                <img src={down} />
                                <p>Shirt with puffed sleeves</p>
                            </div>

                        </div>

                    </div>

                   

                    
                    
                </div>
                <div className="col-lg-1 col-2 ">
                    <div className="Zevi">
                        <h4>Zevi</h4>
                        </div>
                </div>
            </div>
            

            <h4>Search Results</h4>
            <div className="row">
                <div className="col-lg-3 col-4">
                    <p className="heading-p">BRAND  <i class="fa fa-sort-desc spacing-icon " aria-hidden="true"></i>  </p> 
                    <div>
                    <input type="checkbox"  /> <span>MANGO</span>
                    </div>
                    <div>
                    <input type="checkbox"  /> <span>MANGO</span>
                    </div>
                    <hr></hr>
                    <p className="heading-p">Price Range <i class="fa fa-sort-desc spacing-icon " aria-hidden="true"></i></p>
                    <div>
                    <input type="checkbox" name="zeroTo500" checked={filter.zeroTo500} onChange={inputHandler} /> <span>under 500</span>
                    </div>
                    <div>
                    <input type="checkbox" name='thousandTo3000' checked={filter.thousandTo3000} onChange={inputHandler} /> <span>1000 to 3000</span>
                    </div>
                    <hr></hr>
                    <p className="heading-p">RATINGS <i class="fa fa-sort-desc spacing-icon " aria-hidden="true"></i></p>
                <div>
                <input type="checkbox" />
                &nbsp;&nbsp;
                 <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>

                </div>
                <div>
                <input type="checkbox" /> 
                &nbsp;&nbsp;
                <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                                <span class="fa fa-star "></span>

                </div>
                <div>
                <input type="checkbox" /> 
                &nbsp;&nbsp;
                <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                            <span class="fa fa-star "></span>
                                <span class="fa fa-star "></span>

                </div>
                <div>
                <input type="checkbox" /> 
                &nbsp;&nbsp;
                <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                        <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                                <span class="fa fa-star "></span>

                </div>
                <div>
                <input type="checkbox"  />  
                    &nbsp;&nbsp;
                <span class="fa fa-star checked "></span>
                    <span class="fa fa-star "></span>
                        <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                                <span class="fa fa-star "></span>

                </div>



                </div>

                <div className="col-lg-9 col-8 ">
                     <div className="row">
                        {arr1.map((item)=>
                        <div className="col-lg-3 col-12">
                        <div>
                            <img src={item.productImage} width={180} height={280}/>
                            <h6 className="my-2">{item.productName}</h6>
                            <p ><span style={{textDecoration:"line-through"}}>{item.Price}</span>  <span style={{textDecoration:"none"}}>${item.productPrice}</span></p>
                            <span class="fa fa-star checked "></span>
                                    <span class="fa fa-star checked "></span>
                                        <span class="fa fa-star checked "></span>
                                            <span class="fa fa-star checked "></span>
                                                <span class="fa fa-star checked "></span>
                                                    <span> (200)  </span>

                        </div>
                    </div>)}
                        </div>

                   






                </div>

            </div>
        </div>
    )
}


export default Searching;