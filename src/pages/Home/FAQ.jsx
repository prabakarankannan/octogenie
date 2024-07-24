import { Accordion } from "react-bootstrap";

const FAQ = () => {
    const AccordionData = [
        {
            question: "What are the biggest opportunities for growth and cost savings?",
            answer: `
                        We don't want to limit your thinking as to what AI can assist with, but we think the biggest opportunities right now are in Marketing, Sales, HR, Customer support, Admin and Legal assistive AI automation. We can help create custom apps that save time, money and help your business run more efficiently.
                    `
        },
        {
            question: " What do I do now? ",
            answer: `
                        Reach out to us to see how our team can help! We have built AI agents to scan through large org SAAS contracts to find opportunities to negotiate We have built service and product specific AI agents that can answer customer questions. We have built AI agents to draft service proposals and contracts. Keep an open mind when thinking about ways AI automation can help your business scale and cut costs. Always keep ethical concerns in mind. We believe assistive AI is the best way forward as the technology advances.
                    `
        },
        {
            question: "What LLM models and tech stack do we use?",
            answer: `
                        We can access almost any LLM model. We really like ChatGPT 4 32k which has a large context window. Claude 2 100k has any even larger context window. We currently only use Airops as our tool to build custom AI agents and apps. Airops allows up to build essentially anything you can imagine. We can integrate with APIs, Code, and so much more.
                    `
        },
        {
            question: "How secure is AI and the tools you use? Is my business data safe?",
            answer: `
            Absolutely. We prioritize the security of your business data. All AI and No-code tools we use follow strict data privacy and security regulations and we use open-source technology when possible. We also implement additional security measures as per your business needs.
            `
        },
        {
            question: "How will AI automation impact the performance of my business?",
            answer: `
            AI automation can dramatically enhance your business performance. It increases efficiency, reduces errors, and frees up your team to focus on strategic tasks. Moreover, with AI, you can leverage data to make informed decisions, leading to better business outcomes. Gartner made a study that the use of Large Language Models (like chatGPT) in the workplace can improve efficiency by up to 70%.`
        },
    ]
    return (
        <>
            <div class="container">
                <div class="text-center pt-5">
                    <h2 class="color-text fw-normal ">FAQ's</h2>
                    
                </div>
                
                <Accordion className="mt-5" defaultActiveKey="0">
                {AccordionData.map( (item, index) => (
                    <Accordion.Item className="my-4" eventKey={index++}>
                    <Accordion.Header>
                            <i class="color-text bi bi-arrow-right-circle-fill pe-3 fs-5"></i>
                            {item.question}
                    </Accordion.Header>
                    <Accordion.Body>
                    {item.answer}
                    </Accordion.Body>
                </Accordion.Item>
                ))}
                    
                </Accordion>
            </div>
        </>
    )
}

export default FAQ;