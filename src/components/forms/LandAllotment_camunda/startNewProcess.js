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
                <form onSubmit={handleSubmit}>
                      <div>
                        <label>Firm Name</label>
                        <div>
                          <Field
                            name="FirmName"
                            component="input"
                            type="text"
                            placeholder="Firm Name"
                          />
                        </div>
                      </div>
                      <div>
                        <label>Contact</label>
                        <div>
                          <Field
                            name="ContactPerson"
                            component="input"
                            type="text"
                            placeholder="Contact Name"
                          />
                        </div>
                      </div>
                      <div>
                        <button type="submit" disabled={pristine || submitting}>
                          Submit
                        </button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>
                          Clear Values
                        </button>
                      </div>
                    </form>
              )
            case "PromoterDetails":
              return(
                   <form onSubmit={handleSubmit}>
                      <div>
                        <label>Name of Promoter</label>
                        <div>
                          <Field
                            name="nameOfPromoter"
                            component="input"
                            type="text"
                            placeholder="Name of Promoter"
                          />
                        </div>
                      </div>
                      <div>
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
                      <div>
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
                      <div>
                        <label>Mobile Number</label>
                        <div>
                          <Field
                            name="mobilenumber"
                            component="input"
                            type="number"
                            placeholder="Mobile Number"
                          />
                        </div>
                      </div>
                      <div>
                        <label>Email Id</label>
                        <div>
                          <Field
                            name="emailId"
                            component="input"
                            type="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div>
                        <button type="submit" disabled={pristine || submitting}>
                          Submit
                        </button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>
                          Clear Values
                        </button>
                      </div>
                    </form>
                  )
                  case "Project Details":
                    return(
                      <form onSubmit={handleSubmit}>
                    <div>
                      <label>Project Status</label>
                        <div>
                          <label><Field 
                                  name="projectStatus" 
                                  component="input" 
                                  type="radio" 
                                  value="New"/>
                                  {' '}
                                  New
                          </label>
                          <label>
                                <Field
                                name="projectStatus" 
                                component="input"
                                type="radio"
                                value="Existing"/>
                                {' '}
                                Existing
                                </label>
                        </div>
                      </div>
                    <div>
                      <label>Project Category</label>
                      <div>
                      <Field name="ProjetCategory" 
                      component="select">
                      <option value="Chemical Industry">Chemical Industry</option>
                      <option value="Agricultural Project">Agricultural Project</option>
                      <option value="Informational Technology">Informational Technology</option>
                      </Field>
                      </div>
                    </div>
                    <div>
                        <label>Land in yards</label>
                        <div>
                          <Field
                            name="areaOfTheLand"
                            component="input"
                            type="number"
                            placeholder="Land in yards"
                          />
                        </div>
                    </div>
                    <div>
                        <label>Land Location</label>
                        <div>
                          <Field
                            name="landlocation"
                            component="input"
                            type="text"
                            placeholder="Land Location"
                          />
                        </div>
                    </div>
                    <div>
                      <button type="submit" disabled={pristine || submitting}>
                        Submit
                      </button>
                      <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                      </button>
                    </div>
                  </form>
                    )
            default :
            return(
              <form onSubmit={handleSubmit}>
              <div>
                <label>Project Status</label>
                  <div>
                    <label><Field 
                            name="New" 
                            component="input" 
                            type="radio" 
                            value="New"/>
                            {' '}
                            New
                    </label>
                    <label>
                          <Field
                          name="Existing" 
                          component="input"
                          type="radio"
                          value="Existing"/>
                          {' '}
                          Existing
                          </label>
                  </div>
                </div>
              <div>
                <label>Project Category</label>
                <div>
                <Field name="ProjetCategory" 
                component="select">
                <option value="Chemical Industry">Chemical Industry</option>
                <option value="Agricultural Project">Agricultural Project</option>
                <option value="Informational Technology">Informational Technology</option>
                </Field>
                </div>
              </div>
              <div>
              <label>Land in yards</label>
                        <div>
                          <Field
                            name="areaOfTheLand"
                            component="input"
                            type="number"
                            placeholder="Land in yards"
                          />
                        </div>
                    </div>
                    <div>
                        <label>Land Location</label>
                        <div>
                          <Field
                            name="landlocation"
                            component="input"
                            type="text"
                            placeholder="Land Location"
                          />
                        </div>
                    </div>
              <div>
                <button type="submit" disabled={pristine || submitting}>
                  Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                  Clear Values
                </button>
              </div>
            </form>
             
            )
        }
    }
  return (
   <div>
    <select value={formType} onChange={handleFormTypeChange}>
        <option value="FirmDetails">Firm Details</option>
        <option value="PromoterDetails">Promoter Details</option>
        <option value="Project Details">Project Details</option>
      </select>
    <div className='container-fluid'>
    {renderForm()}
    </div>
   </div>

  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)
