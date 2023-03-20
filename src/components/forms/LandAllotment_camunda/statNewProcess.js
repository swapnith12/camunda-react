import React,{useState} from 'react'
import { Field, reduxForm } from 'redux-form'


const formtodisplay=['FirmDetails','PromoterDetails','ProjectDetails']

const SimpleForm = props => {
  const [formType, setFormType] = useState("login");

  const handleFormTypeChange = (e) => {
    setFormType(e.target.value);
  }
    const { handleSubmit, pristine, reset, submitting } = props 
    const renderForm=()=>{
          switch(formType) {
            case "FirmDetails":
              return(
                <form onSubmit={handleSubmit} className=" container bg-light">
                      <div className='mb-2'>
                        <label>Firm Name</label>
                        <div>
                          <Field
                            name="FirmName"
                            component="input"
                            type="text"
                            placeholder="Firm Name"
                            required
                          />
                        </div>
                      </div>
                      <div className='mb-2'>
                        <label>Contact</label>
                        <div>
                          <Field
                            name="ContactPerson"
                            component="input"
                            type="text"
                            placeholder="Contact Name"
                            required
                          />
                        </div>
                      </div>
                      <div className='mb-2'>
                      <p className='text-warning fsc-3'>Please Fill all the forms displayed in options above!</p>
                        <button className='btn btn-primary mb-2'  type="submit" disabled={pristine || submitting}>
                          Submit
                        </button>
                      </div>
                    </form>
              )
            case "PromoterDetails":
              return(
                   <form onSubmit={handleSubmit} className=" container bg-light">
                      <div className='mb-2'>
                        <label>Name of Promoter</label>
                        <div>
                          <Field
                            name="nameOfPromoter"
                            component="input"
                            type="text"
                            placeholder="Name of Promoter"
                            required
                          />
                        </div>
                      </div>
                      <div className='mb-2'>
                        <label>Optional Promoter 1</label>
                        <div>
                          <Field
                            name="optionalPromotor1"
                            component="input"
                            type="text"
                            placeholder="Optional Promoter 1"
                          />
                        </div>
                      </div>
                      <div className='mb-2'>
                        <label>Optional Promoter 2</label>
                        <div>
                          <Field
                            name="optionalPromotor2"
                            component="input"
                            type="text"
                            placeholder="Optional Promoter 2"
                          />
                        </div>
                      </div>
                      <div className='mb-2'>
                        <label>Mobile Number</label>
                        <div>
                          <Field
                            name="mobilenumber"
                            component="input"
                            type="digit"
                            placeholder="Mobile Number"
                            required
                          />
                        </div>
                      </div>
                      <div className='mb-2'>
                        <label>Email Id</label>
                        <div>
                          <Field
                            name="emailId"
                            component="input"
                            type="email"
                            placeholder="Email"
                            required
                          />
                        </div>
                      </div>
                      <div>
                      <p className='text-warning fsc-3'>Please Fill all the forms displayed in options above!</p>
                        <button className='btn btn-primary mb-2'  type="submit" disabled={pristine || submitting}>
                          Submit
                        </button>
                      </div>
                    </form>
                  )
                  case "Project Details":
                    return(
                      <form onSubmit={handleSubmit} className=" container bg-light">
                    <div className='mb-2'>
                      <label>Project Status</label>
                        <div>
                          <label><Field 
                                  name="projectStatus" 
                                  component="input" 
                                  type="radio" 
                                  value="New"
                                  />
                                  {' '}
                                  New
                          </label>
                          <label>
                                <Field
                                name="projectStatus" 
                                component="input"
                                type="radio"
                                value="Existing"
                                />
                                {' '}
                                Existing
                                </label>
                        </div>
                      </div>
                    <div className='mb-2'>
                      <label>Project Category</label>
                      <div>
                      <Field name="ProjetCategory" 
                      component="select"
                      required>
                      <option value="Chemical Industry">Chemical Industry</option>
                      <option value="Agricultural Project">Agricultural Project</option>
                      <option value="Informational Technology">Informational Technology</option>
                      </Field>
                      </div>
                    </div>
                    <div className='mb-2'>
                        <label>Land in yards</label>
                        <div>
                          <Field
                            name="areaOfTheLand"
                            component="input"
                            type="number"
                            placeholder="Land in yards"
                            required
                          />
                        </div>
                    </div>
                    <div className='mb-2'>
                        <label>Land Location</label>
                        <div>
                          <Field
                            name="landlocation"
                            component="input"
                            type="text"
                            placeholder="Land Location"
                            required
                          />
                        </div>
                    </div>
                    <div>
                    <p className='text-warning fsc-3'>Please Fill all the forms displayed in options above!</p>
                      <button className='btn btn-primary mb-2'  type="submit" disabled={pristine || submitting}>
                        Submit
                      </button>
                    </div>
                  </form>
                    )
            default :
            return(
              <form onSubmit={handleSubmit} className=" container bg-light">
              <div className='mb-2'>
                <label>Project Status</label>
                  <div>
                    <label><Field 
                            name="New" 
                            component="input" 
                            type="radio" 
                            value="New"
                            />
                            {' '}
                            New
                    </label>
                    <label>
                          <Field
                          name="Existing" 
                          component="input"
                          type="radio"
                          value="Existing"
                          />
                          {' '}
                          Existing
                          </label>
                  </div>
                </div>
              <div className='mb-2'>
                <label>Project Category</label>
                <div>
                <Field name="ProjetCategory" 
                component="select"
                required>
                <option value="Chemical Industry">Chemical Industry</option>
                <option value="Agricultural Project">Agricultural Project</option>
                <option value="Informational Technology">Informational Technology</option>
                </Field>
                </div>
              </div>
              <div className='mb-2'>
              <label>Land in yards</label>
                        <div>
                          <Field
                            name="areaOfTheLand"
                            component="input"
                            type="number"
                            placeholder="Land in yards"
                            required
                          />
                        </div>
                    </div>
                    <div className='mb-2'>
                        <label>Land Location</label>
                        <div>
                          <Field
                            name="landlocation"
                            component="input"
                            type="text"
                            placeholder="Land Location"
                            required
                          />
                        </div>
                    </div>
              <div>
                <p className='text-warning fsc-3'>Please Fill all the forms displayed in options above!</p>
                <button className='btn btn-primary mb-2' type="submit" disabled={pristine || submitting}>
                  Submit
                </button>
              </div>
            </form>
             
            )
        }
    }
  return (
   <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
    <select value={formType} onChange={handleFormTypeChange} className="mb-2" width="500px">
        <option value="FirmDetails">Firm Details</option>
        <option value="PromoterDetails">Promoter Details</option>
        <option value="Project Details">Project Details</option>
      </select>
    <div className='text-dark' >
    {renderForm()}
    </div>
   </div>

  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)
