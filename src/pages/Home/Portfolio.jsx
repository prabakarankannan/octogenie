import { useEffect, useState } from "react";

const Portfolio = () => {
    const [PortfolioData, setPortfolioData] = useState([]);
    const [currentKey, setCurrentKey] = useState('ALL');

    const Portfolio = [
        {
            category: "Sales",
            img: "/images/sales-1.jpg",
            title: "Qualify Leads"
        },
        {
            category: "Sales",
            img: "/images/sales-2.jpg",
            title: "Personalize Messaging"
        },
        {
            category: "Sales",
            img: "/images/sales-3.jpg",
            title: "Sales Playbook Agent"
        },
        {
            category: "Marketing",
            img: "/images/marketing-1.jpg",
            title: "Campaign Copy"
        },
        {
            category: "Marketing",
            img: "/images/marketing-2.jpg",
            title: "Draft Blog Posts"
        },
        {
            category: "Marketing",
            img: "/images/marketing-3.jpg",
            title: "Brand Voice Copy"
        },
        {
            category: "HR",
            img: "/images/hr-1.jpg",
            title: "Employee Handbook Agent"
        },
        {
            category: "HR",
            img: "/images/hr-2.jpg",
            title: "Qualify Resumes"
        },
        {
            category: "HR",
            img: "/images/hr-3.jpg",
            title: "Employee Onboarding Agent"
        },
        {
            category: "Customer Support",
            img: "/images/support-1.jpg",
            title: "Customer Support Agent"
        },
        {
            category: "Customer Support",
            img: "/images/support-2.jpg",
            title: "Product Specific Agent"
        },
        {
            category: "Customer Support",
            img: "/images/support-3.jpg",
            title: "Service Specific Agent"
        },
        {
            category: "Legal",
            img: "/images/legal-1.jpg",
            title: "Draft Contracts"
        },
        {
            category: "Legal",
            img: "/images/legal-2.jpg",
            title: "Find Contract Negotiation Areas"
        },
        {
            category: "Legal",
            img: "/images/legal-3.jpg",
            title: "Document Review & Analysis"
        },
    ];

    useEffect(() => {
        if (currentKey === 'ALL') {
            setPortfolioData(Portfolio);
        } else {
            const filter = Portfolio.filter((item) => item.category === currentKey);
            setPortfolioData(filter);
        }
    }, [currentKey]);

    const updateCurrentKey = (text) => {
        setCurrentKey(text);
    };

    return (
        <>
            <div className="row portfolio animation in-view fadeup w-100">
                <div className="text-center py-5 animation in-view fadeup">
                    <h2 className="color-text fw-normal">Our Portfolio</h2>
                    <p className="desc-choose">Explore our AI-powered solutions</p>
                    <div className="d-flex gap-4 justify-content-center pt-4 flex-wrap">
                        <button onClick={() => updateCurrentKey('ALL')} className={`${currentKey === 'ALL' ? 'active' : ''} bg-btn text-white fs-5 text-decoration-none text-center rounded-5 py-2 px-4`}>All</button>
                        <button onClick={() => updateCurrentKey('Sales')} className={`${currentKey === 'Sales' ? 'active' : ''} bg-btn text-white fs-5 text-decoration-none text-center rounded-5 py-2 px-4`}>Sales</button>
                        <button onClick={() => updateCurrentKey('Marketing')} className={`${currentKey === 'Marketing' ? 'active' : ''} bg-btn text-white fs-5 text-decoration-none text-center rounded-5 py-2 px-4`}>Marketing</button>
                        <button onClick={() => updateCurrentKey('HR')} className={`${currentKey === 'HR' ? 'active' : ''} bg-btn text-white fs-5 text-decoration-none text-center rounded-5 py-2 px-4`}>HR</button>
                        <button onClick={() => updateCurrentKey('Customer Support')} className={`${currentKey === 'Customer Support' ? 'active' : ''} bg-btn text-white fs-5 text-decoration-none text-center rounded-5 py-2 px-4`}>Customer Support</button>
                        <button onClick={() => updateCurrentKey('Legal')} className={`${currentKey === 'Legal' ? 'active' : ''} bg-btn text-white fs-5 text-decoration-none text-center rounded-5 py-2 px-4`}>Legal</button>
                    </div>
                </div>

                {PortfolioData.map((item) => (
                    <div className="col-md-4 col-12 my-2" key={item.title}>
                        <a href="#">
                            <div className="overflow-hidden rounded-3">
                                <img className="product-img img-fluid" src={item.img} alt={item.title} />
                                <h4 className="text-center mt-2">{item.title}</h4>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Portfolio;