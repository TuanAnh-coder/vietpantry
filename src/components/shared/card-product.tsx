import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../ui/button';
import Link from 'next/link';
import { InfoIcon, ShoppingCartIcon } from 'lucide-react';

const Card = ({ product }: { product: any }) => {
    return (
        <StyledWrapper>
            <div className="book p-2">
                <div className='w-full h-full pl-10 py-2 relative'>
                    <span className='!text-xs text-gray-500 font-semibold'>Mô tả sản phẩm</span>
                    <h6 className='text-green-500 font-bold text-lg py-8'>{product.title}</h6>
                    <p className='!text-base text-justify text-gray-500'>{product.description}</p>
                    <div className="flex items-center justify-end w-full gap-2 absolute bottom-0 right-0 ma-2">
                        <Link href={`/products/${product.title}`} className={'cursor-pointer text-black bg-transparent transition-all duration-500 linear hover:bg-green-700 hover:text-white flex justify-center items-center gap-1 p-1 rounded-lg px-2.5'}>
                            <InfoIcon />
                            <p className='!text-xs'>More</p>
                        </Link> 
                        <Button className={'cursor-pointer text-black bg-transparent transition-all duration-500 linear hover:bg-green-700 hover:text-white flex justify-center items-center gap-1'}>
                            <ShoppingCartIcon />
                            <p className='!text-xs'>Thêm giỏ hàng</p>
                        </Button>
                    </div>
                </div>
                <Link href={`/products/${product.title}`} className="cover flex flex-col p-4 py-10">
                    <div>
                        <Image src={product.img} alt={product.title} width={720} height={720} className='w-full max-w-3xs object-contain' />
                    </div>
                    <div className='py-6 mt-4 w-full'>
                        <p className='!text-sm !font-semibol'>{product.title}</p>
                        <p className='text-sm font-medium text-green-700 py-2'>{product.price} vnđ</p>
                    </div>
                </Link>
            </div>
        </StyledWrapper >
    );
}

const StyledWrapper = styled.div`
  .book {
    position: relative;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    min-height: 380px;
    background-color: white;
    -webkit-transform: preserve-3d;
    -ms-transform: preserve-3d;
    transform: preserve-3d;
    -webkit-perspective: 2000px;
    perspective: 2000px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #000;
  }

  .cover {
    top: 0;
    position: absolute;
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform-origin: 0;
    -ms-transform-origin: 0;
    transform-origin: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .book:hover .cover {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform: rotatey(-80deg);
    -ms-transform: rotatey(-80deg);
    transform: rotatey(-80deg);
  }

  p {
    font-size: 20px;
    font-weight: bolder;
  }`;

export default Card;
