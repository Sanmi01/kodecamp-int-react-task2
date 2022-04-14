import { useState } from 'react';

const SimpleForm = () => {

    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        address: "",
        bio: ""
    });

    const [profileValues, setProfileValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        address: "",
        bio: ""
    });

    const [show, setShow] = useState(false);


    const formSubmissionHandler = event => {
        event.preventDefault();
        setProfileValues(formValues)
        setShow(true)
    }


    return (
        <>
        <form onSubmit={formSubmissionHandler}>
        <h2 className="m-3">Profile Form</h2>
        <div className="d-flex flex-wrap">
            <div className="form-group m-3">
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    id="firstName"
                    required 
                    onChange={(e) => 
                        setFormValues({
                            ...formValues,
                            firstName: e.target.value
                        })} />
            </div>
            <div className="form-group m-3">
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    id="lastName" 
                    required
                    onChange={(e) => 
                        setFormValues({
                            ...formValues,
                            lastName: e.target.value
                        })} />
            </div>
            <div className="form-group m-3">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email"
                    required 
                    onChange={(e) => 
                        setFormValues({
                            ...formValues,
                            email: e.target.value
                        })} />
            </div>
            <div className="form-group m-3"
                    onChange={(e) => 
                        setFormValues({
                            ...formValues,
                            gender: e.target.value
                        })}
            >
            <label  htmlFor="gender">Gender</label>
                <div id="gender">
                <p><input type="radio" value="Male" name="gender" required /> Male </p>
                <p><input type="radio" value="Female" name="gender"/> Female </p>
                <p><input type="radio" value="Other" name="gender"/> Other </p>
                </div>
            </div>
            <div className="form-group m-3 address">
                <label htmlFor="address">Address</label>
                <input 
                    type="text" 
                    id="address"
                    required 
                    onChange={(e) => 
                        setFormValues({
                            ...formValues,
                            address: e.target.value
                        })} />
            </div>
            <div className="form-group m-3 address">
                <label htmlFor="bio">Bio</label>
                <textarea 
                    type="text" 
                    id="bio"
                    rows="3"
                    cols="50"
                    // minLength="200" 
                    required
                    onChange={(e) => 
                        setFormValues({
                            ...formValues,
                            bio: e.target.value
                        })}>
                </textarea>
            </div>
            </div>
            <div className="text-end mx-4 my-1">
                <button className="submit-button">Submit</button>
            </div>
        </form>
            {show && <div className="profile m-3">
                <h2>Profile</h2>
                <p>Full Name: {profileValues.firstName} {profileValues.lastName}</p>
                <p>Email: {profileValues.email}</p>
                <p>Gender: {profileValues.gender}</p>
                <p>Address: {profileValues.address}</p>
                <p>Bio: {profileValues.bio}</p>
            </div>}
        </>
    )
}

export default SimpleForm
