"use client";
import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import type { Product, Bisnis } from "@prisma/client";

const UpdateProduct = ({
Bisnis,
product,
}: {
Bisnis: Bisnis[];
product: Product;
}) => {
    const [coName, setCoName] = useState(product.coName);
    const [bisnis, setBisnis] = useState(product.bisnisId);
    const [desc, setDesc] = useState(product.description);
    const [contact, setContact] = useState(product.contact);
    const [rgPrice, setRgPrice] = useState(product.rgPrice);
    const [imgLink, setImgLink] = useState(product.imgLink);
    const [prodName, setProdName] = useState(product.prodName);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await axios.patch(`/api/dashboard/product/${product.id}`, {
            coName: coName,
            description: desc,
            bisnisId: Number(bisnis),
            contact: contact,
            rgPrice: rgPrice,
            imgLink: imgLink,
            prodName: prodName,
        });
        setIsLoading(false);
        router.refresh();
        setIsOpen(false);
    };
    const eventModal = () => {
        setIsOpen(!isOpen);
    }
    const handleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
        <button className="btn btn-info btn-sm" onClick={handleModal}>
            Edit
        </button>

        <div className={isOpen ? "modal modal-open" : "modal"}>
            <div className="modal-box">
            <h3 className="font-bold text-lg">Update {product.coName}</h3>
            <form onSubmit={handleUpdate}>
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
                            Product Name
                        </label>
                        <input 
                        type="text"
                        className="input input-bordered"
                        placeholder="e.g Kerajinan Air Surgawi"
                        value={prodName}
                        onChange={(d) => setProdName(d.target.value)}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">
                        Jenis
                        </label>
                        <select 
                        value={bisnis}
                        onChange={(d) => setBisnis(Number(d.target.value))}
                        className="select select-bordered">
                            <option value="" disabled>Pilih Bisnis</option>
                            {Bisnis.map(bisnis => (
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
    );
    };

export default UpdateProduct;