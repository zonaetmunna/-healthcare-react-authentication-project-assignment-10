import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import firsImg from '../../../imgaes/news/1.png';
import secImg from '../../../imgaes/news/2.png'
import thirdImg from '../../../imgaes/news/3.png'
import fourth from '../../../imgaes/news/4.png'
import five from "../../../imgaes/news/5.png"
import six from '../../../imgaes/news/6.jpg'

const News = () => {
     return (
          <div className="mt-5 p-5  ">
               <h1 className="text-center text-primary"><i class="far fa-newspaper"></i> Top News</h1>
               <Container>
                    <Row className="g-3">
                         <Col sm={12} md={8}>
                              <img src={firsImg} alt="" />
                              <h3 className="text-primary"> Cancer treatment for poor peoples</h3>
                              <p>Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks. Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal architectures. Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized metrics after resource-leveling processes. Objectively pursue diverse...</p>
                         </Col>
                         <Col sm={12} md={8}>
                              <img src={secImg} alt="" />
                              <h3 className="text-primary">Hospitality Managements</h3>
                              <p>Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks. Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal architectures. Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized metrics after resource-leveling processes. Objectively pursue diverse...</p>
                         </Col>
                         <Col sm={12} md={8}>
                              <img src={thirdImg} alt="" />
                              <h3 className="text-primary">Disease based on junk foods</h3>
                              <p>Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks. Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal architectures. Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized metrics after resource-leveling processes. Objectively pursue diverse...</p>
                         </Col>
                         <Col sm={12} md={8}>
                              <img src={fourth} alt="" />
                              <h3 className="text-primary">Disease based on junk foods</h3>
                              <p>Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks. Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal architectures. Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized metrics after resource-leveling processes. Objectively pursue diverse...</p>
                         </Col>
                         <Col sm={12} md={8}>
                              <img src={five} alt="" />
                              <h3 className="text-primary">Disease based on junk foods</h3>
                              <p>Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks. Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal architectures. Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized metrics after resource-leveling processes. Objectively pursue diverse...</p>
                         </Col>
                         <Col sm={12} md={8}>
                              <img src={six} alt="" />
                              <h3 className="text-primary">Twelve sunscreen myths and facts</h3>
                              <p>Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks. Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal architectures. Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized metrics after resource-leveling processes. Objectively pursue diverse...</p>
                         </Col>
                    </Row>
               </Container>

          </div>
     );
};

export default News;