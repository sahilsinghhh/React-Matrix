import React from 'react'

const Contact = () => {
  return (
    <>
     <h2 className = "text-center my-5">Contact Us</h2>
    <div className=" container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form>
            <div class="mb-3">
              <label for="validationServer01" class="form-label">Name</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            
    

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Mobile no.</label>
              <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Message</label>
              <textarea 
                class = "form-control"
                id = "exampleformcontroltextarea1"
                rows = "3">
              </textarea>
            </div>
    
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
</>
  )
}
export default Contact;