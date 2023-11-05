'use client';

import type { Bisnis } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useState, SyntheticEvent } from "react";

const AddBisnis = ({bisnisS}: {bisnisS: Bisnis[]}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [coName, setCoName] = useState("");
    const [bisnis, setBisnis] = useState("");
    const [desc, setDesc] = useState("");
    const [contact, setContact] = useState("");
    const [rgPrice, setRgPrice] = useState("");
    const [imgLink, setImgLink] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const rt = useRouter();

    const eventModal = () => {
        setIsOpen(!isOpen);
    }
    const submitHandling = async (d: SyntheticEvent) => {
        d.preventDefault();
        setIsLoading(true)
        await axios.post('/api/dashboard', {
            coName: coName,
            description: desc,
            bisnisId: Number(bisnis),
            contact: contact,
            rgPrice: rgPrice,
            imgLink: imgLink,
        })
        setCoName("");
        setIsLoading(false)
        setBisnis("");
        setDesc("");
        setContact("");
        setRgPrice("");
        setImgLink("");
        rt.refresh();
        setIsOpen(false);
    }


    return (
    <div>
        <button className="btn btn-success" onClick={eventModal}>Add New Item</button>
        <div className={isOpen ? "modal modal-open" : 'modal'}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">
                    Add New Item
                </h3>
                <form onSubmit={submitHandling}>
                    <div className="form-control w-full">
                        <label className="label font-bold">
                            Company Name
                        </label>
                        <input 
                        type="text"
                        className="input input-bordered"
                        placeholder="e.g JO.CO"
                        value={coName}
                        onChange={(d) => setCoName(d.target.value)}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">
                        Jenis
                        </label>
                        <select 
                        value={bisnis}
                        onChange={(d) => setBisnis(d.target.value)}
                        className="select select-bordered">
                            <option value="" disabled>Pilih Bisnis</option>
                            {bisnisS.map(bisnis => (
                                <option value={bisnis.id} key={bisnis.id}>{bisnis.typeProduct}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">
                        Description
                        </label>
                        <input 
                        type="text"
                        className="input input-bordered"
                        placeholder="e.g JO.CO adalah bebek terenak hewes hewes"
                        value={desc}
                        onChange={(d) => setDesc(d.target.value)}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">
                        Contact
                        </label>
                        <input 
                        type="text"
                        className="input input-bordered"
                        placeholder="e.g 0812345678"
                        value={contact}
                        onChange={(d) => setContact(d.target.value)}/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">
                        Range Price
                        </label>
                        <input 
                        type="text"
                        className="input input-bordered"
                        placeholder="e.g 5k-10k"
                        value={rgPrice}
                        onChange={(d) => setRgPrice(d.target.value)}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">
                        Foto
                        </label>
                        <input 
                        type="text"
                        className="input input-bordered"
                        placeholder="e.g https://drive.padma.com/asndfmckrnfirf.jpg"
                        value={imgLink}
                        onChange={(d) => setImgLink(d.target.value)}/>
                    </div>
                    <div className="modal-action">
                        <button type="button" className="btn" onClick={eventModal}>Close</button>
                        {!isLoading ? (
                        <button type="submit" className="btn btn-primary">
                        Save
                        </button>
                    ) : (
                        <button type="button" className="btn loading">
                        Saving...
                        </button>
                    )}
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default AddBisnis