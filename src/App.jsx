
import './App.css'

function App() {


  return (
    <>
    

    <div className="salon-timings">
    <h2>Our Opening Hours</h2>
    <ul>
      <li>Monday - Friday: 10:00 AM - 7:00 PM</li>
      <li>Saturday: 10:00 AM - 6:00 PM</li>
      <li>Sunday: Closed</li>
    </ul>
  </div>
 
 

  <div className="services-section">
    <h2>Our Services</h2>
    <div className="services-content">
      <div className="services-list">
        <div className="service-item">
          <h3>Hair Styling</h3>
          <p>Expert haircuts, styling, and treatments tailored to your preferences.</p>
        </div>
        <div className="service-item">
          <h3>Makeup Art</h3>
          <p>Professional makeup services for any occasion, from everyday looks to special events.</p>
        </div>
        <div className="service-item">
          <h3>Manicure & Pedicure</h3>
          <p>Relaxing and rejuvenating manicure and pedicure treatments with premium products.</p>
        </div>
        <div className="service-item">
          <h3>Facial Treatments</h3>
          <p>Customized facial treatments to cleanse, nourish, and rejuvenate your skin.</p>
        </div>
        <div className="service-item">
          <h3>Hair Coloring</h3>
          <p>Vibrant and trendy hair color services with top-quality dyes and techniques.</p>
        </div>
        <div className="service-item">
          <h3>Massage Therapy</h3>
          <p>Relax and unwind with our soothing massage therapy services.</p>
        </div>
      </div>
 
      <div className="services-videos">
        <iframe src="https://www.youtube.com/embed/WniVHWZGb4k" title="Hair Styling" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/Wq2z3nh2weU" title="Makeup Art" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/otej7WLdPh0" title="Manicure & Pedicure" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/hiLVT0LQOX8?si=D4NJzphTHxX6seJO" title="New Service Video" allowfullscreen></iframe>
      </div>
    </div>
  </div>

 
    </>
  )
}

export default App
