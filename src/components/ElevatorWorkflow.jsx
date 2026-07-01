import React from 'react'
import { Container } from 'react-bootstrap'

function ElevatorWorkflow() {
  const steps = [
    {
      number: '1',
      title: 'Survey & Planning',
      text: 'We measure elevator dimensions, map heavy weights, and conduct pre-route checks to establish access limits at construction sites.'
    },
    {
      number: '2',
      title: 'Customized Crating',
      text: 'Glass panels, cabins, and electronic control boxes are packaged inside reinforced industrial wood casing.'
    },
    {
      number: '3',
      title: 'Rigging & Loading',
      text: 'Traction motors and structural rails are rigged and loaded onto flatbeds using appropriate crane systems at our dispatch hubs.'
    },
    {
      number: '4',
      title: 'GPS-Tracked Transit',
      text: 'Our fleet travels via planned pathways, using active GPS trackers to report cargo location and speed limits live.'
    },
    {
      number: '5',
      title: 'On-Site Unloading',
      text: 'Vehicles arrive on schedule for immediate unloading via crane directly into lift shafts or building storage corridors.'
    }
  ]

  return (
    <section className="logistics-timeline-section section-padding">
      <Container>
        <div className="section-header text-center">
          <h6 className="section-subtitle">Workflow</h6>
          <h2 className="section-title">
            Our Transportation Process
          </h2>
          <p className="section-para" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Our structured process guarantees that heavy lift systems move from manufacturing line to construction shaft without incident.
          </p>
        </div>

        <div className="logistics-timeline-container">
          {steps.map((item, index) => (
            <div className="logistics-timeline-item" key={index}>
              <div className="logistics-timeline-badge">
                {item.number}
              </div>
              <div className="logistics-timeline-content">
                <h4 className="logistics-timeline-title">
                  {item.title}
                </h4>
                <p className="logistics-timeline-text">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ElevatorWorkflow
