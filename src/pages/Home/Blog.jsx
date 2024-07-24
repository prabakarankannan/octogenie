const Blog = () => {
    const blog = [
        {
            img : "images/blog-1.jpg",
            category : "AI Automation",
            title : "How AI is Revolutionizing Customer Support",
            author: "Prabakaran K",
            date: "July 20, 2024"
        },
        {
            img : "images/blog-2.jpg",
            category : "AI Automation",
            title : "Top AI Tools for Business Process Automation",
            author: "Pradeep R",
            date: "July 15, 2024"
        },
        {
            img : "images/blog-3.jpg",
            category : "AI Automation",
            title : "Implementing AI in Your Marketing Strategy",
            author: "Prabakaran K",
            date: "July 10, 2024"
        },
    ];

    return(
        <>
        <div className="blog">
            <div className="container">
                <div className="text-center pt-5">
                    <h2 className="color-text fw-normal">Blogs</h2>
                    <p className="desc-choose">Latest insights and trends in AI automation</p>
                </div>
                <div className="row py-5">
                    {blog.map((item, index) => (
                        <div key={index} className="col-md-4 col-12 mb-4">
                            <div className="blog-item shadow-lg rounded-3">
                                <img className="w-100 rounded-top" src={item.img} alt={item.title} />
                                <div className="px-4 py-3">
                                    <p className="m-1 text-muted">{item.category}</p>
                                    <h3 className="color-text fw-normal fs-5">{item.title}</h3>
                                    <p className="m-0 text-muted">{item.author}</p>
                                    <p className="date m-0 text-muted">{item.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}    
                </div>
            </div>
        </div>
        </>
    );
};

export default Blog;