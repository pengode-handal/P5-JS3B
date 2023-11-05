'use client'
import React, { useState } from 'react'
import type { Pending } from '@prisma/client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { SyntheticEvent } from 'react';


const PendingEvent = ({pending} : {pending: Pending}) => {
    // dklarasi state
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleApprove = async (productId: Number) => {
        setIsLoading(true)
        await axios.post('/api/dashboard', {
            coName: pending.coName,
            description: pending.description,
            bisnisId: Number(pending.bisnisId),
            contact: pending.contact,
            rgPrice: pending.rgPrice,
            imgLink: pending.imgLink,
        })
        await axios.patch(`/api/dashboard/pending/${productId}`, {
            status: 'Done',
        })
        setIsLoading(false)
        router.refresh();
        setIsOpen(false);
    }

    const handleModal = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
        <button onClick={handleModal}>
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
        </svg>
        </button>
        
        <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
        <h3 className="font-bold text-lg">
            Are sure to add {pending.coName}?
        </h3>

        <div className="modal-action">
            <button type="button" className="btn" onClick={handleModal}>
            No
            </button>
            {!isLoading ? (
            <button
                type="button"
                onClick={() => handleApprove(pending.id)}
                className="btn btn-primary"
            >
                Yes
            </button>
            ) : (
            <button type="button" className="btn loading">
                Adding...
            </button>
            )}
        </div>
        </div>
    </div>
        </>
    )
}

export default PendingEvent