import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { toast } from "react-toastify";

const Verify = () => {
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();

    useEffect(() => {
        const verifyPayment = async () => {
            try {
                setIsLoading(true);
                const response = await axios.post(`${url}/api/order/verify`, {
                    success,
                    orderId
                });
                
                if (response.data.success) {
                    toast.success("Order Placed Successfully");
                    navigate("/myorders", { replace: true });
                } else {
                    throw new Error("Verification failed");
                }
            } catch (error) {
                console.error("Verification error:", error);
                toast.error(error.response?.data?.message || "Something went wrong");
                navigate("/", { replace: true });
            } finally {
                setIsLoading(false);
            }
        };

        // Only verify if we have both success and orderId
        if (success && orderId) {
            verifyPayment();
        } else {
            toast.error("Invalid verification parameters");
            navigate("/", { replace: true });
        }
    }, [success, orderId, url, navigate]);

    return (
        <div className="verify">
            {/* The spinner will always be rendered due to your CSS grid layout */}
            <div className="spinner"></div>
        </div>
    );
};

export default Verify;