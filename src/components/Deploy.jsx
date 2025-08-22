import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ball from "../assets/ball.png";

const Deploy = () => {
  return (
    <section className="py-[50px]">
      <Container>
        <Row>
          <Col lg={4} md={6}>
            <div className="flex items-center mb-[20px] gap-[50px] hover:shadow-md hover:shadow-red-300 duration-300 bg-[#fad0bc8f] pt-[30px] pb-[20px] pr-[40px] pl-[25px] rounded-[15px]">
              <div className=" after:absolute after:border-[1px] after:border-[#fad0bcf1]  after:content-[''] relative after:top-[-23px] after:right-[-20px] after:h-[70px] ">
                <img src={ball} />
              </div>
              <div>
                <h2 className="pb-[7px] text-[20px]">Immediate Deployment</h2>
                <p className="w-[200px]">
                  Et vero eos et accusamus et iusto odio dignissimos
                </p>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="flex items-center mb-[20px] gap-[50px] hover:shadow-md hover:shadow-red-300 duration-300 bg-[#fad0bc8f] pt-[30px] pb-[20px] pr-[40px] pl-[25px] rounded-[15px]">
              <div className=" after:absolute after:border-[1px] after:border-[#fad0bcf1]  after:content-[''] relative after:top-[-23px] after:right-[-20px] after:h-[70px] ">
                <img src={ball} />
              </div>
              <div>
                <h2 className="pb-[7px] text-[20px]">Immediate Deployment</h2>
                <p className="w-[200px]">
                  Et vero eos et accusamus et iusto odio dignissimos
                </p>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="flex items-center gap-[50px] hover:shadow-md hover:shadow-red-300 duration-300 bg-[#fad0bc8f] pt-[30px] pb-[20px] pr-[40px] pl-[25px] rounded-[15px]">
              <div className=" after:absolute after:border-[1px] after:border-[#fad0bcf1]  after:content-[''] relative after:top-[-23px] after:right-[-20px] after:h-[70px] ">
                <img src={ball} />
              </div>
              <div>
                <h2 className="pb-[7px] text-[20px]">Immediate Deployment</h2>
                <p className="w-[200px]">
                  Et vero eos et accusamus et iusto odio dignissimos
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Deploy;

// <div className="flex flex-wrap justify-between card-part ">

//           <div className="flex items-center hover:shadow-md hover:shadow-red-300 gap-[50px] duration-300 bg-[#fad0bc8f] pt-[30px] pb-[20px] pr-[40px] pl-[25px] rounded-[15px]">
//             <div className=" after:absolute after:border-[1px] after:border-[#fad0bcf1]  after:content-[''] relative after:top-[-23px] after:right-[-20px] after:h-[70px] ">
//               <img src={ball} />
//             </div>
//             <div>
//               <h2 className="pb-[7px] text-[20px]">Immediate Deployment</h2>
//               <p className="w-[200px]">Et vero eos et accusamus et iusto odio dignissimos</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-[50px] hover:shadow-md hover:shadow-red-300 duration-300 bg-[#fad0bc8f] pt-[30px] pb-[20px] pr-[40px] pl-[25px] rounded-[15px]">
//             <div className=" after:absolute after:border-[1px] after:border-[#fad0bcf1]  after:content-[''] relative after:top-[-23px] after:right-[-20px] after:h-[70px] ">
//               <img src={ball} />
//             </div>
//             <div>
//               <h2 className="pb-[7px] text-[20px]">Immediate Deployment</h2>
//               <p className="w-[200px]">Et vero eos et accusamus et iusto odio dignissimos</p>
//             </div>
//           </div>
//         </div>
