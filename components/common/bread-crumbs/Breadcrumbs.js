import {FC, useEffect, useState} from 'react'
import {BreadCrumbs,} from './Breadcrumbs.e'
import { Link } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import parse from "html-react-parser";


const  BreadcrumbsBlock = ({
    breadcrumb
}) => {
   
      return (
        <BreadCrumbs>
            <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                   {breadcrumb?.map((value , index) => 
                       
                            (
                                <Link underline="hover" className='left' key="1" color="#ffff"
                                    href={value.slug}>
                                        <a>
                                        {parse(value.title)}
                                        </a>
                                    </Link>
                                    
                                
                            )
                        )
                        }
            </Breadcrumbs>
            </Stack>
      </BreadCrumbs>
      
      )
   
}
export default BreadcrumbsBlock