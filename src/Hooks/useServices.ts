import axios from "axios";
import type { Service } from "../types";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { setServices } from "../store/ServiceSlice";

export const useServices =()=>{
    const dispatch = useDispatch();
    const fetchServices = async (): Promise<Service[]> =>{
    const response = await axios.get('https://admin.naxa.com.np/api/services')
    return response.data;
}

    const query = useQuery({
        queryKey: ['services'],
        queryFn: fetchServices,
    })
    useEffect(() => {
        if (query.data) {
            dispatch(setServices(query.data));
        }
    }, [query.data, dispatch]);

  
    return query;

}