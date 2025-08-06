import { Container, Row, Col } from "react-bootstrap";
import hero from "../assets/hero.png";
import { FaBell } from "react-icons/fa";

const Business = () => {
  return (
    <section className="py-[71px] busi-section">
      <Container>
        <Row>
          <Col className="pt-[30px] left-heading" lg={7}>
            <div className="pt-[100px] heading ">
              <button className="flex items-center border !text-[16px] rounded-[20px]  pr-[9px] gap-[7px] ">
                <div className="bg-[#FAD7C4] p-[8px] rounded-[50%]">
                  <FaBell />
                </div>
                Startup Business
              </button>

              <h1 className="text-[36px] w-[465px] pt-[35px] pb-[32px] font-robota">
                Empowering startups to fuel their business growth
              </h1>
              <p className="font-robota w-[500px] hero-pera">
                Eu posuere mi sed purus proin quisque molestie. Ut amet, at
                amet, velit nibh arcu eu. Id sem varius malesuada tincidunt
                sodales.
              </p>
              <button className="py-[9px] hover:bg-black text-white font-semibold duration-300 px-[23px] rounded-[5px] mt-[30px] bg-[#EA580C]">
                Get started now
              </button>
            </div>
          </Col>

          <Col lg={5}>
            <div className="hero-img">
              <img className="w-full" src={hero} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Business;
